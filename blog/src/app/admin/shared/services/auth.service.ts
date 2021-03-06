import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { catchError, tap } from 'rxjs/operators';
import { User } from "src/app/shared/components/interfaces";
import { Observable, Subject, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { FirebaseResponse } from "src/environments/interface";

@Injectable({providedIn: 'root'})

export class AuthService {
    public error$: Subject<string> = new Subject<string>();

    constructor(private httpClient: HttpClient) {

    }
    get token(): string {
        const expDate = new Date(localStorage.getItem('fb-token-expires'));
        if (new Date() > expDate) {
            this.logout();
            return null;
        }
        return localStorage.getItem('fb-token');
    }

    public login(user: User): Observable<any> {
        user.returnSecureToken = true;
        return this.httpClient.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user).pipe(
            tap(this.setToken),
            catchError(this.handleError.bind(this))
        )
    }

    public logout() {
        this.setToken(null);
    }

    private handleError(error: HttpErrorResponse) {
        const { message } = error.error.error;
        switch (message) {
            case 'EMAIL_NOT_FOUND':
                this.error$.next('Email doesnt exist')
                break
            case 'INVALID_EMAIL':
                this.error$.next('Invalid email')
                break
            case 'INVALID_PASSWORD':
                this.error$.next('Invalid password')
                break
        }
        return throwError(error);
    }

    public isAuthenticated(): boolean {
        return !!this.token
    }

    private setToken(response: FirebaseResponse | null) {
        if (response) {
            const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
            localStorage.setItem('fb-token', response.idToken);
            localStorage.setItem('fb-token-expires', expDate.toString());
        } else {
            localStorage.clear();
        }
    }
}
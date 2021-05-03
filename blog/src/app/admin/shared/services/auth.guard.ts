import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(
        private authService: AuthService, 
        private router: Router){

    }
   public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        if(this.authService.isAuthenticated()){
            return true;
        }else{
            this.authService.logout();
            this.router.navigate(['/admin', 'login'],{
                queryParams:{
                    loginAgain: true
                }
            })
        }
    }
   
}
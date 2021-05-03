import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { FbCreateResponse, Post } from "./interfaces";

@Injectable({ providedIn: 'root' })
export class PostsService {
    constructor(private httpClient: HttpClient) {

    }

    public createPost(post: Post): Observable<Post> {
        return this.httpClient.post(`${environment.fbDBUrl}/posts.json`, post)
            .pipe(map((response: FbCreateResponse) => {
                const newPost: Post = {
                    ...post,
                    id: response.name,
                    date: new Date(post.date)
                }
                return newPost
            }))
    }

    public getPosts(): Observable<Post[]> {
        return this.httpClient.get(`${environment.fbDBUrl}/posts.json`)
            .pipe(map((response: { [key: string]: any }) => {
                return Object.keys(response)
                .map(key=>({
                    ...response[key],
                    id: key,
                    date: new Date(response[key].date)
                }))
            }))
    }
}
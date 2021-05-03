import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/shared/components/interfaces';
import { PostsService } from 'src/app/shared/components/posts.service';

@Component({
  selector: 'wsb-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  public posts: Post[] = [];
  public postSubscription: Subscription;
  public searchPost: string = '';

  constructor(
    private postsService: PostsService
  ) { }

  ngOnDestroy(): void {
    if(this.postSubscription){
      this.postSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.postSubscription = this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    })
  }

  public editPost(id:string){

  }

  public removePost(id:string){

  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { of, Subscription } from 'rxjs';
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
  public deleatePostSubscription: Subscription;
  public searchPost: string = '';

  constructor(
    private postsService: PostsService
  ) { }

  ngOnDestroy(): void {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
    if(this.deleatePostSubscription){
      this.deleatePostSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.postSubscription = this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    })
  }

  public editPost(id: string) {

  }

  public removePost(id: string) {
   this.deleatePostSubscription =  this.postsService.removerPost(id).subscribe(() => {
      this.posts = this.posts.filter(post => post.id !== id)
    });
  }

}

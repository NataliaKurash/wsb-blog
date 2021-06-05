import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterService } from '../shared/components/filter.service';
import { Post } from '../shared/components/interfaces';
import { PostsService } from '../shared/components/posts.service';

@Component({
  selector: 'wsb-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public posts$: Observable<Post[]>

  constructor(
    private postsService: PostsService,
    public filterService: FilterService
  ) { }

  ngOnInit(): void {
    this.posts$ = this.postsService.getPosts()
  }
}

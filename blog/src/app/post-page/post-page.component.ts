import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Post } from '../shared/components/interfaces';
import { PostsService } from '../shared/components/posts.service';

@Component({
  selector: 'wsb-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  post$: Observable<Post>;
  constructor(
    public route: ActivatedRoute,
    public postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.post$ = this.route.params.pipe(switchMap((params: Params) => {
      return this.postsService.getById(params['id'])
    }))
  }
}

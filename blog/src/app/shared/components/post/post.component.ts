import { Component, Input, OnInit } from '@angular/core';
import { PostPageComponent } from 'src/app/post-page/post-page.component';
import { Post } from '../interfaces';


@Component({
  selector: 'wsb-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post; 

  constructor() { }
  
  ngOnInit(): void {
  }

}

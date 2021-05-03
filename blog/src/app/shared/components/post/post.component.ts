import { Component, OnInit } from '@angular/core';
import { PostPageComponent } from 'src/app/post-page/post-page.component';
import { Post } from './post';

@Component({
  selector: 'wsb-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }

}

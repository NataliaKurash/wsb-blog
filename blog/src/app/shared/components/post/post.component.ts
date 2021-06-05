import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../interfaces';


@Component({
  selector: 'wsb-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post;

  formatedTitle: string;

  constructor() { }

  ngOnInit(): void {
    this.cutTitle();
  }

  public cutTitle() {
    let formatedTitle = this.post.title.toLowerCase();
    let firstLetter = formatedTitle.charAt(0).toUpperCase();
    this.formatedTitle = firstLetter + formatedTitle.slice(1);
    if (this.formatedTitle.length >= 15) {
      this.formatedTitle =  this.formatedTitle.slice(0, 25) + '...';
    }
  }

}

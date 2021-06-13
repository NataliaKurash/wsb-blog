import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../interfaces';


@Component({
  selector: 'wsb-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  public counter;

  formatedTitle: string;

  constructor() { }

  ngOnInit(): void {
    this.cutTitle();
    this.timeToReed();
  }

  public cutTitle() {
    let formatedTitle = this.post.title.toLowerCase();
    let firstLetter = formatedTitle.charAt(0).toUpperCase();
    this.formatedTitle = firstLetter + formatedTitle.slice(1);
    if (this.formatedTitle.length >= 15) {
      this.formatedTitle =  this.formatedTitle.slice(0, 25) + '...';
    }
  }

  public timeToReed() {
    let post = this.post.text;
    let  cleanText = post.replace(/<\/?[^>]+(>|$)/g, "");
    let words = cleanText.length;
    console.log(cleanText);
    console.log(words);
    if (words < 250) {
        this.counter = '1 хвилина'
    }else if(words < 900){
        this.counter = `${(words / 180).toPrecision(2)} хвилини`
    }else{
        this.counter = `${(words / 180).toPrecision(2)} хвилин`
    }
}
}

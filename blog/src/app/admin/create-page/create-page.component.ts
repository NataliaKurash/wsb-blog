import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/shared/components/interfaces';
import { PostsService } from 'src/app/shared/components/posts.service';
import { AlertService } from '../shared/services/alert.service';

@Component({
  selector: 'wsb-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {
  addPost: FormGroup;

  constructor(private postsService: PostsService, 
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.addPost = new FormGroup({
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required)
    })

  }

  public submitPost() {
    if (this.addPost.invalid) {
      return
    }
    const post: Post = {
      title: this.addPost.value.title,
      text: this.addPost.value.text,
      date: new Date()
    }
    this.postsService.createPost(post).subscribe(()=>{
      this.addPost.reset();
      this.alertService.success('Post have been created')
    })
    console.log(post);
  }

}

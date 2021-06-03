import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/shared/components/interfaces';
import { Tag, Tags } from 'src/app/shared/components/post/post';
import { PostsService } from 'src/app/shared/components/posts.service';
import { AlertService } from '../shared/services/alert.service';

@Component({
  selector: 'wsb-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {
  addPost: FormGroup;
  base64textString;
  categories: Tag[] = [
    { title: Tags.Journey },
    { title: Tags.Love },
    { title: Tags.Philosophy }
  ];
  public category: Tag;

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
      date: new Date(),
      image: this.base64textString,
      tags: this.category
    }

    this.postsService.createPost(post).subscribe(() => {
      this.addPost.reset();
      this.alertService.success('Post have been created')
    })
    console.log(post);
  }

  handleFileSelect(evt) {
    var files = evt.target.files;
    var file = files[0];
    if (files && file) {
      var reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  public handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
  }

  addFilter(category: Tag) {
    console.log(category)
    this.category = category;

    // this.filteredItems = this.items.filter((item: Item) => {
    //   return item.categories.includes(category.id);
    // })
  }
}

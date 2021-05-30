import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Post } from 'src/app/shared/components/interfaces';
import { PostsService } from 'src/app/shared/components/posts.service';
import { AlertService } from '../shared/services/alert.service';

@Component({
  selector: 'wsb-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit, OnDestroy {

  formEidt: FormGroup;
  post: Post;
  submited: boolean = false;
  updateSubscription: Subscription;

  constructor(
    private routerActiv: ActivatedRoute,
    private postService: PostsService,
    private alertService: AlertService,
    private router: Router,
  ) { }
  ngOnDestroy(): void {
   if(this.updateSubscription){
     this.updateSubscription.unsubscribe();
   }
  }

  ngOnInit(): void {
    this.routerActiv.params.pipe(
      switchMap((params) => {
        return this.postService.getById(params['id'])
      })).subscribe((post: Post) => {
        this.post = post;
        this.formEidt = new FormGroup({
          title: new FormControl(post.title, Validators.required),
          text: new FormControl(post.text, Validators.required)
        })
      })
  }
  public submit() {
    if (this.formEidt.invalid) {
      return
    }
    this.submited = true;
    this.updateSubscription = this.postService.update({
      ...this.post,
      text: this.formEidt.value.text,
      title: this.formEidt.value.title
    }).subscribe(() => {
      this.submited = false;
      this.alertService.success('Post have been edited');
      this.router.navigate(['/admin', 'dashboard']);
    })
  }
}

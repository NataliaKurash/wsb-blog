import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/shared/components/interfaces';
import { AuthService } from '../shared/services/auth.service';
const emailRegex: any = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
const passRegex: any = '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$';

@Component({
  selector: 'wsb-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public loginForm: FormGroup;
  public submitted: boolean = false;
  public message: string;

  constructor(
    public authService: AuthService,
    private router: Router,
    private routerActiv: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.routerActiv.queryParams.subscribe((params: Params) => {
      if (params['loginAgain']) {
        this.message = 'Please enter data'
      }
    })
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.pattern(emailRegex)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  public submitValue() {
    if (this.loginForm.invalid) {
      return;
    }
    this.submitted = true;
    const user: User = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    this.authService.login(user).subscribe(() => {
      this.loginForm.reset();
      this.router.navigate(['/admin', 'dashboard']);
      this.submitted = false;
    }, () => {
      this.submitted = false;
    })


  }

}
// , Validators.pattern(passRegex)
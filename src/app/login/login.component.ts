import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new UntypedFormGroup({
    username: new UntypedFormControl('', [Validators.required]),
    password: new UntypedFormControl('', [Validators.required]),
  });

  isVisible: boolean = false;

  constructor(
    private router: Router,
    private loginService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.loginForm.disable();
    this.loginService.logIn(this.loginForm.value).subscribe(
      (data: any) => {
        console.log(data);
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        this.toastr.error(err.error.message, 'Error');
        this.loginForm.enable();
        this.loginForm.reset();
        console.log(err.error.message);
      }
    );
  }
}

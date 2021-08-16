import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/shared/helpers/must-match.validator';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  ispwdHide = true;
  isCnfpwdHide = true;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
   this.initForm();
  }

  private initForm() {
    this.signupForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern(/^([a-zA-Z0-9 _-]+)$/)]],
      lastname: ['', [Validators.required, Validators.pattern(/^([a-zA-Z0-9 _-]+)$/)]],
      email: ['', [Validators.required, Validators.email]], 
      phonenum: ['', [Validators.required, Validators.pattern(/^(([0-9]*)|(([0-9]*)\.([0-9]*)))$/)]],
      address: ['', Validators.required],
      medhistory: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cnfpassword: ['', [Validators.required, Validators.minLength(6)]]
    }, {
      validator: MustMatch('password', 'cnfpassword')
  });
  }

  onSubmit() {
    if(!this.signupForm.valid) {
      return; 
    }
    this.authService.signup({
      email: this.signupForm.value.email,
      password: this.signupForm.value.password
    });
    this.signupForm.reset();
  }

  onLogin() {
    this.router.navigate(['/login']);
  }
}
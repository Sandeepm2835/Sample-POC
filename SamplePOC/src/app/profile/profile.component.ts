import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  disabled = true;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.profileForm = this.fb.group({
      fullname: ['', [Validators.pattern(/^([a-zA-Z0-9 _-]+)$/)]],
      email: ['', [Validators.email]], 
      phonenum: ['', [Validators.pattern(/^(([0-9]*)|(([0-9]*)\.([0-9]*)))$/)]],
      address: [''],
      medhistory: ['']
    });
  }

  onValidate() {
    const controls = this.profileForm.controls;
    if(controls.fullname.errors || controls.email.errors || controls.phonenum.errors) {
      this.disabled = true;
    } 
    if(this.profileForm.status == 'VALID') {
      if(controls.fullname.value == '' || controls.email.value == '' || controls.phonenum.value == '') {
        this.disabled = true;
      }
      else {
        this.disabled = false;
      }
    } 
  }

  onSubmit() {
    if(!this.profileForm.valid) {
      return; 
    }

    this.profileForm.reset();
  }
}
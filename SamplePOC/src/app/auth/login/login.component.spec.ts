import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable, from  } from 'rxjs';
import { AuthService } from '../auth.service';
import { User } from '../user.model';

import { LoginComponent } from './login.component';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ LoginComponent ],
      providers: [ AuthService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create form with 2 controls', () => {
    expect(component.loginForm.contains('email')).toBeTruthy();
    expect(component.loginForm.contains('password')).toBeTruthy();
  });

  it('should make email and password to be required', () => {
    let emailControl = component.loginForm.controls['email'];
    expect(emailControl.valid).toBeFalsy();

    let errors = emailControl.errors || {};
    expect(errors['required']).toBeTruthy();

    let passwordControl = component.loginForm.controls['password'];
    expect(passwordControl.valid).toBeFalsy();

    let pwdErrors =  passwordControl.errors || {};
    expect(pwdErrors['required']).toBeTruthy();
  });

  it('should submit form', () => {
    expect(component.loginForm.valid).toBeFalsy();

    let emailValue = component.loginForm.controls['email'].setValue('test@test.com');
    let pwdValue = component.loginForm.controls['password'].setValue('123456');
    expect(component.loginForm.valid).toBeTruthy();

    let user: User;
    service = TestBed.inject(AuthService);

    // spyOn(service, 'login').and.returnValue((email, pwd) => {
    //   return from()
    // });
    
  });

});

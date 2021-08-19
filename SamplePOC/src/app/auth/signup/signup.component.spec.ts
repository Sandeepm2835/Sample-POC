import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

import { SignupComponent } from './signup.component';

xdescribe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ SignupComponent ],
      providers: [ AuthService ]
    })
    .compileComponents(); 
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should check form with controls', () => {
    expect(component.signupForm.contains('firstname')).toBeTruthy();
    expect(component.signupForm.contains('lastname')).toBeTruthy();
    expect(component.signupForm.contains('email')).toBeTruthy();
    expect(component.signupForm.contains('phonenum')).toBeTruthy();
    expect(component.signupForm.contains('address')).toBeTruthy();
    expect(component.signupForm.contains('medhistory')).toBeTruthy();
    expect(component.signupForm.contains('password')).toBeTruthy();
    expect(component.signupForm.contains('cnfpassword')).toBeTruthy();
  });

  it('should make for required validator', () => {
    let fnameCntrl = component.signupForm.controls['firstname'];
    expect(fnameCntrl.valid).toBeFalsy();

    let errors = fnameCntrl.errors || {};
    expect(errors['required']).toBeTruthy();

    fnameCntrl.setValue('test');
    errors = fnameCntrl.errors || {};
    expect(errors['pattern']).toBeFalsy();
  });

  // it('should submit form', () => {
  //   expect(component.signupForm.valid).toBeFalsy();

  //   let fnameCntrl = component.signupForm.controls['firstname'].setValue('test');
  //   expect(component.signupForm.valid).toBeTruthy();

  // });


});

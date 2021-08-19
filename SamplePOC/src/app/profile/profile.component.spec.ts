import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';


xdescribe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ ProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create form 3 controls', () => {
    expect(component.profileForm.contains('fullname')).toBeTruthy();
    expect(component.profileForm.contains('email')).toBeTruthy();
    expect(component.profileForm.contains('phonenum')).toBeTruthy();
    expect(component.profileForm.contains('address')).toBeTruthy();
    expect(component.profileForm.contains('medhistory')).toBeTruthy();
  });

});

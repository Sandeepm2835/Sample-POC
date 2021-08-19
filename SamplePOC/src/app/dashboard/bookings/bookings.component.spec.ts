import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardService } from '../dashboard.service';
import { Observable, from  } from 'rxjs';

import { BookingsComponent } from './bookings.component';

xdescribe('BookingsComponent', () => {
  let component: BookingsComponent;
  let fixture: ComponentFixture<BookingsComponent>;
  let service: DashboardService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ BookingsComponent ],
      providers: [ DashboardService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should get bookings from Server', () => {
  //   service = TestBed.inject(DashboardService);


  //   let number =  [
  //     {
  //       id: 7,
  //       email: "michael.lawson@reqres.in",
  //       first_name: "Michael",
  //       last_name: "Lawson",
  //       avatar: "https://reqres.in/img/faces/7-image.jpg"
  //     },
  //     {
  //       id: 8,
  //       email: "lindsay.ferguson@reqres.in",
  //       first_name: "Lindsay",
  //       last_name: "Ferguson",
  //       avatar: "https://reqres.in/img/faces/8-image.jpg"
  //     }
  //   ];
    
  //   spyOn(service, 'getBookings').and.returnValue(from(number));
  //   fixture.detectChanges();

  //   expect(component.loadedUsers.length).toEqual(number);
  // });
});

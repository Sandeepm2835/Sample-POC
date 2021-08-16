import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from "rxjs/operators"

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  loadedUsers = [];
  date = new Date();
  isLoading = false; 
  myBooking = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.http.get('https://reqres.in/api/users?page=2').pipe(map(resData => {
     return resData['data'] ? resData['data'] : [];  
    }))
    .subscribe(arr => {
      this.isLoading = false;
      this.loadedUsers = arr;
    }, error => {
      console.log(error);
    });
  }
}
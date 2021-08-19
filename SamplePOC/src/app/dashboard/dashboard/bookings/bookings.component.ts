import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

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

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.dashboardService.getBookings().subscribe(arr => {
      this.isLoading = false;
      this.loadedUsers = arr;
    }, error => {
      console.log(error);
    });
  }
}
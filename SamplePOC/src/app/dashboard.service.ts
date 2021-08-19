import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  constructor(private http: HttpClient) {}

  getBookings() {
   return this.http.get('https://reqres.in/api/users?page=2').pipe(map(resData => {
      return resData['data'] ? resData['data'] : [];  
     })
    ); 
  }
}
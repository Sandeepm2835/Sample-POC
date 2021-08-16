import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { AuthData } from "./auth-data.model";
import { User } from "./user.model";

@Injectable({providedIn: 'root'})

export class AuthService {
  authChange = new Subject<boolean>();
  user: User;

  constructor(private router: Router) {}

  signup(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString()
    }
    this.handleAuth();
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString()
    }
    this.handleAuth();
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  isAuth() {
    return this.user != null;
  }

  private handleAuth() {
    this.authChange.next(true);
    this.router.navigate(['/dashboard']);
  }
}
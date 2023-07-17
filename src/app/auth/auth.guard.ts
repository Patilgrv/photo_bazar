import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(): boolean {
    if (localStorage.getItem('token')) {
      return true; // User is logged in, allow access
    } else {
      this.router.navigate(['/login']); // User is not logged in, redirect to login form
      return false;
    }
  }
}

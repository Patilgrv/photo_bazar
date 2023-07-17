import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorMessage: string = '';
  @ViewChild('loginForm') loginForm!: NgForm;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  Onlogin(loginForm: NgForm) {
    // console.log(loginForm.value);
    const token = this.authService.authUser(loginForm.value);
    if (token) {
      localStorage.setItem('token', token.username);
      console.log('login successfull !!');
      this.errorMessage = '';
      this.router.navigate(['/gallery']);
    } else {
      console.log('loggin not successfull');
      this.errorMessage = 'Invalid credentials. Please try again.';
      this.loginForm.resetForm();
    }
  }
}

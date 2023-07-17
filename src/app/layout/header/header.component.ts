import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loggedinUser: string | undefined;
  constructor(private router: Router,private sharedService: SharedService) {}
  ngOnInit(): void {}

  loggedin() {
    const token = localStorage.getItem('token');
    this.loggedinUser = token !== null ? token : '';
    return this.loggedinUser;
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }


// new code

showLogin() {
  this.sharedService.loginClicked.emit();

}

  

}

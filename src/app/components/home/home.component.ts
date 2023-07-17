import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
 
  commentTarget: string = '#commentsMention';
  textareaValue = '';
  showSuggestions = false;
  emailData: {
    userid: string;
    password: string;
    username: string;
  }[] = [];

  imageUrls: { url: string; alt: string }[] = [];
  details:any;
  constructor(private http: HttpClient) {
    const myData = localStorage.getItem('myData');
    // console.log(myData);

    if (myData) {
      const data = JSON.parse(myData);
      this.emailData = data.usersDB;
      // console.log(myData);
    }

  }

  ngOnInit() {
    const data = localStorage.getItem("token")
    console.log(data)
    this.details = data
    this.fetchHomeImages();

    
    
  }

  fetchHomeImages() {
    this.http.get<any>('../assets/db.json').subscribe(
      (data: any) => {
        this.imageUrls = data.HomeImages;
        // console.log(this.imageUrls);
      },
      (error: any) => {
        console.error('Error fetching images:', error);
      }
    );
  }
  // logic for @ mention feauture

  handleTextareaInput(event: any) {
    const inputValue = event.target.value;
    if (inputValue.endsWith('@')) {
      this.showSuggestions = true;
    } else {
      this.showSuggestions = false;
    }
  }

  mentionUser(user: { userid: string; password: string; username: string }) {
    this.textareaValue += `${user.username} `;
    this.showSuggestions = false;
  }

  public commentField: object = { text: 'username' };

  displayLoginForm = false;

  showLoginForm() {
    this.displayLoginForm = true;
    console.log("event is captured");
    
  }
}

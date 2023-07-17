import { Component, OnInit } from '@angular/core';
import { DataService } from './Services/dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.fetchDataAndStoreInLocalStorage();
  }

  fetchDataAndStoreInLocalStorage() {
    this.dataService.fetchDatafromServer().subscribe((data: any) => {
      this.dataService.storeDataInLocalStorage(data);
    });
  }
}

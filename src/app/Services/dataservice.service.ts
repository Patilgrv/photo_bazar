import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  fetchDatafromServer() {
    return this.http.get('../assets/db.json');
  }

  storeDataInLocalStorage(data: any) {
    localStorage.setItem('myData', JSON.stringify(data));
  }

  getDataFromLocalStorage() {
    const data = localStorage.getItem('myData');
    return data ? JSON.parse(data) : null;
  }
}

import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  loginClicked: EventEmitter<void> = new EventEmitter<void>();
    
  constructor() { }
}

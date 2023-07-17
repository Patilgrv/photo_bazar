import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  authUser(user: any) {
    const usersDB = localStorage.getItem('myData') || '';
    if (usersDB) {
      const UserArray = JSON.parse(usersDB).usersDB;
      return UserArray.find(
        (p: { userid: any; password: any }) =>
          p.userid === user.userid && p.password === user.password
      );
    }
    return null;
  }
}

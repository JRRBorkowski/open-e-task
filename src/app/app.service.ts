import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, catchError, map } from 'rxjs'
import { User } from './user/user';
import { UserComponent } from './user/user.component';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  usersList: User[] = [];

  selectedUser: number = 0;

  selectUser(id: number) {
    this.selectedUser = id
  }

  getSelectedUser() {
    return this.selectedUser;
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  constructor(
    private http: HttpClient
  ) { }
  }

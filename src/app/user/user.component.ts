import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  allUsers!: Observable<User[]>

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.allUsers = this.appService.getAllUsers();
  }

  onUserSelection(selectedUserId: string) {
    this.allUsers.subscribe((resultAllUsers) => {
      console.log(resultAllUsers)
      const parsedValue = Number(selectedUserId);
      if (resultAllUsers.find(element => element.id === parsedValue)) {
        this.router.navigate(['user',parsedValue])
        console.log(parsedValue)
      } if (parsedValue === 0) {
        alert("User ID cannot be 0!")
      } if (parsedValue < 0) {
        alert("User ID cannot be smaller than 0")
      } if (!parsedValue) {
        alert("Incorrect user ID!")
        console.log(parsedValue)
      }
    }
    )
  }

}

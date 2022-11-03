import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { AppService } from '../app.service';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  allUsers!: Observable<User[]>

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.allUsers = this.appService.getAllUsers();
  }

  onUserSelection() {
    console.log(this.allUsers)
  }

}

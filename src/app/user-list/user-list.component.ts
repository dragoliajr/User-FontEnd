import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any;
  currentUser =null;
  currentIndex = -1;
  msg: any = "";
  

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit() called");
    //this.readUsers();
  }
  // readUsers():void{
  //   console.log("readUsers()");
  //   this.userService.readAll()
  //   .subscribe({
  //     next: (users) => {
  //       this.users = users;
  //       console.log(users);
  //     }});
  // }

  // refresh(): void{
  //   this.readUsers();
  // }
  // setCurrentUser(user: any, index: number): void{
  //   this.currentUser = user;
  //   this.currentIndex = index;
  // }

}

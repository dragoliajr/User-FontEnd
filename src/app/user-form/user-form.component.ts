import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  public isMenuCollapsed = true;

  public isCollapsed = true;

  userForm = new FormGroup({
    uname : new FormControl('', [Validators.minLength(3), Validators.maxLength(15)]),
    pword : new FormControl('',[Validators.minLength(4), Validators.maxLength(20)])
  })

  constructor(userServive: UserService) { }
  onSubmit(){
    console.log(this.userForm.value);
  }

  ngOnInit(): void {
  }
  get uname(){
    return this.userForm.get('uname');
  }
  get pword(){
    return this.userForm.get('pword');
  }


}

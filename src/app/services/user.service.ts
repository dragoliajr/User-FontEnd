import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:8080/users/";

  constructor(private httpClient : HttpClient) { }

  getUserList() : Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }
  createUser(user : User) : Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, user)
  }
  getUserByUName(uname : string) : Observable<User> {
    return this.httpClient.get<User>(`${this.baseURL}${uname}`);
  }
  updateUser(uname : string, user : User) : Observable<Object> {
    return this.httpClient.put(`${this.baseURL}${uname}`, user);
  }
  deleteUser(uname : string) : Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}${uname}`);
  }
}
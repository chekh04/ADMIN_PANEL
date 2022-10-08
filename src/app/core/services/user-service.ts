import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { User } from "../models/user-model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  public updateUserData(data: User): void {
    console.log(localStorage.getItem('user'))
    const body = {name: data.name, surname: data.surname, email: data.email};
    localStorage.setItem('user', JSON.stringify(body))
    console.log(JSON.parse(localStorage.getItem('user')))
  }

}

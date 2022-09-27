import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { User } from "../models/user-model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private defaultUser: User = {
    name: null, email: null, surname: null
  }
  private userData: BehaviorSubject<User> = new BehaviorSubject<User>(this.defaultUser)

  constructor() {
  }

  public get user$(): Observable<User> {
    return this.userData.asObservable()
  }
  public get user(): User {
    return this.userData.value;
  }
  public updateUserData(data: User): void {
    const body = {name: data.name, surname: data.surname, email: data.email};
    localStorage.setItem('user', JSON.stringify(body))
    this.userData.next(body);
  }

}

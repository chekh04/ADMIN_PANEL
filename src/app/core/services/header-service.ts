import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private headerTitle!: Subject<string>;

  constructor() {
    this.headerTitle = new Subject<string>()
  }

  public updateHeaderTitle(v: string) {
    // console.log(v);
    this.headerTitle.next(v);
  }
  public getHeaderTitle(): Observable<string> {
    return this.headerTitle.asObservable();
  }

}

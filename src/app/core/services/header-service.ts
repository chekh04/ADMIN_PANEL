import { Injectable } from "@angular/core";
import { BehaviorSubject, filter, Observable, Subject } from "rxjs";
import { NavigationEnd, Router, RouterEvent } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private headerTitle!: BehaviorSubject<string>;

  constructor(private router: Router) {
    this.headerTitle = new BehaviorSubject<string>(this.router.url.split('/')[1]);
    // console.log(this.router.url.split('/')[1])
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (event instanceof RouterEvent) {
          this.headerTitle.next(this.processHeaderTitle(event.url));
        }
      });
  }

  public getHeaderTitle(): Observable<string> {
    return this.headerTitle.asObservable();
  }

  private processHeaderTitle(v: string): string {
    const arr = v.split('/');
    const temp = arr[arr.length - 1].split('')
    return temp[0].toUpperCase() + temp.join('').slice(1, temp.length);
  }

}

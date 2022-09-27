import { Component, OnInit } from '@angular/core';
import { filter, Observable } from "rxjs";
import { HeaderService } from "../../../../core/services/header-service";
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from "@angular/router";

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.scss']
})
export class ClientHeaderComponent implements OnInit {


  public title: string;

  constructor(private headerService: HeaderService,
              private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (event instanceof RouterEvent) {
          this.title = this.getHeaderTitle(event.url)
        }
      });
  }

  ngOnInit(): void {
  }

  private getHeaderTitle(v:string) :string {
    const arr = v.split('/');
    const temp = arr[arr.length-1].split('')
    return temp[0].toUpperCase() + temp.join('').slice(1, temp.length);
  }

}

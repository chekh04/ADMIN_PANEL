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


  public title$: Observable<string>;

  constructor(private headerService: HeaderService) {
    this.title$ = this.headerService.getHeaderTitle();
  }

  ngOnInit(): void {
  }


}

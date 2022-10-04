import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-client-overview',
  templateUrl: './client-overview.component.html',
  styleUrls: ['./client-overview.component.scss']
})
export class ClientOverviewComponent implements OnInit {
  public chartData = [
    [10,18,24,17,26,37,30,23,26,29,37,34,37,30,25,23,27,32, 30,31],
    [15,10,13,18,30,28,20,25,38,30,25,20,17,28,33,28,30,24,20,27]
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

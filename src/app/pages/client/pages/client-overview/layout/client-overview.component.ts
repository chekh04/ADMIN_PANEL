import { Component, OnInit } from '@angular/core';
import { LineChartModel } from "../../../components/line-chart/line-chart.component";


@Component({
  selector: 'app-client-overview',
  templateUrl: './client-overview.component.html',
  styleUrls: ['./client-overview.component.scss']
})
export class ClientOverviewComponent implements OnInit {
  public data: LineChartModel[] = [
    {x: 0, y: 0},
    {x: 1, y: 3},
    {x: 2, y: 12},
    {x: 3, y: 8},
    {x: 4, y: 17},
    {x: 5, y: 15},
    {x: 6, y: 20}];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables, ScriptableContext } from "chart.js";

@Component({
  selector: 'app-chart-line',
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.scss']
})
export class ChartLineComponent implements OnInit {

  @ViewChild('lineChart', {static: true}) private chartRef;
  @Input() data: any;
  public chart: any;

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.createChart();
  }


  createChart(){

    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],
        datasets: [
          {
            data: this.data[0],
            label: "Today",
            borderColor: 'rgba(55, 81, 255, 1)',
            cubicInterpolationMode: 'monotone',
            fill: true,
            backgroundColor: (context: ScriptableContext<'line'>) => {
              const ctx = context.chart.ctx;
              const gradient = ctx.createLinearGradient(10, 500, 40, 40);
              gradient.addColorStop(0, 'rgba(63,94,251,0.6349133403361344)');
              gradient.addColorStop(1, 'rgba(255,255,255,0.17833070728291311)');
              return gradient;
            },
          },
          {
            data: this.data[1],
            label: "Yeasterday",
            borderColor: 'rgba(183, 183, 183, 0.8)',
            cubicInterpolationMode: 'monotone',
          }
        ]
      },
      options: {
        elements: {
          point: {
            radius: 1,
          },
        },
        plugins: {
          legend: {
            position: 'top',
              labels: {
              usePointStyle: true,
                pointStyle: 'line',
                padding: 20,
            },
            align: 'end',
          },
          title: {
            text: 'Todays trends',
              display: true,
              color: 'rgb(0,0,0)',
              padding: 20,
          },
        },
        scales: {
          yAxes: {
            display: true,
            position: 'right',
            ticks: {

              // step: 10
            },
          },
          x: {
            grid: {
              display: false
            }
          },

        }
      },

    });
  }

}



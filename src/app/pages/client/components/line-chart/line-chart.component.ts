import { Component, ElementRef, Input, OnInit, SimpleChange } from '@angular/core';
import * as d3 from 'd3'
import { PieArcDatum, SimulationLinkDatum } from "d3";

export interface LineChartModel {
  x: number,
  y: number
}

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  @Input() data!: LineChartModel[];


  constructor(public chartElem: ElementRef) {

  }

  ngOnInit(): void {
    this.draw();
    // this.drawChart()
    // this.go()
  }

  public drawChart(): void {
    // Step 1
    const dataset1 = [
      [1,1], [12,20], [24,36],
      [32, 50], [40, 70], [50, 100],
      [55, 106], [65, 123], [73, 130],
      [78, 134], [83, 96], [89, 138],
      [100, 140]
    ];

    // Step 3
    const svg = d3.select("svg"),
      margin = 200,
      width = +(svg.attr("width")) - margin, //300
      height = +(svg.attr("height")) - margin //200

    // Step 4
    const xScale = d3.scaleLinear().domain([0, 100]).range([0, width]),
      yScale = d3.scaleLinear().domain([0, 200]).range([height, 0]);

    var g = svg.append("g")
      .attr("transform", "translate(" + 100 + "," + 100 + ")");


    // Step 6
    g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale));

    g.append("g")
      .call(d3.axisLeft(yScale));

    // Step 8
    // const line = d3.line()
    //   .x(function(d) {
    //     console.log(xScale(d[0]))
    //     return xScale(d[0]);
    //   })
    //   .y(function(d) { return yScale(d[1]); })
    //   .curve(d3.curveMonotoneX)
    const line = d3.line()
    // @ts-ignore
    const path = line(dataset1);

    svg.append("path")
      .datum(dataset1)
      .attr("class", "line")
      .attr("transform", "translate(" + 100 + "," + 100 + ")")
      .attr("d", path)
      .style("fill", "none")
      .style("stroke", "#CC0000")
      .style("stroke-width", "2");
  }
  public draw(): void {
    const margin = { top: 40, right: 20, bottom: 50, left: 50 };
    const width = 720 - margin.left - margin.right;
    const height = 390 - margin.top - margin.bottom;

    const data = [
      {x: 0, y: 15},
      {x: 3, y: 30},
      {x: 5, y: 25},
      {x: 8, y: 50},
      {x: 10, y: 27},
      {x: 12, y: 15},
      {x: 14, y: 35},
      {x: 16, y: 47},
      {x: 18, y: 40},
      {x: 19, y: 37}
    ]
    // const data = [[10,0],[25,4],[37,8],[3420],[45,13],[60,9]]

    const xScale = d3.scaleLinear().domain([0,22]).range([0, width]);

    const yScale = d3.scaleLinear().domain([0, (d3.max(data, d => d.y) + 10)]).range([height, 0]);

    // const colorScale = d3.scaleOrdinal(d3.schemeCategory20);

    const svg = d3.select('.chart')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${ margin.left },${ margin.top })`);

    ////////generators
    const xAxis = d3.axisBottom(xScale).ticks(20)
    const ticksAmount = 6;
    const yAxis = d3.axisRight(yScale).ticks(ticksAmount)
    /////////



    svg.append('g')
      .attr('class', 'axis x-axis')
      .attr('transform', `translate(0,${ height  })`)
      .call(xAxis)
      .select('path').style('visibility', 'hidden');
    svg.selectAll('line').remove();

    svg.append('g')
      .attr('transform', 'translate('+ (width - 10)  +',-10)')
      .attr('class', 'axis y-axis')
      .call(yAxis)
      .select('path').style('visibility', 'hidden');
    svg.selectAll('line').remove();
    const dataIds = Object.keys(data)

    ////////griidddd

    const TextShiftOnX = (width/data.length)/2
    svg.selectAll('.line')
      .data(d3.range(7)).enter()
      .append('line')
      .attr('y1', function (d) {
        // console.log('dy1:', d)
        // console.log('y1:', height/ticksAmount * d - margin.top )
        return height/ticksAmount * d - margin.top; })
      .attr('y2', function (d) {
        // console.log('dy2:', d)
        // console.log('y2:',  height/5 * d - margin.top)
        return height/ticksAmount * d - margin.top; })
      .attr('x1', 0)
      .attr('x2', 665)
      .style('stroke', '#EBEDF0')
      .style('stroke-width', '3')
      .attr('transform', 'translate(' + 0 + ',' + margin.top + ')');
    ///

    const sortedData = data.sort((a,b) => a[1] - b[1])
    const line = d3.line()
      .x(d => {
        // console.log('d', d)
        // console.log(xScale(d['x']))
        return xScale(d['x'])
      })
      .y(d => yScale(d['y']))
      .curve(d3.curveCardinal)

      svg.append("path")
      .data([sortedData])
      .attr("d", <any>line)
      .attr("fill", "none")
      .attr("stroke", "#3751FF")
        .style('stroke-width', '2');




  }
  public go(): void {

    const xScale = d3.scaleLinear().domain([0, 6]).range([25, 175]);
    const yScale = d3.scaleLinear().domain([0,20]).range([175, 25]);

    const line = d3.line()
      .x(d => xScale(d['x']))
      .y(d => yScale(d['y']))
      .curve(d3.curveCardinal)

    // @ts-ignore
    const path = line

    d3.select("#demo3")
      .append("path")
      .data([this.data])
      .attr("d", <any>line)
      .attr("fill", "none")
      .attr("stroke", "red");
  }

}

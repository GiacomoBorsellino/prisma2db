import { Component, ElementRef, ViewChild, Input, OnInit } from "@angular/core";
import * as ApexCharts from "apexcharts";
import { AppService } from "./app.service";
import { HttpClient, HttpParams } from '@angular/common/http';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  tooltip: any; // ApexTooltip;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  @ViewChild('chart') chart2: ElementRef;
  public chartOptions: Partial<ChartOptions>;

  dataHigh = [10, 22, 33, 44, 55, 11]

  constructor(private AppService: AppService) {
    this.chartOptions = {
      series: [
        {
          name: "Session Duration",
          data: this.dataHigh
        },
        {
          name: "Page Views",
          data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
        },
        {
          name: "Total Visits",
          data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 5,
        curve: "straight",
        dashArray: [0, 8, 5]
      },
      title: {
        text: "Page Statistics",
        align: "left"
      },
      legend: {
        tooltipHoverFormatter: function (val, opts) {
          return (
            val +
            " - <strong>" +
            opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
            "</strong>"
          );
        }
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6
        }
      },
      xaxis: {
        labels: {
          trim: false
        },
        categories: [
          "01 Jan",
          "02 Jan",
          "03 Jan",
          "04 Jan",
          "05 Jan",
          "06 Jan",
          "07 Jan",
          "08 Jan",
          "09 Jan",
          "10 Jan",
          "11 Jan",
          "12 Jan"
        ]
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function (val) {
                return val + " (mins)";
              }
            }
          },
          {
            title: {
              formatter: function (val) {
                return val + " per session";
              }
            }
          },
          {
            title: {
              formatter: function (val) {
                return val;
              }
            }
          }
        ]
      },
      grid: {
        borderColor: "#f1f1f1"
      }
    };
  }

  ngOnInit() {
    console.log('ok')
    let parametri
    this.AppService.getItems(parametri).subscribe((res) => {
      console.log(res)
    })
  }

  change() {
    this.dataHigh = [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10];

    var chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
    chart.render();

    try {
      chart.updateOptions({
        series: [
          {
            name: "Session Duration",
            data: this.dataHigh
          },
          {
            name: "Page Views",
            data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
          },
          {
            name: "Total Visits",
            data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
          }
        ]
      })
    }
    catch (e) {
      alert(e)
    }
  }
}

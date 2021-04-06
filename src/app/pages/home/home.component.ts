import { DataService } from 'src/app/service/data.service';
import { QueryBindingType } from '@angular/compiler/src/core';
import { Component, HostListener, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexPlotOptions, ApexResponsive, ApexXAxis, ApexYAxis, ApexLegend, ApexFill, ChartComponent } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  datalabels: ApexDataLabels,
  legend: ApexLegend;
  fill: ApexFill;
  colors: string[],
};

var $primary = "#ff7900",
  $success = "#009393",
  $info = "#f5f6f9",
  $warning = "#F77E17",
  $danger = "#F55252",
  $label_color_light = "#E6EAEE";
var themeColors = [$primary, $warning, $success, $danger, $info];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  color: any;
  public datas: any;
  public diagrammes: any;
  jan: any;
  pager: any = {};
  filterterm: string;
  pagedItems: any[];
  progress = 0;
  progressBar = document.querySelector(".progress-bar");
  intervalId;
  public restant: any;
  public nombre = 89;
  public left: any;
  scrHeight:any;
  scrWidth:any;
  user: any;
  showHome = true;
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
        console.log(this.scrHeight, this.scrWidth);
  }

  constructor(private dataService: DataService) {
    this.getScreenSize();
    this.chartOptions = {
      series: [
        {
          name: "Finis",
          data: [
            {
              x: "Jan", y: 64,
              fillColor: "#ff0000", strokeColor: "#009393"
            },{
              x: "Fev", y: 84,
              fillColor: "#ff0000", strokeColor: "#009393"
            }, {
              x: "Mar",  y: 94,
              fillColor: "#ff0000", strokeColor: "#009393"
            },{
              x: "Avr",  y: 64,
              fillColor: "#ff0000", strokeColor: "#009393"
            }, {
              x: "Mai", y: 84,
              fillColor: "#ff0000", strokeColor: "#009393"
            },{
              x: "Jui", y: 94,
              fillColor: "#ff0000", strokeColor: "#009393"
            },{
              x: "Jul", y: 64,
              fillColor: "#ff0000", strokeColor: "#009393"
            },{
              x: "Aou", y: 84,
              fillColor: "#ff0000", strokeColor: "#009393"
            }, {
              x: "Sep",  y: 94,
              fillColor: "#ff0000", strokeColor: "#009393"
            },{
              x: "Oct",  y: 64,
              fillColor: "#ff0000", strokeColor: "#009393"
            }, {
              x: "Nov", y: 84,
              fillColor: "#ff0000", strokeColor: "#009393"
            },{
              x: "Dec", y: 94,
              fillColor: "#ff0000", strokeColor: "#009393"
            },
          ] 
        },
        {
          name: "Nouveaux",
          data: [
            {
              x: "Jan", y: 134,
              fillColor: "#009393", strokeColor: "#009393"
            },{
              x: "Fev", y: 284,
              fillColor: "#009393", strokeColor: "#009393"
            }, {
              x: "Mar",  y: 124,
              fillColor: "#009393", strokeColor: "#009393"
            },{
              x: "Avr",  y: 274,
              fillColor: "#009393", strokeColor: "#009393"
            }, {
              x: "Mai", y: 184,
              fillColor: "#009393", strokeColor: "#009393"
            },{
              x: "Jui", y: 194,
              fillColor: "#009393", strokeColor: "#009393"
            },{
              x: "Jul", y: 264,
              fillColor: "#009393", strokeColor: "#009393"
            },{
              x: "Aou", y: 104,
              fillColor: "#009393", strokeColor: "#009393"
            }, {
              x: "Sep",  y: 124,
              fillColor: "#009393", strokeColor: "#009393"
            },{
              x: "Oct",  y: 264,
              fillColor: "#009393", strokeColor: "#009393"
            }, {
              x: "Nov", y: 165,
              fillColor: "#009393", strokeColor: "#009393"
            },{
              x: "Dec", y: 294,
              fillColor: "#009393", strokeColor: "#009393"
            },
          ]
        },
        {
          name: "Total",
          data: [
            {
              x: "Jan", y: 464,
              fillColor: "#000000", strokeColor: "#009393"
            },{
              x: "Fev", y: 684,
              fillColor: "#000000", strokeColor: "#009393"
            }, {
              x: "Mar",  y: 694,
              fillColor: "#000000", strokeColor: "#009393"
            },{
              x: "Avr",  y: 764,
              fillColor: "#000000", strokeColor: "#009393"
            }, {
              x: "Mai", y: 484,
              fillColor: "#000000", strokeColor: "#009393"
            },{
              x: "Jui", y: 794,
              fillColor: "#000000", strokeColor: "#009393"
            },{
              x: "Jul", y: 764,
              fillColor: "#000000", strokeColor: "#009393"
            },{
              x: "Aou", y: 684,
              fillColor: "#000000", strokeColor: "#009393"
            }, {
              x: "Sep",  y: 594,
              fillColor: "#000000", strokeColor: "#009393"
            },{
              x: "Oct",  y: 664,
              fillColor: "#000000", strokeColor: "#009393"
            }, {
              x: "Nov", y: 484,
              fillColor: "#000000", strokeColor: "#009393"
            },{
              x: "Dec", y: 594,
              fillColor: "#000000", strokeColor: "#009393"
            },
          ]
        }, 
      ],
      chart: {
        type: "bar",
        height: 200,
        width: 400,
        stacked: true,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "30px",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
        style: {
          colors: ['#f3f4f5', '#fff']
        }
      },
      xaxis: {
        type: "category",
        categories: [
          "Jan",
          "Fev",
          "Mar",
          "Avr",
          "Mai",
          "Jui",
          "Jul",
          "Aou",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ]
      },
      legend: {
        show: false,
      },
      fill: {
        opacity: 2,
      //  shown: 
      },
    };
  }

  ngOnInit() {
    this.datas = this.dataService.getData();
    this.user = localStorage.getItem('user');
    if(this.user == 'inter') {
      this.showHome = false;
    } else {
      this.showHome = true;
    }
    console.log(this.user);
    const getDownloadProgress = () => {
      console.log("getDownload", this);
      if (this.progress <= 99) {
        this.progress = 30;
        console.log("inside if", this.progress);
        this.progress = this.progress - 2;
      } else {
        clearInterval(this.intervalId);
      }
    };
    this.intervalId = setInterval(getDownloadProgress, 1000);
  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  getColor(p) {
    if(p.statut == "oui") {
      this.color = "#6dd400";
    } else if (p.statut == "non") {
      this.color = "#f03737";
    }
    return this.color;
  }

 
  getHeight2(p) {
    if(p.id == 2) {
      var total = p.total * 0.145 
      this.jan = total + "px"
    } 
    return this.jan;
  } 

   chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  getwidth() {
    this.restant = this.nombre + "%";
    return this.restant;
  }
  getposition() {
    let left1 = this.nombre - 1;
    this.left = left1 + "%";
    return this.left;
  }
  
}

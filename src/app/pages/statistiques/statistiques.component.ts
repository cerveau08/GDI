import { Component, HostListener, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexLegend, ApexPlotOptions, ApexResponsive, ApexStroke, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';
import { DataService } from 'src/app/service/data.service';

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
export type ChartOptions1 = {
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
  colors: ["#009393", "#ff7900"],
};

var $primary = "#ff7900",
  $success = "#009393",
  $info = "#f5f6f9",
  $warning = "#F77E17",
  $danger = "#F55252",
  $label_color_light = "#E6EAEE";
var themeColors = [$primary, $warning, $success, $danger, $info];
@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.scss']
})
export class StatistiquesComponent implements OnInit {

  societes = [
    {
      societe: "SONATEL",
    },
    {
      societe: "OFMS",
    }
  ]
  directions1 = [
    {
      direction: "DSD",
    },
    {
      direction: "DRH",
    },
    {
      direction: "DGA",
    },
    {
      direction: "DMGP",
    },
    {
      direction: "DOI",
    },
    {
      direction: "DSC",
    },
    {
      direction: "DRJ",
    },
    {
      direction: "ARQ",
    },
    {
      direction: "DAL",
    },
  ];
  directions2 = [
    {
      direction: "DD",
    },
    {
      direction: "OM",
    },
    {
      direction: "PM",
    },
    {
      direction: "CP",
    },
    {
      direction: "CD",
    }
  ];
  directs1 = [
     "DSD",
     "DRH",
     "DGA",
     "DMGP",
     "DOI",
     "DSC",
     "DRJ",
     "ARQ",
     "DAL",

  ];
  directs2 = [
      "DD",
      "OM",
      "PM",
      "CP",
      "CD",
  ];
  directions: any;
  show = 1;
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
  scrHeight:any;
  scrWidth:any;
  item;
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
        console.log(this.scrHeight, this.scrWidth);
  }
  ngOnInit() {
    this.datas = this.dataService.getData();
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
  societeSelectionner(value:string){
    console.log(value);
    this.directions = this.directs1;
    if(value == "SONATEL") {
      this.directions = this.directs1;
    } else if (value == "OFMS") {
      this.directions = this.directs2;
    }
    console.log(this.directions);
    return this.directions;
  }

  lesDirections(){
    this.directions = this.directions1;
    return this.directions;
  }
  changeshow1() {
    this.show = 1;
    return this.show;
  }
  changeshow2() {  
    this.show = 2;
    return this.show;
  }
  changeshow3() {  
    this.show = 3;
    return this.show;
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
  dataStat: any;
  /*@ViewChild("chart")*/ chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions1: Partial<ChartOptions>;
  constructor(private dataService: DataService,) {
    this.getScreenSize();
    this.dataStat = this.dataService.getDataStatistique();
    this.chartOptions = {
      series: [
        {
          name: "Finis",
          data: [
            {
              x: "Jan", y: 64,
              fillColor: "#ff0000", strokeColor: "#ff0000"
            },{
              x: "Fev", y: 84,
              fillColor: "#ff0000", strokeColor: "#ff0000"
            }, {
              x: "Mar",  y: 94,
              fillColor: "#ff0000", strokeColor: "#ff0000"
            },{
              x: "Avr",  y: 64,
              fillColor: "#ff0000", strokeColor: "#ff0000"
            }, {
              x: "Mai", y: 84,
              fillColor: "#ff0000", strokeColor: "#ff0000"
            },{
              x: "Jui", y: 94,
              fillColor: "#ff0000", strokeColor: "#ff0000"
            },{
              x: "Jul", y: 64,
              fillColor: "#ff0000", strokeColor: "#ff0000"
            },{
              x: "Aou", y: 84,
              fillColor: "#ff0000", strokeColor: "#ff0000"
            }, {
              x: "Sep",  y: 94,
              fillColor: "#ff0000", strokeColor: "#ff0000"
            },{
              x: "Oct",  y: 64,
              fillColor: "#ff0000", strokeColor: "#ff0000"
            }, {
              x: "Nov", y: 84,
              fillColor: "#ff0000", strokeColor: "#ff0000"
            },{
              x: "Dec", y: 94,
              fillColor: "#ff0000", strokeColor: "#ff0000"
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
              fillColor: "#000000", strokeColor: "#000000"
            },{
              x: "Fev", y: 684,
              fillColor: "#000000", strokeColor: "#000000"
            }, {
              x: "Mar",  y: 694,
              fillColor: "#000000", strokeColor: "#000000"
            },{
              x: "Avr",  y: 764,
              fillColor: "#000000", strokeColor: "#000000"
            }, {
              x: "Mai", y: 484,
              fillColor: "#000000", strokeColor: "#000000"
            },{
              x: "Jui", y: 794,
              fillColor: "#000000", strokeColor: "#000000"
            },{
              x: "Jul", y: 764,
              fillColor: "#000000", strokeColor: "#000000"
            },{
              x: "Aou", y: 684,
              fillColor: "#000000", strokeColor: "#000000"
            }, {
              x: "Sep",  y: 594,
              fillColor: "#000000", strokeColor: "#000000"
            },{
              x: "Oct",  y: 664,
              fillColor: "#000000", strokeColor: "#000000"
            }, {
              x: "Nov", y: 484,
              fillColor: "#000000", strokeColor: "#000000"
            },{
              x: "Dec", y: 594,
              fillColor: "#000000", strokeColor: "#000000"
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


    this.chartOptions1 = {
      colors: [
        "#009393",
        "#ff7900"
      ],
      series: [
        {
          name: "Hommes",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: "Femmes",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }
      ],
      chart: {
        type: "bar",
        height: 320,
        width: 700,
        stacked: false,
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
          columnWidth: "50px",
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
        categories: 
          this.societeSelectionner(this.item)
        
      },
      legend: {
        show: false,
      },
      fill: {
        opacity: 4,
      },
    };
  }

}

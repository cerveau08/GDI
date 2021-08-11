import { Component, OnInit, HostListener } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexPlotOptions, ApexResponsive, ApexXAxis, ApexYAxis, ApexLegend, ApexFill, ChartComponent } from 'ng-apexcharts';
import { DataService } from 'src/app/service/data.service';
import { ErrormodalService } from 'src/app/_errormodals';
import { OthersService } from 'src/app/services/others.service';

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
export type ChartOptions3 = {
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
@Component({
  selector: 'app-statagence',
  templateUrl: './statagence.component.html',
  styleUrls: ['./statagence.component.scss']
})
export class StatagenceComponent implements OnInit {

  borderfilter1;
  colorfilter1;
  axex;
  mois;
  an;
  data;
  directs: any;
  directions: any;
  effectif;
  hommes: any;
  femmes: any;
  nouveau; 
  malade;
  conges;
  present;
  total;
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
  dates;
  currentDate = new Date().getFullYear();
  item;
  dataStatEffectifAnnee: any;
  dataStatEffectifService: any;
  dataStatistique;
  dataInterimByAgence: any;
  chart: ChartComponent;
  public chartOptions6: Partial<ChartOptions>;
  public chartOptions7: Partial<ChartOptions>;
  constructor(private dataService: DataService,
    private errormodalService: ErrormodalService,
              private otherService: OthersService) {
    this.getScreenSize();
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
        console.log(this.scrHeight, this.scrWidth);
  }

  ngOnInit() {

    
  }

  
  dateSelectionnerAgence(value){
    console.log(this.an);
    console.log(value);
    this.otherService.statInterByAgence().subscribe(
      data => {
        console.log(data);
        this.dataInterimByAgence = this.data.data[0];
        console.log(data);
        this.dataInterimByAgence = data;
    this.axex = this.dataInterimByAgence.map(valueOfDirection => valueOfDirection.annee);
    this.malade = this.dataInterimByAgence.map(valueOfMalade => valueOfMalade.malade);
    this.present = this.dataInterimByAgence.map(valueOfPresent => valueOfPresent.present);
    this.conges = this.dataInterimByAgence.map(valueOfConges => valueOfConges.conge);
    this.chartOptions6 = {
      colors: [
        "#ff0000",
        "#009393",
        "#000000",
      ],
      series: [
        {
          name: "Malades",
          data: this.malade
        },
        {
          name: "Présents",
          data: this.present
        },
        {
          name: "Congés",
          data: this.conges
        },
      ],
      chart: {
        type: "bar",
        height: 300,
        width: 550,
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
          columnWidth: "10px",
        //  endingShape: "rounded",
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
          this.axex
      },
      legend: {
        show: false,
      },
      fill: {
        opacity: 4,
      },
    };
    return this.chartOptions6;
    })
  }

  // serviceSelectionnerAgence(value){
  //   this.axex = this.dataStatEffectifService.map(valueOfDirection => valueOfDirection.annee);
  //   this.nouveau = this.dataStatEffectifService.map(valueOfNouveau => valueOfNouveau.nouveau);
  //   this.malade = this.dataStatEffectifService.map(valueOfFini => valueOfFini.fini);
  //   this.total = this.dataStatEffectifService.map(valueOfTotal => valueOfTotal.total);
  //   this.chartOptions7 = {
  //     colors: [
  //       "#ff0000",
  //       "#009393",
  //       "#000000",
  //     ],
  //     series: [
  //       {
  //         name: "Malades",
  //         data: this.malade
  //       },
  //       {
  //         name: "Présents",
  //         data: this.nouveau
  //       },
  //       {
  //         name: "Congés",
  //         data: this.total
  //       },
  //     ],
  //     chart: {
  //       type: "bar",
  //       height: 300,
  //       width: 550,
  //       stacked: true,
  //       toolbar: {
  //         show: false
  //       },
  //       zoom: {
  //         enabled: false
  //       }
  //     },
  //     responsive: [
  //       {
  //         breakpoint: 480,
  //         options: {
  //           legend: {
  //             show: false,
  //             position: "bottom",
  //             offsetX: -10,
  //             offsetY: 0
  //           }
  //         }
  //       }
  //     ],
  //     plotOptions: {
  //       bar: {
  //         horizontal: false,
  //         columnWidth: "10px",
  //       //  endingShape: "rounded",
  //       },
  //     },
  //     dataLabels: {
  //       enabled: false,
  //       style: {
  //         colors: ['#f3f4f5', '#fff']
  //       }
  //     },
  //     xaxis: {
  //       type: "category",
  //       categories: 
  //         this.axex
  //     },
  //     legend: {
  //       show: false,
  //     },
  //     fill: {
  //       opacity: 4,
  //     },
  //   };
  //   return this.chartOptions7;
  // }

}

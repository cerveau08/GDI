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
  directs: any;
  directions: any;
  effectif;
  hommes: any;
  femmes: any;
  actifs; 
  inactifs;
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
  data: Object;
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
    this.dateSelectionnerAgence() ;
  }


  dateSelectionnerAgence(){
    this.otherService.statInterByAgence().subscribe(
      data => {
        this.data = data;
        console.log(this.data);

        // this.dataInterimByAgence =data[0];
        console.log(this.dataInterimByAgence);
    this.axex = this.dataInterimByAgence.map(valueOfDirection => valueOfDirection.annee);
    this.actifs = this.dataInterimByAgence.map(valueOfActifs => valueOfActifs.actifs);
    this.inactifs = this.dataInterimByAgence.map(valueOfInactifs => valueOfInactifs.inactifs);
    this.total = this.dataInterimByAgence.map(valueOfTotal => valueOfTotal.total);
    this.chartOptions6 = {
      colors: [
        "#ff0000",
        "#009393",
        "#000000",
      ],
      series: [
        {
          name: "Actifs",
          data: this.actifs
        },
        {
          name: "Inactifs",
          data: this.inactifs
        },
        {
          name: "Total",
          data: this.total
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

  serviceSelectionnerAgence(value){
    this.axex = this.dataStatEffectifService.map(valueOfDirection => valueOfDirection.annee);
    this.actifs = this.dataStatEffectifService.map(valueOfNouveau => valueOfNouveau.actifs);
    this.inactifs = this.dataStatEffectifService.map(valueOfFini => valueOfFini.inactifs);
    this.total = this.dataStatEffectifService.map(valueOfTotal => valueOfTotal.total);
    this.chartOptions7 = {
      colors: [
        "#ff0000",
        "#009393",
        "#000000",
      ],
      series: [
        {
          name: "Actifs",
          data: this.actifs
        },
        {
          name: "Inactifs",
          data: this.inactifs
        },
        {
          name: "Total",
          data: this.total
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
    return this.chartOptions7;
  }

}

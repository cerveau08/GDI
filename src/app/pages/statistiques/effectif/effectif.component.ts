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
  selector: 'app-effectif',
  templateUrl: './effectif.component.html',
  styleUrls: ['./effectif.component.scss']
})
export class EffectifComponent implements OnInit {

  borderfilter1;
  colorfilter1;
  axex;
  mois;
  directs: any;
  directions: any;
  effectif;
  hommes: any;
  femmes: any;
  nouveau; 
  fini;
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
  dataStatEffectifSociete;
  dataStatistique;
  dataInterimByAgence: any;
  chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;
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
  //stats interimaire par annee
  dateSelectionner(value){
    this.otherService.statInterByYear().subscribe(
      data => {
        this.dataStatEffectifAnnee = data['data'][0];
        console.log(this.dataStatEffectifAnnee);
        this.axex = this.dataStatEffectifAnnee.map(valueOfDirection => valueOfDirection.annee);
        this.nouveau = this.dataStatEffectifAnnee.map(valueOfNouveau => valueOfNouveau.new);
        this.fini = this.dataStatEffectifAnnee.map(valueOfFini => valueOfFini.fini);
        this.total = this.dataStatEffectifAnnee.map(valueOfTotal => valueOfTotal.total);
        this.chartOptions = {
          colors: [
            "#ff0000",
            "#009393",
            "#000000",
          ],
          series: [
            {
              name: "Finis",
              data: this.fini
            },
            {
              name: "Nouveaux",
              data: this.nouveau
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
        return this.chartOptions;
    }, 
    // error=> {
    //   this.errorMsg = error;
    //   this.errormodalService.open('error-modal-1');
    //   console.log(error)
    // }
    )
  }

  effectifSocieteSelectionner(value:string){
    this.otherService.statInterByYear().subscribe(
      data => {
    console.log(value);
    this.directs = this.dataStatEffectifSociete;
    this.directions = this.dataStatEffectifSociete.map(valueOfDirection => valueOfDirection.direction);
    this.effectif = this.dataStatEffectifSociete.map(valueOfHomme => valueOfHomme.interHommes);
    if(value == "SONATEL") {
      this.directs = this.dataStatEffectifSociete;
      this.directions = this.dataStatEffectifSociete.map(valueOfDirection => valueOfDirection.direction);
      this.effectif = this.dataStatEffectifSociete.map(valueOfHomme => valueOfHomme.interHommes);
    } else if (value == "OFMS") {
      this.directs = this.dataStatEffectifSociete;
      this.directions = this.dataStatEffectifSociete.map(valueOfDirection => valueOfDirection.direction);
      this.effectif = this.dataStatEffectifSociete.map(valueOfHomme => valueOfHomme.interHommes);
    }
    this.chartOptions2 = {
      colors: [
        "#000"
      ],
      series: [
        {
          name: "Effectif",
          data: this.effectif
        }
      ],
      chart: {
        type: "bar",
        height: 280,
        width: 550,
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
          columnWidth: "20px",
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
          this.directions
      },
      legend: {
        show: false,
      },
      fill: {
        opacity: 4,
      },
    };
    return this.chartOptions2;
    })
    // error=> {
    //   this.errorMsg = error;
    //   this.errormodalService.open('error-modal-1');
    //   console.log(error)
    // })
  }

}

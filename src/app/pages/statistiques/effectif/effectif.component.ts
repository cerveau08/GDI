import { Component, OnInit, HostListener } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexPlotOptions, ApexResponsive, ApexXAxis, ApexYAxis, ApexLegend, ApexFill, ChartComponent } from 'ng-apexcharts';
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
  data: any;
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
  totalSociete;
  dates;
  currentDate = new Date().getFullYear();
  item;
  an;
  dataYear;
  societe = 1;
  date = new Date();
  annee = this.date.getFullYear();
  dataStatEffectifAnnee: any;
  dataStatEffectifSociete;
  dataStatistique;
  dataSociete;
  dataInterimByAgence: any;
  chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;
  constructor(
              private otherService: OthersService) {
    this.getScreenSize();
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
  }

  ngOnInit() {
    this.otherService.getAllSociete().subscribe(
      data => {
        this.dataSociete = data["data"];
        console.log(data);
      }
    );
    this.dateSelectionner(this.annee);
    this.effectifSocieteSelectionner(String(this.societe));
  }
  //stats interimaire par annee
  dateSelectionner(value){
    console.log(this.an);
    console.log(value);
    this.otherService.statInterByYear().subscribe(
      data => {
        this.dataYear = data;
        this.dataStatEffectifAnnee = this.dataYear.data[0];
        this.axex = this.dataStatEffectifAnnee.map(valueOfDirection => valueOfDirection.annee);
        this.nouveau = this.dataStatEffectifAnnee.map(valueOfNouveau => valueOfNouveau.nouveaux);
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
            height: 280,
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
              columnWidth: "20px",
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
    }
    )
  }

  effectifSocieteSelectionner(value:string){
    console.log(value);
    this.otherService.statTotalInter(value).subscribe(
      data => {
      console.log(data);
      this.data = data;
      this.dataStatEffectifSociete = this.data.data[0];
      console.log(this.dataStatEffectifSociete);
      this.directions = this.dataStatEffectifSociete.map(valueOfDirection => valueOfDirection.direction);
      this.hommes = this.dataStatEffectifSociete.map(valueOfHomme => valueOfHomme.homme);
      this.femmes = this.dataStatEffectifSociete.map(valueOfFemme => valueOfFemme.femme);
      this.totalSociete = this.dataStatEffectifSociete.map(valueOfTotal => valueOfTotal.homme);
      this.chartOptions2 = {
        colors: [
          "#ff7900",
          "#009393",
        ],
        series: [
          {
            name: "Femmes",
            data: this.femmes
          },
          {
            name: "Hommes",
            data: this.hommes
          },
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

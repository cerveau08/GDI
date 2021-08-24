import { Component, OnInit, HostListener } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexPlotOptions, ApexResponsive, ApexXAxis, ApexYAxis, ApexLegend, ApexFill, ChartComponent } from 'ng-apexcharts';
import { FormGroup, FormControl } from '@angular/forms';
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
  selector: 'app-statcategorie',
  templateUrl: './statcategorie.component.html',
  styleUrls: ['./statcategorie.component.scss']
})
export class StatcategorieComponent implements OnInit {

  anneeForm: FormGroup;
  societeForm: FormGroup;
  borderfilter1;
  colorfilter1;
  axex;
  mois;
  donneeAbscisse;
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
  lastTenYear;
  dataYear;
  societe = 1;
  date = new Date();
  annee = new Date().getFullYear();
  dataStatEffectifAnnee: any;
  dataStatEffectifSociete;
  dataStatistique;
  dataSociete;
  dataInterimByAgence: any;
  chart: ChartComponent;
  public chartOptions1: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;
  successMsg: any;
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
    this.getTenLastYear();
    this.otherService.getAllSociete().subscribe(
      data => {
        this.dataSociete = data["data"];
      }
    );
    this.anneeForm = new FormGroup({
      anneeA: new FormControl(''),
      societeA: new FormControl(''),
    })
    this.societeForm = new FormGroup({
      anneeS: new FormControl(''),
      societeS: new FormControl(''),
    })
    this.dateSelectionner(this.annee, this.societe);
    this.effectifSocieteSelectionner(this.annee, this.societe);
  }

  
  exportStatInterimaireByYear(annee, societe) {
    if(annee == undefined){
      annee = new Date().getFullYear();
    }
    if(societe == undefined){
      societe = 1;
    }
    this.otherService.exportStatInterimByYear(this.annee).subscribe(
      data => {
        console.log(data);
        this.data = data;
        this.successMsg = this.data.status
        if(this.successMsg == true) {
          window.open(data.data);
        }
      }
    )
  }

  extractionInterCategorieParDirection(annee, societe) {
    if(annee == undefined){
      annee = new Date().getFullYear();
    }
    if(societe == undefined){
      societe = 1;
    }
    this.otherService.extractionInterCategorieParDirection(annee, societe).subscribe(
      data => {
        console.log(data);
        this.data = data;
        this.successMsg = this.data.status
        if(this.successMsg == true) {
          window.open(data.data);
        }
      }
    )
  }
  getTenLastYear() {
    this.lastTenYear = [
      {
        annee: this.currentDate
      },{
        annee: this.currentDate - 1
      },{
        annee: this.currentDate - 2
      },{
        annee: this.currentDate - 3
      },{
        annee: this.currentDate - 4
      },{
        annee: this.currentDate - 5
      },{
        annee: this.currentDate - 6
      },{
        annee: this.currentDate - 7
      },{
        annee: this.currentDate - 8
      },{
        annee: this.currentDate - 9
      },
    ];
    console.log(this.lastTenYear);
    return this.lastTenYear
  }
  //stats interimaire par annee
  dateSelectionner(annee, societe){
    console.log(annee);
    if(annee == undefined || annee == "null"){
      annee = new Date().getFullYear();
    }
    if(societe == undefined){
      societe = 1;
    }
    this.otherService.statInterCategorie(annee, societe).subscribe(
      data => {
        this.dataYear = data;
        this.dataStatEffectifAnnee = this.dataYear.data;
        console.log(this.dataStatEffectifAnnee);
          this.donneeAbscisse = this.dataStatEffectifAnnee.map(valueOfDirection => valueOfDirection.categorie.libelle);
          this.nouveau = this.dataStatEffectifAnnee.map(valueOfNouveau => valueOfNouveau.hommes);
          this.fini = this.dataStatEffectifAnnee.map(valueOfFini => valueOfFini.femmes);
        this.axex = this.donneeAbscisse;
        console.log(this.axex);
        
        this.chartOptions1 = {
          colors: [
            "#ff0000",
            "#009393",
          ],
          series: [
            {
              name: "Finis",
              data: this.fini
            },
            {
              name: "Nouveaux",
              data: this.nouveau
            }
          ],
          chart: {
            type: "bar",
            height: 380,
            width: 750,
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
              columnWidth: "60px",
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
        console.log(this.chartOptions1);
        
        return this.chartOptions1;
    }
    )
  }

  effectifSocieteSelectionner(annee, societe){
    console.log(annee);
    console.log(annee);
    if(annee == undefined){
      annee = new Date().getFullYear();
    }
    if(societe == undefined || annee == "null"){
      societe = 1;
    }
    this.otherService.statInterCategorieParDirection(annee, societe).subscribe(
      data => {
      console.log(data);
      this.data = data;
      this.dataStatEffectifSociete = this.data.data
      console.log(this.dataStatEffectifSociete);
      this.directions = this.dataStatEffectifSociete.map(valueOfDirection => valueOfDirection.direction.libelle);
      this.hommes = this.dataStatEffectifSociete.map(valueOfHomme => valueOfHomme.AM1);
      this.femmes = this.dataStatEffectifSociete.map(valueOfFemme => valueOfFemme.AM2);
      // this.totalSociete = this.dataStatEffectifSociete.map(valueOfTotal => valueOfTotal.homme);
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
          height: 380,
          width: 750,
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

import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, HostListener } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexPlotOptions, ApexResponsive, ApexXAxis, ApexYAxis, ApexLegend, ApexFill, ChartComponent } from 'ng-apexcharts';
import { FormGroup, FormControl } from '@angular/forms';
import { OthersService } from 'src/app/services/others.service';
import { AuthService } from 'src/app/services/auth.service';

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
  dataStatEffectifGenre: any;
  categorie;
  dataStatEffectifSociete;
  dataStatistique;
  dataSociete;
  dataInterimByAgence: any;
  chart: ChartComponent;
  public chartOptions1: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;
  successMsg: any;
  directs: any;
  errorMsg: any;
  constructor(private toastr: ToastrService,
    private extractionService: AuthService,
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
    this.societeSelectionner(this.societe, this.annee);
    this.effectifSocieteSelectionner(this.societe, this.annee);
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
        this.data = data;
        this.successMsg = this.data.status
        if(this.successMsg == true) {
          window.open(data.data);
        }
      }, error=> {
        this.errorMsg = error;
        this.toastr.error(this.errorMsg, 'Echec', {
          timeOut: 5000,
        });
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
        this.data = data;
        this.successMsg = this.data.status
        if(this.successMsg == true) {
          window.open(data.data);
        }
      }, error=> {
        this.errorMsg = error;
        this.toastr.error(this.errorMsg, 'Echec', {
          timeOut: 5000,
        });
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
    return this.lastTenYear
  }

  exportCsv(societe, annee): void {
    if(annee == undefined || annee == "") {
      annee = new Date().getFullYear();
    }
    if(societe == undefined || societe == "" || societe == null) {
      societe = 1;
    }
    this.effectifSocieteSelectionner(societe, annee);
    this.otherService.statInterCategorieParDirection(societe, annee).subscribe((data: any) => {
      this.dataStatEffectifGenre =  data.data;
      this.extractionService.exportToCsv(
        this.dataStatEffectifGenre, 
        'ExtractionStatCategoreDirection' + '-' + this.date.getFullYear() + '-' + this.date.getMonth() + '-' + this.date.getDay() + '-' + this.date.getHours()+ '-' + this.date.getMinutes(),
        ['direction', 'AM1', 'AM2']
      );
    })
  }

  effectifSocieteSelectionner(societe, annee){
    if(annee == undefined){
      annee = new Date().getFullYear();
    }
    if(societe == undefined || annee == "null"){
      societe = 1;
    }
    this.otherService.statInterCategorieParDirection(societe, annee).subscribe(
      data => {
      this.data = data;
      this.dataStatEffectifSociete = this.data.data;
      this.directions = this.dataStatEffectifSociete.map(valueOfDirection => valueOfDirection.direction);
      this.hommes = this.dataStatEffectifSociete.map(valueOfHomme => valueOfHomme.AM1);
      this.femmes = this.dataStatEffectifSociete.map(valueOfFemme => valueOfFemme.AM2);
      this.chartOptions2 = {
        colors: [
          "#ff7900",
          "#009393",
        ],
        series: [
          {
            name: "AM2",
            data: this.femmes
          },
          {
            name: "AM1",
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
  }

  exportCsv1(societe, annee): void {
    if(annee == undefined || annee == "") {
      annee = new Date().getFullYear();
    }
    if(societe == undefined || societe == "" || societe == null) {
      societe = 1;
    }
    this.societeSelectionner(societe, annee);
    this.otherService.statInterCategorie(societe, annee).subscribe((data: any) => {
      this.dataStatEffectifGenre =  data.data;
      this.extractionService.exportToCsv(
        this.dataStatEffectifGenre, 
        'ExtractionStatCategoreSociete' + '-' + this.date.getFullYear() + '-' + this.date.getMonth() + '-' + this.date.getDay() + '-' + this.date.getHours()+ '-' + this.date.getMinutes(),
        ['categorie', 'hommes', 'femmes']
      );
    })
  }

  //deuxieme
  societeSelectionner(valueSociete, valueAnnee){ 
    this.otherService.statInterCategorie(valueSociete, valueAnnee).subscribe(
      data => {
        this.data = data;
        this.dataStatEffectifGenre = this.data.data;
    this.directs = this.dataStatEffectifGenre;
    this.categorie = this.dataStatEffectifGenre.map(valueOfDirection => valueOfDirection.categorie);
    this.hommes = this.dataStatEffectifGenre.map(valueOfHomme => valueOfHomme.hommes);
    this.femmes = this.dataStatEffectifGenre.map(valueOfFemmes => valueOfFemmes.femmes);
    
    this.chartOptions1 = {
      colors: [
        "#009393",
        "#ff7900"
      ],
      series: [
        {
          name: "Hommes",
          data: this.hommes
        },
        {
          name: "Femmes",
          data: this.femmes
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
          columnWidth: "50px",
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
          this.categorie
      },
      legend: {
        show: false,
      },
      fill: {
        opacity: 4,
      },
    };
    return this.chartOptions1;
  },
  )
}

}

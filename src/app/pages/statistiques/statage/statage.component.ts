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
  selector: 'app-statage',
  templateUrl: './statage.component.html',
  styleUrls: ['./statage.component.scss']
})
export class StatageComponent implements OnInit {

  
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
  homme; 
  femme;
  total;
  show = 1;
  color: any;
  public datas: any;
  public diagrammes: any;
  dataStatEffectifGenre: any;
  age;
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
    this.dateSelectionner(this.societe, this.annee);
    
  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  exportCsv(societe, annee): void {
    if(annee == undefined || annee == "") {
      annee = new Date().getFullYear();
    }
    if(societe == undefined || societe == "" || societe == null) {
      societe = 1;
    }
    this.dateSelectionner(societe, annee);
    this.otherService.statInterAge(societe, annee).subscribe((data: any) => {
      this.dataStatEffectifGenre =  data.data;
      this.extractionService.exportToCsv(
        this.dataStatEffectifGenre, 
        'ExtractionStatCategoreDirection' + '-' + this.date.getFullYear() + '-' + this.date.getMonth() + '-' + this.date.getDay() + '-' + this.date.getHours()+ '-' + this.date.getMinutes(),
        ['tranche', 'homme', 'femme']
      );
    })
  }

  exportStatInterimaireByYear() {
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
  //stats interimaire par annee
  dateSelectionner(societe, annee){
    if(annee == undefined || annee == "") {
      annee = null;
    }
    if(societe == undefined || societe == null || societe == "") {
      societe = 1;
    }
    this.otherService.statInterAge(societe, annee).subscribe(
      data => {
        this.dataYear = data;
        this.dataStatEffectifAnnee = this.dataYear.data;
          this.donneeAbscisse = this.dataStatEffectifAnnee.map(valueOfDirection => valueOfDirection.tranche);
          this.homme = this.dataStatEffectifAnnee.map(valueOfHomme => valueOfHomme.homme);
          this.femme = this.dataStatEffectifAnnee.map(valueOfFemme => valueOfFemme.femme);
 
        this.axex = this.donneeAbscisse;
        
        this.chartOptions1 = {
          colors: [
            "#ff7900",
            "#009393",
          ],
          series: [
            {
              name: "Hommes",
              data: this.homme
            },
            {
              name: "Femmes",
              data: this.femme
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
        return this.chartOptions1;
    }
    )
  }
}

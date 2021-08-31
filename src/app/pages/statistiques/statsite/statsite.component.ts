import { Component, OnInit, HostListener } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexPlotOptions, ApexResponsive, ApexXAxis, ApexYAxis, ApexLegend, ApexFill, ChartComponent } from 'ng-apexcharts';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
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
  selector: 'app-statsite',
  templateUrl: './statsite.component.html',
  styleUrls: ['./statsite.component.scss']
})
export class StatsiteComponent implements OnInit {

  
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
  annee = null;
  annee1 = null;
  societe1 = 1;
  dataStatEffectifAnnee: any;
  dataStatEffectifSociete;
  dataStatistique;
  dataSociete;
  dataInterimByAgence: any;
  chart: ChartComponent;
  public chartOptions1: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;
  successMsg: any;
  errorMsg: any;
  dataInter: any;
  site: any;
  codeSite: any;
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
    this.dateSelectionner(this.annee, this.societe);
    
  }

  
  exportStatInterimaireByYear(annee, societe) {
    if(annee == undefined || annee == "") {
      annee = null;
    }
    if(societe == undefined || societe == "") {
      societe = 1;
    }
    this.otherService.extractionStatSite(annee, societe).subscribe(
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
  dateSelectionner(annee, societe){
    if(annee == undefined || annee == "") {
      annee = null;
    }
    if(societe == undefined || societe == "") {
      societe = 1;
    }
    this.otherService.statSiteByYear(annee, societe).subscribe(
      data => {
        this.dataYear = data;
        this.dataStatEffectifAnnee = this.dataYear.data;
          this.donneeAbscisse = this.dataStatEffectifAnnee.map(valueOfDirection => valueOfDirection.codeSite);
          this.nouveau = this.dataStatEffectifAnnee.map(valueOfNouveau => valueOfNouveau.homme);
          this.fini = this.dataStatEffectifAnnee.map(valueOfFini => valueOfFini.femme);
          this.total = this.dataStatEffectifAnnee.map(valueOfTotal => valueOfTotal.total);
          this.axex = this.donneeAbscisse;
          this.site = this.dataStatEffectifAnnee.site;
          this.codeSite = this.dataStatEffectifAnnee.codeSite;
        this.chartOptions1 = {
          colors: [
            "#ff7900",
            "#009393",
            "#000000",
          ],
          series: [
            {
              name: "Femmes",
              data: this.fini
            },
            {
              name: "Hommes",
              data: this.nouveau
            },
            {
              name: "Total",
              data: this.total
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


  exportCsv(annee, societe): void {
    if(annee == undefined || annee == "") {
      annee = null;
    }
    if(societe == undefined || societe == "") {
      societe = 1;
    }
    this.dateSelectionner(annee, societe);
    this.otherService.statSiteByYear(annee, societe).subscribe((data: any) => {
      this.dataInter =  data.data;
      this.extractionService.exportToCsv(
        this.dataInter, 
        'ExtractionStatSite' + '-' + this.date.getFullYear() + '-' + this.date.getMonth() + '-' + this.date.getDay() + '-' + this.date.getHours()+ '-' + this.date.getMinutes(),
        ['site', 'homme', 'femme', 'total']
      );
    })
  }

}

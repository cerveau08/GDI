import { DataService } from 'src/app/service/data.service';
import { QueryBindingType } from '@angular/compiler/src/core';
import { OthersService } from 'src/app/services/others.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexPlotOptions, ApexResponsive, ApexXAxis, ApexYAxis, ApexLegend, ApexFill, ChartComponent } from 'ng-apexcharts';
import { ErrormodalService } from 'src/app/_errormodals';

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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mois = [
    {libelle: "Jan",},
    {libelle: "Fev",},
    {libelle: "Mar",},
    {libelle: "Avr",},
    {libelle: "Mai",},
    {libelle: "Jui",},
    {libelle: "Jul",},
    {libelle: "Aou",},
    {libelle: "Sep",},
    {libelle: "Oct",},
    {libelle: "Nov",},
    {libelle: "Dec",},
  ];
  dataInterFin;
  statInterimByAgnece;
  statInterAgence;
  prenom;
  manager;
  lastnotif;
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
  public nombre = 39;
  public left: any;
  scrHeight:any;
  scrWidth:any;
  user: any;
  showHome = true;
  id=1;
  errorMsg: any;
  id_societe= 1;
  date = new Date();
  societe = 1;
  dataSociete;
  data: any;
  pourcentFemme;
  pourcentFemmecercle;
  hommes: any;
  femmes: any;
  homme: any;
  femme: any;
  totalCercle: any;
  dataGenre;
  dataStatEffectifGenre: any;
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
  }

  constructor(private dataService: DataService ,
    private errormodalService: ErrormodalService,
    private otherService: OthersService) {
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
        width: 350,
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
          //endingShape: "rounded",
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
    this.prenom = localStorage.getItem('prenom');
      this.otherService.getInter().subscribe(
        data => {
        this.dataInterFin = data.data;
        console.log(data);
        }, error=> {
          this.errorMsg = error;
          this.errormodalService.open('error-modal-1');
          console.log(error)
        }
      );
      this.otherService.getLastNotification().subscribe(
        data => {
          if(data.data[0]){
            this.lastnotif =data.data[0].description;
          }else{
            this.lastnotif ="Aucune notification "

          }
        console.log("RRRRRRRRRRRRRRRRRRRRRR",data);
        }
      );
      this.otherService.getAllSociete().subscribe(
        data => {
          this.dataSociete = data["data"];
          console.log(data);
        }
      );
      
      this.genrePourcentage(String(this.id_societe));
    }
  
  //premier
  
    genrePourcentage(id_societe){
      const getDownloadProgress = () => {
        this.otherService.statInterPourcent(id_societe).subscribe(
          data => {
            console.log(data);
            this.data = data;
            this.dataStatEffectifGenre = this.data.data[0];
            this.femme= this.dataStatEffectifGenre.femme;
            this.homme= this.dataStatEffectifGenre.homme;
            this.totalCercle= this.dataStatEffectifGenre.total;
            this.pourcentFemme = this.dataStatEffectifGenre.femmePourcent;
            this.pourcentFemmecercle = this.pourcentFemme - 2;
            console.log(this.dataStatEffectifGenre)
            clearInterval(this.intervalId);
          }
        )
      };
      this.intervalId = setInterval(getDownloadProgress, 1000);
    }
    ngOnDestroy() {
      console.log(this.intervalId);
      
      clearInterval(this.intervalId);
    
    
    this.user = localStorage.getItem('user');
    if(this.user == 'INT') {
      this.showHome = false;
    } else {
      this.showHome = true;
    }

    const getDownloadProgress = () => {
      console.log("getDownload", this);
      
        this.progress = 20;
        console.log("inside if", this.progress);
        this.progress = this.progress - 2;
      
        clearInterval(this.intervalId);
     
    };
    this.intervalId = setInterval(getDownloadProgress, 1000);
  }
  
  getColor(p) {
    if(p.isAdmissible == true) {
      this.color = "#6dd400";
    } else if (p.isAdmissible == false) {
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
  moisSelectionner(mois) {
    console.log(mois);
    
  }
  openErrorModal(id: string) {
    this.errormodalService.open(id);
  }

  closeErrorModal(id: string) {
    this.errormodalService.close(id);
  }
}

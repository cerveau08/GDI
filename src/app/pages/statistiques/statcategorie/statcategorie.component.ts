import { Component, OnInit, HostListener } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexPlotOptions, ApexResponsive, ApexXAxis, ApexYAxis, ApexLegend, ApexFill, ChartComponent } from 'ng-apexcharts';
import { OthersService } from 'src/app/services/others.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ChartOptions } from '../statistiques.component';

@Component({
  selector: 'app-statcategorie',
  templateUrl: './statcategorie.component.html',
  styleUrls: ['./statcategorie.component.scss']
})
export class StatcategorieComponent implements OnInit {

  borderfilter1;
  colorfilter1;
  axex;
  mois;
  directs: any;
  categorie: any;
  effectif;
  dataSociete;
  data: any;
  pourcentFemme;
  pourcentFemmecercle;
  hommes: any;
  femmes: any;
  homme: any;
  femme: any;
  annee= new Date().getFullYear();
  totalCercle: any;
  dataGenre;
  nouveau; 
  fini;
  total;
  id_societe= 1;
  date = new Date();
  societe = 1;
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
  dataStatEffectifGenre: any;
  dataStatistique;
  dataInterimByAgence: any;
  chart: ChartComponent;
  public chartOptions3: Partial<ChartOptions>;
  constructor(private otherService: OthersService) {
    this.getScreenSize();
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
        //console.log(this.scrHeight, this.scrWidth);
  }

  ngOnInit() {
    this.otherService.getAllSociete().subscribe(
      data => {
        this.dataSociete = data["data"];
        console.log(data);
      }
    );
    
   // this.genrePourcentage(String(this.id_societe));
    this.societeSelectionner(String(this.societe), this.annee);
  }

  ngOnDestroy() {
    console.log(this.intervalId);
    
    clearInterval(this.intervalId);
  }

  //deuxieme
  societeSelectionner(valueSociete, valueAnnee){ 
    this.otherService.statInterCategorie(valueSociete, valueAnnee).subscribe(
      data => {
        console.log(data);
        this.data = data;
        this.dataStatEffectifGenre = this.data.data;
    this.directs = this.dataStatEffectifGenre;
    this.categorie = this.dataStatEffectifGenre.map(valueOfDirection => valueOfDirection.categorie.libelle);
    this.hommes = this.dataStatEffectifGenre.map(valueOfHomme => valueOfHomme.hommes);
    this.femmes = this.dataStatEffectifGenre.map(valueOfFemmes => valueOfFemmes.femmes);
    
    this.chartOptions3 = {
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
    return this.chartOptions3;
  },
  )
}

}

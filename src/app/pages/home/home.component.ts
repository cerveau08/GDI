import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/service/data.service';
import { QueryBindingType } from '@angular/compiler/src/core';
import { OthersService } from 'src/app/services/others.service';
import { NavigationExtras, Router } from '@angular/router';
import { Component, HostListener, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexPlotOptions, ApexResponsive, ApexXAxis, ApexYAxis, ApexLegend, ApexFill, ChartComponent } from 'ng-apexcharts';
import { ErrormodalService } from 'src/app/modal/_errormodals';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';

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

  loading = true;
  anneeForm: FormGroup;
  lastTenYear;
  societe = 1;
  date = new Date();
  dates;
  currentDate = new Date().getFullYear();
  dataSociete;
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
  dataYear;
  axex;
  donneeAbscisse;
  data: any;
  annee=null;
  directions: any;
  effectif;
  hommes: any;
  femmes: any;
  nouveau; 
  fini;
  total;
  dataStatEffectifAnnee;
  color: any;
  public datas: any;
  public diagrammes: any;
  jan: any;
  pager: any = {};
  filterterm: string;
  pagedItems: any[];
  progress = 0;
  page = 1;
  itemsPerPage = 10;
  progressBar = document.querySelector(".progress-bar");
  intervalId;
  public restant: any;
  public nombre = 39;
  public left: any;
  scrHeight: any;
  scrWidth: any;
  user: any;
  showHome = true;
  id=1;
  errorMsg: any;
  id_societe = null;
  pourcentFemme;
  pourcentFemmecercle;
  homme: any;
  femme: any;
  totalCercle: any;
  dataGenre;
  dataStatEffectifGenre: any;
  nouveauxRrecrus;
  pmc;
  infoContrat;
  anneeRestant;
  moisRestant;
  jourRestant;
  totalJourRestatnt;
  percentRestantwidth;
  percentRestantposition;
  percentTotal;
  dateFin;
  totalJour;
  present;
  malade;
  conge;
  photo;
  nomManager;
  prenomManager
  posteManager;
  photoManager;
  interimaireInfo;
  managerinfo: any;
  dataEvaluation: any;
  dataAttestation: any;
  noteEvaluation: any;
  nombreObjectif: any;
  dateDebutEvaluation: any;
  dateFinEvaluation: any;
  nbr_jour: any;
  dateCreationAttestation: any;
  statutAttestation: any;
  dateDebutAttestation: any;
  dateFinAttestation: any;
  idEvaluation: any;
  idAttestation: any;
  totalItems: any;
  totalEnAttente: any;
  userInfo: any;
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
  }
  
  public reqUrl = environment.base_url;
  constructor(private errormodalService: ErrormodalService,
    public router: Router,
    private otherService: OthersService,
    private toastr: ToastrService) {
    this.getScreenSize();
    this.otherService.getInter().subscribe(
      data => {
        this.dataInterFin = data.data;
      }
    );

    this.otherService.getNouveauRecrus().subscribe(
      data => {
       this.nouveauxRrecrus = data.data;
      }
    );
  }


  ngOnInit() {
    this.prenom = localStorage.getItem('prenom');
    this.user = localStorage.getItem('user');

    this.userInfo = JSON.parse(localStorage.getItem('currentUser'));
    if(this.user == 'INT') {
      this.showHome = false;
    } else {
      this.showHome = true;
    }
    if(this.user != 'INT') {
      this.otherService.getStatPresence().subscribe(
        data => {
          this.pmc = data.data;
          this.present = this.pmc.present;
          this.malade = this.pmc.malade;
          this.conge = this.pmc.conge;
        }
      );
      this.anneeForm = new FormGroup({
        annee: new FormControl('')
      })
      this.dateSelectionner(this.annee);
      this.genrePourcentage(String(this.id_societe));
    }
    if(this.user == 'INT') {
      this.interimaireInfo = JSON.parse(localStorage.getItem('currentUser'));
      this.otherService.getDetailsManagerById(this.interimaireInfo.manager.id).subscribe( 
        result => {
          this.data = result;
          this.managerinfo = this.data.data.detail;
          this.prenomManager = this.managerinfo.prenom;
          this.nomManager = this.managerinfo.nom;
          this.photoManager = this.managerinfo.photo;
          this.posteManager = this.managerinfo.fonction;
        }
      )
      this.otherService.statContratInter(this.interimaireInfo.interimaire.id, null).subscribe(
        data => {
          this.infoContrat = data.data;
          this.anneeRestant = this.infoContrat.dureeContratRestant.annees;
          this.moisRestant = this.infoContrat.dureeContratRestant.mois;
          this.jourRestant = this.infoContrat.dureeContratRestant.jours;
          this.totalJour = this.infoContrat.dureeTotalContratEnJours;
          this.totalJourRestatnt = this.infoContrat.dureeTotalContratRestantJours;
          this.dateFin = this.infoContrat.dateFinContrat;
          this.percentRestantwidth = 100 - (this.totalJourRestatnt / this.totalJour) * 100 +'%';
          this.percentRestantposition = 100 - (this.totalJourRestatnt / this.totalJour) * 100 - 1 +'%';
        }
      );
      this.otherService.lastEvaluationInt(this.interimaireInfo.interimaire.id).subscribe(
        data => {
          this.dataEvaluation = data.data;
          this.noteEvaluation = Math.round(this.dataEvaluation.note);
          this.idEvaluation = this.dataEvaluation.id;
          this.dateDebutEvaluation = this.dataEvaluation.dateDebut;
          this.dateFinEvaluation = this.dataEvaluation.dateFin;
          this.nombreObjectif = this.dataEvaluation.notation.length;
        }
      );
      this.otherService.lastAttestationInt(this.interimaireInfo.interimaire.id).subscribe(
        data => {
          this.loading = false;
          this.dataAttestation = data.data;
          this.idAttestation = this.dataAttestation.id;
          this.nbr_jour = this.dataAttestation.jours_absence;
          this.dateCreationAttestation = this.dataAttestation.dateCreation;
          this.statutAttestation = this.dataAttestation.statut_attestation;
          this.dateDebutAttestation = this.dataAttestation.dateDebut;
          this.dateFinAttestation = this.dataAttestation.dateFin;
        }
      );
      this.otherService.getListedesDemande(this.page, this.itemsPerPage, null, 0).subscribe((data: any) => {
        this.totalEnAttente = data.total;
      })
    }
      
      this.otherService.getInter().subscribe(
        data => {
        this.dataInterFin = data.data;
        }
      );

     
      this.getTenLastYear();
      this.otherService.getAllSociete().subscribe(
        data => {
          this.dataSociete = data["data"];
        }
      );

         
      this.otherService.getLastNotification().subscribe(
        data => {
          if(data.data){
            this.lastnotif =data.data[0].description;
          }else{
            this.lastnotif ="Aucune notification "
          }
        }
      );
      this.otherService.getAllSociete().subscribe(
        data => {
          this.dataSociete = data["data"];
        }
      );
  }



    openDetails(data) {
      this.router.navigate(['/accueil/detailinter'], {
        queryParams: {
          interimaire: JSON.stringify(data)
        }
      })
    }
    
    openDetailAttestation(data) {
      this.router.navigate(['/accueil/deatilattestation'], {
        queryParams: {
          attestation: JSON.stringify(data)
        }
      });
    }

    openDetailEvaluation(data) {
      this.router.navigate(['/accueil/detailevaluation'], {
        queryParams: {
          evaluation: JSON.stringify(data),
          interimaire: JSON.stringify(this.interimaireInfo.interimaire.id)
        }
      });
    }
  
  //premier
  
    genrePourcentage(id_societe){
      const getDownloadProgress = () => {
        this.otherService.statInterPourcent(id_societe).subscribe(
          data => {
            this.data = data;
            console.log(data);
            this.dataStatEffectifGenre = this.data.data[0];
            this.femme= this.dataStatEffectifGenre.femme;
            this.homme= this.dataStatEffectifGenre.homme;
            this.totalCercle= this.dataStatEffectifGenre.total;
            this.pourcentFemme = this.dataStatEffectifGenre.femmePourcent;
            this.pourcentFemmecercle = this.pourcentFemme - 2;
            clearInterval(this.intervalId);
          }
        )
      };
      this.intervalId = setInterval(getDownloadProgress, 1000);
    }
    

  // onChanges(): void {
  //   this.anneeForm.get('annee').valueChanges.subscribe(val => {
  //     if (val) {
  //       this.dateSelectionner(val);
  //     }
  //   });
  // }

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

  dateSelectionner(value){
    if(value == "null"){
      value = null;
    }
    this.otherService.statInterByYear(this.annee, this.societe).subscribe(
      data => {
        this.loading = false;
        this.dataYear = data;
        this.dataStatEffectifAnnee = this.dataYear.data;
        if(value == null) {
          this.donneeAbscisse = this.dataStatEffectifAnnee.map(valueOfDirection => valueOfDirection.annee);
          this.nouveau = this.dataStatEffectifAnnee.map(valueOfNouveau => valueOfNouveau.nouveaux);
          this.fini = this.dataStatEffectifAnnee.map(valueOfFini => valueOfFini.fin);
          this.total = this.dataStatEffectifAnnee.map(valueOfTotal => valueOfTotal.total);
        } else {
          this.donneeAbscisse = this.dataStatEffectifAnnee.map(valueOfDirection => valueOfDirection.mois);
          this.nouveau = this.dataStatEffectifAnnee.map(valueOfNouveau => valueOfNouveau.nouveaux);
          this.fini = this.dataStatEffectifAnnee.map(valueOfFini => valueOfFini.fin);
          this.total = this.dataStatEffectifAnnee.map(valueOfTotal => valueOfTotal.total);
        }
        this.axex = this.donneeAbscisse;
        
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
            height: 220,
            width: 388,
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
  openErrorModal(id: string) {
    this.errormodalService.open(id);
  }

  closeErrorModal(id: string) {
    this.errormodalService.close(id);
  }
}

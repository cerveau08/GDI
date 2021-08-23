import { Component, OnInit, HostListener } from '@angular/core';
import { NgxFileSaverService } from '@clemox/ngx-file-saver';
import { DataService } from 'src/app/service/data.service';
import { ModalService } from 'src/app/_modal/modal.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ErrormodalService } from 'src/app/_errormodals';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { OthersService } from 'src/app/services/others.service';

@Component({
  selector: 'app-listeattestation',
  templateUrl: './listeattestation.component.html',
  styleUrls: ['./listeattestation.component.scss']
})
export class ListeattestationComponent implements OnInit {

  annee;
  mois;
  checkedList:any;
  selectedAll: any;
  filterForm: FormGroup;
  result;
  data: any;
  reference;
  currentDate = new Date().getFullYear();
  successMsg;
  filterterm: string;
  dataAttest: any;
  page = 1;
  demandeForm: FormGroup;
  itemsPerPage = 8;
  lastTenYear;
  totalItems : any;
  user;
  public reqUrl = environment.base_url;
  errorMsg: any;
  ListeMois = [
    {
      id: 1,
      libelle: "janvier",
    },
    {
      id: 2,
      libelle: "fevrier"
    },
    {
      id: 3,
      libelle: "mars",
    },
    {
      id: 4,
      libelle: "avril"
    },{
      id: 5,
      libelle: "mai",
    },
    {
      id: 6,
      libelle: "juin",
    },
    {
      id: 7,
      libelle: "juillet",
    },
    {
      id: 8,
      libelle: "aout",
    },
    {
      id: 9,
      libelle: "septembre",
    },
    {
      id: 10,
      libelle: "octobre",
    },
    {
      id: 11,
      libelle: "novembre",
    },
    {
      id: 12,
      libelle: "decembre",
    },
  ];
  scrHeight:any;
  scrWidth:any;
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
        console.log(this.scrHeight, this.scrWidth);
  }
  constructor(private dataService: DataService,
              private http: HttpClient,
              private errormodalService: ErrormodalService,
              private otherService: OthersService) {
                this.getScreenSize()
              }

  ngOnInit() {

    // this.demandeForm = new FormGroup({
    //   reference: new FormControl ('')
    // });

    this.lastTenYear = [
      {
        annee: this.currentDate
      },{
        annee: this.currentDate - 1
      },{
        annee: this.currentDate - 2
      }
    ];

    this.user = localStorage.getItem('user');
    this.gty(this.page);
    this.filterForm = new FormGroup({
      mois: new FormControl(''),
      annee: new FormControl(''),
      reference: new FormControl ('')
    });
  }


  onSubmit() {
    const info = new FormData();
    this.demandeForm.value.prenom = ""?info.append("prenom", this.demandeForm.value.prenom):'';
    this.demandeForm.value.nom = ""?info.append("nom", this.demandeForm.value.nom):'';
    this.demandeForm.value.email != ""?info.append("email", this.demandeForm.value.email):'';
    this.demandeForm.value.matricule != ""?info.append("matricule", this.demandeForm.value.matricule):'';
    this.demandeForm.value.direction != ""?info.append("direction", this.demandeForm.value.direction):'';
    this.demandeForm.value.service != ""?info.append("service", this.demandeForm.value.service):'';
    this.demandeForm.value.agence != ""?info.append("agence", this.demandeForm.value.agence):'';
    this.demandeForm.value.departement != ""?info.append("departement", this.demandeForm.value.departement):'';
    this.demandeForm.value.annee != ""?info.append("annee", this.demandeForm.value.annee):'';
    this.demandeForm.value.poste != ""?info.append("poste", this.demandeForm.value.poste):'';
  }
    

  gty(page: any){

    // if (this.filterForm.value.reference == undefined) {
    //   this.filterForm.patchValue({reference: ''});
    // }
    // if(this.filterForm.value.mois) {
    //   this.mois = this.filterForm.value.mois;
    // }
    // if(this.filterForm.value.annee) {
    //   this.annee = this.filterForm.value.annee;
    // }
    // if(this.filterForm.value.reference) {
    //   this.reference = this.filterForm.value.reference;
    // }

    this.http.get(this.reqUrl + `/listeAttestation?page=${page}&limit=${this.itemsPerPage}`).subscribe(
      (data: any) => {
        this.dataAttest =  data.data[0];
        this.totalItems = data.total;
        console.log(this.dataAttest);
      }
    )
  }
  
  openErrorModal(id: string) {
    this.errormodalService.open(id);
  }

  closeErrorModal(id: string) {
    this.errormodalService.close(id);
  }

  extraireAttestation() {
    if (this.filterForm.value.annee) {
      this.filterForm.patchValue({annee: this.filterForm.value.annee.getFullYear()});
    } else {
      this.filterForm.patchValue({annee: ''});
    }
    console.log(this.filterForm.value);
    this.otherService.extraireAttestation(this.filterForm.value).subscribe(
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
}

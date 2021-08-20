import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { PaginationService } from 'src/app/service/pagination.service';
import { OthersService } from 'src/app/services/others.service';
import { ModalService } from 'src/app/_modal';
import { environment } from 'src/environments/environment';
import { ErrormodalService } from 'src/app/_errormodals';

@Component({
  selector: 'app-interfincontrat',
  templateUrl: './interfincontrat.component.html',
  styleUrls: ['./interfincontrat.component.scss']
})
export class InterfincontratComponent implements OnInit {

  public datas: any;
  pager: any = {};
  id;
  filterterm: string;
  public p: any;
  pagedItems: any[];
  date: any;
  dateFin;
  user;
  showupdate;
  dataFinContrat;
  mois: any = [
    'Janvier', 
    'Février', 
    'Mars', 
    'Avril',
    'Mai',
    'Juin',
    'Juillet', 
    'Aout', 
    'Septembre', 
    'Octobre',
    'Novembre',
    'Décembre',
  ];
  sommes: any = [
    '20.000f', 
    '30.000f', 
    '40.000f', 
    '50.000f',
    '60.000f',
    '70.000f',
    '80.000f', 
  ];
  scrHeight:any;
  scrWidth:any;
  errorMsg: any;
  dataSociete: any;
  dataAgence: any;
  listeFonction: any;
  itemsPerPageAgence: 100;
  pageAgence: 1;
  dataDirection: any;
  data: any;
  successMsg: any;
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
        console.log(this.scrHeight, this.scrWidth);
  }
  filterForm: FormGroup;
  moisSelect
  demandeForm: FormGroup;
  page = 1;
  itemsPerPage = 10;
  public matricule = null;
  public poste = null;
  public agence = null;
  public societe = null;
  public direction = null;
  totalItems : any;
  public reqUrl = environment.base_url;
  constructor(private dataService: DataService,
    private pagerService: PaginationService,
    private modalService: ModalService,
    private otherService: OthersService,
    public datepipe: DatePipe,
    private errormodalService: ErrormodalService,
    public router: Router,
    private http: HttpClient
    ) {  
      this.getScreenSize();
    }

  ngOnInit() {
    this.user = localStorage.getItem('user');
    if(this.user == 'drh') {
      this.showupdate = true;
    } else {
      this.showupdate = false;
    }

    this.demandeForm = new FormGroup({
      moi: new FormControl (''),
      somme: new FormControl('')
    });
    
    this.filterForm = new FormGroup({
      type: new FormControl(''),
      direction: new FormControl(''),
      agence: new FormControl(''),
      poste: new FormControl(''),
      matricule: new FormControl(''),
    });

    this.gty(this.page);

    this.otherService.getAllSociete().subscribe(
      data => {
        this.dataSociete = data["data"];
        console.log(data);
      },error=> {
        this.errorMsg = error;
        this.errormodalService.open('error-modal-1');
        console.log(error)
      }
    );

    this.otherService.getFonctions().subscribe(data => this.listeFonction = data.data);

    this.http.get(this.reqUrl + `/listeAgence?page=1&limit=100`).subscribe((data: any) => {
      this.dataAgence =  data.data;
      console.log(this.dataAgence);
    }, error=> {
      this.errorMsg = error;
      this.errormodalService.open('error-modal-1');
      console.log(error)
    })
  }

  public saveProfession(e): void {
    let libelle = e.target.value;
    let list = this.listeFonction.filter(x => x.libelle === libelle)[0];
    console.log(list.libelle);
    this.filterForm.patchValue({poste: list.libelle});
  }

  directionsListe(value) {
    console.log(value);
    this.otherService.getAllDirection(value).subscribe(
      data => {
        this.dataDirection = data['data'];
       console.log(data);
       }
    ); 
  }

  gty(page: any){
    if (this.filterForm.value.poste == undefined) {
      this.filterForm.patchValue({poste: ''});
    }
    if(this.filterForm.value.poste) {
      this.poste = this.filterForm.value.poste;
    }
    if(this.filterForm.value.matricule) {
      this.matricule = this.filterForm.value.matricule;
    }
    if(this.filterForm.value.agence) {
      this.agence = this.filterForm.value.agence;
    }
    if(this.filterForm.value.societe) {
      this.societe = this.filterForm.value.societe;
    }
    if(this.filterForm.value.direction) {
      this.direction = this.filterForm.value.direction;
    }
    this.otherService.getInterimaireFinContrat(page, this.itemsPerPage, this.matricule, this.poste, this.agence, this.societe, this.direction).subscribe((data: any) => {
      this.dataFinContrat =  data.data;
      this.totalItems = data.total;
      console.log(data);
    }, error=> {
      this.errorMsg = error;
      this.errormodalService.open('error-modal-1');
      console.log(error)
    })
  }
  openDetail(data) {
    this.router.navigate(['/accueil/detailinter'], {
      queryParams: {
        user: JSON.stringify(data)
      }
    })
  }

  extraireInter() {
    console.log(this.filterForm.value);
    if (this.filterForm.value.poste == undefined) {
      this.filterForm.patchValue({poste: ''});
    }
    console.log(this.filterForm.value);
    this.otherService.extraireInterimaire(this.filterForm.value).subscribe(
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

  onSubmit(id: string) {
    const demande =
    {
      moi: this.demandeForm.value.moi,
      somme: this.demandeForm.value.somme
    } 
    console.log(demande);
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  getcolor1(p) {
    let color = "#10a900"
  
    if(p.admissible==false) {
      color = "#ff0000"
    } else {
      color = "#10a900"
    }  
    return color; 
  } 

  openErrorModal(id: string) {
    this.errormodalService.open(id);
  }

  closeErrorModal(id: string) {
    this.errormodalService.close(id);
  }
}

import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { OthersService } from 'src/app/services/others.service';
import { ErrormodalService } from 'src/app/modal/_errormodals';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-listeperiodeobjectif',
  templateUrl: './listeperiodeobjectif.component.html',
  styleUrls: ['./listeperiodeobjectif.component.scss']
})
export class ListeperiodeobjectifComponent implements OnInit {

  
  public datas: any;
  pager: any = {};
  id;
  isChecked = false; 
  filterterm: string;
  filterForm: FormGroup;
  public p: any;
  pagedItems: any[];
  date: any;
  admissible = null;
  dateFin;
  user;
  showupdate;
  dataInterArchiv;
  societe = null;
  scrHeight:any;
  scrWidth:any;
  errorMsg: any;
  public prenom = null;
  public nom = null;
  public email = null;
  public agence = null;
  listeAdmissible: {}[];
  dataSociete: any;
  item: any;
  data: Object;
  periodeobjectif: any;
  isEvaluated = null;
  moisSelect
  demandeForm: FormGroup;
  page = 1;
  donneesSearch;
  itemsPerPage = 10;
  successRequest
  totalItems : any;
  public reqUrl = environment.base_url;
  ListeStatut: {}[];
  interimaire: any;
  role: string;
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
        console.log(this.scrHeight, this.scrWidth);
  }
  constructor(private otherService: OthersService,
    private errormodalService: ErrormodalService,
    public datepipe: DatePipe,
    private activeroute: ActivatedRoute,
    public router: Router,
    private location: Location,
    ) {  
      this.getScreenSize();
      this.activeroute.queryParams.subscribe(params => {
        this.item = JSON.parse(params["interimaire"]);
      });
    }

  ngOnInit() {
    this.role = localStorage.getItem('user');
    this.ListeStatut = [
      {
        value: true,
        label: 'Déja évaluée',
      },{
        value: false,
        label: 'pas encore évaluée',
      }
    ]
    if(this.user == 'drh') {
      this.showupdate = true;
    } else {
      this.showupdate = false;
    }

    this.filterForm = new FormGroup({
      isEvaluated: new FormControl('')
    });

    this.otherService.getOneInterById(this.item).subscribe(
      data =>{
        this.interimaire = data;
        this.nom = this.interimaire.data.nom;
        this.prenom = this.interimaire.data.prenom;
      }
    );

    this.gty(this.page);
  }
  
  backClicked() {
    this.location.back();
  }

  gty(page: any){
    if(this.filterForm.value.isEvaluated == undefined || this.filterForm.value.isEvaluated == "") {
      this.isEvaluated = null;
    } else {
      this.isEvaluated = this.filterForm.value.isEvaluated;
    }
    this.otherService.getPeriodeObjectif(page, this.itemsPerPage, this.isEvaluated, this.item).subscribe(
      data => {
        this.data = data
        this.periodeobjectif = this.data["data"];
      }
    );
  }

  openAddObjectif() {
    this.router.navigate(['/accueil/addobjectif/'], {
      queryParams: {
        interimaire: JSON.stringify(this.item),
      }
    })
  }

  openDetailPeriode(data) {
    this.router.navigate(['/accueil/detailperiodeobjectif'], {
      queryParams: {
        periode: JSON.stringify(data),
        interimaire: JSON.stringify(this.item),
      }
    })
  }

  openListeObjectif() {
    this.router.navigate(['/accueil/objectifs'], {
      queryParams: {
        interimaire: JSON.stringify(this.item),
      }
    })
  }

  openModifPeriode(data) {
    this.router.navigate(['/accueil/modifperiodeobjectif'], {
      queryParams: {
        periode: JSON.stringify(data),
        interimaire: JSON.stringify(this.item),
      }
    })
  }
}
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
  data: any;
  periodeobjectif: any;
  isEvaluated = false;
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
        this.role = localStorage.getItem('user');
        if(this.role != 'INT') {
          this.item = JSON.parse(params["interimaire"]);
        } else {
          this.item = JSON.parse(localStorage.getItem('currentUser')).interimaire.id;
        }
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
    this.otherService.getListeEvaluation(this.item, page, this.itemsPerPage, this.isEvaluated).subscribe(
      data => {
        this.data = data
        this.periodeobjectif = this.data.data;
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
    this.router.navigate(['/accueil/periodedetail'], {
      queryParams: {
        periode: JSON.stringify(data),
        interimaire: JSON.stringify(this.item),
      }
    })
  }

  openListeObjectif() {
    this.router.navigate(['/accueil/objectif'], {
      queryParams: {
        interimaire: JSON.stringify(this.item),
      }
    })
  }

  openModifPeriode(data) {
    this.router.navigate(['/accueil/modifdetailperiode'], {
      queryParams: {
        periode: JSON.stringify(data),
        interimaire: JSON.stringify(this.item),
      }
    })
  }
}

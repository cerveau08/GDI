import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { DataService } from 'src/app/service/data.service';
import { PaginationService } from 'src/app/service/pagination.service';
import { ModalService } from 'src/app/modal/_modal';
import { OthersService } from 'src/app/services/others.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ErrormodalService } from 'src/app/modal/_errormodals';

@Component({
  selector: 'app-interarchive',
  templateUrl: './interarchive.component.html',
  styleUrls: ['./interarchive.component.scss']
})
export class InterarchiveComponent implements OnInit {

  public datas: any;
  pager: any = {};
  id;
  filterterm: string;
  filterForm: FormGroup;
  public p: any;
  pagedItems: any[];
  date: any;
  dateFin;
  user;
  showupdate;
  dataInterArchiv;
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
  public prenom = null;
  public nom = null;
  public email = null;
  public agence = null;
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
        console.log(this.scrHeight, this.scrWidth);
  }
  moisSelect
  demandeForm: FormGroup;
  page = 1;
  donneesSearch;
  itemsPerPage = 7;
  successRequest
  totalItems : any;
  public reqUrl = environment.base_url;
  constructor(private dataService: DataService,
    private pagerService: PaginationService,
    private modalService: ModalService,
    private otherService: OthersService,
    private errormodalService: ErrormodalService,
    public datepipe: DatePipe,
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

    this.filterForm = new FormGroup({
      admissible: new FormControl('')
      
    });

    this.demandeForm = new FormGroup({
      moi: new FormControl (''),
      somme: new FormControl('')
    });
    //this.datas = this.dataService.getData();;

    this.gty(this.page);
  }


  gty(page: any){

    if(this.filterForm.value.mois) {
      this.prenom = this.filterForm.value.prenom;
    }
    

    console.log(this.filterForm.value);

    this.otherService.listArchivedFilter(page, this.itemsPerPage).subscribe((data: any) => {
      this.dataInterArchiv =  data.data;
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

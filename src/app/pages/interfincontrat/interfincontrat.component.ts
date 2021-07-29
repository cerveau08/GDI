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
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
        console.log(this.scrHeight, this.scrWidth);
  }
  moisSelect
  demandeForm: FormGroup;
  page = 1;
  itemsPerPage = 7;
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

    this.gty(this.page);
  }

  gty(page: any){
    this.http.get(this.reqUrl + `/interimFinContrat?page=${page}&limit=${this.itemsPerPage}`).subscribe((data: any) => {
      this.dataFinContrat =  data.data;
      this.totalItems = data.total;
      console.log(data);
      
    })
  }
  openDetail(data) {
    this.router.navigate(['/accueil/detailinter'], {
      queryParams: {
        user: JSON.stringify(data)
      }
    })
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

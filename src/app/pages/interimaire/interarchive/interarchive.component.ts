import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { DataService } from 'src/app/service/data.service';
import { PaginationService } from 'src/app/service/pagination.service';
import { ModalService } from 'src/app/modal/_modal';
import { FormsModule } from '@angular/forms';
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

  loading = false;
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
  itemsPerPage = 10;
  successRequest
  totalItems : any;
  public reqUrl = environment.base_url;
  constructor(private otherService: OthersService,
    private errormodalService: ErrormodalService,
    public datepipe: DatePipe,
    public router: Router,
    ) {  
      this.getScreenSize();
    }

  ngOnInit() {
    this.user = localStorage.getItem('user');
    if(this.user == 'DRH' || this.user == 'RH_GDI') {
      this.showupdate = true;
    } else {
      this.showupdate = false;
    }
    this.otherService.getAllSociete().subscribe(
      data => {
        this.dataSociete = data["data"];
      }
    );
    
    this.listeAdmissible = [
      {
        libelle: 'Admissible',
        value: true
      },
      {
        libelle: 'Non Admissible',
        value: false
      },
    ]

    this.filterForm = new FormGroup({
      admissible: new FormControl(''),
      societe: new FormControl('')
    });

    this.gty(this.page);
  }


  gty(page: any){
    this.loading = true;
    if(this.filterForm.value.admissible == undefined || this.filterForm.value.admissible == "") {
      this.admissible = null;
    } else {
      this.admissible = this.filterForm.value.admissible;
    }
    if(this.filterForm.value.societe == undefined || this.filterForm.value.societe == "") {
      this.societe = null;
    } else {
      this.societe = this.filterForm.value.societe;
    }
    this.otherService.listArchivedFilter(page, this.itemsPerPage, this.admissible, this.societe).subscribe((data: any) => {
      if(data.status == true) {
        this.loading = false;
        this.dataInterArchiv =  data.data;
        this.totalItems = data.total;
      } else {
        this.loading = false;
      }
    })
  }

  openDetail(data) {
    this.router.navigate(['/accueil/detailinter'], {
      queryParams: {
        interimaire: JSON.stringify(data)
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

import { DatePipe } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { PaginationService } from 'src/app/service/pagination.service';
import { OthersService } from 'src/app/services/others.service';
import { ModalService } from 'src/app/_modal';

@Component({
  selector: 'app-interfincontrat',
  templateUrl: './interfincontrat.component.html',
  styleUrls: ['./interfincontrat.component.scss']
})
export class InterfincontratComponent implements OnInit {

  public datas: any;
  pager: any = {};
  id= 1;
  filterterm: string;
  public p: any;
  pagedItems: any[];
  date: any;
  dateFin;
  user;
  showupdate;
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
  constructor(private dataService: DataService,
    private pagerService: PaginationService,
    private modalService: ModalService,
    private otherService: OthersService,
    public datepipe: DatePipe,
    public router: Router
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
    //this.datas = this.dataService.getData();;

    this.otherService.getListInterFinContrat(this.id).subscribe(
      data => {
       this.datas = data.data;
       console.log(data);
      }
    );
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

  getcolor(p) {
    let color = "#ff0000"
    let d = new Date();
    var g1 = new Date(d.getFullYear(), d.getMonth()+1, d.getDate());
    let now = this.datepipe.transform(g1, 'yyyyMMdd');
    let dates = this.datepipe.transform(p.dateFin, 'yyyyMMdd');
    if(now > dates) {
      color = "#ff0000"
    } else {
      color = "#000000"
    }  
    return color; 
  } 
  getcolor1(p) {
    let color = "#ff0000"
    let d = new Date();
    var g1 = new Date(d.getFullYear(), d.getMonth()+1, d.getDate());
    let date = new Date(p.dateFin);
    let now = this.datepipe.transform(g1, 'yyyyMMdd');
    let dates = this.datepipe.transform(date, 'yyyyMMdd');
    if(now > dates) {
      color = "#ff0000"
    } else {
      color = "#10a900"
    }  
    return color; 
  } 
}

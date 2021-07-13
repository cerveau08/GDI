import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { PaginationService } from 'src/app/service/pagination.service';
import { ModalService } from 'src/app/_modal';
import {OthersService} from '../../services/others.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-listermanager',
  templateUrl: './listermanager.component.html',
  styleUrls: ['./listermanager.component.scss']
})
export class ListermanagerComponent implements OnInit {

  public datas: any;
  page = 1;
  passenger: any; 
  itemsPerPage = 7;
  totalItems : any;
  date: any;
  scrHeight:any;
  scrWidth:any;
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
       // console.log(this.scrHeight, this.scrWidth);
  }
  public reqUrl = environment.base_url;
  constructor(private dataService: DataService,
    private pagerService: PaginationService,
    private modalService: ModalService,
    public datepipe: DatePipe,
    public router: Router,
    private otherService: OthersService,
    private http: HttpClient
    ) { 
      this.getScreenSize();
    }

  ngOnInit() {
   // this.datas = this.dataService.getData();
    //this.getManager();
    this.gty(this.page);
  }


gty(page: any){
  this.http.get(this.reqUrl + `/managers/list?page=${page}&limit=${this.itemsPerPage}`).subscribe((data: any) => {
    this.datas =  data.data;
    this.totalItems = data.total;
    console.log(this.datas);
    console.log(this.totalItems);
    
  })
}

  openDetail(data) {
    this.router.navigate(['/accueil/manager'], {
      queryParams: {
        user: JSON.stringify(data.id)
      }
    })
  }

}

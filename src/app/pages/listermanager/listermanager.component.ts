import { DatePipe } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { PaginationService } from 'src/app/service/pagination.service';
import { ModalService } from 'src/app/_modal';
import {OthersService} from '../../services/others.service';

@Component({
  selector: 'app-listermanager',
  templateUrl: './listermanager.component.html',
  styleUrls: ['./listermanager.component.scss']
})
export class ListermanagerComponent implements OnInit {

  public datas: any;
  // pager object
  pager: any = {};
  filterterm: string;
  public p: any;
  // paged items
  pagedItems: any[];
  date: any;
  scrHeight:any;
  scrWidth:any;
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
        console.log(this.scrHeight, this.scrWidth);
  }
  constructor(private dataService: DataService,
    private pagerService: PaginationService,
    private modalService: ModalService,
    public datepipe: DatePipe,
    public router: Router,
    private otherService: OthersService
    ) { 
      this.getScreenSize();
    }

  ngOnInit() {
    this.datas = this.dataService.getData();
    this.getManager();
  }
 
getManager() {
  this.otherService.getListManager().subscribe(
    data => {
      console.log(data);
      this.datas = data.data;
    },
    error => {
      console.log(error);
    }
  );
}

  openDetail(data) {
    this.router.navigate(['/accueil/manager'], {
      queryParams: {
        user: JSON.stringify(data)
      }
    })
  }

}

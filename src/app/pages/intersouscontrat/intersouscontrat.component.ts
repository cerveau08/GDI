import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { PaginationService } from 'src/app/service/pagination.service';
import { ModalService } from 'src/app/_modal';

@Component({
  selector: 'app-intersouscontrat',
  templateUrl: './intersouscontrat.component.html',
  styleUrls: ['./intersouscontrat.component.scss']
})
export class IntersouscontratComponent implements OnInit {

  public datas: any;
  // pager object
  pager: any = {};
  filterterm: string;
  public p: any;
  // paged items
  pagedItems: any[];
  constructor(private dataService: DataService,
    private pagerService: PaginationService,
    private modalService: ModalService,) { }

  ngOnInit() {
    this.datas = this.dataService.getData();
    this.getcolor(this.p);
  }

  getcolor(p) {
  /*  let color = "#000000"
    var q = new Date();
    var m = q.getMonth()-1;
    var d = q.getDay();
    var y = q.getFullYear();

    var today = new Date(d/m/y);
    var date = new Date(p.dateFin);
    console.log(today);
    console.log(date);
    if(today > date) {
      color = "#ff0000"
    } else {
      color = "#000000"
    }
    return color; */
  } 

}

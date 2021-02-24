import { PaginationService } from './../../service/pagination.service';
import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.scss']
})
export class DemandeComponent implements OnInit {

  public datas: any;
  // pager object
  pager: any = {};
  filterterm: string;
  // paged items
  pagedItems: any[];
  constructor(private dataService: DataService,
    private pagerService: PaginationService,) { }

  ngOnInit() {
    this.datas = this.dataService.getData();
  }
}

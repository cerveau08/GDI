import { PaginationService } from './../../service/pagination.service';
import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.scss']
})
export class DemandeComponent implements OnInit {

  public data: any;
  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];
  constructor(private dataService: DataService,
    private pagerService: PaginationService,) { }

  ngOnInit() {
    this.data = this.dataService.getData();
    this.setPage(1);
  }
  
  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.data.length, page);

    // get current page of items
    this.pagedItems = this.data.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}

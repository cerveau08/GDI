import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { PaginationService } from 'src/app/service/pagination.service';

@Component({
  selector: 'app-restauration',
  templateUrl: './restauration.component.html',
  styleUrls: ['./restauration.component.scss']
})
export class RestaurationComponent implements OnInit {

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

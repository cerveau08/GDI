import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-newinter',
  templateUrl: './newinter.component.html',
  styleUrls: ['./newinter.component.scss']
})
export class NewinterComponent implements OnInit {

  public datas: any;
  pager: any = {};
  filterterm: string;
  public p: any;
  pagedItems: any[];
  date: any;
  constructor(private dataService: DataService,
    public datepipe: DatePipe,
    public router: Router
    ) { }

  ngOnInit() {
    this.datas = this.dataService.getData();
  }

  openDetail(data) {
    this.router.navigate(['/accueil/detailinter'], {
      queryParams: {
        user: JSON.stringify(data)
      }
    })
  } 
}

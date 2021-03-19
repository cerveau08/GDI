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
    this.getcolor(this.p);
  }

  openDetail(data) {
    this.router.navigate(['/accueil/detailinter'], {
      queryParams: {
        user: JSON.stringify(data)
      }
    })
  }

  getcolor(p) {
    let color = "#ff0000"
    let d = new Date();
    var g1 = new Date(d.getFullYear(), d.getMonth()+1, d.getDate());
    let date = new Date(p.dateFin);
    let now = this.datepipe.transform(g1, 'yyyyMMdd');
    let dates = this.datepipe.transform(date, 'yyyyMMdd');
    console.log(date);
    console.log(now);
    console.log(dates);
    if(now > dates) {
      color = "#ff0000"
    } else {
      color = "#000000"
    }  
    return color; 
  } 

}

import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  pager: any = {};
  filterterm: string;
  public p: any;
  pagedItems: any[];
  date: any;
  constructor(private dataService: DataService,
    private pagerService: PaginationService,
    private modalService: ModalService,
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
  downloadFile(data: any) {
    const replacer = (key, value) => (value === null ? '' : value); // specify how you want to handle null values here
    const header = Object.keys(data[0]);
    const csv = data.map((row) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(',')
    );
    csv.unshift(header.join(','));
    const csvArray = csv.join('\r\n');
  
    const a = document.createElement('a');
    const blob = new Blob([csvArray], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
  
    a.href = url;
    a.download = 'myFile.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }
}

import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { OthersService } from 'src/app/services/others.service';

@Component({
  selector: 'app-newinter',
  templateUrl: './newinter.component.html',
  styleUrls: ['./newinter.component.scss']
})
export class NewinterComponent implements OnInit {
  dataInterFin;
  public datas: any;
  pager: any = {};
  nouveauxRrecrus;
  filterterm: string;
  public p: any;
  pagedItems: any[];
  date: any;
  constructor(private dataService: DataService,private otherService: OthersService,
    public datepipe: DatePipe,
    public router: Router){

      this.otherService.getInter().subscribe(
        data => {
         this.dataInterFin = data.data;
         console.log(data);
        }
      );

      this.otherService.getNouveauRecrus().subscribe(
        data => {
         this.nouveauxRrecrus = data.data;
         console.log(data);
        }
      );

     }

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

import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  
  datas: any;
  constructor(public router: Router,
    private dataService: DataService) { }

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

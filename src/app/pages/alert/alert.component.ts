import { OthersService } from 'src/app/services/others.service';
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
  showHome = true;
  user;
  alert;
  constructor(public router: Router,
    private otherService: OthersService,
    private dataService: DataService) { }

  ngOnInit() {
    this.user = localStorage.getItem('user');
    if(this.user == 'inter') {
      this.showHome = false;
    } else {
      this.showHome = true;
    }
    this.datas = this.dataService.getData();

    this.otherService.getListeNotification().subscribe(
      data => {
       this.alert = data.data;
       console.log(data);
      }
    );

  }
  
  openDetail(data) {
    this.router.navigate(['/accueil/detailinter'], {
      queryParams: {
        user: JSON.stringify(data)
      }
    })
  }
}

import { OthersService } from 'src/app/services/others.service';
import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


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
  page = 1;
  itemsPerPage = 7;
  totalItems : any;
  public reqUrl = environment.base_url;
  constructor(public router: Router,
    private otherService: OthersService,
    private dataService: DataService,
    private http: HttpClient) { }

  ngOnInit() {
    this.user = localStorage.getItem('user');
    if(this.user == 'inter') {
      this.showHome = false;
    } else {
      this.showHome = true;
    }
    this.gty(this.page)
  }
  gty(page: any){
    this.http.get(this.reqUrl + `/notification/all?page=${page}&limit=${this.itemsPerPage}`).subscribe((data: any) => {
      this.alert =  data.data;
      this.totalItems = data.total;
      console.log(data);
      
    })
  }
  openDetail(data) {
    this.router.navigate(['/accueil/detailinter'], {
      queryParams: {
        user: JSON.stringify(data)
      }
    })
  }
}

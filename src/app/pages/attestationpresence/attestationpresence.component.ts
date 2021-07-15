import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { OthersService } from 'src/app/services/others.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-attestationpresence',
  templateUrl: './attestationpresence.component.html',
  styleUrls: ['./attestationpresence.component.scss']
})
export class AttestationpresenceComponent implements OnInit {

  datas: any;
  filterterm: string;
  dataAttest: any;
  page = 1;
  itemsPerPage = 3;
  totalItems : any;
  public reqUrl = environment.base_url;
  constructor(private dataService: DataService,
              private http: HttpClient,
              private otherService: OthersService) { }

  ngOnInit() {

  this.gty(this.page);
  }
  gty(page: any){
    this.http.get(this.reqUrl + `/listeAttestationByMonth?page=${page}&size=${this.itemsPerPage}`).subscribe((data: any) => {
      this.dataAttest =  data.data;
      this.totalItems = data.total;
      console.log(this.dataAttest);
      console.log(this.totalItems);
      
    })
  }
}

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

  checkedList:any;
  selectedAll: any;
  result;
  datas: any;
  filterterm: string;
  dataAttest: any;
  page = 1;
  itemsPerPage = 10;
  totalItems : any;
  public reqUrl = environment.base_url;
  constructor(private dataService: DataService,
              private http: HttpClient,
              private otherService: OthersService) { }

  ngOnInit() {

  this.gty(this.page);
  }
  gty(page: any){
    this.http.get(this.reqUrl + `/listeAttestationByMonth?page=${page}&size=${this.itemsPerPage}`).subscribe((data: any) => 
      this.dataAttest =  data.data[0])
  }
  selectAll() {
    for (var i = 0; i < this.dataAttest.length; i++) {
      this.dataAttest[i].etat = this.selectedAll;
    }
    this.getCheckedItemList();
  }
  checkIfAllSelected(event) {
    this.selectedAll = this.dataAttest.every(function(item:any) {
      return item.etat == 0;
    })
    this.getCheckedItemList();
  }
  getCheckedItemList() {
    console.log(this.dataAttest);
    this.checkedList = [];
    for (var i = 0; i < this.dataAttest.length; i++) {
      if(this.dataAttest[i].etat) {
        this.checkedList.push(this.dataAttest[i]);
        this.http.post(`${this.reqUrl}/validerAttestation/${this.dataAttest[i].id}`, null).subscribe(
          data => {
            this.result = data;
            console.log(data);
          }
        )
      }
    }
    this.checkedList = this.checkedList;
    console.log(this.checkedList);
  }
}

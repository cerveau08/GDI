import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-attestationpresence',
  templateUrl: './attestationpresence.component.html',
  styleUrls: ['./attestationpresence.component.scss']
})
export class AttestationpresenceComponent implements OnInit {

  datas: any;
  filterterm: string;
  constructor(private dataService: DataService) { }

  ngOnInit() {
     this.datas = this.dataService.getData();
  }

}

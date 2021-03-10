import { DataService } from 'src/app/service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listeragence',
  templateUrl: './listeragence.component.html',
  styleUrls: ['./listeragence.component.scss']
})
export class ListeragenceComponent implements OnInit {

  datas: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.datas = this.dataService.getData();
  }

}

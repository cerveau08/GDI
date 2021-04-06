import { DataService } from 'src/app/service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.scss']
})
export class ParametreComponent implements OnInit {
 
  datas: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.datas = this.dataService.getData();
  }

}

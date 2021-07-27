import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.scss']
})
export class ListuserComponent implements OnInit {
  page = 1;
  itemsPerPage = 7;
  totalItems : any;
  filterterm
  public reqUrl = environment.base_url;
  constructor() { }

  ngOnInit() {
  }

}

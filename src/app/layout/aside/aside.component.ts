import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  public data; any;
  constructor(private dataService: DataService) { }


  ngOnInit() {
    this.data = this .dataService.getEvents();
  }
  
}

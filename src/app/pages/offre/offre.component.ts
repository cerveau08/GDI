import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.scss']
})
export class OffreComponent implements OnInit {

  data: any;
  constructor(public router: Router,
    private dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.getData();
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public restant: any;
  public nombre = 99;
  public left: any;
  constructor() { }

  ngOnInit() {
  }
  
  getwidth() {
    this.restant = this.nombre + "%";
    return this.restant;
  }
  getposition() {
    let left1 = this.nombre - 2;
    this.left = left1 + "%";
    return this.left;
  }
}

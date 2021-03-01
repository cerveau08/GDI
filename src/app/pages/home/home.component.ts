import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public restant: any;
  public nombre = 89;
  public left: any;

  // Declare height and width variables
scrHeight:any;
scrWidth:any;

@HostListener('window:resize', ['$event'])
getScreenSize(event?) {
      this.scrHeight = window.innerHeight;
      this.scrWidth = window.innerWidth;
      console.log(this.scrHeight, this.scrWidth);
}
  constructor() {
    this.getScreenSize();
  }

  ngOnInit() {
  }
  
  getwidth() {
    this.restant = this.nombre + "%";
    return this.restant;
  }
  getposition() {
    let left1 = this.nombre - 1;
    this.left = left1 + "%";
    return this.left;
  }
}

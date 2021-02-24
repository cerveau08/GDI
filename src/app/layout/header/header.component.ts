import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public click: any;

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
  
  updown(item) {
      if (!this.click) {
        this.click = 1;
        return this.click;
      } else if (this.click = 1) {
        this.click = null;
        return this.click;
      }
  }
}

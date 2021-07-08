import { Component, HostListener, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService } from 'src/app/service/data.service';
import { PaginationService } from 'src/app/service/pagination.service';
;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  selected = 0;
  selected1 = 0;
  public click: any;
  public click1: any;
  public click2: any;
  public menus: any;
  scrHeight:any;
  scrWidth:any;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
  }
  constructor(
    private paginationService: PaginationService
  ) {
    this.getScreenSize(); 
    this.menus = this.paginationService.getMenu();
  }

  ngOnInit() {
  }

  getMargin(event) {
    let margin = 10;
    if (event.id == 1) {
      margin = 30;
    } else if (event.id == 8) {
      margin = 50;
    } else  {
      margin = 1;
    } 
    return margin;
  }

  getColor(event) {
    let color = "#ff7900";
    if (event.liste) {
      color = "white";
    }  else  {
      color = "#ff7900";
    } 
    return color;
  }
}


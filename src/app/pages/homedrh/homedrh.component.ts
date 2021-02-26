import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { PaginationService } from 'src/app/service/pagination.service';

@Component({
  selector: 'app-homedrh',
  templateUrl: './homedrh.component.html',
  styleUrls: ['./homedrh.component.scss']
})
export class HomedrhComponent implements OnInit {

  color: any;
  public datas: any;
  // pager object
  pager: any = {};
  filterterm: string;
  // paged items
  pagedItems: any[];
  progress = 0;
  constructor(private dataService: DataService,
    private pagerService: PaginationService,) { }

  progressBar = document.querySelector(".progress-bar");
  intervalId;
  ngOnInit() {
    this.datas = this.dataService.getData();
    const getDownloadProgress = () => {
      console.log("getDownload", this);
      if (this.progress <= 99) {
        this.progress = 20;
        console.log("inside if", this.progress);
        this.progress = this.progress - 2;
      } else {
        clearInterval(this.intervalId);
      }
    };
    this.intervalId = setInterval(getDownloadProgress, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  getColor(p) {
    if(p.statut == "oui") {
      this.color = "#6dd400";
    } else if (p.statut == "non") {
      this.color = "#f03737";
    }
    return this.color;
  }
}

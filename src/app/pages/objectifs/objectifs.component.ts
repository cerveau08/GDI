import { OthersService } from 'src/app/services/others.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-objectifs',
  templateUrl: './objectifs.component.html',
  styleUrls: ['./objectifs.component.scss']
})
export class ObjectifsComponent implements OnInit {

  objectif;
  item;
  data;
  constructor(private otherService: OthersService,
    private activeroute: ActivatedRoute,) {
    this.activeroute.queryParams.subscribe(params => {
      this.item = JSON.parse(params["interimaire"]);
      console.log(this.item);
    });
  }

  ngOnInit() {
    this.otherService.getListeObjectif(this.item).subscribe(
      data => {
        this.data = data
        this.objectif = this.data["data"];
        console.log(data);
        
      }
    )
  }

}

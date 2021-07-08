import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OthersService } from 'src/app/services/others.service';

@Component({
  selector: 'app-detailmanager',
  templateUrl: './detailmanager.component.html',
  styleUrls: ['./detailmanager.component.scss']
})
export class DetailmanagerComponent implements OnInit {
  item: any;
  dataManager;
  user;
  showupdate;
  constructor(private activeroute: ActivatedRoute,
              private otherService: OthersService) { 
    this.activeroute.queryParams.subscribe(params => {
      this.item = JSON.parse(params["user"]);
      console.log(this.item);
    })
  }

  ngOnInit() {
    this.user = localStorage.getItem('user');
    if(this.user == 'agence' || this.user == 'drh') {
      this.showupdate = true;
    } else {
      this.showupdate = false;
    }

    this.otherService.getOneAgenceById(this.item).subscribe(
      data =>{
         this.dataManager = data;
         console.log(this.dataManager);
      },
      error =>{
        console.log(error)
      });
  
      //this.agenceForm = new FormGroup({
        //nom: new FormControl (''),
      // nomdg: new FormControl(''),
      // numdg: new FormControl (''),
      // email: new FormControl(''),
      // mobile: new FormControl (''),
      // fixe: new FormControl(''),
      // siteweb: new FormControl (''),
        //adresse: new FormControl(''),
      // photo: new FormControl (''),
      // contrat: new FormControl(''),
        //cnidg: new FormControl (''),
    // });
  }
}

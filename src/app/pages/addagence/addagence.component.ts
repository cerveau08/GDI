import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OthersService } from '../../services/others.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addagence',
  templateUrl: './addagence.component.html',
  styleUrls: ['./addagence.component.scss']
})
export class AddagenceComponent implements OnInit {

  url1="../assets/images/default.png";
  url2;
  url3;
  url4;
  url5;
  ninea;
  rccm;
  contrat;
  cnidg;
  logo : any;
  image: any;
  datas: any;
  errorMsg: string;
  infoForm: FormGroup;
  filename1 = "";
  filename2 = "";
  filename3 = "";
  filename4 = "";
  filename5 = "";
  filenameUser = "";
  constructor(private dataService: DataService,
              private route: Router,
              private otherService: OthersService ) { }

  
  ngOnInit() {
    this.infoForm = new FormGroup({
      nom: new FormControl (''),
      nomdg: new FormControl(''),
      numdg: new FormControl (''),
      email: new FormControl(''),
      mobile: new FormControl (''),
      fixe: new FormControl(''),
      siteweb: new FormControl (''),
      adresse: new FormControl(''),
      logo: new FormControl (''),
      ninea: new FormControl(''),
      rccm: new FormControl (''),
      cnidg: new FormControl(''),
      contrat: new FormControl (''),
    });
  }

  readUrl(event: any) {
    console.log('readUrl');
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
      
        reader.onload = (event: any) => {
          this.url1 = event.target.result;
        }
      
        reader.readAsDataURL(event.target.files[0]);
      }
  }
  readUrl1(event: any) {
    console.log('readUrl');
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
      
        reader.onload = (event: any) => {
          this.url3 = event.target.result;
        }
        this.filename1 = event.target.files[0].name;
        reader.readAsDataURL(event.target.files[0]);
      }
  }
  getCnidg(e: any) {
    console.log('getCnidg');
    this.cnidg= e.files.item(0);
    console.log(this.cnidg)
  }
  getContrat(e: any) {
    console.log('getContrat');
    this.contrat= e.files.item(0);
    console.log(this.contrat)
  }
  getNinea(e: any) {
    console.log('getNinea');
    this.ninea= e.files.item(0);
    console.log(this.ninea)
  }
  getRccm(e: any) {
    console.log('getRccm');
    this.rccm= e.files.item(0);
    console.log(this.rccm)
  }

  submitted1() {
    console.log(this.infoForm.value);
    console.log(this.logo);
    const value = this.infoForm.value;
    const info = new FormData();
    info.append("nom",value.nom);
    info.append("nomdg",value.nomdg);
    info.append("numdg",value.numdg);
    info.append("email",value.email);
    info.append("mobile",value.mobile);
    info.append("fixe",value.fixe);
    info.append("siteweb",value.siteweb);
    info.append("adresse",value.adresse);
    info.append("logo",this.logo);
    info.append("ninea",this.ninea);
    info.append("cnidg",this.cnidg);
    info.append("rccm",this.rccm);
    info.append("contrat",this.contrat);
   this.otherService.addAgence(info).subscribe(
      data => {
        console.log(data);
        if (data) {
        this.route.navigate(['/accueil/listagence']);
        }
      },
        error=> {
          this.errorMsg = 'Probleme de connexion au serveur';
          console.log(error)
        }
      ) 
  }

  //recuperation de l'image
  getLogo(e:any) {
    this.logo= e.files.item(0);
    console.log(this.logo)

    let reader = new FileReader();
    reader.readAsDataURL( this.logo)
    reader.onload= ()=>{
      this.image= reader.result
      console.log(this.image)
    }
  }
}

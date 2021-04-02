import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
  datas: any;
  constructor(private dataService: DataService) { }

  infoForm: FormGroup;
  ngOnInit() {
    this.datas = this.dataService.getData();
    this.infoForm = new FormGroup({
      nom: new FormControl (''),
      directeur: new FormControl(''),
      numerodg: new FormControl (''),
      email: new FormControl(''),
      mobile: new FormControl (''),
      fixe: new FormControl(''),
      website: new FormControl (''),
      adresse: new FormControl(''),
      photo: new FormControl (''),
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
      
        reader.readAsDataURL(event.target.files[0]);
      }
  }
  submitted1() {
    const info = {
        nom: this.infoForm.value.nom,
        directeur: this.infoForm.value.directeur,
        numerodg: this.infoForm.value.numerodg,
        email: this.infoForm.value.email,
        mobile: this.infoForm.value.mobile,
        fixe: this.infoForm.value.fixe,
        website: this.infoForm.value.website,
        adresse: this.infoForm.value.adresse,
        photo: this.infoForm.value.photo,
        ninea: this.infoForm.value.ninea,
        rccm: this.infoForm.value.rccm,
        contrat: this.infoForm.value.contrat,
        cnidg: this.infoForm.value.cnidg,
    } 
    console.log(info);
    return info;
  }
}

import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OthersService } from '../../services/others.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/_modal/modal.service';
import { ErrormodalService } from 'src/app/_errormodals';

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
  data;
  successMsg;
  constructor(private modalService: ModalService,
              private route: Router,
              private errormodalService: ErrormodalService,
              private otherService: OthersService ) { }

  
  ngOnInit() {
    this.infoForm = new FormGroup({
      nom: new FormControl ('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]')
      ]),
      nomdg: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]')
      ]),
      numdg: new FormControl ('', Validators.required,),
      email: new FormControl('', Validators.required,),
      mobile: new FormControl ('', Validators.required,),
      fixe: new FormControl(''),
      siteweb: new FormControl (''),
      adresse: new FormControl(''),
      logo: new FormControl ('', Validators.required,),
      ninea: new FormControl('', Validators.required,),
      rccm: new FormControl ('', Validators.required,),
      cnidg: new FormControl('', Validators.required,),
      contrat: new FormControl ('', Validators.required,),
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
    this.filename5 = this.cnidg.name;
    console.log(this.cnidg)
  }
  getContrat(e: any) {
    console.log('getContrat');
    this.contrat= e.files.item(0);
    this.filename4 = this.contrat.name;
    console.log(this.contrat)
  }
  getNinea(e: any) {
    console.log('getNinea');
    this.ninea= e.files.item(0);
    this.filename2 = this.ninea.name;
    console.log(this.ninea)
  }
  getRccm(e: any) {
    console.log('getRccm');
    this.rccm= e.files.item(0);
    this.filename3 = this.rccm.name;
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
        this.data = data;
        this.successMsg = this.data.status;
        if (this.successMsg == true) {
          this.route.navigate(['/accueil/listagence']);
        }
      },
        error=> {
          this.errorMsg = error;
          this.modalService.open('error-modal-1');
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
  openErrorModal(id: string) {
    this.errormodalService.open(id);
  }

  closeErrorModal(id: string) {
    this.errormodalService.close(id);
  }
}

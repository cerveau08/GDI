import { DataService } from 'src/app/service/data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalService } from 'src/app/_modal/modal.service';
import { Router } from '@angular/router';
import {OthersService} from '../../services/others.service';

@Component({
  selector: 'app-listeragence',
  templateUrl: './listeragence.component.html',
  styleUrls: ['./listeragence.component.scss']
})
export class ListeragenceComponent implements OnInit {

  url1;
  url3;
  user;
  showupdate;
  showadduser;
  datas: any;
  agenceForm: FormGroup;
  userForm: FormGroup;
  dataAgence: any;
  constructor(private dataService: DataService,
    private modalService: ModalService,
    public router: Router,
    private otherService: OthersService) { }

  ngOnInit() {
    this.user = localStorage.getItem('user');
    if(this.user == 'drh') {
      this.showupdate = true;
    } else {
      this.showupdate = false;
    }

    this.otherService.getListAgence().subscribe(
      data => {
        this.datas = data;
        console.log(data);
      }
    );
    //this.datas = this.dataService.getData();
    this.agenceForm = new FormGroup({
      nom: new FormControl (''),
      directeur: new FormControl(''),
      numerodg: new FormControl (''),
      email: new FormControl(''),
      mobile: new FormControl (''),
      fixe: new FormControl(''),
      website: new FormControl (''),
      adresse: new FormControl(''),
      photo: new FormControl (''),
      contrat: new FormControl(''),
      cnidg: new FormControl (''),
    });
    this.userForm = new FormGroup({
      prenom: new FormControl (''),
      nom: new FormControl(''),
      email: new FormControl(''),
      telephone: new FormControl (''),
      profil: new FormControl(''),
      photo: new FormControl (''),
    });
    
  }

  openDetail(data) {
    this.router.navigate(['/accueil/detailagence'], {
      queryParams: {
        user: JSON.stringify(data)
      }
    })

    //this.getAgence();
  }
  submitted1() {
    const info = {
        nom: this.agenceForm.value.nom,
        directeur: this.agenceForm.value.directeur,
        numerodg: this.agenceForm.value.numerodg,
        email: this.agenceForm.value.email,
        mobile: this.agenceForm.value.mobile,
        fixe: this.agenceForm.value.fixe,
        website: this.agenceForm.value.website,
        adresse: this.agenceForm.value.adresse,
        photo: this.agenceForm.value.photo,
        contrat: this.agenceForm.value.contrat,
        cnidg: this.agenceForm.value.cnidg,
    } 
    console.log(info);
    return info;
  }

  submitted2() {
    const info = {
        prenom: this.userForm.value.prenom,
        nom: this.userForm.value.nom,
        email: this.userForm.value.email,
        telephone: this.userForm.value.telephone,
        profil: this.userForm.value.profil,
        photot: this.userForm.value.photo,
    } 
    console.log(info);
    return info;
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
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
}

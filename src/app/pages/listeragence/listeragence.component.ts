import { DataService } from 'src/app/service/data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalService } from 'src/app/_modal/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listeragence',
  templateUrl: './listeragence.component.html',
  styleUrls: ['./listeragence.component.scss']
})
export class ListeragenceComponent implements OnInit {

  url1="../assets/images/default.png";
  url3;
  datas: any;
  agenceForm: FormGroup;
  constructor(private dataService: DataService,
    private modalService: ModalService,
    public router: Router) { }

  ngOnInit() {
    this.datas = this.dataService.getData();
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
    });
  }

  openDetail(data) {
    this.router.navigate(['/accueil/detailinter'], {
      queryParams: {
        user: JSON.stringify(data)
      }
    })
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

    } 
    console.log(info);
    return info;
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  openModal1(id: string) {
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

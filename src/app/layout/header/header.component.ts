import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ModalService } from 'src/app/_modal/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public click: any;
  filterterm: string;

  scrHeight:any;
  scrWidth:any;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
        console.log(this.scrHeight, this.scrWidth);
  }
  mois: any = [
    'Janvier', 
    'Février', 
    'Mars', 
    'Avril',
    'Mai',
    'Juin',
    'Juillet', 
    'Aout', 
    'Septembre', 
    'Octobre',
    'Novembre',
    'Décembre',
  ];
  sommes: any = [
    '20.000f', 
    '30.000f', 
    '40.000f', 
    '50.000f',
    '60.000f',
    '70.000f',
    '80.000f', 
  ];
  moisSelect
  demandeForm: FormGroup;
  constructor(private modalService: ModalService,) {
    this.getScreenSize();
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  ngOnInit() {
    this.demandeForm = new FormGroup({
      prenom: new FormControl (''),
      nom: new FormControl(''),
      matricule: new FormControl (''),
      email: new FormControl(''),
      direction: new FormControl (''),
      departement: new FormControl(''),
      service: new FormControl (''),
      agence: new FormControl(''),
      annee: new FormControl (''),
      poste: new FormControl(''),
    });
  }
  onSubmit(id: string) {
    const info = {
      prenom: this.demandeForm.value.prenom,
      nom: this.demandeForm.value.nom,
      matricule: this.demandeForm.value.matricule,
      email: this.demandeForm.value.email,
      direction: this.demandeForm.value.direction,
      departement: this.demandeForm.value.departement,
      service: this.demandeForm.value.service,
      agence: this.demandeForm.value.agence,
      annee: this.demandeForm.value.annee,
      poste: this.demandeForm.value.poste,
  } 
  console.log(info);
  return info;
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

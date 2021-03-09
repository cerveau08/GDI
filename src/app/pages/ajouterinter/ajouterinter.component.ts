import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ajouterinter',
  templateUrl: './ajouterinter.component.html',
  styleUrls: ['./ajouterinter.component.scss']
})
export class AjouterinterComponent implements OnInit {

  color1 = "black";
  color2 = "#f16e00";
  color3 = "#ff7900";
  interForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.interForm = new FormGroup({
      infopersonnel: new FormGroup({
        numeroCni: new FormControl(''),
        prenom: new FormControl(''),
        nom: new FormControl(''),
        email: new FormControl(''),
        dateNais: new FormControl(''),
        lieuNais: new FormControl(''),
        genre: new FormControl(''),
        situationmatri: new FormControl(''),
        diplome: new FormControl(''),
        ecole: new FormControl(''),
        photo: new FormControl(''),
      }),
      contrat: new FormGroup({
        type: new FormControl(''),
        agence: new FormControl(''),
        dateDebut: new FormControl(''),
        dateFin: new FormControl(''),
        categorie: new FormControl(''),
        salaire: new FormControl(''),
        structure: new FormControl(''),
        direction: new FormControl(''),
        departement: new FormControl(''),
        service: new FormControl(''),
        filecontrat: new FormControl(''),
      }),
      poste: new FormGroup({
        titre: new FormControl(''),
        matriculemanager: new FormControl(''),
        ficheposte: new FormControl(''),
      })
    })
  }
  colors1() {
    let colora = "#ff7900";
    if(localStorage.getItem('colora')){
      colora = localStorage.getItem('colora')
    } 
    return colora;
  }
  colors2() {
    let colorb = "black";
    if(localStorage.getItem('colorb')){
      colorb = localStorage.getItem('colorb')
    } 
    return colorb;
  }
  colors3() {
    let colorb = "black";
    if(localStorage.getItem('colorc')){
      colorb = localStorage.getItem('colorc');
    } 
    return colorb;
  }
  getcolor1() {
    let color = "20px solid #ff7900" 
    if(localStorage.getItem('color1')){
      color = localStorage.getItem('color1');
    } 
    return color;
  }
  getcolor2() {
    let color = "20px solid black" 
    if(localStorage.getItem('color2')){
      color = localStorage.getItem('color2');
    } 
    return color;
  }
  getcolor3() {
    let color = "20px solid black" 
    if(localStorage.getItem('color3')){
      color = localStorage.getItem('color3');
    } 
    return color;
  }
}

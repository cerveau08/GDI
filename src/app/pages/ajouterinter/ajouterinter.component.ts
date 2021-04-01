import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatStepper } from '@angular/material';
import { DataService } from 'src/app/service/data.service';
import { PostaComponent } from './posta/posta.component';

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
  reset;
  submited;
  message:string;
  username = 'Onejohi Tony';
 // parentMessage = "message from parent"
  @ViewChild('stepper', { static: false }) stepper: MatStepper;
  constructor() {
    
  }
  move(index: number) {
    this.submited = false;
    this.message = null;
    this.stepper.selectedIndex = index;
    localStorage.removeItem('color1');
    localStorage.removeItem('color2');
    localStorage.removeItem('color3');
    localStorage.removeItem('colora');
    localStorage.removeItem('colorb');
    localStorage.removeItem('colorc');
    console.log(this.submited);
    console.log(this.message);
  }

  receiveMessage($event) {
    this.message = $event
    console.log(this.message);
  }
  ngOnInit() {
    console.log(this.reset);
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
    });
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
  removeItem() {
    localStorage.removeItem('color1');
    localStorage.removeItem('color2');
    localStorage.removeItem('color3');
    localStorage.removeItem('colora');
    localStorage.removeItem('colorb');
    localStorage.removeItem('colorc');
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addinter',
  templateUrl: './addinter.component.html',
  styleUrls: ['./addinter.component.scss']
})
export class AddinterComponent implements OnInit {

  sommes: any = [
    '20.000f', 
    '30.000f', 
    '40.000f', 
    '50.000f',
    '60.000f',
    '70.000f',
    '80.000f', 
  ];
  submited = false;
  matricule = "Tmp_02568";
  url1="../assets/images/default.png";
  url2="../assets/images/default.png";
  url3="../assets/images/default.png";
  interForm: FormGroup;
  isLinear = true;
  infoForm : FormGroup;
  contactForm : FormGroup;
  posteForm : FormGroup;
  formPhoneGroup : FormGroup;
  constructor(private fb: FormBuilder) { }
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
    });
  }

  submitted1() {
    const infopersonnel = this.interForm.value.infopersonnel;
    const cni = infopersonnel.numeroCni;
    const preno = infopersonnel.prenom;
    const name = infopersonnel.nom;
    const mail = infopersonnel.email;
    const date = infopersonnel.dateNais;
    const lieu = infopersonnel.lieuNais;
    const sexe = infopersonnel.genre;
    const situation = infopersonnel.situationmatri;
    const grade = infopersonnel.diplome;
    const school = infopersonnel.ecole;
    const image = infopersonnel.photo;
    const info = {
      infopersonnel: {
        numeroCni: cni,
        prenom: preno,
        nom: name,
        email: mail,
        dateNais: date,
        lieuNais: lieu,
        genre: sexe,
        situationmatri: situation,
        diplome: grade,
        ecole: school,
        photo: image,
      }
    } 
    console.log(info);
    localStorage.setItem('color1', "20px solid #f16e00");
    localStorage.setItem('color2', "20px solid #ff7900");
    localStorage.setItem('colora', "#f16e00");
    localStorage.setItem('colorb', "#ff7900");
    return info;
  }

  submitted2() {
    const contrat = this.interForm.value.contrat;
    const typ = contrat.type;
    const agen = contrat.agence;
    const dateD = contrat.dateDebut;
    const dateF = contrat.dateFin;
    const categori = contrat.categorie;
    const salair = contrat.salaire;
    const struct = contrat.structure;
    const direc = contrat.direction;
    const depart = contrat.departement;
    const servi = contrat.service;
    const file = contrat.filecontrat;
    const info = {
      contrat: {
        type: typ,
        agence: agen,
        dateDebut: dateD,
        dateFin: dateF,
        categorie: categori,
        salaire: salair,
        structure: struct,
        direction: direc,
        departement: depart,
        service: servi,
        filecontrat: file,
      }
    } 
    console.log(info);
    localStorage.setItem('color2', "20px solid #f16e00");
    localStorage.setItem('color3', "20px solid #ff7900");
    localStorage.setItem('colorb', "#f16e00");
    localStorage.setItem('colorc', "#ff7900");
    return info;
  }

  submit() {
    console.log(this.interForm.value);
    localStorage.setItem('color3', "20px solid #f16e00");
    localStorage.setItem('colorc', "#f16e00");
    this.submited = true;
  }

  readUrl1(event: any) {
    console.log('readUrl');
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
      
        reader.onload = (event: any) => {
          this.url1 = event.target.result;
        }
      
        reader.readAsDataURL(event.target.files[0]);
      }
  }
  
  readUrl2(event: any) {
    console.log('readUrl');
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
      
        reader.onload = (event: any) => {
          this.url2 = event.target.result;
        }
      
        reader.readAsDataURL(event.target.files[0]);
      }
  }

  readUrl3(event: any) {
    console.log('readUrl');
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
      
        reader.onload = (event: any) => {
          this.url3 = event.target.result;
        }
      
        reader.readAsDataURL(event.target.files[0]);
      }
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
    this.submited = false;
    this.url1="../assets/images/default.png";
    this.url2="../assets/images/default.png";
    this.url3="../assets/images/default.png";
  }
}

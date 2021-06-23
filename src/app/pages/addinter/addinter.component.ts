import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { OthersService } from 'src/app/services/others.service';

@Component({
  selector: 'app-addinter',
  templateUrl: './addinter.component.html',
  styleUrls: ['./addinter.component.scss']
})
export class AddinterComponent implements OnInit {

 
  submited = false;
  matricule = "Tmp_02568";
  url1="../assets/images/default.png";
  url2="../assets/images/default.png";
  url3="../assets/images/default.png";
  url4="../assets/images/default.png";
  interForm: FormGroup;
  isLinear = true;
  photo: any;
  fichierContrat?: File;
  fichierPoste?: File;
  fichierProceVerbal?: File;
  errorMsg: string;
  infoForm : FormGroup;
  formPhoneGroup : FormGroup;
  dataSociete: any;
  dataDirection: any;
  dataAgence: any;
  dataDepartement: any;
  dataCategorie;
  id: any;
  itemd;
  donneeService;
  itemdept;
  datajson;
  contrat;
  filecontrat;
  ficheposte;
  proceverbal;
  constructor(private fb: FormBuilder,
              private dataService: DataService,
              private otherService: OthersService,
              private route: Router) {
    this.datajson = this.dataService.getData();
   }
  ngOnInit() {
    this.interForm = new FormGroup({
        nCni: new FormControl(''),
        prenom: new FormControl(''),
        nom: new FormControl(''),
        email: new FormControl(''),
        dateNaissance: new FormControl(''),
        lieuNaissance: new FormControl(''),
        sexe: new FormControl(''),
        sitmat: new FormControl(''),
        adresse: new FormControl(''),
        nPassport: new FormControl(''),
        diplome: new FormControl(''),
        universite: new FormControl(''),
        photo: new FormControl(''),
        dateDebut: new FormControl(''),
        dateFin: new FormControl(''),
        dateSignature: new FormControl(''),
        categorieId: new FormControl(''),
        salaireBrut: new FormControl(''),
        structureId: new FormControl(''),
        directionId: new FormControl(''),
        departementId: new FormControl(''),
        societeId: new FormControl(''),
        filecontrat: new FormControl(''),
        profession: new FormControl(''),
        matriculeManager: new FormControl(''),
        ficheposte: new FormControl(''),
        proceverbal: new FormControl(''),
        // type_contrat: new FormControl(''),
        // type_photo: new FormControl(''),
        // type_proceverbal: new FormControl(''),
        // type_ficheposte: new FormControl(''),
    });
      //recupere les societes
    this.otherService.getAllSociete().subscribe(
      data => {
        this.dataSociete = data["data"];
        console.log(data);
      }
    );
     //recupere les categories
     this.otherService.getAllCategorie().subscribe(
      data => {
        this.dataCategorie = data["data"];
        console.log(data);
      }
    );
  }
  submit() {
    const interimForm = new FormData();
    this.contrat = {
      type: this.interForm.value.type_contrat,
      file: this.filecontrat,
    }
    this.ficheposte = {
      type: this.interForm.value.type_ficheposte,
      file: this.ficheposte,
    }
    this.proceverbal = {
      type: this.interForm.value.type_proceverbal,
      file: this.proceverbal,
    }
    console.log(interimForm);
    interimForm.append("nCni",this.interForm.value.nCni)
    interimForm.append("universite",this.interForm.value.universite)
    interimForm.append("sexe",this.interForm.value.sexe)
    interimForm.append("dateNaissance",this.interForm.value.dateNaissance)
    interimForm.append("lieuNaissance",this.interForm.value.lieuNaissance)
    interimForm.append("profession",this.interForm.value.profession)
    interimForm.append("sitmat",this.interForm.value.sitmat)
    interimForm.append("diplome",this.interForm.value.diplome)
    interimForm.append("adressse",this.interForm.value.adresse)
    interimForm.append("categorieId",this.interForm.value.categorie)
    interimForm.append("structureId",this.interForm.value.structureId)
    interimForm.append("societeId",this.interForm.value.societeId)
    interimForm.append("salaireBrute",this.interForm.value.salaireBrute)
    interimForm.append("profession",this.interForm.value.profession)
    interimForm.append("matricule",this.interForm.value.matricule)
    interimForm.append("ficheposte",this.ficheposte)
    interimForm.append("proceverbal",this.proceverbal)
    interimForm.append("filecontrat",this.contrat)
    console.log(this.interForm.value);

    console.log(this.interForm.value);
    this.otherService.addInter(interimForm).subscribe(
      data => {
        console.log(data);
        //if (data) {
         // alert('Intérimaire ajouté avec succées...');
        //}
        //this.route.navigate(['/accueil/listagence']);
        this.submited = true;
      },
        error=> {
          this.errorMsg = 'Probleme de connexion au serveur';
          console.log(error)
        }
        //this.ndm.navigateByUrl('/accueil/listUsers');
      )
  }

  directionsListe(value) {
    console.log(value);
    this.otherService.getAllDirection(value).subscribe(
      data => {
        this.dataDirection = data['data'];
       console.log(data);
       }
    ); 
  }

  departementListe(value) {
    console.log(value);
    this.otherService.getAllDepartement(value).subscribe(
      data => {
        this.dataDepartement = data['data'];
       console.log(data);
       }
    ); 
  }

  serviceListe(value) {
    console.log(value);
    this.otherService.getAllService(value).subscribe(
      data => {
        this.donneeService = data['data'];
       console.log(data);
       }
    ); 
  }

   //recuperation de l'image
   getPhoto(e:any) {
    this.photo= e.files.item(0);
    console.log(this.photo.type);
  }

  //recuperation du  contrat
  getFileContrat(event: any) {
    this.fichierContrat = event.target.files[0];
  }

   //recuperation  du proceverbal
   getProceVerbal(e:any) {
    this.fichierProceVerbal= e.files.item(0);
    console.log(this.fichierProceVerbal.type);
  }

   //recuperation du fiche de poste
   getFichePoste(e:any) {
    this.fichierPoste= e.files.item(0);
    console.log(this.fichierPoste.type);
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

  readUrl4(event: any) {
    console.log('readUrl');
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
      
        reader.onload = (event: any) => {
          this.url4 = event.target.result;
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


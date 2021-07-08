import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from 'src/app/_modal/modal.service';
import { NgxFileSaverService } from '@clemox/ngx-file-saver';
import { OthersService } from 'src/app/services/others.service';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-detailinter',
  templateUrl: './detailinter.component.html',
  styleUrls: ['./detailinter.component.scss']
})
export class DetailinterComponent implements OnInit {

  item: any;
  id: any;
  public restant: any;
  public nombre = 59;
  public left: any;
  donnees: any;
  dataInter:any;
  dataContrat: any;
  
  viewer = 'google';  
  selectedType = 'docx';   
  contratDoc;
  fichePosteDoc=""
  proceVerbalDoc="" 
  data;
  nom;
  prenom;
  datedenaissance;
  lieudenaissance;
  telephone;
  sitmat;
  adresse;
  agence;
  photo;
  image;
  categorie;
  diplome;
  numeroPiece;
  email;
  profession;
  matricule;
  salaireBrut;
  dateSignature;
  universite;
  sexe;
  direction;
  departement;
  service
  contratForm: FormGroup;
  arretForm: FormGroup;
  bannirForm: FormGroup;
  reconduireForm: FormGroup;
  filenamecontrat;
  filenamefichedeposte;
  urlcontrat;
  urlfichedeposte;
  dataSociete: any;
  dataDirection: any;
  dataAgence: any;
  dataDepartement: any;
  donneeService: any;
  dataCategorie;
  fileContrat;
  fileFicheposte;
  constructor(private activeroute: ActivatedRoute,
              private modalService: ModalService,
              private dataService: DataService,
              private otherService: OthersService,
              private fileSaver: NgxFileSaverService,
              public router: Router, ) { 
    this.activeroute.queryParams.subscribe(params => {
      this.item = JSON.parse(params["user"]);
      console.log(this.item);
      this.otherService.getOneInterById(this.item).subscribe(
           data =>{
            this.data = data;
            this.dataInter = this.data.data;
            console.log(this.dataInter);
            this.nom = this.dataInter.nom;
            this.prenom = this.dataInter.prenom;
            this.datedenaissance = this.dataInter.datedenaissance;
            this.lieudenaissance = this.dataInter.lieudenaissance;
            this.numeroPiece = this.dataInter.numeroPiece;
            this.diplome = this.dataInter.diplome;
            this.email = this.dataInter.email;
            this.adresse = this.dataInter.adresse;
            this.profession = this.dataInter.profession;
            this.salaireBrut = this.dataInter.salaireBrut;
            this.profession = this.dataInter.profession;
            this.telephone = this.dataInter.telephone;
            this.universite = this.dataInter.universite;
            this.sitmat = this.dataInter.sitmat;
            this.direction = this.dataInter.direction;
            this.departement = this.dataInter.departement;
            this.service = this.dataInter.service;
            this.agence = this.dataInter.agence;
            this.categorie = this.dataInter.categorie;
            this.dateSignature = this.dataInter.dateSignature;
            this.matricule = this.dataInter.matricule;
            this.sexe = this.dataInter.sexe;
            this.photo = this.dataInter.photo;
            this.contratDoc = this.dataInter.fileContrat;
            this.fichePosteDoc = this.dataInter.fileFichePoste;
        },
        error =>{
          console.log(error)
        }
      );
    })
    //detail d'un contrat
    this.otherService.getContratById(this.id).subscribe(
      data =>{
        this.data = data;
        this.dataContrat = this.data.data;
        console.log(this.dataContrat);
      })
    
  }
  ngOnInit() {
    this.contratForm = new FormGroup({
      categorieId: new FormControl(''),
      salaireBrut: new FormControl(''),
      dateDebut: new FormControl(''),
      dateFin: new FormControl(''),
      dateSignature: new FormControl(''),
      societeId: new FormControl(''),
      directionId: new FormControl(''),
      departementId: new FormControl(''),
      serviceId: new FormControl(''),
      profession: new FormControl(''),
      poste: new FormControl(''),
      contrat: new FormControl(''),
      fichePoste: new FormControl(''),
      interimaireId: new FormControl(''),
    });
    this.otherService.getAllSociete().subscribe(
      data => {
        this.dataSociete = data["data"];
        console.log(data);
      }
    );
    this.otherService.getAllCategorie().subscribe(
      data => {
        this.dataCategorie = data["data"];
        console.log(data);
      }
    );
    this.arretForm = new FormGroup({
      motif: new FormControl(''),
    });
    this.bannirForm = new FormGroup({
      motif: new FormControl(''),
    });
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

  public get(p) {
    this.fileSaver.saveUrl(p.pathfile, p.file);
  }
  public getfilemodal() {
    this.fileSaver.saveUrl(this.contratDoc, 'contrat');
  }

  getwidth() {
    this.restant = this.nombre + "%";
    return this.restant;
  }
  getposition() {
    let left1 = this.nombre - 1;
    this.left = left1 + "%";
    return this.left;
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  modifierInter() {
    this.router.navigate(['accueil/modifierinter'], {
      queryParams: {
        user: JSON.stringify(this.item)
      }
    })
  }
  
  validerContrat() {
   this.contratForm.patchValue({interimaireId: this.item});
   const formdata = new FormData();
formdata.append("societeId","5");
formdata.append("structureId","14");
formdata.append("domaineId",this.contratForm.value.domaineId);
formdata.append("salaireBrut",this.contratForm.value.salaireBrut);
formdata.append("interimaireId",this.item);
formdata.append("categorieId",this.contratForm.value.categorieId);
formdata.append("dateDebut",this.contratForm.value.dateDebut);
formdata.append("dateFin",this.contratForm.value.dateFin);
formdata.append("dateSignature",this.contratForm.value.dateSignature);
formdata.append("profession",this.contratForm.value.profession);
formdata.append("poste",this.contratForm.value.poste);
formdata.append("contrat",this.urlcontrat);
formdata.append("fichePoste",this.urlfichedeposte);
    this.otherService.renouvelerContrat(formdata).subscribe(
      data => {
        console.log(data);
        if(data){
          this.router.navigate(['/accueil/souscontrat']);
        }
      },
      error =>{
        console.log(error);
      }
    )
  }

  reconduireContrat() {
    this.contratForm.patchValue({interimaireId: this.item});
      const formdata = new FormData();
    formdata.append("dateSignature",this.contratForm.value.dateSignature);
    formdata.append("dateDebut",this.contratForm.value.dateDebut);
    formdata.append("dateFin",this.contratForm.value.dateFin);
    formdata.append("interimaireId",this.item);
    formdata.append("fileContrat",this.urlcontrat);
    this.otherService.reconduireContrat(formdata).subscribe(
      data => {
        console.log(data);
        if(data){
          this.router.navigate(['/accueil/souscontrat']);
        }
      },
      error =>{
        console.log(error);
      }
    )
  }
  objectif() {
    this.router.navigate(['accueil/objectif'], {
      queryParams: {
        interimaire: JSON.stringify(this.item)
      }
    })
  } 

   //recuperation de l'image
 getPhoto(e:any) {
  this.photo= e.files.item(0);
  let reader = new FileReader();
  reader.readAsDataURL(this.photo)
  reader.onload= ()=>{
    this.image= reader.result
  } 
}

  contrat(e:any) {
    this.urlcontrat= e.files.item(0);
    console.log(this.urlcontrat);
    this.filenamecontrat = this.urlcontrat.name;
    let reader = new FileReader();
    reader.readAsDataURL( this.urlcontrat)
    reader.onload= ()=>{
     // this.fil= reader.result
     // console.log(this.image)
    }
  }
  fichedeposte(e:any) {
    this.urlfichedeposte= e.files.item(0);
    console.log(this.urlfichedeposte);
    this.filenamefichedeposte = this.urlfichedeposte.name;
    let reader = new FileReader();
    reader.readAsDataURL( this.urlfichedeposte)
    reader.onload= ()=>{
     // this.fil= reader.result
     // console.log(this.image)
    }
  }
  arretContrat() {
    console.log(this.item);
    this.otherService.arreterContrat(this.item, this.arretForm.value).subscribe(
      (response) =>{
       console.log(response)
      // if (response) {
        //this.router.navigate(['/accueil/sousContrat']);
      // }
      },
      (error)=>{
        console.log(error);
      }
    );
  }
}

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
  objetctis = [
    {
      title: "Objectif 1",
      libelle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      title: "Objectif 2",
      libelle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
  ];
  
  viewer = 'google';  
  selectedType = 'docx';   
  DemoDoc="http://www.africau.edu/images/default/sample.pdf" 
  DemoDoc1="https://file-examples.com/wp-content/uploads/2017/02/file-sample_100kB.doc"
  DemoDoc2="https://www.le.ac.uk/oerresources/bdra/html/resources/example.txt" 
  data;
  nom;
  prenom;
  datedenaissance;
  lieudenaissance;
  telephone;
  sitmat;
  adresse;
  agence;
  categorie;
  diplome;
  numeroPiece;
  email;
  profession;
  matricule;
  salaire_brut;
  universite;
  sexe;
  direction;
  departement;
  service
  contratForm: FormGroup;
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
            this.salaire_brut = this.dataInter.salaire_brut;
            this.profession = this.dataInter.profession;
            this.telephone = this.dataInter.telephone;
            this.universite = this.dataInter.universite;
            this.sitmat = this.dataInter.sitmat;
            this.direction = this.dataInter.direction;
            this.departement = this.dataInter.departement;
            this.service = this.dataInter.service;
            this.agence = this.dataInter.agence;
            this.categorie = this.dataInter.categorie;
            this.matricule = this.dataInter.matricule;
            this.sexe = this.dataInter.sexe;
           /* this.direction = this.dataInter.direction;
            this.departement = this.dataInter.departement;
            this.service = this.dataInter.service;*/
        },
        error =>{
          console.log(error)
        }
      );
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

       //recupere les categories
       this.otherService.getAllCategorie().subscribe(
        data => {
          this.dataCategorie = data["data"];
          console.log(data);
        }
      );
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
    this.fileSaver.saveUrl(this.DemoDoc, 'contrat');
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
formdata.append("domaineId","2");
//formdata.append("structureId",this.contratForm.value.structureId);
//formdata.append("categorieId",this.contratForm.value.categorieId);
//formdata.append("domaineId",this.contratForm.value.domaineId);
//formdata.append("societeId",this.contratForm.value.societeId);
formdata.append("salaireBrut",this.contratForm.value.salaireBrut);
formdata.append("interimaireId", '38');
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
          this.router.navigate(['/accueil/sousContrat']);
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
    formdata.append("interimaireId", '37');
    formdata.append("fileContrat",this.urlcontrat);
    this.otherService.reconduireContrat(formdata).subscribe(
      data => {
        console.log(data);
        if(data){
          this.router.navigate(['/accueil/sousContrat']);
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
   /* this.fileFicheposte= e.target.files.item(0);
    console.log(this.fileFicheposte.type);
    this.filenamefichedeposte = this.fileFicheposte.name;
    console.log(this.filenamefichedeposte);*/
  }
}

import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from 'src/app/_modal/modal.service';
import { NgxFileSaverService } from '@clemox/ngx-file-saver';
import { OthersService } from 'src/app/services/others.service';
import { formatCurrency } from '@angular/common';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detailuser',
  templateUrl: './detailuser.component.html',
  styleUrls: ['./detailuser.component.scss']
})
export class DetailuserComponent implements OnInit {

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
  data;
  nom;
  prenom;
  telephone;
  agence;
  photo;
  image;
  email;
  fonction;
  matricule;
  direction;
  departement;
  service
  contratForm: FormGroup;
  arretForm: FormGroup;
  bannirForm: FormGroup;
  reconduireForm: FormGroup;
  validerForm: FormGroup;
  filenamecontrat;
  filenamefichedeposte;
  urlcontrat;
  urlfichedeposte;
  dataSociete: any;
  dataDirection: any;
  dataAgence: any;
  dataDepartement: any;
  donneeService: any;
  role;
  url3;
  url2;
  filename3;
  filename2;
  public reqUrl = environment.base_url;
  constructor(private activeroute: ActivatedRoute,
              private modalService: ModalService,
              private dataService: DataService,
              private otherService: OthersService,
              private fileSaver: NgxFileSaverService,
              private http: HttpClient,
              public router: Router, ) { 
    this.activeroute.queryParams.subscribe(params => {
      this.item = JSON.parse(params["user"]);
      console.log(this.item);
      this.otherService.detailUser(this.item).subscribe(
           data =>{
            this.data = data;
            this.dataInter = this.data.data;
            console.log(this.data);
            this.nom = this.dataInter.nom;
            this.prenom = this.dataInter.prenom;
            this.email = this.dataInter.email;
            this.fonction = this.dataInter.fonction;
            this.direction = this.dataInter.direction;
            this.departement = this.dataInter.departement;
            this.service = this.dataInter.service;
            this.agence = this.dataInter.agence;
            this.matricule = this.dataInter.matricule;
            this.photo = this.dataInter.photo;
        },
        error =>{
          console.log(error)
        }
      );
    })

    //detail d'un contrat
  /*  this.otherService.getContratById(this.id).subscribe(
      data =>{
        this.data = data;
        this.dataContrat = this.data.data;
        console.log(this.dataContrat);
      })*/
    
  }
  ngOnInit() {
    this.role = localStorage.getItem('user')
    this.contratForm = new FormGroup({
      societeId: new FormControl(''),
      directionId: new FormControl(''),
      departementId: new FormControl(''),
      structureId: new FormControl(''),
      fonction: new FormControl(''),
      prenom: new FormControl(''),
      nom: new FormControl(''),
      email: new FormControl(''),
      telephone: new FormControl(''),
    });
    this.validerForm = new FormGroup({
      matricule: new FormControl(''),
      email: new FormControl('')
    })
    this.otherService.getAllSociete().subscribe(
      data => {
        this.dataSociete = data["data"];
        console.log(data);
      }
    );
   // this.otherService.getAllCategorie().subscribe(
    //  data => {
    //    this.dataCategorie = data["data"];
    //    console.log(data);
    //  }
   // );
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
  
  
   //recuperation de l'image
  getPhoto(e:any) {
    this.photo= e.files.item(0);
    let reader = new FileReader();
    reader.readAsDataURL(this.photo)
    reader.onload= ()=>{
      this.image= reader.result
    } 
  }
 
}

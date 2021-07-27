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
  public left: any;
  donnees: any;
  dataUser:any;
  dataContrat: any;  
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
              private otherService: OthersService,
              public router: Router, ) { 
    this.activeroute.queryParams.subscribe(params => {
      this.item = JSON.parse(params["user"]);
      console.log(this.item);
      this.otherService.getUserById(this.item).subscribe(
           data =>{
            this.data = data;
            this.dataUser = this.data.data;
            console.log(this.dataUser);
            this.nom = this.dataUser.nom;
            this.prenom = this.dataUser.prenom;
            this.email = this.dataUser.email;
            this.fonction = this.dataUser.fonction;
           this.telephone = this.dataUser.telephone;
            //this.agence = this.dataUser.agence;
            this.matricule = this.dataUser.matricule;
            this.photo = this.dataUser.photo;
        },
        error =>{
          console.log(error)
        }
      );
    })
    
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

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
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

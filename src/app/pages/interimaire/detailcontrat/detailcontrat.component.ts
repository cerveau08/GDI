import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from 'src/app/modal/_modal';
import { OthersService } from 'src/app/services/others.service';
import { NgxFileSaverService } from '@clemox/ngx-file-saver';
import { ErrormodalService } from 'src/app/modal/_errormodals';
import { HttpClient } from '@angular/common/http';
import {Location} from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detailcontrat',
  templateUrl: './detailcontrat.component.html',
  styleUrls: ['./detailcontrat.component.scss']
})
export class DetailcontratComponent implements OnInit {

  item: any;
  id: any;
  public restant: any;
  public nombre = 59;
  public left: any;
  donnees: any;
  page = 1
  itemsPerPage = 4;
  dataInter:any;
  dataContrat: any;
  dataManageur;
  viewer = 'google';  
  selectedType = 'docx';   
  contratDoc;
  fichePosteDoc=""
  proceVerbalDoc="" 
  dataValidation;
  dataReconduire;
  dataRenouveler;
  dataBannir;
  dataArret;
  data;
  nom;
  prenom;
  categorie;
  dateDebut;
  dateFin;
  societe;
  departement;
  service;
  direction;
  image;
  diplome;
  numeroPiece;
  domaine;
  email;
  poste;
  matricule;
  salaireBrut;
  dateSignature;
  universite;
  sexe;
  documentUpdateForm: FormGroup;
  contratForm: FormGroup;
  arretForm: FormGroup;
  bannirForm: FormGroup;
  reconduireForm: FormGroup;
  validerForm: FormGroup;
  filenamecontrat;
  filenamefichedeposte;
  filenameProceVerbal;
  urlcontrat;
  urlfichedeposte;
  urlProcesVerbal;
  dataSociete: any;
  dataDirection: any;
  dataAgence: any;
  dataDepartement: any;
  donneeService: any;
  dataCategorie;
  fileContrat;
  fileFicheposte;
  fileProcesVerbal;
  etat;
  role;
  url3;
  url2;
  filename3;
  filename2;
  successMsgValider;
  successMsgReconduire;
  successMsgRenouveler;
  successMsgBannir;
  successMsgArret;
  public reqUrl = environment.base_url;
  errorMsg: any;
  evaluations: any;
  totalItems: any;
  interim_id: any;
  procesVerbal;
  documentForm: FormGroup;
  doc = '../../../../assets/doc/2.pdf';
  documents: any;
  fileRead = '../assets/doc/GDI_GestionDesInterimaires.pdf';
  document: any;
  successMsg: any;
  filename: any;
  typeDocumentId: any;
  dataTypeDocument: any;
  idFile: any;
  documentUp: any;
  filenameUp: any;
  contratFile: any;
  procesVerbalFile: any;
  ficheDePosteFile: any;
  cvFile: any;
  visiteContreVisiteFile: any;
  fileBaseDonnees: boolean = false;
  diplomesInter: any;
  visualiserDiplome: boolean = false;
  typeDocument: any;
  constructor(private activeroute: ActivatedRoute,
              private modalService: ModalService,
              private otherService: OthersService,
              private fileSaver: NgxFileSaverService,
              private http: HttpClient,
              private toastr: ToastrService,
              private location: Location,
              private errormodalService: ErrormodalService,
              public router: Router,) { 
    this.activeroute.queryParams.subscribe(params => {
      this.item = JSON.parse(params["contrat"]);
      this.interim_id = JSON.parse(params["interimaire"]);
    })
    
  }
  ngOnInit() {
    this.documentForm = new FormGroup({
      interimareId: new FormControl(''),
      typeDocumentId: new FormControl(''),
      document: new FormControl(''),
      contratId: new FormControl('')
    })
    this.documentUpdateForm = new FormGroup({
      interim_id: new FormControl(''),
      typeDocumentId: new FormControl(''),
      documentFile: new FormControl(''),
      contratId: new FormControl('')
    })
    this.role = localStorage.getItem('user')
    this.gty(this.page);
    this.otherService.getTypeDocuments().subscribe(
      result=>{
        this.dataTypeDocument = result.data;
      }
    );
    this.otherService.getOneInterById(this.interim_id).subscribe(
        data =>{
          this.data = data;
          this.dataInter = this.data.data;
          this.nom = this.dataInter.nom;
          this.prenom = this.dataInter.prenom;
          this.diplomesInter = this.dataInter.diplomes;
      }
    );
    this.otherService.getContratById(this.item).subscribe(
      data =>{
        this.data = data;
        this.dataContrat = this.data.data;
        this.poste = this.dataContrat.poste.libelle;
        this.dateDebut = this.dataContrat.dateDebut;
        this.dateFin = this.dataContrat.dateFin;
        this.societe = this.dataContrat.societe.libelle;
        this.direction = this.dataContrat.structure.direction.libelle;
        this.departement = this.dataContrat.structure.departement;
        this.service = this.dataContrat.structure.service;
        this.categorie = this.dataContrat.categorie;
        this.domaine = this.dataContrat.domaine;
        this.documents = this.dataContrat.documents;
        this.contratFile = this.dataContrat.documents.fileContrat;
        this.procesVerbalFile = this.dataContrat.documents.fileProcesVerbal;
        this.ficheDePosteFile = this.dataContrat.documents.fileFicheDePoste;
        this.cvFile = this.dataContrat.documents.fileCV;
        this.contratFile = this.dataContrat.documents.fileContrat;
        this.visiteContreVisiteFile = this.dataContrat.documents.fileVisiteContreVisite;
        
      }
    );
  }

  public getDiplomes(prenom, nom, item) {
    this.fileSaver.saveUrl(this.reqUrl + '/public' + item, 'diplomes-de-' + prenom + '-' + nom);
  }


  addDocument(e: any) {
    this.document = e.files.item(0);
    this.filename = this.document.name;
  }

  addUpDocument(e: any) {
    this.documentUp = e.files.item(0);
    this.filenameUp = this.documentUp.name;
  }

  submit() {
    const value = this.documentForm.value;
    const info = new FormData();
    info.append("interimaireId", this.interim_id);
    info.append("typeDocumentId",value.typeDocumentId);
    info.append("contratId", this.item);
    info.append("document",this.document);
    this.otherService.addDocument(info).subscribe(
      data => {
        this.data = data;
        this.successMsg = this.data.status;
        if (this.successMsg == true) {
          this.ngOnInit();
          this.closeModal('custom-modal-3');
        }
      },
      error=> {
        this.errorMsg = error;
        this.toastr.error(this.errorMsg, 'Echec', {
          timeOut: 5000,
        });
      }
    ) 
  }

  updateDoc(id) {
    //console.log(id);
    //typeDocumentId
    const value = this.documentUpdateForm.value;
    const info = new FormData();
    info.append("interim_id", this.interim_id);
    info.append("typeDocument_id",value.typeDocumentId);
    info.append("contratId", this.item);
    info.append("documentFile",this.documentUp);
    this.otherService.updateDocument(id, info).subscribe(
      data => {
        this.data = data;
        this.successMsg = this.data.status;
        if (this.successMsg == true) {
          this.ngOnInit();
          this.closeModal('custom-modal-4');
        }
      },
      error=> {
        this.errorMsg = error;
        this.toastr.error(this.errorMsg, 'Echec', {
          timeOut: 5000,
        });
      }
    ) 
  }

  backClicked() {
    this.location.back();
  }

  gty(page: any){
    this.http.get(this.reqUrl + `/listEvaluations/${this.interim_id}?page=${page}&limit=${this.itemsPerPage}`).subscribe((data: any) => {
      this.data = data
      this.evaluations = this.data["data"];
      this.totalItems = data.total;
    })
  }
  
  openDiplome() {
    this.visualiserDiplome = true;
  }

  readFile(p, q, typeDoc) {
    this.fileBaseDonnees = true;
    this.visualiserDiplome = false;
    this.fileRead = p;
    this.idFile = q;
    this.typeDocument =typeDoc;
    this.typeDocumentId = this.typeDocument.id
  }

  public getFile(p) {
    this.fileSaver.saveUrl(p, 'Fichier');
  }
  public getContrat() {
    this.fileSaver.saveUrl(this.contratDoc, 'contrat');
  }

  public getFicheDePoste() {
    this.fileSaver.saveUrl(this.fichePosteDoc, 'fiche de Poste');
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  openUpModal(id: string, q) {
    this.modalService.open(id);
    console.log(q);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
  
  objectif() {
    this.router.navigate(['accueil/objectif'], {
      queryParams: {
        interimaire: JSON.stringify(this.interim_id)
      }
    })
  } 

  adddocument() {
    this.router.navigate(['accueil/adddocument'], {
      queryParams: {
        interimaire: JSON.stringify(this.interim_id),
        contrat: JSON.stringify(this.item)
      }
    })
  } 

  openErrorModal(id: string) {
    this.errormodalService.open(id);
  }

  closeErrorModal(id: string) {
    this.errormodalService.close(id);
  }

}
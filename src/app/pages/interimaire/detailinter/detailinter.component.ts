import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../../../service/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from 'src/app/modal/_modal/modal.service';
import { NgxFileSaverService } from '@clemox/ngx-file-saver';
import { OthersService } from 'src/app/services/others.service';
import { formatCurrency } from '@angular/common';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ErrormodalService } from 'src/app/modal/_errormodals';
import {Location} from '@angular/common';

@Component({
  selector: 'app-detailinter',
  templateUrl: './detailinter.component.html',
  styleUrls: ['./detailinter.component.scss']
})
export class DetailinterComponent implements OnInit {

  validation_messages = {
    'telephone': [
        { type: 'required', message: 'Veuillez saisir votre numero de téléphone' },
        { type: 'pattern', message: 'Le format de numéro que vous avez saisi est incorrecte' },
        { type: 'validNumber', message: 'Ce numero de téléphone n\'existe pas' }
    ],
  };
  item: any;
  id: any;
  user: any;
  public restant: any;
  public nombre = 59;
  public left: any;
  donnees: any;
  page = 1
  showButton;
  itemsPerPage = 7;
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
  dataInterim;
  role;
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
  sameIdSociete;
  departement;
  service;
  contratForm: FormGroup;
  arretForm: FormGroup;
  bannirForm: FormGroup;
  reconduireForm: FormGroup;
  validerForm: FormGroup;
  searchForm: FormGroup;
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
  societeIdDrh;
  societeIdInterim;
  societeData;
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
  infoContrat: any;
  anneeRestant: any;
  moisRestant: any;
  jourRestant: any;
  totalJour: any;
  totalJourRestatnt: any;
  percentRestantwidth: string;
  dateFin: any;
  percentRestantposition: string;
  messageVide: any;
  prenomManager: any;
  nomManager: any;
  emailManager: any;
  telephoneManager: any;
  posteManager: any;
  structureManager: any;
  invalideNumber: string;
  videNumber: string;
  listeFonction: any;
  idcontrat: any;
  emailForm: FormGroup;
  emailPro = '';
  totalJourPresent: any;
  selected1: boolean;
  selected2: boolean;
  dureeTotalPresence: any;
  itemParPage = null;
  dataSite: any;
  region = null;
  dataDomaine: any;
  managerinfo: any;
  datasInter: any;
  constructor(private activeroute: ActivatedRoute,
              private modalService: ModalService,
              private otherService: OthersService,
              private fileSaver: NgxFileSaverService,
              private errormodalService: ErrormodalService,
              private http: HttpClient,
              public router: Router, 
              private location: Location,
              public formBuilder: FormBuilder, 
              private toastr: ToastrService) { 
    this.activeroute.queryParams.subscribe(params => {
      this.item = JSON.parse(params["interimaire"]);
    })
    
  }
  ngOnInit() {
    this.role = localStorage.getItem('user');
    this.societeData = JSON.parse(localStorage.getItem('currentUser'));
    this.societeIdDrh=this.societeData.data.societeId;
    this.otherService.getOneInterById(this.item).subscribe(
      data =>{
        this.data = data;
        this.dataInter = this.data.data;
        this.nom = this.dataInter.nom;
        this.prenom = this.dataInter.prenom;
        this.emailPro = this.dataInter.emailPro;
         this.idcontrat = this.dataInter.contrat.id;
        this.photo = this.reqUrl + '/public/' + this.dataInter.photo;
        this.etat = this.dataInter.etat;
        this.contratDoc = this.reqUrl + '/public' + this.dataInter.fileContrat;
        this.fichePosteDoc = this.reqUrl + '/public' + this.dataInter.fileFichePoste;
        this.societeIdInterim = this.dataInter.societe.id;
        if(this.societeIdDrh == this.societeIdInterim) {
          this.sameIdSociete = true;
        } else {
          this.sameIdSociete = false;
        }
        this.otherService.getDetailsManagerById(this.dataInter.idManager).subscribe( 
          result => {
            this.data = result;
            this.managerinfo = this.data.data.detail
            this.datasInter = this.data.data.interimaires
          }
        )
      }
    );
    if(this.user == 'DRH') {
      this.showButton = false;
    } else {
      this.showButton = true;
    }
    this.contratForm = new FormGroup({
      categorieId: new FormControl(''),
      salaireBrut: new FormControl(''),
      dateDebut: new FormControl(''),
      dateFin: new FormControl(''),
      dateSignature: new FormControl(''),
      societeId: new FormControl(''),
      directionId: new FormControl(''),
      departementId: new FormControl(''),
      structureId: new FormControl(''),
      profession: new FormControl(''),
      poste: new FormControl(''),
      contrat: new FormControl(''),
      fichePoste: new FormControl(''),
      interimaireId: new FormControl(''),
      procesVerbal: new FormControl(''),
      num_bon_commande: new FormControl(''),
      date_bon_commande: new FormControl(''),
      site: new FormControl(''),
      domaineId: new FormControl(''),
      observation: new FormControl('')
    });
    this.searchForm = new FormGroup({
      matricule: new FormControl('')
    });
    this.emailForm = new FormGroup({
      email: new FormControl(''),
      id: new FormControl(this.item)
    });
    this.validerForm = this.formBuilder.group({
      matricule: new FormControl(''),
      responsable: new FormControl(''),
      //email: new FormControl(''),
      // telephone: new FormControl('', Validators.compose([
      //   Validators.required,
      //   Validators.pattern('7[7-8]{1}[0-9]{7}')
      // ])),
    });
    this.otherService.getAllSociete().subscribe(
      data => {
        this.dataSociete = data["data"];
      }
    );
    this.otherService.getAllCategorie().subscribe(
      data => {
        this.dataCategorie = data["data"];
      }
    );
    this.arretForm = new FormGroup({
      motif: new FormControl(''),
    });
    this.bannirForm = new FormGroup({
      libelle: new FormControl(''),
      commentaire: new FormControl(''),
    });
    this.gty(this.page);
    this.otherService.listeSite(this.page, 999, this.region).subscribe(
      data => {
        this.dataSite = data.data;
      }
    )
    this.otherService.getDomaine().subscribe(data => this.dataDomaine = data["data"]);
    this.otherService.getFonctions().subscribe(data => this.listeFonction = data.data);
    this.otherService.statContratInter(this.item).subscribe(
      data => {
        if(data.data) {
          this.infoContrat = data.data;
          this.anneeRestant = this.infoContrat.dureeContratRestant.annees;
          this.moisRestant = this.infoContrat.dureeContratRestant.mois;
          this.jourRestant = this.infoContrat.dureeContratRestant.jours;
          this.totalJour = this.infoContrat.dureeTotalContratEnJours;
          this.totalJourRestatnt = this.infoContrat.dureeTotalContratRestantJours;
          this.totalJourPresent = this.totalJour - this.totalJourRestatnt;
          let totalDay = 730;
          this.dateFin = this.infoContrat.dateFinContrat;
          this.dureeTotalPresence = this.infoContrat.dureeTotalPresence;
          this.percentRestantwidth = (this.totalJourPresent / totalDay) * 100 +'%';
          this.percentRestantposition = (this.totalJourPresent / totalDay) * 100 - 1 +'%';
        }
      }
    );
    this.onChanges();
  }

  onChanges(): void {
    this.contratForm.get('categorieId').valueChanges.subscribe(val => {
      this.salaireBrut = val;
      this.otherService.getOneCategorie(val).subscribe(
        data => {
          this.data = data;
          this.salaireBrut = this.data.data.salaireBrute;
        }
      )
    });
  }

  public savePoste(e): void {
    let libelle = e.target.value;
    let list = this.listeFonction.filter(x => x.libelle === libelle)[0];
    this.contratForm.patchValue({poste: list.libelle});
  }

  get errorControl() {
    return this.validerForm.controls;
  }

  gty(page: any){
    this.http.get(this.reqUrl + `/managers/list?page=${page}&limit=${this.itemsPerPage}`).subscribe((data: any) => {
      this.dataManageur =  data.data;
    })
  }

  public saveMatriculeM(e): void {
    let matricule = e.target.value;
    let list = this.dataManageur.filter(x => x.matricule === matricule)[0];
    this.validerForm.patchValue({profession: list.matricule});
  }

  directionsListe(value) {
    this.otherService.getAllDirection(value).subscribe(
      data => {
        this.dataDirection = data['data'];
       }
    ); 
  }

  departementListe(value) {
    this.otherService.getAllDepartement(value).subscribe(
      data => {
        this.dataDepartement = data['data'];
      }
    ); 
  }

  serviceListe(value) {
    this.otherService.getAllService(value).subscribe(
      data => {
        this.donneeService = data['data'];
      }
    ); 
  }

  public get(p) {
    this.fileSaver.saveUrl(p.pathfile, p.file);
  }
  public getContrat(prenom, nom) {
    this.fileSaver.saveUrl(this.contratDoc, 'contrat-de-' + prenom + '-' + nom);
  }

  public getDiplomes(prenom, nom, item) {
    this.fileSaver.saveUrl(this.reqUrl + '/public' + item, 'diplomes-de-' + prenom + '-' + nom);
  }

  public getFicheDePoste(prenom, nom) {
    this.fileSaver.saveUrl(this.fichePosteDoc, 'fiche-de-Poste-' + prenom + '-' + nom);
  }
  public getCv(prenom, nom) {
    this.fileSaver.saveUrl(this.contratDoc, 'Cv-de-' + prenom + '-' + nom);
  }

  public getProcesVerbal(prenom, nom) {
    this.fileSaver.saveUrl(this.fichePosteDoc, 'proces-verbale-de-' + prenom + '-' + nom);
  }
  public getVisiteContreVisite(prenom, nom) {
    this.fileSaver.saveUrl(this.contratDoc, 'Certificat-viste-contre-visite-' + prenom + '-' + nom);
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

  openDocuments(idcontrat) {
    console.log(idcontrat);
    
    this.router.navigate(['accueil/detailcontrat'], {
      queryParams: {
        contrat: JSON.stringify(idcontrat),
        interimaire: JSON.stringify(this.item)
      }
    })
  }

  modifierInter() {
    this.router.navigate(['accueil/modifierinter'], {
      queryParams: {
        user: JSON.stringify(this.item)
      }
    })
  }
  
  renouvelerContrat() {
    this.contratForm.patchValue({interimaireId: this.item});
    const formdata = new FormData();
    formdata.append("societeId",this.contratForm.value.societeId);
    formdata.append("structureId",this.contratForm.value.structureId);
    formdata.append("domaineId",this.contratForm.value.domaineId);
    formdata.append("salaireBrut",this.contratForm.value.salaireBrut);
    formdata.append("interimaireId",this.item);
    formdata.append("categorieId",this.contratForm.value.categorieId);
    formdata.append("dateDebut",this.contratForm.value.dateDebut);
    formdata.append("dateFin",this.contratForm.value.dateFin);
    formdata.append("categorieId",this.contratForm.value.categorieId);
    formdata.append("dateSignature",this.contratForm.value.dateSignature);
    formdata.append("siteId",this.contratForm.value.site);
    formdata.append("num_bon_commande",this.contratForm.value.num_bon_commande);
    formdata.append("date_bon_commande",this.contratForm.value.date_bon_commande);
    formdata.append("fonction",this.contratForm.value.poste);
    formdata.append("contrat",this.urlcontrat);
    formdata.append("fichePoste",this.urlfichedeposte);
    formdata.append("procesVerbal",this.urlProcesVerbal);
    this.otherService.renouvelerContrat(formdata).subscribe(
      data => {
        this.dataRenouveler = data;
        this.successMsgRenouveler = this.dataRenouveler.status;
        if(this.successMsgRenouveler == true){
          this.ngOnInit();
          this.closeModal('custom-modal-4');
          this.toastr.success(this.dataRenouveler.message, 'Success', {
            timeOut: 3000,
          });
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
        this.dataReconduire = data;
        this.successMsgReconduire = this.dataReconduire.status;
        if(this.successMsgReconduire == true){
          this.ngOnInit();
          this.closeModal('custom-modal-5');
          this.toastr.success(this.dataReconduire.message, 'Succes', {
            timeOut: 3000,
          });
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
  objectif() {
    this.router.navigate(['accueil/detailperiodeobjectif'], {
      queryParams: {
        interimaire: JSON.stringify(this.item)
      }
    })
  } 
  
  evaluation() {
    this.router.navigate(['accueil/listeevaluation'], {
      queryParams: {
        interimaire: JSON.stringify(this.item)
      }
    })
  } 
  historiqueContrat() {
    this.router.navigate(['accueil/historiquecontrat'], {
      queryParams: {
        interimaire: JSON.stringify(this.item)
      }
    })
  } 

  searchManager() {
    this.otherService.searchInfoManager(this.searchForm.value.matricule).subscribe(
      data => {
        this.dataValidation = data;
        this.successMsgValider = this.dataValidation.status;
        if(this.successMsgValider == true) {
          this.validerForm.patchValue({responsable: this.searchForm.value.matricule});
          this.prenomManager = this.dataValidation.data.prenom;
          this.nomManager = this.dataValidation.data.nom;
          this.emailManager = this.dataValidation.data.email;
          this.telephoneManager = this.dataValidation.data.telephone;
          this.posteManager = this.dataValidation.data.poste;
          this.structureManager = this.dataValidation.data.structure;
        } else {
          this.messageVide = this.dataValidation.message;
        }
      }, error=> {
        this.errorMsg = error;
        this.toastr.error(this.errorMsg, 'Echec', {
          timeOut: 5000,
        });
      }
    )
  }

  validerInterimaire() {
    if(this.validerForm.valid) {
      this.otherService.validerInterimaire(this.validerForm.value, this.item).subscribe(
        data => {
          this.dataValidation = data;
          this.successMsgValider = this.dataValidation.status;
          if(this.successMsgValider == true) {
            this.ngOnInit();
            this.closeModal('custom-modal-8');
            this.toastr.success(this.dataValidation.message, 'Success', {
              timeOut: 3000,
            });
            //this.router.navigate(['accueil/souscontrat']);
          }
        }, error=> {
          this.errorMsg = error;
          this.toastr.error(this.errorMsg, 'Echec', {
            timeOut: 5000,
          });
        }
      )
    }
  }

  addemailInterimaire() {
    if(this.emailForm.valid) {
      this.otherService.addemailInterimaire(this.emailForm.value).subscribe(
        data => {
          this.dataValidation = data;
          this.successMsgValider = this.dataValidation.status;
          if(this.successMsgValider == true) {
            this.closeModal('custom-modal-9');
            this.ngOnInit();
            this.toastr.success(this.dataValidation.message, 'Success', {
              timeOut: 3000,
            });
            //this.closeModal('custom-modal-9');
          }
        }, error=> {
          this.errorMsg = error;
          this.toastr.error(this.errorMsg, 'Echec', {
            timeOut: 5000,
          });
        }
      )
    }
  }

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
    this.filenamecontrat = this.urlcontrat.name;
    let reader = new FileReader();
    reader.readAsDataURL( this.urlcontrat)
    reader.onload= ()=>{
    }
  }
  fichedeposte(e:any) {
    this.urlfichedeposte= e.files.item(0);
    this.filenamefichedeposte = this.urlfichedeposte.name;
    let reader = new FileReader();
    reader.readAsDataURL( this.urlfichedeposte)
    reader.onload= ()=>{
    }
  }
  procesVerbal(e:any) {
    this.urlProcesVerbal= e.files.item(0);
    this.filenameProceVerbal = this.urlProcesVerbal.name;
    let reader = new FileReader();
    reader.readAsDataURL( this.urlProcesVerbal)
    reader.onload= ()=>{
    }
  }
  arretContrat() {
    this.otherService.arreterContrat(this.dataInter.contrat.id, this.arretForm.value).subscribe(
      (response) =>{
        this.dataArret = response;
        this.successMsgArret = this.dataArret.status;
        if(this.successMsgArret == true) {
          this.closeModal('custom-modal-6');
          this.ngOnInit();
          this.toastr.success(this.dataArret.message, 'Success', {
            timeOut: 3000,
          });
        }
      },
      error=> {
        this.errorMsg = error;
        this.toastr.error(this.errorMsg, 'Echec', {
          timeOut: 5000,
        });
      }
    );
  }
  bloquerInterimaire() {
    this.otherService.bolquerInter(this.item, this.bannirForm.value).subscribe(
      (response) =>{
        this.dataBannir = response;
        this.successMsgBannir = this.dataBannir.status;
        if(this.successMsgBannir == true) {
          this.closeModal('custom-modal-7');
          this.ngOnInit();
          this.toastr.success(this.dataBannir.message, 'Success', {
            timeOut: 3000,
          });
        }
      }, error=> {
        this.errorMsg = error;
        this.toastr.error(this.errorMsg, 'Echec', {
          timeOut: 5000,
        });
      }
    );
  }
  openErrorModal(id: string) {
    this.errormodalService.open(id);
  }

  closeErrorModal(id: string) {
    this.errormodalService.close(id);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from 'src/app/modal/_modal';
import { DataService } from 'src/app/service/data.service';
import { OthersService } from 'src/app/services/others.service';
import { NgxFileSaverService } from '@clemox/ngx-file-saver';
import { ErrormodalService } from 'src/app/modal/_errormodals';
import { HttpClient } from '@angular/common/http';
import {Location} from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detailevaluation.',
  templateUrl: './detailevaluation.component.html',
  styleUrls: ['./detailevaluation.component.scss']
})
export class DetailevaluationComponent implements OnInit {

  item: any;
  id: any;
  public restant: any;
  public nombre = 59;
  public left: any;
  donnees: any;
  commentaireForm: FormGroup;
  page = 1
  itemsPerPage = 3;
  totalItems;
  dataInter:any;
  dataEvaluation: any;
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
  note;
  dateDebut;
  dateFin;
  societe;
  departement;
  service;
  direction;
  image;
  diplome;
  numeroPiece;
  commentaire;
  email;
  poste;
  matricule;
  salaireBrut;
  dateSignature;
  universite;
  sexe;
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
  datanote;
  fileContrat;
  fileFicheposte;
  fileProcesVerbal;
  etat;
  role;
  url3;
  interim_id;
  url2;
  filename3;
  interimaire_id;
  filename2;
  successMsgValider;
  successMsgReconduire;
  successMsgRenouveler;
  successMsgBannir;
  successMsgArret;
  objectif;
  public reqUrl = environment.base_url;
  errorMsg: any;
  commentaireInterimaire: any;
  namming: any;
  notation: any;
  isEvaluated: any;
  successMsg: any;
  isUpdated: any;
  constructor(private activeroute: ActivatedRoute,
              private modalService: ModalService,
              private otherService: OthersService,
              private errormodalService: ErrormodalService,
              public router: Router,
              private toastr: ToastrService,
              private location: Location,
              private fileSaver: NgxFileSaverService, ) { 
    this.activeroute.queryParams.subscribe(params => {
      this.item = JSON.parse(params["evaluation"]);
      if(this.role != 'INT') {
        this.interim_id = JSON.parse(params["interimaire"]);
      } else {
        this.interim_id = JSON.parse(localStorage.getItem('currentUser')).interimaire.id;
      }
      this.otherService.getOneInterById(this.interim_id).subscribe(
        data =>{
          this.data = data;
          console.log(data);
          
          this.dataInter = this.data.data;
          this.nom = this.dataInter.nom;
          this.prenom = this.dataInter.prenom;
        }
      );
    })
    
  }
  ngOnInit() {
    this.role = localStorage.getItem('user');
    this.commentaireForm = new FormGroup({
      commentaireInterimaire: new FormControl('')
    });
    this.otherService.getOneEvaluation(this.item, this.isEvaluated).subscribe(
      data =>{
        this.data = data;
        console.log(data);
        
        this.dataEvaluation = this.data.data;
        this.isUpdated = this.dataEvaluation.isUpdated;
        this.dateDebut = this.dataEvaluation.dateDebut;
        this.dateFin = this.dataEvaluation.dateFin;
        this.note = this.dataEvaluation.note;
        this.namming = this.dataEvaluation.libelle;
        this.commentaire = this.dataEvaluation.commentaireManager;
        this.commentaireInterimaire = this.dataEvaluation.commentaireInterimaire;
        this.notation = this.dataEvaluation.notation;
      }
    )
  }

  extraire() {
    this.otherService.extraireEvaluation(this.item).subscribe(
      data => {
        this.data = data;
        this.successMsg = this.data.status
        if(this.successMsg == true) {
          this.fileSaver.saveUrl(this.reqUrl + data.data, 'ExtractionEvaluation' + '-' + this.prenom + '-' + this.nom);
        }
      }
    )
  }

  backClicked() {
    this.location.back();
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  commenter() {
    this.otherService.commentaireInterimaire(this.item, this.commentaireForm.value).subscribe(
      data =>{
        this.data = data;
        this.successMsg = this.data.status;
        if(this.successMsg == true) {
          this.ngOnInit();
          this.closeModal('custom-modal-6');
          this.toastr.success(this.data.message, 'Success', {
            timeOut: 3000,
          });
        }
      },
      error=> {
        this.errorMsg = error;
        this.closeModal('custom-modal-6');
        this.toastr.error(this.errorMsg, 'Echec', {
          timeOut: 5000,
        });
      }
    )
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
  
  openObjectif() {
    this.router.navigate(['accueil/objectif'], {
      queryParams: {
        interimaire: JSON.stringify(this.item)
      }
    })
  } 

  reconduireobjectif() {
    this.router.navigate(['accueil/reconduireobjectif'], {
      queryParams: {
        interimaire: JSON.stringify(this.interim_id),
        periodeobjectif: JSON.stringify(this.item),
      }
    })
  }

  ModifierEvaluation() {
    this.router.navigate(['/accueil/modifevaluer'], {
      queryParams: {
        interimaire: JSON.stringify(this.interim_id),
        evaluation: JSON.stringify(this.item),
      }
    })
  }

  openEvaluer() {
    this.router.navigate(['/accueil/evaluer'], {
      queryParams: {
        interimaire: JSON.stringify(this.interim_id),
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

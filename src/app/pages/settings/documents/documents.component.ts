import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxFileSaverService } from '@clemox/ngx-file-saver';
import { OthersService } from 'src/app/services/others.service';
import { environment } from 'src/environments/environment';
import {Location} from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  item: any;
  page = 1
  itemsPerPage = 4;
  dataInter:any;
  dataContrat: any;
  documentForm: FormGroup;
  contratDoc;
  fichePosteDoc=""
  proceVerbalDoc="";
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
  domaine;
  poste;
  role;
  public reqUrl = environment.base_url;
  evaluations: any;
  totalItems: any;
  interim_id: any;
  doc = '../../../../assets/doc/2.pdf';
  documents: any;
  fileRead = '../../../../assets/doc/GDI_GestionDesInterimaires.pdf';
  document: any;
  successMsg: any;
  errorMsg: any;
  filename: any;
  dataTypeDocument: any;
  constructor(private activeroute: ActivatedRoute,
              private otherService: OthersService,
              private fileSaver: NgxFileSaverService,
              private http: HttpClient,
              private location: Location,
              private toastr: ToastrService,
              public router: Router,) { 
    this.activeroute.queryParams.subscribe(params => {
      this.item = JSON.parse(params["contrat"]);
      this.interim_id = JSON.parse(params["interimaire"]);
      this.otherService.getOneInterById(this.interim_id).subscribe(
          data =>{
            this.data = data;
            this.dataInter = this.data.data;
            this.nom = this.dataInter.nom;
            this.prenom = this.dataInter.prenom;
        }
      );
    })

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
      })
    
  }
  ngOnInit() {
    this.documentForm = new FormGroup({
      interimareId: new FormControl(''),
      typeDocumentId: new FormControl(''),
      document: new FormControl(''),
      contratId: new FormControl('')
    })
    this.role = localStorage.getItem('user')
    this.otherService.getTypeDocuments().subscribe(
      result=>{
        this.dataTypeDocument = result.data;
      }
    )
  }

  backClicked() {
    this.location.back();
  }
  
  readFile(p) {
    this.fileRead = p;
  }

  public getFile(p) {
    console.log(p);
    
    this.fileSaver.saveUrl(p, 'Fichier');
  }
  public getContrat() {
    this.fileSaver.saveUrl(this.contratDoc, 'contrat');
  }

  public getFicheDePoste() {
    this.fileSaver.saveUrl(this.fichePosteDoc, 'fiche de Poste');
  }

  addDocument(e: any) {
    this.document= e.files.item(0);
    this.filename = this.document.name;
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
          this.toastr.success('Document a été ajouté', 'Success', {
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
}

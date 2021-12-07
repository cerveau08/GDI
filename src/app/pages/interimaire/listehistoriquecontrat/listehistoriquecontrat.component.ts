import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { OthersService } from 'src/app/services/others.service';
import { ModalService } from 'src/app/modal/_modal';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrormodalService } from 'src/app/modal/_errormodals';
import { HttpClient } from '@angular/common/http';
import {Location} from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listehistoriquecontrat',
  templateUrl: './listehistoriquecontrat.component.html',
  styleUrls: ['./listehistoriquecontrat.component.scss']
})
export class ListehistoriquecontratComponent implements OnInit {

  
  role;
  commentaire;
  objectif;
  item;
  id;
  histoContrat;
  data;
  interimaire;
  prenom;
  note;
  nom;
  isData = true;
  successMsg;
  objectifForm: FormGroup;
  noteForm: FormGroup;
  modifierForm: FormGroup;
  titremodif;
  descriptionmodif;
  page = 1;
  itemsPerPage = 4;
  totalItems : any;
  interimConnect;
  public reqUrl = environment.base_url;
  errorMsg: any;
  dataInter;
  contratForm: FormGroup;
  filenamecontrat: any;
  urlcontrat: any;
  urlfichedeposte: any;
  filenamefichedeposte: any;
  urlProcesVerbal: any;
  filenameProceVerbal: any;
  dataRenouveler: any;
  successMsgRenouveler: any;
  dataSociete: any;
  dataCategorie: any;
  dataDomaine: any;
  listeFonction: any;
  region = null;
  dataSite: any;
  salaireBrut: any;
  constructor(private otherService: OthersService,
    private modalService: ModalService,
    private activeroute: ActivatedRoute,
    private location: Location,
    private errormodalService: ErrormodalService,
    private http: HttpClient,
    private router: Router, 
    private toastr: ToastrService) {
    this.activeroute.queryParams.subscribe(params => {
      this.item = JSON.parse(params["interimaire"]);
    });
  }

  ngOnInit() {
    this.role = localStorage.getItem('user');
    this.otherService.getOneInterById(this.item).subscribe(
      data =>{
        this.data = data;
        this.dataInter = this.data.data;
        this.nom = this.dataInter.nom;
        this.prenom = this.dataInter.prenom;
      }
    );
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
    this.otherService.listeSite(this.page, 999, this.region).subscribe(
      data => {
        this.dataSite = data.data;
      }
    )
    this.otherService.getDomaine().subscribe(data => this.dataDomaine = data["data"]);
    this.otherService.getFonctions().subscribe(data => this.listeFonction = data.data);
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
    this.gty(this.page);
    this.onChanges()
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

  renouvelerContrat(contrat) {
    this.contratForm.patchValue({interimaireId: this.item});
    const formdata = new FormData();
    formdata.append("societeId",this.contratForm.value.societeId);
    formdata.append("contrat_id", contrat);
    //formdata.append("structureId",this.contratForm.value.structureId);
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
    formdata.append("observation",this.contratForm.value.observation);
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

  backClicked() {
    this.location.back();
  }

  gty(page: any){
    this.http.get(this.reqUrl + `/histoContratInterimaire/${this.item}?page=${page}&limit=${this.itemsPerPage}`).subscribe((data: any) => {
      this.data = data ;
      this.totalItems = data.total;
      this.histoContrat = this.data.data["contrats"];
      if(this.data.code == 500) {
        this.isData = false;
      }
    })
  }

  openDetail(data) {
    this.router.navigate(['/accueil/detailcontrat'], {
      queryParams: {
        contrat: JSON.stringify(data),
        interimaire: JSON.stringify(this.item)
      }
    })
  }

  openModal(id: string) {
    this.modalService.open(id);
  }
  
  closeModal(id: string) {
    this.modalService.close(id);
  }

  openErrorModal(id: string) {
    this.errormodalService.open(id);
  }

  closeErrorModal(id: string) {
    this.errormodalService.close(id);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { OthersService } from 'src/app/services/others.service';
import { ModalService } from 'src/app/modal/_modal';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrormodalService } from 'src/app/modal/_errormodals';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modif-evaluer',
  templateUrl: './modif-evaluer.component.html',
  styleUrls: ['./modif-evaluer.component.scss']
})
export class ModifEvaluerComponent implements OnInit {

  role;
  commentaire;
  objectif;
  item;
  interim_id;
  evaluation_id;
  data;
  interimaire;
  prenon;
  prenom;
  evaluerForm: FormGroup;
  note;
  nom;
  libelle;
  successMsg;
  objectifForm: FormGroup;
  noteForm: FormGroup;
  modifierForm: FormGroup;
  titremodif;
  descriptionmodif;
  dataEvaluation;
  dateDebut;
  dateFin;
  page = 1;
  itemsPerPage = 2;
  totalItems : any;
  dataInter;
  interimConnect;
  public reqUrl = environment.base_url;
  errorMsg: any;
  constructor(private otherService: OthersService,
    private modalService: ModalService,
    private activeroute: ActivatedRoute,
    private errormodalService: ErrormodalService,
    private http: HttpClient,
    private formBuilder: FormBuilder) {
    this.activeroute.queryParams.subscribe(params => {
      this.interim_id = JSON.parse(params["interimaire"]);
      this.evaluation_id = JSON.parse(params["evaluation"]);
    });
    this.evaluerForm = this.formBuilder.group({
      interimaireId: ['', Validators.required],
      comentaire: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      libelle: ['', Validators.required],
      notation: this.formBuilder.array([
        {
          objectifId: new FormControl(''),
          commentaire: new FormControl(''),
          note: new FormControl('')
        }
      ]),
    });
    this.otherService.getOneInterById(this.interim_id).subscribe(
      data =>{
        this.data = data;
        this.dataInter = this.data.data;
        console.log(this.dataInter);
        this.nom = this.dataInter.nom;
        this.prenom = this.dataInter.prenom;
      },
      error=> {
        this.errorMsg = error;
        this.errormodalService.open('error-modal-1');
        console.log(error)
      }
    );
  }

  ngOnInit() {
    this.role = localStorage.getItem('user');
    this.objectifForm = new FormGroup({
      titre: new FormControl(''),
      description: new FormControl(''),
      interimaire: new FormControl(''),
      structure_id: new FormControl(''),
      bareme: new FormControl(''),
      date_objectif: new FormControl('')
    });
    this.otherService.getOneEvaluation(this.evaluation_id).subscribe(
      data =>{
        this.data = data;
        console.log(data);
        this.dataEvaluation = this.data.data;
        this.dateDebut = this.dataEvaluation.dateDebut;
        this.dateFin = this.dataEvaluation.dateFin;
        this.note = this.dataEvaluation.note;
        this.libelle = this.dataEvaluation.libelle;
        this.commentaire = this.dataEvaluation.commentaire;
        console.log(this.dataEvaluation);
      }
    )
    this.gty(this.page);
  }

  gty(page: any){
    this.http.get(this.reqUrl + `/objectif/${this.interim_id}/${this.evaluation_id}?page=${page}&limit=${this.itemsPerPage}`).subscribe((data: any) => {
      this.data = data
      this.totalItems = data.total;
      console.log(data);
      this.objectif = this.data["data"];
      this.evaluerForm = this.formBuilder.group({
        interimaireId: this.item,
        comentaire: ['', Validators.required],
        dateDebut: ['', Validators.required],
        dateFin: ['', Validators.required],
        libelle: ['', Validators.required],
        notation: this.formBuilder.array(
          this.objectif.map(x => this.formBuilder.group({
            objectifId: [x.id, [Validators.required, Validators.minLength(1)]],
            note: [x.first_name, [Validators.required, Validators.minLength(1)]],
            commentaire: [x.last_name, [Validators.required, Validators.minLength(2)]]
          }))
        )
      })
    }, error=> {
      this.errorMsg = error;
      this.errormodalService.open('error-modal-1');
      console.log(error)
    })
  }

  evaluer() {
    console.log(this.evaluerForm.value);
    this.otherService.evaluer(this.evaluerForm.value).subscribe(
      data =>{
        console.log(data);
        this.data = data;
        this.successMsg = this.data.status
        if(this.successMsg == true) {
          this.ngOnInit();
        }
      },
      error=> {
        this.errorMsg = error;
        this.errormodalService.open('error-modal-1');
        console.log(error)
      }
    )
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

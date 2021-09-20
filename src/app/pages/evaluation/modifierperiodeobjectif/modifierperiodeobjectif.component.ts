import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { OthersService } from 'src/app/services/others.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrormodalService } from 'src/app/modal/_errormodals';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import {Location} from '@angular/common';

@Component({
  selector: 'app-modifierperiodeobjectif',
  templateUrl: './modifierperiodeobjectif.component.html',
  styleUrls: ['./modifierperiodeobjectif.component.scss']
})
export class ModifierperiodeobjectifComponent implements OnInit {

  
  role;
  commentaire;
  objectif;
  item;
  data;
  interimaire;
  prenon;
  prenom;
  evaluationHeadForm: FormGroup;
  objectifsForm: FormGroup;
  note;
  nom;
  successMsg;
  titremodif;
  descriptionmodif;
  page = 1;
  itemsPerPage = 10;
  totalItems : any;
  dataInter;
  interimConnect;
  public reqUrl = environment.base_url;
  errorMsg: any;
  detailobjectif;
  mesgError: any;
  periodeId: any;
  detailPeriode: any;
  nomPeriode: any;
  dateDebutPeriode: any;
  dateFinPeriode: any;
  statutPeriode: any;
  namming: any;
  dateDebut: any;
  dateFin: any;
  evaluationForm: FormGroup;
  nombreMax: number;
  showAdd = true;
  isEvaluated = false;
  notations: any;
  libelle: any;
  evaluationId: any;
  constructor(private otherService: OthersService,
    private activeroute: ActivatedRoute,
    private router: Router,
    private location: Location,
    private formBuilder: FormBuilder,
    private toastr: ToastrService) {
    this.activeroute.queryParams.subscribe(params => {
      this.item = JSON.parse(params["interimaire"]);
      this.objectifsForm = this.formBuilder.group({
        dateDebut: ['', Validators.required],
        interimaireId: ['', Validators.required],
        idEvaluation: ['', Validators.required],
        dateFin: ['', Validators.required],
        namming: ['', Validators.required],
        objectifs: this.formBuilder.array([]),
      });
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

    this.evaluationForm = new FormGroup({
      evaluationId: new FormControl(''),
    });

    this.gty(this.page);

    this.evaluationHeadForm = this.formBuilder.group({
      dateDebut: ['', Validators.required],
      interimaireId: ['', Validators.required],
      dateFin: ['', Validators.required],
      namming: ['', Validators.required],
    });
  }

  gty(page: any){
    this.otherService.getListeEvaluation(this.item, page, this.itemsPerPage, this.isEvaluated).subscribe(
      data => {
        this.data = data
        this.detailPeriode = this.data["data"];
        this.evaluationId = this.detailPeriode[0].id;
        this.evaluationForm.patchValue({evaluationId: this.evaluationId})
        this.namming = this.detailPeriode[0].libelle;
        this.dateDebut = this.detailPeriode[0].dateDebut;
        this.dateFin = this.detailPeriode[0].dateFin;
        this.notations = this.detailPeriode[0].notation;
        this.objectifsForm = this.formBuilder.group({
          dateDebut: ['', Validators.required],
          dateFin: ['', Validators.required],
          namming: ['', Validators.required],
          interimaireId: this.item,
          idEvaluation: this.evaluationId,
          objectifs: this.formBuilder.array(
            this.notations.map(x => this.formBuilder.group({
              id: [x.objectif.id, [Validators.required, Validators.minLength(1)]],
              bareme: [x.objectif.bareme, [Validators.required, Validators.minLength(1)]],
              titre: [x.objectif.titre, [Validators.required, Validators.minLength(1)]],
              description: [x.objectif.description, [Validators.required, Validators.minLength(2)]],
              indicateur: [x.objectif.indicateur, [Validators.required, Validators.minLength(1)]],
              valeurCible: [x.objectif.valeurCible, [Validators.required, Validators.minLength(1)]],
            }))
          )
        })
      }
    );
  }

  backClicked() {
    this.location.back();
  }

  get objectifs() : FormArray {
    return this.objectifsForm.get("objectifs") as FormArray
  }

  newObjectif(): FormGroup {
    return this.formBuilder.group({
      id: new FormControl('null'),
      bareme: new FormControl(''),
      titre: new FormControl(''),
      description: new FormControl(''),
      indicateur: new FormControl(''),
      valeurCible: new FormControl(''),
    })
  }

  addObjectif() {
    this.objectifs.push(this.newObjectif());
    this.nombreMax = this.objectifs.length;
    if( this.nombreMax === 10) {
      this.showAdd = false;
    }
  }

  removeobjectif(i:number) {
    this.objectifs.removeAt(i);
  }

  ajouterObjectifs() {
    this.objectifsForm.patchValue({
      dateDebut: this.evaluationHeadForm.value.dateDebut,
      dateFin: this.evaluationHeadForm.value.dateFin,
      namming: this.evaluationHeadForm.value.namming,
    })
    console.log(this.objectifsForm.value);
    
    this.otherService.modifierObjectif(this.objectifsForm.value, this.item).subscribe(
      data =>{
        this.data = data;
        this.successMsg = this.data.status
        if(this.successMsg == true) {
          this.toastr.success(this.data.message, 'Success', {
            timeOut: 3000,
          });
          this.router.navigate(['/accueil/detailperiodeobjectif'], {
            queryParams: {
              interimaire: JSON.stringify(this.item),
              periode: JSON.stringify(this.periodeId),
            }
          })
        } else {
          this.mesgError = this.data.message;
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

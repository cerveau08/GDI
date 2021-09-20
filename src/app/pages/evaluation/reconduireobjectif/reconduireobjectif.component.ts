import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrormodalService } from 'src/app/modal/_errormodals';
import { OthersService } from 'src/app/services/others.service';
import { environment } from 'src/environments/environment';
import {Location} from '@angular/common';

@Component({
  selector: 'app-reconduireobjectif',
  templateUrl: './reconduireobjectif.component.html',
  styleUrls: ['./reconduireobjectif.component.scss']
})
export class ReconduireobjectifComponent implements OnInit {

  
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
  isEvaluated = null;
  notations: any;
  libelle: any;
  evaluationId: any;
  periode_objectif: any;
  constructor(private otherService: OthersService,
    private activeroute: ActivatedRoute,
    private router: Router,
    private location: Location,
    private formBuilder: FormBuilder,
    private toastr: ToastrService) {
    this.activeroute.queryParams.subscribe(params => {
      this.objectifsForm = this.formBuilder.group({
        dateDebut: ['', Validators.required],
        dateFin: ['', Validators.required],
        namming: ['', Validators.required],
        objectifs: this.formBuilder.array([]),
      });
      this.item = JSON.parse(params["interimaire"]);
      this.periode_objectif = JSON.parse(params["periodeobjectif"]);
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

    this.evaluationHeadForm = this.formBuilder.group({
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      namming: ['', Validators.required],
    });

    this.evaluationForm = new FormGroup({
      evaluationId: new FormControl(''),
    });

    this.otherService.getOneEvaluation(this.periode_objectif, this.isEvaluated).subscribe(
      data => {
        console.log(data);
      }
    )

    this.gty(this.page);

    
  }

  gty(page: any){
    this.otherService.getOneEvaluation(this.periode_objectif, this.isEvaluated).subscribe(
      data => {
        this.data = data
        this.detailPeriode = this.data.data;
        this.evaluationId = this.detailPeriode.id;
        this.evaluationForm.patchValue({evaluationId: this.evaluationId})
        this.namming = this.detailPeriode.libelle;
        this.dateDebut = this.detailPeriode.dateDebut;
        this.dateFin = this.detailPeriode.dateFin;
        this.notations = this.detailPeriode.notation;
        this.objectifsForm = this.formBuilder.group({
          dateDebut: ['', Validators.required],
          dateFin: ['', Validators.required],
          namming: ['', Validators.required],
          objectifs: this.formBuilder.array(
            this.notations.map(x => this.formBuilder.group({
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
    this.otherService.addObjectifs(this.objectifsForm.value, this.item).subscribe(
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

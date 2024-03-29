import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { OthersService } from 'src/app/services/others.service';
import { ModalService } from 'src/app/modal/_modal';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-evaluer',
  templateUrl: './evaluer.component.html',
  styleUrls: ['./evaluer.component.scss']
})
export class EvaluerComponent implements OnInit {

  role;
  commentaire;
  objectif;
  item;
  data;
  interimaire;
  prenon;
  prenom;
  filterForm: FormGroup;
  evaluerForm: FormGroup;
  note;
  nom;
  successMsg;
  objectifForm: FormGroup;
  evaluationForm: FormGroup;
  noteForm: FormGroup;
  modifierForm: FormGroup;
  titremodif;
  descriptionmodif;
  page = 1;
  itemsPerPage = 10;
  itemPeriode = 999;
  totalItems : any;
  dataInter;
  interimConnect;
  public reqUrl = environment.base_url;
  errorMsg: any;
  detailNotation;
  scrHeight: any;
  scrWidth: any;
  heightForm: number;
  periodeobjectif: any;
  idPeriode = null;
  isEvaluated = false;
  periode: any;
  firstPeriodeAEvaluerNamming: any;
  firstPeriodeAEvaluerDateDebut: any;
  firstPeriodeAEvaluerDateFin: any;
  periodeId: any;
  periodeNamming: any;
  periodeDateDebut: any;
  periodeDateFin: any;
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    this.heightForm = this.scrHeight - 290;
  }
  constructor(private otherService: OthersService,
    private modalService: ModalService,
    private activeroute: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService) {
    this.activeroute.queryParams.subscribe(params => {
      this.item = JSON.parse(params["interimaire"]);
    });
    this.getScreenSize();
    this.evaluerForm = this.formBuilder.group({
      idPeriode: ['', Validators.required],
      interimaireId: ['', Validators.required],
      commentaire: ['', Validators.required],
      notation: this.formBuilder.array([
        {
          objectifId: new FormControl(''),
          commentaire: new FormControl(''),
          note: new FormControl(''),
          bareme: new FormControl('')
        }
      ]),
    });
    this.otherService.getOneInterById(this.item).subscribe(
      data =>{
        this.data = data;
        this.dataInter = this.data.data;
        this.nom = this.dataInter.nom;
        this.prenom = this.dataInter.prenom;
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
    this.noteForm = new FormGroup({
      note: new FormControl(''),
      commentaire: new FormControl('')
    });
    this.filterForm = new FormGroup({
      periode: new FormControl(''),
    });
    this.evaluationForm = new FormGroup({
      evaluationId: new FormControl(''),
    });
    this.modifierForm = new FormGroup({
      titre: new FormControl(''),
      description: new FormControl('')
    });
    this.gty(this.idPeriode);
    this.onChanges();
  }

  onChanges(): void {
    this.filterForm.get('periode').valueChanges.subscribe(val => {
      if (val) {
        this.gty(val);
      }
    });
  }

  backClicked() {
    this.location.back();
  }

  gty(idPeriode){
    this.otherService.getListeEvaluation(this.item, this.page, this.itemsPerPage, this.isEvaluated).subscribe(
      data => {
        this.data = data
        this.periodeobjectif = this.data["data"];
        this.periode = this.periodeobjectif[0].id;
        this.evaluationForm.patchValue({evaluationId: this.periode })
        this.periodeNamming = this.periodeobjectif[0].libelle;
        this.periodeDateDebut = this.periodeobjectif[0].dateDebut;
        this.periodeDateFin = this.periodeobjectif[0].dateFin;
        this.objectif = this.periodeobjectif[0].notation;
        this.evaluerForm = this.formBuilder.group({
          idPeriode: idPeriode,
          interimaireId: this.item,
          commentaire: ['', Validators.required],
          notation: this.formBuilder.array(
            this.objectif.map(x => this.formBuilder.group({
              id: [x.id, [Validators.required, Validators.minLength(1)]],
              objectifId: [x.objectifId, [Validators.required, Validators.minLength(1)]],
              note: ['', [Validators.required, Validators.minLength(1)]],
              commentaire: ['', [Validators.required, Validators.minLength(2)]],
              bareme: [x.objectifBareme, [Validators.required, Validators.minLength(1)]],
            }))
          )
        })
      }
    );
  }

  addObject() {
    this.otherService.addObjectifs(this.objectifForm.value, this.item).subscribe(
      data =>{
        this.data = data;
        this.successMsg = this.data.status;
        if(this.successMsg == true) {
          this.ngOnInit();
          this.closeModal('objectif-modal-1');
        }
      }, error=> {
        this.errorMsg = error;
        this.closeModal('objectif-modal-1');
        this.toastr.error(this.errorMsg, 'Echec', {
         timeOut: 5000,
        });
      }
    );
  }

  evaluer() {
    this.detailNotation = this.evaluerForm.value.notation;
    this.detailNotation.forEach((currentValue, index) => {
      if(!currentValue.note || currentValue.note == null || currentValue.note == "") {
          this.detailNotation.splice(index, 1);
      }
    });
    this.otherService.updateEvaluation(this.evaluerForm.value, this.evaluationForm.value.evaluationId).subscribe(
      data =>{
        this.data = data;
        this.successMsg = this.data.status
        if(this.successMsg == true) {
          this.toastr.success(this.data.message, 'Success', {
            timeOut: 3000,
          });
          this.router.navigate(['/accueil/listeevaluation'], {
            queryParams: {
              interimaire: JSON.stringify(this.item),
            }
          })
        }
      }, error=> {
        this.errorMsg = error;
        this.toastr.error(this.errorMsg, 'Echec', {
         timeOut: 5000,
        });
      }
    )
  }

  notezObjectif(id) {
    this.otherService.notezObjectif(this.noteForm.value, id).subscribe(
      data =>{
        this.data = data;
        this.successMsg = this.data.status
        if(this.successMsg == true) {
          this.ngOnInit();
          this.closeModal('custom-modal-'+id);
        }
      }, error => {
        this.errorMsg = error;
        this.closeModal('custom-modal-'+id);
        this.toastr.error(this.errorMsg, 'Echec', {
         timeOut: 5000,
        });
      }
    )
  }
  modifierObjectif(id) {
    this.otherService.modifierObjectif(this.modifierForm.value, id).subscribe(
      data => {
        this.data = data;
        this.successMsg = this.data.status
        if(this.successMsg == true) {
          this.ngOnInit();
          this.closeModal('custom-modal-'+id);
        }
      },
      error => {
        this.errorMsg = error;
        this.closeModal('custom-modal-'+id);
        this.toastr.error(this.errorMsg, 'Echec', {
          timeOut: 5000,
        });
      }
    )
  }
  openModal(id: string) {
    this.modalService.open(id);
  }
  
  closeModal(id: string) {
    this.modalService.close(id);
  }

}

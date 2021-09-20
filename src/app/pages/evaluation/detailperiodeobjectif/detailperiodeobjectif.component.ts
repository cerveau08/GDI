import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { OthersService } from 'src/app/services/others.service';
import { ModalService } from 'src/app/modal/_modal';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {Location} from '@angular/common';

@Component({
  selector: 'app-detailperiodeobjectif',
  templateUrl: './detailperiodeobjectif.component.html',
  styleUrls: ['./detailperiodeobjectif.component.scss']
})
export class DetailperiodeobjectifComponent implements OnInit {

  
  role;
  commentaire;
  objectif;
  item;
  data;
  interimaire;
  prenom;
  note;
  nom;
  successMsg;
  filterForm: FormGroup;
  objectifForm: FormGroup;
  noteForm: FormGroup;
  modifierForm: FormGroup;
  titremodif;
  descriptionmodif;
  page = 1;
  itemsPerPage = 3;
  itemPeriode = 999;
  totalItems : any;
  interimConnect;
  public reqUrl = environment.base_url;
  errorMsg: any;
  periode = null;
  periodeobjectif: any;
  mesgError: any;
  isEvaluated = false;
  periodeId: any;
  detailPeriode: any;
  nomPeriode: any;
  dateDebutPeriode: any;
  dateFinPeriode: any;
  statutPeriode: any;
  notation: any;
  idEvaluation: any;
  constructor(private otherService: OthersService,
    private modalService: ModalService,
    private activeroute: ActivatedRoute,
    private router: Router,
    private location: Location,
    private toastr: ToastrService) {
    this.activeroute.queryParams.subscribe(params => {
      this.item = JSON.parse(params["interimaire"]);
    });
  }

  ngOnInit() {
    this.role = localStorage.getItem('user');
    this.otherService.getListeEvaluation(this.item, this.page, this.itemsPerPage, this.isEvaluated).subscribe(
      data => {
        this.data = data
        this.detailPeriode = this.data["data"];
        this.idEvaluation = this.detailPeriode[0].id;
        this.nomPeriode = this.detailPeriode[0].libelle;
        this.dateDebutPeriode = this.detailPeriode[0].dateDebut;
        this.dateFinPeriode = this.detailPeriode[0].dateFin;
        this.statutPeriode = this.detailPeriode[0].isEvaluated;
        this.objectif = this.detailPeriode[0].notation;
      }
    );
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
    this.modifierForm = new FormGroup({
      titre: new FormControl(''),
      description: new FormControl('')
    });
    this.otherService.getOneInterById(this.item).subscribe(
      data =>{
        this.interimaire = data;
        this.nom = this.interimaire.data.nom;
        this.prenom = this.interimaire.data.prenom;
        this.objectifForm.patchValue({
          structure_id: this.interimaire.data.structure.id,
          interimaire: this.item
        });
      }
    );
  }

  backClicked() {
    this.location.back();
  }

  addObject() {
    this.otherService.addObjectifs(this.objectifForm.value, this.item).subscribe(
      data =>{
        this.data = data;
        this.successMsg = this.data.status
        if(this.successMsg == true) {
          this.ngOnInit();
          this.closeModal('objectif-modal-1');
        } else {
          this.mesgError = this.data.message;
        }
      },
      error=> {
        this.errorMsg = error;
        this.closeModal('objectif-modal-1');
        this.toastr.error(this.errorMsg, 'Echec', {
          timeOut: 5000,
        });
      }
    );
  }

  modifierObjectif(id) {
    this.otherService.modifierObjectif(this.modifierForm.value, id).subscribe(
      data =>{
        this.data = data;
        this.successMsg = this.data.status
        if(this.successMsg == true) {
          this.ngOnInit();
          this.closeModal('custom-modal-'+id);
          this.toastr.success(this.data.message, 'Success', {
            timeOut: 3000,
          });
        }
      },
      error=> {
        this.errorMsg = error;
        this.closeModal('custom-modal-'+id);
        this.toastr.error(this.errorMsg, 'Echec', {
          timeOut: 5000,
        });
      }
    )
  }

  openModifierObjectif() {
    this.router.navigate(['/accueil/modifperiodeobjectif/'], {
      queryParams: {
        interimaire: JSON.stringify(this.item),
      }
    });
  }

  reconduireobjectif(p) {
    this.router.navigate(['accueil/reconduireobjectif'], {
      queryParams: {
        interimaire: JSON.stringify(this.item),
        periodeobjectif: JSON.stringify(p),
      }
    })
  }

  listeperiodeobjectif() {
    this.router.navigate(['accueil/listeperiodeobjectif'], {
      queryParams: {
        interimaire: JSON.stringify(this.item),
      }
    })
  }
  openAddObjectif() {
    this.router.navigate(['/accueil/addobjectif/'], {
      queryParams: {
        interimaire: JSON.stringify(this.item),
        periode: JSON.stringify(this.periodeId),
      }
    })
  }

  openListePeriodeObjectif() {
    this.router.navigate(['/accueil/listeperiodeobjectif/'], {
      queryParams: {
        interimaire: JSON.stringify(this.item),
      }
    })
  }
  
  openModal(id: string) {
    this.modalService.open(id);
  }
  
  closeModal(id: string) {
    this.modalService.close(id);
  }
}

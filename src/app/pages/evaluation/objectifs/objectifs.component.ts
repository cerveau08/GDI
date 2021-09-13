import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup } from '@angular/forms';
import { OthersService } from 'src/app/services/others.service';
import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from 'src/app/modal/_modal';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ErrormodalService } from 'src/app/modal/_errormodals';
import {Location} from '@angular/common';

@Component({
  selector: 'app-objectifs',
  templateUrl: './objectifs.component.html',
  styleUrls: ['./objectifs.component.scss']
})
export class ObjectifsComponent implements OnInit {

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
  totalItems : any;
  interimConnect;
  public reqUrl = environment.base_url;
  errorMsg: any;
  periode = null;
  periodeobjectif: any;
  mesgError: any;
  constructor(private otherService: OthersService,
    private modalService: ModalService,
    private activeroute: ActivatedRoute,
    private errormodalService: ErrormodalService,
    private http: HttpClient,
    private router: Router,
    private location: Location,
    private toastr: ToastrService) {
    this.activeroute.queryParams.subscribe(params => {
      this.item = JSON.parse(params["interimaire"]);
    });
  }

  ngOnInit() {
    this.role = localStorage.getItem('user');
    this.otherService.getPeriodeObjectif(this.item).subscribe(
      data => {
        this.data = data
        this.periodeobjectif = this.data["data"];
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
    this.gty(this.page);
  }

  backClicked() {
    this.location.back();
  }

  gty(page: any){
    if(this.filterForm.value.periode) {
      this.periode = this.filterForm.value.periode
    } else {
      this.periode = null
    }
    this.otherService.getListeObjectif(this.item, page, this.itemsPerPage, this.periode).subscribe((data: any) => {
      this.data = data
      this.totalItems = data.total;
      this.objectif = this.data["data"];
    })
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

  notezObjectif(id) {
    this.otherService.notezObjectif(this.noteForm.value, id).subscribe(
      data =>{
        this.data = data;
        this.successMsg = this.data.status
        if(this.successMsg == true) {
          this.ngOnInit();
          this.closeModal('custom-modal-'+id);
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

  openAddObjectif() {
    this.router.navigate(['/accueil/addobjectif/'], {
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

  openErrorModal(id: string) {
    this.errormodalService.open(id);
  }

  closeErrorModal(id: string) {
    this.errormodalService.close(id);
  }

}

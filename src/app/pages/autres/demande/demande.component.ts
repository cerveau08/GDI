import { ToastrService } from 'ngx-toastr';
import { OthersService } from 'src/app/services/others.service';
import { PaginationService } from '../../../service/pagination.service';
import { DataService } from '../../../service/data.service';
import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/modal/_modal/modal.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ErrormodalService } from 'src/app/modal/_errormodals';


@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.scss']
})
export class DemandeComponent implements OnInit {

  demandes;
  demandeForm: FormGroup;
  currentUser;
  public datas: any;
  filterterm: string;
  dataDemande;
  pagedItems: any[];
  page = 1;
  itemsPerPage = 7;
  totalItems : any;
  public reqUrl = environment.base_url;
  showHome = true;
  user;
  data;
  successMsg;
  errorMsg: any;
  etat = null;
  type = null;
  filterForm: FormGroup;
  listeEtat: { id: string; etat: string; }[];
  listeDemande: any;
  constructor(private modalService: ModalService, 
    private otherService: OthersService,
    private errormodalService: ErrormodalService,
    private http: HttpClient,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.user = localStorage.getItem('user');
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(this.user == 'inter') {
      this.showHome = false;
    } else {
      this.showHome = true;
    }
    this.listeEtat = [
      {
        id: '1',
        etat: 'validé'
      },{
        id: '0',
        etat: 'en attente'
      }
    ];
    this.otherService.getTypeDemande().subscribe((data: any) => {
      this.listeDemande =  data.data;
    })
    this.filterForm = new FormGroup({
      type: new FormControl(''),
      direction: new FormControl(''),
      agence: new FormControl(''),
      etat: new FormControl('')
    });

    this.otherService.getTypeDemande().subscribe(
      data => {
        this.demandes = data.data;
      }
    )
    this.demandeForm = new FormGroup({
      type: new FormControl (''),
      dateDebut: new FormControl(''),
      dateFin: new FormControl (''),
      motif: new FormControl(''),
      description: new FormControl(''),
    });
    this.gty(this.page);
  }

  gty(page: any){
    if (this.filterForm.value.type == undefined || this.filterForm.value.type == null) {
      this.type = ''
    }
    if(this.filterForm.value.type) {
      this.type = this.filterForm.value.type;
    }
    if (this.filterForm.value.etat == undefined || this.filterForm.value.etat == null) {
      this.etat = ''
    }
    if(this.filterForm.value.etat) {
      this.etat = this.filterForm.value.etat;
    }
    this.otherService.getListedesDemande(page, this.itemsPerPage, this.type, this.etat).subscribe((data: any) => {
      this.dataDemande =  data.data;
      this.totalItems = data.total;
    })
  }
  onSubmit() {
    this.otherService.addDemande(this.demandeForm.value).subscribe(
      data =>{
        this.data = data;
        this.successMsg = this.data.status
        if (this.successMsg == true) {
          this.ngOnInit();
          this.closeModal('custom-modal-8');
            this.toastr.success('Demande ajouté avec success', 'Success', {
             timeOut: 3000,
            });
        }
      }, error=> {
        this.errorMsg = error;
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
  openErrorModal(id: string) {
    this.errormodalService.open(id);
  }

  closeErrorModal(id: string) {
    this.errormodalService.close(id);
  }
}

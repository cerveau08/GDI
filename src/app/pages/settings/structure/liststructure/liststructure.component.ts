import { HttpClient } from '@angular/common/http';
import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrormodalService } from 'src/app/modal/_errormodals/errormodal.service';
import { ModalService } from 'src/app/modal/_modal';
import { OthersService } from 'src/app/services/others.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-liststructure',
  templateUrl: './liststructure.component.html',
  styleUrls: ['./liststructure.component.scss']
})
export class ListstructureComponent implements OnInit {
  page = 1;
  filterForm: FormGroup;
  itemsPerPage = 10;
  totalItems: any;
  public region = null;
  dataSite;
  dataRegion;
  addForm: FormGroup;
  UpdateForm: FormGroup;
  data: any;
  successMsg: any;
  errorMsg: any;
  constructor(
    private modalService: ModalService,
    private router: Router,
    private toastr: ToastrService,
              private otherService: OthersService) {
      this.addForm = new FormGroup({
        libelle: new FormControl(''),
        code: new FormControl(''),
        adresse: new FormControl(''),
        regionId: new FormControl(''),
        id: new FormControl('')
      })
    }
  ngOnInit() {
    this.filterForm = new FormGroup({
      region: new FormControl('')
    })
    this.gty(this.page);
    this.regionListe();
  }
  
  update(data, id) {
    this.addForm = new FormGroup({
      libelle: new FormControl(data.libelle),
      code: new FormControl(data.code),
      adresse: new FormControl(data.adresse),
      regionId: new FormControl(data.region.id),
      id: new FormControl(data.id)
    })
    this.modalService.open(id);
  }

  regionListe() {
    this.otherService.getAllRegion().subscribe(
      data => {
        this.dataRegion = data["data"];
      }
    );
  }

  gty(page: any){
    this.region=this.filterForm.value.region;
    if(this.region =='') {
      this.region = null;
    } 
    this.otherService.getAllStructure().subscribe(
      data => {
        this.data = data;
        this.dataSite = this.data.data;
        this.totalItems = this.data.total
      }
    )
  }

  ajouter() {
    this.otherService.addSite(this.addForm.value).subscribe(
      data =>{
        this.data = data;
        this.successMsg = this.data.status
        if(this.successMsg == true) {
          this.toastr.success(this.data.message, 'Success', {
            timeOut: 3000,
          });
          this.closeModal('custom-modal-1');
          this.ngOnInit();
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

  modifier() {
    this.otherService.updateSite(this.addForm.value.id, this.addForm.value).subscribe(
      data =>{
        this.data = data;
        this.successMsg = this.data.status
        if(this.successMsg == true) {
          this.toastr.success(this.data.message, 'Success', {
            timeOut: 3000,
          });
          this.closeModal('custom-modal-1');
          this.ngOnInit();
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

  supprimer(id) {
    this.otherService.deleteSite(id).subscribe(
      data =>{
        this.data = data;
        this.successMsg = this.data.status
        if(this.successMsg == true) {
          this.toastr.success(this.data.message, 'Success', {
            timeOut: 3000,
          });
          //this.closeModal('custom-modal-1');
          this.ngOnInit();
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

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
    this.addForm.reset()
  }
}

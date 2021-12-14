import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrormodalService } from 'src/app/modal/_errormodals/errormodal.service';
import { ModalService } from 'src/app/modal/_modal';
import { OthersService } from 'src/app/services/others.service';


@Component({
  selector: 'app-listdirection',
  templateUrl: './listdirection.component.html',
  styleUrls: ['./listdirection.component.scss']
})
export class ListdirectionComponent implements OnInit {
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
  idSociete: any;
  constructor(
    private modalService: ModalService,
    private router: Router,
    private toastr: ToastrService,
              private otherService: OthersService) {
      this.addForm = new FormGroup({
        libelle: new FormControl(''),
        societe: new FormControl(''),
        id: new FormControl('')
      })
    }
  ngOnInit() {
    this.filterForm = new FormGroup({
      idSociete: new FormControl('')
    })
    this.societeliste();
    this.gty(this.page);
  }
  
  update(data, id) {
    this.addForm = new FormGroup({
      libelle: new FormControl(data.libelle),
      societe: new FormControl(data.code),
      id: new FormControl(data.id)
    })
    this.modalService.open(id);
  }

  societeliste() {
    this.otherService.getAllSociete().subscribe(
      data => {
        this.dataRegion = data["data"];
        this.idSociete = this.dataRegion[0].id;
      }
    );
  }

  gty(page: any){
    console.log(this.idSociete);
    this.idSociete = this.filterForm.value.region;
    if(this.idSociete == '' || this.idSociete == undefined) {
      this.idSociete = null;
    } 
    this.otherService.getListDirection(this.idSociete).subscribe(
      data => {
        this.data = data;
        this.dataSite = this.data[0].data;
        this.totalItems = this.data[0].total;
      }
    )
  }

  ajouter() {
    this.otherService.addDirection(this.addForm.value).subscribe(
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
    this.otherService.updateDirection(this.addForm.value).subscribe(
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

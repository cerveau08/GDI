import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ModalService } from 'src/app/modal/_modal';
import { OthersService } from 'src/app/services/others.service';

@Component({
  selector: 'app-listcategorie',
  templateUrl: './listcategorie.component.html',
  styleUrls: ['./listcategorie.component.scss']
})
export class ListcategorieComponent implements OnInit {
  page = 1;
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
    private toastr: ToastrService,
              private otherService: OthersService) {
      this.addForm = new FormGroup({
        libelle: new FormControl(''),
        salaireBrute: new FormControl(''),
        id: new FormControl('')
      })
    }
  ngOnInit() {
    this.gty(this.page);
  }
  
  update(data, id) {
    this.addForm = new FormGroup({
      libelle: new FormControl(data.libelle),
      salaireBrute: new FormControl(data.salaireBrute),
      id: new FormControl(data.id)
    })
    this.modalService.open(id);
  }

  

  gty(page: any){
    this.otherService.listeCategorie().subscribe(
      data => {
        this.dataSite = data.data;
      }
    )
  }

  ajouter() {
    this.otherService.addCategorie(this.addForm.value).subscribe(
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
    this.otherService.updateCategorie(this.addForm.value.id, this.addForm.value).subscribe(
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
    this.otherService.deleteCategorie(id).subscribe(
      data =>{
        this.data = data;
        this.successMsg = this.data.status
        if(this.successMsg == true) {
          this.toastr.success(this.data.message, 'Success', {
            timeOut: 3000,
          });
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

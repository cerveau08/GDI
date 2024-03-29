import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ModalService } from 'src/app/modal/_modal';
import { OthersService } from 'src/app/services/others.service';

@Component({
  selector: 'app-listfonction',
  templateUrl: './listfonction.component.html',
  styleUrls: ['./listfonction.component.scss']
})
export class ListfonctionComponent implements OnInit {
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
        id: new FormControl('')
      })
    }
  ngOnInit() {
    this.gty(this.page);
  }
  
  update(data, id) {
    this.addForm = new FormGroup({
      libelle: new FormControl(data.libelle),
      id: new FormControl(data.id)
    })
    this.modalService.open(id);
  }

  

  gty(page: any){
    this.otherService.getFonctions().subscribe(
      data => {
        this.data = data;
        this.dataSite = this.data.data;
      }
    )
  }

  ajouter() {
    this.otherService.addfonction(this.addForm.value).subscribe(
      data =>{
        this.data = data;
        this.successMsg = this.data[0].status
        if(this.successMsg == true) {
          this.toastr.success(this.data[0].message, 'Success', {
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
    this.otherService.updatefonction(this.addForm.value).subscribe(
      data =>{
        this.data = data;
        this.successMsg = this.data[0].status
        if(this.successMsg == true) {
          this.toastr.success(this.data[0].message, 'Success', {
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
    this.otherService.deletefonction(id).subscribe(
      data =>{
        this.data = data;
        this.successMsg = this.data[0].status
        if(this.successMsg == true) {
          this.toastr.success(this.data[0].message, 'Success', {
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

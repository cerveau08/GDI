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
  listeStructure: any;
  dataSociete: any;
  dataDirection: any;
  direction_id: any;
  typeStructure_id: any;
  dataParent: any;
  constructor(
    private modalService: ModalService,
    private router: Router,
    private toastr: ToastrService,
              private otherService: OthersService) {
      this.addForm = new FormGroup({
        libelle: new FormControl(''),
        societe: new FormControl(''),
        parentId: new FormControl(''),
        directionId: new FormControl(''),
        typeStructure_id: new FormControl(''),
        service: new FormControl(''),
        departement: new FormControl(''),
        bu: new FormControl(''),
        pole: new FormControl(''),
        id: new FormControl('')
      })
    }
  ngOnInit() {
    this.listeStructure = [
      {id: 1, libelle: "département"},
      {id: 2, libelle: "pole"},
      {id: 3, libelle: "bu"},
      {id: 4, libelle: "service"},
    ];
    this.otherService.getAllSociete().subscribe(
      data => {
        this.dataSociete = data["data"];
      }
    );
    this.filterForm = new FormGroup({
      societe: new FormControl(''),
      direction_id: new FormControl(''),
      typeStructure_id: new FormControl(''),
    })
    this.gty(this.page);
    this.regionListe();
  }

  directionsListe(value) {
    console.log(value);
    this.otherService.getAllDirection(value).subscribe(
      data => {
        this.dataDirection = data['data'];
       }
    ); 
  }

  parentListe(value) {
    this.otherService.getAllStructure(1, 9999, value, null).subscribe(
      data => {
        this.dataParent = data['data'];
       }
    ); 
  }
  
  update(data, id) {
    this.addForm = new FormGroup({
      libelle: new FormControl(data.libelle),
      societe: new FormControl(data.societe),
      parentId: new FormControl(data.parent.id),
      directionId: new FormControl(data.direction.id),
      typeStructure_id: new FormControl(data.typeStructure.id),
      service: new FormControl(data.service),
      departement: new FormControl(data.departement),
      bu: new FormControl(data.bu),
      pole: new FormControl(data.pole),
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
    this.direction_id=Number(this.filterForm.value.direction_id);
    if(this.direction_id =='') {
      this.direction_id = null;
    } 
    this.typeStructure_id=Number(this.filterForm.value.typeStructure_id);
    if(this.typeStructure_id =='') {
      this.typeStructure_id = null;
    }
    this.otherService.getAllStructure(page, this.itemsPerPage, this.direction_id, this.typeStructure_id).subscribe(
      data => {
        this.data = data;
        this.dataSite = this.data.data;
        this.totalItems = this.data.total
      }
    )
  }

  ajouter() {
    let formValue = {
      libelle: this.addForm.value.libelle,
     // societe: this.addForm.value.libelle,
      parentId: Number(this.addForm.value.parentId),
      directionId: Number(this.addForm.value.directionId),
      typeStructureId: Number(this.addForm.value.typeStructure_id),
      service: this.addForm.value.service,
      departement: this.addForm.value.departement,
      bu: this.addForm.value.bu,
      pole: this.addForm.value.pole,
    }
    this.otherService.addStructure(formValue).subscribe(
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
    this.otherService.updateStructure(this.addForm.value.id, this.addForm.value).subscribe(
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
    this.otherService.deleteStructure(id).subscribe(
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

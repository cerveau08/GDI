import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { OthersService } from 'src/app/services/others.service';
import { ModalService } from 'src/app/_modal';
import { ActivatedRoute } from '@angular/router';
import { ErrormodalService } from 'src/app/_errormodals';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listeevaluation',
  templateUrl: './listeevaluation.component.html',
  styleUrls: ['./listeevaluation.component.scss']
})
export class ListeevaluationComponent implements OnInit {

  role;
  commentaire;
  objectif;
  item;
  data;
  interimaire;
  prenon;
  prenom;
  note;
  nom;
  successMsg;
  objectifForm: FormGroup;
  noteForm: FormGroup;
  modifierForm: FormGroup;
  titremodif;
  descriptionmodif;
  page = 1;
  itemsPerPage = 4;
  totalItems : any;
  interimConnect;
  public reqUrl = environment.base_url;
  errorMsg: any;
  constructor(private otherService: OthersService,
    private modalService: ModalService,
    private activeroute: ActivatedRoute,
    private errormodalService: ErrormodalService,
    private http: HttpClient,) {
    this.activeroute.queryParams.subscribe(params => {
      this.item = JSON.parse(params["interimaire"]);
      console.log(this.item);
    });
  }

  ngOnInit() {
    this.role = localStorage.getItem('user');
    // this.interimConnect = JSON.parse(localStorage.getItem('currentUser'));
    // this.item = this.interimConnect.interimaire.id
    // console.log(this.interimConnect);
    this.otherService.getListeObjectif(this.item).subscribe(
      data => {
        this.data = data
        this.objectif = this.data["data"];
        console.log(data);
      }, error=> {
        this.errorMsg = error;
        this.errormodalService.open('error-modal-1');
        console.log(error)
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
    this.modifierForm = new FormGroup({
      titre: new FormControl(''),
      description: new FormControl('')
    });
    this.otherService.getOneInterById(this.item).subscribe(
      data =>{
        this.interimaire = data;
        this.objectifForm.patchValue({
          structure_id: this.interimaire.data.structure.id,
          interimaire: this.item
        });
      },
      error=> {
        this.errorMsg = error;
        this.errormodalService.open('error-modal-1');
        console.log(error)
      }
    );
    this.gty(this.page);
  }

  gty(page: any){
    this.http.get(this.reqUrl + `/listeObjectifs/${this.item}?page=${page}&limit=${this.itemsPerPage}`).subscribe((data: any) => {
      this.data = data
      this.objectif = this.data["data"];
      console.log(data);
    }, error=> {
      this.errorMsg = error;
      this.errormodalService.open('error-modal-1');
      console.log(error)
    })
  }

  addObject() {
    console.log(this.objectifForm.value);
    this.otherService.addObjectifs(this.objectifForm.value).subscribe(
      data =>{
        console.log(data);
        this.data = data;
        this.successMsg = this.data.status
        if(this.successMsg == true) {
          this.ngOnInit();
          this.closeModal('objectif-modal-1');
        }
      },
      error=> {
        this.errorMsg = error;
        this.closeModal('objectif-modal-1');
        this.errormodalService.open('error-modal-1');
        console.log(error)
      }
    );
  }

  notezObjectif(id) {
    console.log(this.noteForm.value);
    this.otherService.notezObjectif(this.noteForm.value, id).subscribe(
      data =>{
        console.log(data);
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
        this.errormodalService.open('error-modal-1');
        console.log(error)
      }
    )
  }
  modifierObjectif(id) {
    console.log(this.modifierForm.value);
    this.otherService.modifierObjectif(this.modifierForm.value, id).subscribe(
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
        this.errormodalService.open('error-modal-1');
        console.log(error)
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

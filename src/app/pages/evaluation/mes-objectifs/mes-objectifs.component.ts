import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { OthersService } from 'src/app/services/others.service';
import { ModalService } from 'src/app/modal/_modal';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ErrormodalService } from 'src/app/modal/_errormodals';

@Component({
  selector: 'app-mes-objectifs',
  templateUrl: './mes-objectifs.component.html',
  styleUrls: ['./mes-objectifs.component.scss']
})
export class MesObjectifsComponent implements OnInit {

  
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
  filterForm: FormGroup;
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
  periode = null;
  periodeobjectif: any;
  constructor(private otherService: OthersService,
    private errormodalService: ErrormodalService,
    private http: HttpClient,) {
  }

  ngOnInit() {
    this.role = localStorage.getItem('user');
    this.interimConnect = JSON.parse(localStorage.getItem('currentUser'));
    this.item = this.interimConnect.interimaire.id
    this.filterForm = new FormGroup({
      periode: new FormControl(''),
    });
    this.gty(this.page);
  }

  gty(page: any){
    this.otherService.getListeObjectif(this.item, page, this.itemsPerPage, this.periode).subscribe((data: any) => {
      this.data = data
      this.periodeobjectif = this.data["data"];
    })
  }

  openErrorModal(id: string) {
    this.errormodalService.open(id);
  }

  closeErrorModal(id: string) {
    this.errormodalService.close(id);
  }
}

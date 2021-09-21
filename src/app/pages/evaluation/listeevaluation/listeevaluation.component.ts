import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { OthersService } from 'src/app/services/others.service';
import { ModalService } from 'src/app/modal/_modal';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrormodalService } from 'src/app/modal/_errormodals';
import { HttpClient } from '@angular/common/http';
import {Location} from '@angular/common';

@Component({
  selector: 'app-listeevaluation',
  templateUrl: './listeevaluation.component.html',
  styleUrls: ['./listeevaluation.component.scss']
})
export class ListeevaluationComponent implements OnInit {

  role;
  commentaire;
  evaluations;
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
  isEvaluated = true;
  constructor(private otherService: OthersService,
    private activeroute: ActivatedRoute,
    private router: Router,
    private location: Location,) {
    this.activeroute.queryParams.subscribe(params => {
      this.role = localStorage.getItem('user');
      if(this.role != 'INT') {
        this.item = JSON.parse(params["interimaire"]);
      } else {
        this.item = JSON.parse(localStorage.getItem('currentUser')).interimaire.id;
      }
    });
  }

  ngOnInit() {
    this.role = localStorage.getItem('user');
    this.otherService.getOneInterById(this.item).subscribe(
      data =>{
        this.interimaire = data;
      }
    );
    this.gty(this.page);
  }

  backClicked() {
    this.location.back();
  }

  gty(page: any){
    this.otherService.getListeEvaluation(this.item, page, this.itemsPerPage, this.isEvaluated).subscribe((data: any) => {
      this.data = data
      this.evaluations = this.data["data"];
      this.totalItems = data.total;
    })
  }


  openDetail(interim_id, evaluation_id) {
    this.router.navigate(['/accueil/detailevaluation'], {
      queryParams: {
        interimaire: JSON.stringify(interim_id),
        evaluation: JSON.stringify(evaluation_id),
      }
    })
  }

  openEvaluer() {
    this.router.navigate(['/accueil/evaluer'], {
      queryParams: {
        interimaire: JSON.stringify(this.item),
      }
    })
  }
}

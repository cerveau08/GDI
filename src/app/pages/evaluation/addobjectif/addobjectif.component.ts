import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { OthersService } from 'src/app/services/others.service';
import { ModalService } from 'src/app/modal/_modal';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrormodalService } from 'src/app/modal/_errormodals';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import {Location} from '@angular/common';

@Component({
  selector: 'app-addobjectif',
  templateUrl: './addobjectif.component.html',
  styleUrls: ['./addobjectif.component.scss']
})
export class AddobjectifComponent implements OnInit {

  role;
  commentaire;
  objectif;
  item;
  data;
  interimaire;
  prenon;
  prenom;
  objectifsForm: FormGroup;
  note;
  nom;
  successMsg;
  titremodif;
  descriptionmodif;
  page = 1;
  itemsPerPage = 2;
  totalItems : any;
  dataInter;
  interimConnect;
  public reqUrl = environment.base_url;
  errorMsg: any;
  detailobjectif;
  mesgError: any;
  nombreMax: number;
  showAdd = true;
  constructor(private otherService: OthersService,
    private activeroute: ActivatedRoute,
    private router: Router,
    private location: Location,
    private formBuilder: FormBuilder,
    private toastr: ToastrService) {
    this.activeroute.queryParams.subscribe(params => {
      this.item = JSON.parse(params["interimaire"]);
    });
    this.objectifsForm = this.formBuilder.group({
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      namming: ['', Validators.required],
      objectifs: this.formBuilder.array([]),
    });
  }

  ngOnInit() {
    this.role = localStorage.getItem('user');
    this.otherService.getOneInterById(this.item).subscribe(
      data =>{
        this.data = data;
        this.dataInter = this.data.data;
        this.nom = this.dataInter.nom;
        this.prenom = this.dataInter.prenom;
      }
    );
  }

  backClicked() {
    this.location.back();
  }

  get objectifs() : FormArray {
    return this.objectifsForm.get("objectifs") as FormArray
  }

  newObjectif(): FormGroup {
    return this.formBuilder.group({
      bareme: new FormControl(''),
      titre: new FormControl(''),
      description: new FormControl(''),
      indicateur: new FormControl(''),
      valeurCible: new FormControl(''),
    })
  }

  addObjectif() {
    this.objectifs.push(this.newObjectif());
    this.nombreMax = this.objectifs.length;
    if( this.nombreMax === 10) {
      this.showAdd = false;
    }
  }

  removeobjectif(i:number) {
    this.objectifs.removeAt(i);
  }

  

  ajouterObjectifs() {
    this.otherService.addObjectifs(this.objectifsForm.value, this.item).subscribe(
      data =>{
        this.data = data;
        this.successMsg = this.data.status
        if(this.successMsg == true) {
          this.toastr.success(this.data.message, 'Success', {
            timeOut: 3000,
          });
          this.router.navigate(['/accueil/objectif'], {
            queryParams: {
              interimaire: JSON.stringify(this.item),
            }
          })
        } else {
          this.mesgError = this.data.message;
        }
      }, error=> {
        this.errorMsg = error;
        this.toastr.error(this.errorMsg, 'Echec', {
         timeOut: 5000,
        });
      }
    )
  }

}

import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgxFileSaverService } from '@clemox/ngx-file-saver';
import { DataService } from 'src/app/service/data.service';
import { ModalService } from 'src/app/_modal/modal.service';
import { environment } from 'src/environments/environment';
import { ErrormodalService } from 'src/app/_errormodals';
import { OthersService } from 'src/app/services/others.service';

@Component({
  selector: 'app-attestationmesInterimaire',
  templateUrl: './attestationmesInterimaire.component.html',
  styleUrls: ['./attestationmesInterimaire.component.scss']
})
export class AttestationmesInterimaireComponent implements OnInit {

  
  annee;
  mois;
  checkedList:any;
  selectedAll: any;
  filterForm: FormGroup;
  result;
  data: any;
  successMsg;
  filterterm: string;
  dataAttest: any;
  page = 1;
  itemsPerPage = 8;
  totalItems : any;
  user;
  public reqUrl = environment.base_url;
  errorMsg: any;
  ListeMois = [
    {
      id: 1,
      libelle: "janvier",
    },
    {
      id: 2,
      libelle: "fevrier"
    },
    {
      id: 3,
      libelle: "mars",
    },
    {
      id: 4,
      libelle: "avril"
    },{
      id: 5,
      libelle: "mai",
    },
    {
      id: 6,
      libelle: "juin",
    },
    {
      id: 7,
      libelle: "juillet",
    },
    {
      id: 8,
      libelle: "aout",
    },
    {
      id: 9,
      libelle: "septembre",
    },
    {
      id: 10,
      libelle: "octobre",
    },
    {
      id: 11,
      libelle: "novembre",
    },
    {
      id: 12,
      libelle: "decembre",
    },
  ];
  constructor(private dataService: DataService,
              private http: HttpClient,
              private errormodalService: ErrormodalService,
              private otherService: OthersService) { }

  ngOnInit() {
    this.user = localStorage.getItem('user');
    this.gty(this.page);
    this.filterForm = new FormGroup({
      mois: new FormControl(''),
      annee: new FormControl('')
    });
  }
  gty(page: any){
    this.http.get(this.reqUrl + `/attestationMesInterimaires?page=${page}&limit=${this.itemsPerPage}`).subscribe(
      (data: any) => {
        this.dataAttest =  data.data[0]
        console.log(this.dataAttest);
      }
    )
  }
  
  openErrorModal(id: string) {
    this.errormodalService.open(id);
  }

  closeErrorModal(id: string) {
    this.errormodalService.close(id);
  }

  extraireAttestation() {
    if (this.filterForm.value.annee) {
      this.filterForm.patchValue({annee: this.filterForm.value.annee.getFullYear()});
    } else {
      this.filterForm.patchValue({annee: ''});
    }
    console.log(this.filterForm.value);
    this.otherService.extraireAttestation(this.filterForm.value).subscribe(
      data => {
        console.log(data);
        this.data = data;
        this.successMsg = this.data.status
        if(this.successMsg == true) {
          window.open(data.data);
        }
      }
    )
  }
}

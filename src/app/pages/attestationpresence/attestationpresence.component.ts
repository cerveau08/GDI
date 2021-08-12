import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { OthersService } from 'src/app/services/others.service';
import { environment } from 'src/environments/environment';
import { ErrormodalService } from 'src/app/_errormodals';

@Component({
  selector: 'app-attestationpresence',
  templateUrl: './attestationpresence.component.html',
  styleUrls: ['./attestationpresence.component.scss']
})
export class AttestationpresenceComponent implements OnInit {

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
  itemsPerPage = 5;
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
    this.http.get(this.reqUrl + `/listeAttestation?page=${page}&limit=${this.itemsPerPage}`).subscribe((data: any) => 
      this.dataAttest =  data.data[0],
    )
  }
  selectAll() {
    for (var i = 0; i < this.dataAttest.length; i++) {
      this.dataAttest[i].etat = this.selectedAll;
    }
    this.getCheckedItemList();
  }
  checkIfAllSelected(event) {
    this.selectedAll = this.dataAttest.every(function(item:any) {
      return item.etat == 0;
    })
    this.getCheckedItemList();
  }
  getCheckedItemList() {
    console.log(this.dataAttest);
    this.checkedList = [];
    for (var i = 0; i < this.dataAttest.length; i++) {
      if(this.dataAttest[i].etat) {
        this.checkedList.push(this.dataAttest[i]);
        this.http.get(`${this.reqUrl}/validerAttestation/${this.dataAttest[i].id}`).subscribe(
          data => {
            this.result = data;
            console.log(data);
          }, error=> {
            this.errorMsg = error;
            this.errormodalService.open('error-modal-1');
            console.log(error)
          }
        )
      }
    }
    this.checkedList = this.checkedList;
    console.log(this.checkedList);
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

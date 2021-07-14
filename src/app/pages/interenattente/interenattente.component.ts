import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { DataService } from 'src/app/service/data.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/_modal';
import { OthersService } from 'src/app/services/others.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-interenattente',
  templateUrl: './interenattente.component.html',
  styleUrls: ['./interenattente.component.scss']
})
export class InterenattenteComponent implements OnInit {

  public data; any;
  public datas: any;
  date: any;
  role;
  dataInter: any;
  attestationForm: FormGroup;
  page = 1;
  itemsPerPage = 8;
  totalItems : any;
  form: FormGroup;
  checkedList:any;
  selectedAll: any;
  result;
  public reqUrl = environment.base_url;
  constructor(private dataService: DataService,
    public datepipe: DatePipe,
    public router: Router,
    private fb: FormBuilder,
    private modalService: ModalService,
    private otherService: OthersService,
    private http: HttpClient
    ) {
      this.form = this.fb.group({
        checkArray: this.fb.array([])
      });
    }

  ngOnInit() {
    this.role = localStorage.getItem('user')
   // this.getcolor(this.p);
    this.attestationForm = new FormGroup({
      interim_id: new FormControl(''),
      dateDebut: new FormControl(''),
      dateFin: new FormControl(''),
      contrat_id: new FormControl(''),
      nbr_jr_absence: new FormControl(''),
      periode_id: new FormControl(''),
      statut_id: new FormControl(''),
      prenom: new FormControl(''),
      nom: new FormControl(''),
      poste: new FormControl(''),
      matricule: new FormControl(''),
      agence: new FormControl(''),
    });
    this.gty(this.page);
  }

  
  gty(page: any){
    this.http.get(this.reqUrl + `/interimSousContrat?page=${page}&limit=${this.itemsPerPage}`).subscribe((data: any) => 
      this.dataInter =  data.data)
  }

  submit(interim, nbr, statut, contrat, period, dateDebut, dateFin) {
    console.log(interim, dateDebut);
    
    console.log(this.attestationForm.value);
  }

  openDetail(data) {
    this.router.navigate(['/accueil/detailinter'], {
      queryParams: {
        user: JSON.stringify(data)
      }
    })
  }

  selectAll() {
    for (var i = 0; i < this.dataInter.length; i++) {
      this.dataInter[i].etat = this.selectedAll;
    }
    this.getCheckedItemList();
  }
  checkIfAllSelected(event) {
    this.selectedAll = this.dataInter.every(function(item:any) {
     // item.s = event.target.checked;
      return item.etat == 0;
    })
    this.getCheckedItemList();
  }
  getCheckedItemList() {
    this.checkedList = [];
    for (var i = 0; i < this.dataInter.length; i++) {
      if(this.dataInter[i].etat) {
        this.checkedList.push(this.dataInter[i]);
        this.http.post(`${this.reqUrl}/validerDemande/${this.dataInter[i].id}`, null).subscribe(
          data => {
            this.result = data;
            console.log(data);
          }
        )
      }
    }
    this.checkedList = this.checkedList;
    console.log(this.checkedList);
  }

  /*getcolor(p) {
    let color = "#ff0000"
    let d = new Date();
    var g1 = new Date(d.getFullYear(), d.getMonth()+1, d.getDate());
    let date = new Date(p.dateFin);
    let now = this.datepipe.transform(g1, 'yyyyMMdd');
    let dates = this.datepipe.transform(date, 'yyyyMMdd');
    console.log(date);
    console.log(now);
    console.log(dates);
    if(now > dates) {
      color = "#ff0000"
    } else {
      color = "#000000"
    }  
    return color; 
  } */
  downloadFile(data: any) {
    const replacer = (key, value) => (value === null ? '' : value); // specify how you want to handle null values here
    const header = Object.keys(data[0]);
    const csv = data.map((row) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(',')
    );
    csv.unshift(header.join(','));
    const csvArray = csv.join('\r\n');
  
    const a = document.createElement('a');
    const blob = new Blob([csvArray], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
  
    a.href = url;
    a.download = 'myFile.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { DataService } from 'src/app/service/data.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/_modal';
import { OthersService } from 'src/app/services/others.service';
import { ErrormodalService } from 'src/app/_errormodals';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addattestation',
  templateUrl: './addattestation.component.html',
  styleUrls: ['./addattestation.component.scss']
})
export class AddattestationComponent implements OnInit {

  public data; any;
  public datas: any;
  date: any;
  role;
  dataInter: any;
  attestationForm: FormGroup;
  page = 1;
  itemsPerPage = 7;
  totalItems : any;
  filterterm
  public reqUrl = environment.base_url;
  result;
  success;
  successMsg;
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
  annee: Date;
  yearOnly;
  errorMsg: any;
  action = true;
  constructor(private dataService: DataService,
    public datepipe: DatePipe,
    public router: Router,
    private modalService: ModalService,
    private otherService: OthersService,
    private errormodalService: ErrormodalService,
    private http: HttpClient,
    private formBuilder: FormBuilder
    ) {
      this.attestationForm = this.formBuilder.group({
        interDetail: this.formBuilder.array([]),
        annee: ['', Validators.required],
        mois: ['', Validators.required]
      });
    }

  ngOnInit() {
    this.role = localStorage.getItem('user');
    this.gty(this.page);
  }

  initForm() {
    
  }
  gty(page: any){
    this.http.get(this.reqUrl + `/interimSousContrat?page=${page}&limit=${this.itemsPerPage}`).subscribe((data: any) => {
      this.dataInter =  data.data
      this.attestationForm = this.formBuilder.group({
        annee: ['', Validators.required],
        mois: ['', Validators.required],
        interDetail: this.formBuilder.array(
          this.dataInter.map(x => this.formBuilder.group({
            interim_id: [x.id, [Validators.required, Validators.minLength(1)]],
            nbr_jr_absence: [x.first_name, [Validators.required, Validators.minLength(1)]],
            Commentaire: [x.last_name, [Validators.required, Validators.minLength(2)]]
          }))
        )
      })
    })
  }

  submit() {
    this.attestationForm.patchValue({annee: this.attestationForm.value.annee.getFullYear()});
    console.log(this.attestationForm.value);
    // this.otherService.addAttestation(donneeForm).subscribe(
    //   data => {
    //     console.log(data);
    //     this.result = data
    //     this.successMsg = this.result.status

    //     if(this.successMsg == true) {
    //       this.closeModal('custom-modal-'+interimaire_id);
    //     }
    //   }, error=> {
    //     this.errorMsg = error;
    //     this.errormodalService.open('error-modal-1');
    //     console.log(error)
    //   }
    // )
  }
  changeActionFalse() {
    this.action = false;
  }
  changeActionTrue() {
    this.action = true;
  }
  openDetail(data) {
    this.router.navigate(['/accueil/detailinter'], {
      queryParams: {
        user: JSON.stringify(data)
      }
    })
  }

  downloadFile(data: any) {
    const replacer = (key, value) => (value === null ? '' : value); 
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

  openErrorModal(id: string) {
    this.errormodalService.open(id);
  }

  closeErrorModal(id: string) {
    this.errormodalService.close(id);
  }
}

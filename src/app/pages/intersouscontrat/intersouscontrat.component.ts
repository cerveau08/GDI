import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { PaginationService } from 'src/app/service/pagination.service';
import { ModalService } from 'src/app/_modal';
import { OthersService } from 'src/app/services/others.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-intersouscontrat',
  templateUrl: './intersouscontrat.component.html',
  styleUrls: ['./intersouscontrat.component.scss']
})
export class IntersouscontratComponent implements OnInit {
  public data; any;
  public datas: any;
  date: any;
  role;
  dataInter: any;
  attestationForm: FormGroup;
  page = 1;
  itemsPerPage = 10;
  totalItems : any;
  filterterm
  public reqUrl = environment.base_url;

  ListeMois = [
    {
      libelle: "Janvier",
    },
    {
      libelle: "Février"
    },
    {
      libelle: "Mars",
    },
    {
      libelle: "Avril"
    },{
      libelle: "Mai",
    },
    {
      libelle: "Juin",
    },
    {
      libelle: "Juillet",
    },
    {
      libelle: "Aôut",
    },
    {
      libelle: "Septembre",
    },
    {
      libelle: "Octobre",
    },
    {
      libelle: "Novembre",
    },
    {
      libelle: "Décembre",
    },
  ];


  ListeAnnee = [
    {
      libelle: 2020,
    },
    {
      libelle: 2021,
    },
    {
      libelle: 2023,
    },
    {
      libelle: 2024,
    },{
      libelle:  2025,
    },
    {
      libelle:  2026,
    },
    {
      libelle:  2026,
    },
    {
      libelle:  2027,
    },
    {
      libelle:  2028,
    },
    {
      libelle: 2029,
    },
    {
      libelle: 2030
    }
  ];
  annee: Date;
  yearOnly;
  constructor(private dataService: DataService,
    public datepipe: DatePipe,
    public router: Router,
    private modalService: ModalService,
    private otherService: OthersService,
    private http: HttpClient
    ) { }

  ngOnInit() {
    this.role = localStorage.getItem('user')
   // this.getcolor(this.p);
    this.attestationForm = new FormGroup({
      interim_id: new FormControl(''),
      mois: new FormControl(''),
      annee: new FormControl(''),
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
    this.http.get(this.reqUrl + `/interimSousContrat?page=${page}&limit=${this.itemsPerPage}`).subscribe((data: any) => {
      this.dataInter =  data.data;
      this.totalItems = data.total;
      console.log(data);
      console.log(this.totalItems);
    })
  }

  // submit(interim, nbr, statut, contrat, period, mois, annee) {
  //   console.log(interim, mois,annee);
  submit() {
    console.log(this.attestationForm.value);
    console.log(this.attestationForm.value.annee);
    this.yearOnly = this.attestationForm.value.annee.getFullYear();
    console.log(this.yearOnly);
    
  }

  openDetail(data) {
    this.router.navigate(['/accueil/detailinter'], {
      queryParams: {
        user: JSON.stringify(data)
      }
    })
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

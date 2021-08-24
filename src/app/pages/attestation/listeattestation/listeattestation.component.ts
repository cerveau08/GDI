import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { NgxFileSaverService } from '@clemox/ngx-file-saver';
import { ModalService } from 'src/app/modal/_modal/modal.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ErrormodalService } from 'src/app/modal/_errormodals';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { OthersService } from 'src/app/services/others.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-listeattestation',
  templateUrl: './listeattestation.component.html',
  styleUrls: ['./listeattestation.component.scss']
})
export class ListeattestationComponent implements OnInit {

  checkedList:any;
  selectedAll: any;
  filterForm: FormGroup;
  result;
  data: any;
  currentDate = new Date().getFullYear();
  successMsg;
  filterterm: string;
  dataAttest: any;
  page = 1;
  demandeForm: FormGroup;
  itemsPerPage = 8;
  lastTenYear;
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
  scrHeight:any;
  scrWidth:any;
  public annee = null;
  public mois = null;
  public reference = null;
  @ViewChild('htmlData', { static: true }) htmlData:ElementRef;
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
        console.log(this.scrHeight, this.scrWidth);
  }
  constructor(
              private http: HttpClient,
              private errormodalService: ErrormodalService,
              private modalService: ModalService,
              private otherService: OthersService) {
                this.getScreenSize()
              }

  ngOnInit() {

    this.lastTenYear = [
      {
        annee: this.currentDate
      },{
        annee: this.currentDate - 1
      },{
        annee: this.currentDate - 2
      }
    ];

    this.user = localStorage.getItem('user');
    
    this.filterForm = new FormGroup({
      mois: new FormControl(''),
      annee: new FormControl(''),
      reference: new FormControl ('')
    });
    this.gty(this.page);
  }

  gty(page: any){

    if(this.filterForm.value.mois) {
      this.mois = this.filterForm.value.mois;
    }
    if(this.filterForm.value.reference) {
      this.reference = this.filterForm.value.reference;
    }
    if(this.filterForm.value.annee) {
      this.annee = this.filterForm.value.annee; 
    }

    console.log(this.filterForm.value);

    // this.http.get(this.reqUrl + `/listeAttestation?page=${page}&limit=${this.itemsPerPage}`).subscribe(
    //   (data: any) => {
    //     this.dataAttest =  data.data[0];
    //     this.totalItems = data.total;
    //     console.log(this.dataAttest);
    //   }
    // )

    this.otherService.listAttestationFilter(page,this.itemsPerPage, this.mois, this.annee, this.reference).subscribe((data: any) => {
      this.dataAttest =  data.data[0];
        this.totalItems = data.total;
       console.log(this.dataAttest);
      }, error=> {
      this.errorMsg = error;
      this.errormodalService.open('error-modal-1');
      console.log(error)
    })

  }

  public openPDF():void {
    let data = document.getElementById('htmlData');
    html2canvas(data).then(canvas => {
      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;
      const fileuri = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      pdf.addImage(fileuri, 'PNG', 0, position, fileWidth, fileHeight)
      pdf.save('angular-demo.pdf');
    });     
  }
  
  openErrorModal(id: string) {
    this.errormodalService.open(id);
  }

  closeErrorModal(id: string) {
    this.errormodalService.close(id);
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
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

import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ToastrService } from 'ngx-toastr';
import { ErrormodalService } from 'src/app/modal/_errormodals';
import { ModalService } from 'src/app/modal/_modal';
import { AuthService } from 'src/app/services/auth.service';
import { OthersService } from 'src/app/services/others.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lesnonattestation',
  templateUrl: './lesnonattestation.component.html',
  styleUrls: ['./lesnonattestation.component.scss']
})
export class LesnonattestationComponent implements OnInit {

  date = new Date();
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
  itemsPerPage = 10;
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
  constructor(private extractionService: AuthService,
              private errormodalService: ErrormodalService,
              private modalService: ModalService,
              private router: Router,
              private otherService: OthersService,
              private toastr: ToastrService) {
                this.getScreenSize()
              }

  ngOnInit() {

    this.user = localStorage.getItem('user');
    this.gty(this.page);
  }

  gty(page: any){
    this.otherService.listeInterForAttestation().subscribe(
      (data: any) => {
        this.dataAttest =  data.data;
        this.totalItems = data.total;
      }
    )
  }

  openDetail(data) {
    this.router.navigate(['/accueil/deatilattestation'], {
      queryParams: {
        attestation: JSON.stringify(data)
      }
    });
  }

  public openPDF():void {
    let data = document.getElementById('htmlData');
    html2canvas(data).then(canvas => {
      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;
      const fileuri = canvas.toDataURL('image/png');
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
    this.otherService.extraireAttestation(this.filterForm.value).subscribe(
      data => {
        this.data = data;
        this.successMsg = this.data.status
        if(this.successMsg == true) {
          window.open(data.data);
          this.toastr.success('Le fichier a été télécharger', 'Succes', {
            timeOut: 3000,
          });
        }
      }, error=> {
        this.errorMsg = error;
        this.toastr.error(this.errorMsg, 'Echec', {
         timeOut: 5000,
        });
       }
    )
  }

  exportCsv(): void {
    if(this.filterForm.value.mois) {
      this.mois = this.filterForm.value.mois;
    }
    if(this.filterForm.value.reference) {
      this.reference = this.filterForm.value.reference;
    }
    if(this.filterForm.value.annee) {
      this.annee = this.filterForm.value.annee; 
    }
    this.otherService.listAttestationFilter(this.page,this.itemsPerPage, this.mois, this.annee, this.reference).subscribe(
      (data: any) => {
        this.dataAttest =  data.data[0];
        this.extractionService.exportToCsv(
          this.dataAttest, 
          'ExtractionAttestation' + '-' + this.date.getFullYear() + '-' + this.date.getMonth() + '-' + this.date.getDay() + '-' + this.date.getHours()+ '-' + this.date.getMinutes(),
          ['reference', 'matricule', 'prenom', 'nom', 'agence', 'nombreJourAbscence', 'dateDebut', 'dateFin', 'prenom_manager', 'nom_manager', 'statut']
        );
        this.totalItems = data.total;
      }
    )
  }

}

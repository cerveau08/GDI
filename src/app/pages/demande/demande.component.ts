import { OthersService } from 'src/app/services/others.service';
import { PaginationService } from './../../service/pagination.service';
import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/_modal/modal.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.scss']
})
export class DemandeComponent implements OnInit {

 /* demandes: any = [
    {
      id: 1,
      libelle: 'mission', 
    },
    {
      id: 2,
      libelle: 'convenance personnelle', 
    },
    {
      id: 3,
      libelle: 'conge maladie', 
    },
    {
      id: 4,
      libelle: 'conge annuelle', 
    }
  ];*/
  demandes;
  demandeForm: FormGroup;
  currentUser;
  public datas: any;
  // pager object
  pager: any = {};
  filterterm: string;
  // paged items
  pagedItems: any[];
  showHome = true;
  data = [{
    id: 1,
    prenom: "Amadou Dieye",
    nom: "LEYE",
    poste: "Développeur Web",
    dateDebut: "25/12/2020",
    dateFin: "25/12/2022",
    tmp: "tmp_0254",
    agence: "Set Interim",
    dateNais: "10/12/1992",
    lieuNais: "Mbour",
    genre: "masculin",
    cni: "1 619 1992 2154",
    categorie: "Cadre C1C",
    structure: "Sonatel SA",
    direction: "DST",
    pole: "DD",
    departement: "DASI",
    service: "PMA",
    manager: "Madiagne SYLLA",
    postem: "Chef de Services Production et Maintenance Applicatif",
    email: "amadou.dieye.leye@orange-sonatel.com",
    telephone: "+ 221 33 824 91 31",
    adresse: "mbour",
    photo: "inter.png",
    matricule: "060210",
    nomInt: "5"
  }];
  user
  constructor(private dataService: DataService,
    private modalService: ModalService, 
    private pagerService: PaginationService, private otherService: OthersService
    ) { }

  ngOnInit() {
    this.user = localStorage.getItem('user');
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(this.user == 'inter') {
      this.showHome = false;
    } else {
      this.showHome = true;
    }
    //this.datas = this.dataService.getData();
   this.otherService.getListDemandes().subscribe(
     data => {
       this.datas = data.data;
       console.log(data);
     }
   )
     this.otherService.getTypeDemande().subscribe(
     data => {
       this.demandes = data.data;
       console.log(data);
     }
    )
    this.demandeForm = new FormGroup({
      type: new FormControl (''),
      dateDebut: new FormControl(''),
      dateFin: new FormControl (''),
      motif: new FormControl(''),
      description: new FormControl(''),
    });

  }
  onSubmit() {
    // this.demandeForm.patchValue({
    //   interimaire: this.currentUser.interimaire.id,
    //   validateur: this.currentUser.manager.id,
    // });
    console.log(this.demandeForm.value);
    this.otherService.addDemande(this.demandeForm.value).subscribe(
      data =>{
        console.log(data);
        this.closeModal('custom-modal-8');
      },
      error =>{
        console.log(error);
        
      })
  }

  openModal(id: string) {
    this.modalService.open(id);
    
  }

  closeModal(id: string) {
    this.modalService.close(id);
    
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { OthersService } from 'src/app/services/others.service';
import { ModalService } from 'src/app/_modal';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrormodalService } from 'src/app/_errormodals';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listehistoriquecontrat',
  templateUrl: './listehistoriquecontrat.component.html',
  styleUrls: ['./listehistoriquecontrat.component.scss']
})
export class ListehistoriquecontratComponent implements OnInit {

  
  role;
  commentaire;
  objectif;
  item;
  id;
  histoContrat;
  data;
  interimaire;
  prenom;
  note;
  nom;
  isData = true;
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
  dataInter;
  constructor(private otherService: OthersService,
    private modalService: ModalService,
    private activeroute: ActivatedRoute,
    private errormodalService: ErrormodalService,
    private http: HttpClient,
    private router: Router,) {
    this.activeroute.queryParams.subscribe(params => {
      this.item = JSON.parse(params["interimaire"]);
      console.log(this.item);
    });
  }

  ngOnInit() {
    this.role = localStorage.getItem('user');
    // this.interimConnect = JSON.parse(localStorage.getItem('currentUser'));
    // this.item = this.interimConnect.interimaire.id
    // console.log(this.interimConnect);
    this.otherService.getOneInterById(this.item).subscribe(
      data =>{
        this.data = data;
        this.dataInter = this.data.data;
        console.log(this.dataInter);
        this.nom = this.dataInter.nom;
        this.prenom = this.dataInter.prenom;
    },
    error=> {
      this.errorMsg = error;
      this.errormodalService.open('error-modal-1');
      console.log(error)
    }
  );
    this.gty(this.page);
  }

  gty(page: any){
    this.http.get(this.reqUrl + `/histoContratInterimaire/${this.item}?page=${page}&limit=${this.itemsPerPage}`).subscribe((data: any) => {
      this.data = data ;
      this.histoContrat = this.data.data["contrats"];
      console.log(this.data);
      if(this.data.code == 500) {
        this.isData = false;
      }
    }, error=> {
      this.errorMsg = error;
      this.errormodalService.open('error-modal-1');
      console.log(error)
    })
  }

  openDetail(data) {
    this.router.navigate(['/accueil/detailcontrat'], {
      queryParams: {
        contrat: JSON.stringify(data)
      }
    })
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

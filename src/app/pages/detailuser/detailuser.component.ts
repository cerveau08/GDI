import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OthersService } from 'src/app/services/others.service';
import { ModalService } from 'src/app/_modal';
import { environment } from 'src/environments/environment';
import { ErrormodalService } from 'src/app/_errormodals';

@Component({
  selector: 'app-detailuser',
  templateUrl: './detailuser.component.html',
  styleUrls: ['./detailuser.component.scss']
})
export class DetailuserComponent implements OnInit {

  item: any;
  id: any;
  public left: any;
  donnees: any;
  dataUser:any;
  dataContrat: any;  
  data;
  nom;
  prenom;
  telephone;
  agence;
  photo;
  image;
  email;
  fonction;
  matricule;
  direction;
  departement;
  service
  contratForm: FormGroup;
  arretForm: FormGroup;
  bloquerForm: FormGroup;
  reconduireForm: FormGroup;
  userForm: FormGroup;
  filenamecontrat;
  filenamefichedeposte;
  urlcontrat;
  urlfichedeposte;
  dataSociete: any;
  dataDirection: any;
  dataAgence: any;
  dataDepartement: any;
  donneeService: any;
  role;
  url3;
  url2;
  fichierPhoto?: File;
  photoName;
  public reqUrl = environment.base_url;
  errorMsg: any;
  successMsgBannir: any;
  dataBannir: any;
  constructor(private activeroute: ActivatedRoute,
              private modalService: ModalService,
              private otherService: OthersService,
              private errormodalService: ErrormodalService,
              public router: Router, ) { 
    this.activeroute.queryParams.subscribe(params => {
      this.item = JSON.parse(params["user"]);
      console.log(this.item);
      this.otherService.getUserById(this.item).subscribe(
           data =>{
            this.data = data;
            this.dataUser = this.data.data;
            console.log(this.dataUser);
            this.nom = this.dataUser.nom;
            this.prenom = this.dataUser.prenom;
            this.email = this.dataUser.email;
            this.fonction = this.dataUser.fonction;
           this.telephone = this.dataUser.telephone;
            //this.agence = this.dataUser.agence;
            this.matricule = this.dataUser.matricule;
            this.photo = this.dataUser.photo;
        },
        error=> {
          this.errorMsg = error;
          this.errormodalService.open('error-modal-1');
          console.log(error)
        }
      );
    })
    
  }
  ngOnInit() {
    this.role = localStorage.getItem('user')
    this.contratForm = new FormGroup({
      societeId: new FormControl(''),
      directionId: new FormControl(''),
      departementId: new FormControl(''),
      structureId: new FormControl(''),
      fonction: new FormControl(''),
      prenom: new FormControl(''),
      nom: new FormControl(''),
      email: new FormControl(''),
      telephone: new FormControl(''),
    });
    this.userForm = new FormGroup({
      prenom: new FormControl(''),
      nom: new FormControl(''),
      email: new FormControl(''),
      telephone: new FormControl(''),
      fonction: new FormControl(''),
      login: new FormControl(''),
      profil: new FormControl('8'),
      avatar: new FormControl(''),
      agenceId: new FormControl(''),
      isManager: new FormControl('false'),
      matricule: new FormControl(''),
      interimaireId: new FormControl(''),
      structureId: new FormControl('')
    })
    this.otherService.getAllSociete().subscribe(
      data => {
        this.dataSociete = data["data"];
        console.log(data);
      }, error=> {
        this.errorMsg = error;
        this.errormodalService.open('error-modal-1');
        console.log(error)
      }
    );
    this.arretForm = new FormGroup({
      motif: new FormControl(''),
    });
    this.bloquerForm = new FormGroup({
      action: new FormControl(''),
    });
  }

  getPhoto(event: any) {
    this.fichierPhoto = event.target.files[0];
    this.photoName = this.fichierPhoto.name;
    let reader = new FileReader();
    reader.readAsDataURL( this.fichierPhoto);
    reader.onload= ()=>{
      this.image= reader.result;
      console.log(this.image);
    }
  }

  ajouterUser() {
    const formdata = new FormData(); 
    formdata.append("prenom",this.userForm.value.prenom);
    formdata.append("nom",this.userForm.value.nom);
    formdata.append("profil",this.userForm.value.profil);
    formdata.append("fonction",this.userForm.value.fonction);
    formdata.append("agenceId",this.userForm.value.agenceId);
    formdata.append("email",this.userForm.value.email);
    formdata.append("telephone",this.userForm.value.telephone);
    if(this.userForm.value.matricule != undefined) {
      formdata.append("matricule",this.userForm.value.matricule);
    }
    formdata.append("interimaireId",this.userForm.value.interimaireId);
    formdata.append("structureId",this.userForm.value.structureId);
    formdata.append("avatar",this.fichierPhoto);
    console.log(formdata);
    console.log(this.userForm.value);
    this.otherService.addUser(formdata).subscribe(
      (response) =>{
        console.log(response)
        this.router.navigate(['/accueil/listeuser']);
      },
      error=> {
        this.errorMsg = error;
        this.errormodalService.open('error-modal-1');
        console.log(error)
      }
    )
  }

  directionsListe(value) {
    console.log(value);
    this.otherService.getAllDirection(value).subscribe(
      data => {
        this.dataDirection = data['data'];
       console.log(data);
      }, error=> {
        this.errorMsg = error;
        this.errormodalService.open('error-modal-1');
        console.log(error)
      }
    ); 
  }

  departementListe(value) {
    console.log(value);
    this.otherService.getAllDepartement(value).subscribe(
      data => {
        this.dataDepartement = data['data'];
       console.log(data);
      }, error=> {
        this.errorMsg = error;
        this.errormodalService.open('error-modal-1');
        console.log(error)
      }
    ); 
  }

  serviceListe(value) {
    console.log(value);
    this.otherService.getAllService(value).subscribe(
      data => {
        this.donneeService = data['data'];
       console.log(data);
      }, error=> {
        this.errorMsg = error;
        this.errormodalService.open('error-modal-1');
        console.log(error)
      }
    ); 
  }

  modifierUser() {
    this.router.navigate(['accueil/modifieruser'], {
      queryParams: {
        user: JSON.stringify(this.item)
      }
    })
  }

  bloquerUser() {
    console.log(this.dataUser);
    this.otherService.bloquerUser(this.item, this.bloquerForm.value).subscribe(
      (response) =>{
        console.log(response)
        this.dataBannir = response;
        this.successMsgBannir = this.dataBannir.status;
        if(this.successMsgBannir == true) {
         this.closeModal('custom-modal-7');
         this.closeModal('custom-modal-8');
          this.ngOnInit();
        }
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  closeModal(id: string) {
    this.modalService.close(id);
  }
  openModal(id: string) {
    this.modalService.open(id);
  }
  openErrorModal(id: string) {
    this.errormodalService.open(id);
  }

  closeErrorModal(id: string) {
    this.errormodalService.close(id);
  }
}

import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OthersService } from 'src/app/services/others.service';
import { ModalService } from 'src/app/modal/_modal';
import { environment } from 'src/environments/environment';
import { ErrormodalService } from 'src/app/modal/_errormodals';

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
  successMsg: any;
  userAgentForm: FormGroup;
  logo: any;
  constructor(private activeroute: ActivatedRoute,
              private modalService: ModalService,
              private otherService: OthersService,
              private errormodalService: ErrormodalService,
              public router: Router, 
              private toastr: ToastrService) { 
    this.activeroute.queryParams.subscribe(params => {
      this.item = JSON.parse(params["user"]);
    })
    this.userAgentForm = new FormGroup({
      prenomUser: new FormControl('', Validators.required,),
      nomUser: new FormControl('', Validators.required,),
      emailUser: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]),
      telephoneUser: new FormControl('', Validators.required,),
      fonction: new FormControl('', Validators.required,),
      login: new FormControl(''),
      profil: new FormControl(''),
      avatarUser: new FormControl(''),
      agenceId: new FormControl(''),
      id: new FormControl(this.item)
    })
  }
  ngOnInit() {
    this.role = localStorage.getItem('user');
    this.otherService.getUserById(this.item).subscribe(
      data =>{
       this.data = data;
       this.dataUser = this.data.data;
       this.nom = this.dataUser.nom;
       this.prenom = this.dataUser.prenom;
       this.email = this.dataUser.email;
       this.fonction = this.dataUser.fonction;
       this.telephone = this.dataUser.telephone;
       this.matricule = this.dataUser.matricule;
       this.photo = this.reqUrl + this.dataUser.avatar;
      }
    );
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
      }
    );
    this.arretForm = new FormGroup({
      motif: new FormControl(''),
    });
    this.bloquerForm = new FormGroup({
      action: new FormControl(''),
    });
  }

  getPhoto(e:any) {
    this.fichierPhoto= e.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(this.fichierPhoto)
    reader.onload= ()=>{
      this.image= reader.result
    } 
  }

  ajouterUser() {
    const formdata = new FormData(); 
    formdata.append("prenom",this.userAgentForm.value.prenomUser);
    formdata.append("nom",this.userAgentForm.value.nomUser);
    //formdata.append("profil",this.userAgentForm.value.profil);
    formdata.append("fonction",this.userAgentForm.value.fonction);
    //formdata.append("agenceId",this.item);
    formdata.append("email",this.userAgentForm.value.emailUser);
    formdata.append("telephone",this.userAgentForm.value.telephoneUser);
    formdata.append("avatar",this.fichierPhoto);
    this.otherService.updateUser(formdata, this.item).subscribe(
      (response) =>{
        this.data = response;
        this.successMsg = this.data.status
        if(this.successMsg == true) {
          this.toastr.success('L\'utilisateur a été ajouté', 'Sucess', {
            timeOut: 3000,
          });
          this.ngOnInit();
          this.closeModal('custom-modal-1');
        }
      },
      error=> {
        this.errorMsg = error;
        this.toastr.error(this.errorMsg, 'Echec', {
          timeOut: 5000,
        });
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
    const inputAction = {
      action: 'desactivate'
    }
    this.otherService.bloquerUser(this.item, inputAction).subscribe(
      (response) =>{
        console.log(response)
        this.dataBannir = response;
        this.successMsgBannir = this.dataBannir.status;
        if(this.successMsgBannir == true) {
          this.closeModal('custom-modal-7');
          this.ngOnInit();
        }
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  activerUser() {
    console.log(this.dataUser);
    const inputAction = {
      action: 'activate'
    }
    this.otherService.bloquerUser(this.item, inputAction).subscribe(
      (response) =>{
        console.log(response)
        this.dataBannir = response;
        this.successMsgBannir = this.dataBannir.status;
        if(this.successMsgBannir == true) {
          this.ngOnInit();
         this.closeModal('custom-modal-8');
          
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

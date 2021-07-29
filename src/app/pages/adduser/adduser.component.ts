import { OthersService } from './../../services/others.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ErrormodalService } from 'src/app/_errormodals';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  dataInterSousContrat;
  show = false;

  pieceForm: FormGroup;
  dataMatriculeInter;
  prenom;
  matricule;
  nom;
  email;
  telephone;
  fonction;
  profil;
  login;
  ListePiece = [
    {
      id: 1, 
      libelle: "CNI",
    },
    {
      id: 2, 
      libelle: "Passeport"
    }
  ];
  dataprofils;
  dataSociete;
  interimaireId: FormGroup;
  structureId: FormGroup;
  userForm: FormGroup;
  userAgentForm: FormGroup;
  datas: any;
  fichierPhoto?: File;
  photoName;
  user;
  successMsg;
  data;
  page = 1;
  itemsPerPage = 100;
  totalItems : any;
  dataAgence;
  dataStructure;
  url1="../assets/images/default.png";
  image ;
  listeFonction
  p = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  public reqUrl = environment.base_url;
  errorMsg: any;
  constructor(private dataService: DataService, 
              private otherService: OthersService,
              private route: Router,
              private http: HttpClient,
              private errormodalService: ErrormodalService,
    ) { }

  ngOnInit() {
    this.user = localStorage.getItem('user');
    this.otherService. getInterSousContrat().subscribe(
      data => {
       this.dataInterSousContrat = data.data;
       console.log(data);
      }, error=> {
        this.errorMsg = error;
        this.errormodalService.open('error-modal-1');
        console.log(error)
      }
    );
    this.pieceForm = new FormGroup({
      typePiece: new FormControl(''),
      numeroPiece: new FormControl(''),
      societeId: new FormControl('')
    });
    this.userForm = new FormGroup({
      id: new FormControl(''),
      profil: new FormControl(''),
    }); 
    this.userAgentForm = new FormGroup({
      prenom: new FormControl('', Validators.required,),
      nom: new FormControl('', Validators.required,),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]),
      telephone: new FormControl('', Validators.required,),
      fonction: new FormControl('', Validators.required,),
      login: new FormControl(''),
      profil: new FormControl('8'),
      avatar: new FormControl(''),
      agenceId: new FormControl(''),
      isManager: new FormControl('false'),
      matricule: new FormControl(''),
      interimaireId: new FormControl(''),
      structureId: new FormControl('')
    })

    //recupere les societes
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

    this.otherService.getAllStructure().subscribe(data => {
      console.log(data);
      this.dataStructure = data['data'];
    }, error=> {
      this.errorMsg = error;
      this.errormodalService.open('error-modal-1');
      console.log(error)
    })

      //recupere les profils
    this.otherService.getprofil().subscribe(
      data => {
        this.dataprofils = data["data"];
        console.log(data);
      }, error=> {
        this.errorMsg = error;
        this.errormodalService.open('error-modal-1');
        console.log(error)
      }
    );
    this.onChanges();

    this.gty(this.page);

    this.otherService.getFonctions().subscribe(data => this.listeFonction = data.data);
  }

  gty(page: any){
    this.http.get(this.reqUrl + `/listeAgence?page=${page}&limit=${this.itemsPerPage}`).subscribe((data: any) => {
      this.dataAgence =  data.data;
      this.totalItems = data.total;
      console.log(this.dataAgence);
      console.log(this.totalItems);
    }, error=> {
      this.errorMsg = error;
      this.errormodalService.open('error-modal-1');
      console.log(error)
    })
  }

  onChanges(): void {
    this.userAgentForm.get('matricule').valueChanges.subscribe(val => {
      if (val) {
        this.rechercherInterimaire(val);
      }
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
  submitted1() {
  /*  const info = {
      matricule: this.pieceForm.value.matricule,
    } 
    this.show = true;
    console.log(info);
    return info;*/
  }
  submitted2() {
    this.show = false;
  }
  
  rechercherInterimaire(matricule) {  
    this.otherService.matriculeFilter(matricule).subscribe(
      (response) => {
        this.dataMatriculeInter = response;
        console.log(this.dataMatriculeInter);
        this.prenom = this.dataMatriculeInter.data.personne.prenom;
        this.nom = this.dataMatriculeInter.data.personne.nom;
        this.telephone = this.dataMatriculeInter.data.personne.telephone;
        this.userAgentForm.patchValue({interimaireId: this.dataMatriculeInter.data.interimaire.id});
      },
      (error) =>{
        console.log(error)
      }
    )
  }

  public saveFonction(e): void {
    let libelle = e.target.value;
    let list = this.listeFonction.filter(x => x.libelle === libelle)[0];
    console.log(list.libelle);
    this.userAgentForm.patchValue({fonction: list.libelle});
  }

  ajouterUser() {
    const formdata = new FormData(); 
    formdata.append("prenom",this.userAgentForm.value.prenom);
    formdata.append("nom",this.userAgentForm.value.nom);
    formdata.append("profil",this.userAgentForm.value.profil);
    formdata.append("fonction",this.userAgentForm.value.fonction);
    formdata.append("agenceId",this.userAgentForm.value.agenceId);
    formdata.append("email",this.userAgentForm.value.email);
    formdata.append("telephone",this.userAgentForm.value.telephone);
    if(this.userAgentForm.value.matricule != undefined) {
      formdata.append("matricule",this.userAgentForm.value.matricule);
    }
    formdata.append("interimaireId",this.userAgentForm.value.interimaireId);
    formdata.append("structureId",this.userAgentForm.value.structureId);
    formdata.append("avatar",this.fichierPhoto);
    console.log(formdata);
    console.log(this.userAgentForm.value);
    this.otherService.addUser(formdata).subscribe(
      (response) =>{
        console.log(response)
        this.data = response;
        this.successMsg = this.data.status
        console.log(this.successMsg);
        
        if (this.successMsg == true) {
          this.route.navigate(['/accueil/listeuser']);
        }
      },
      error=> {
        this.errorMsg = error;
        this.errormodalService.open('error-modal-1');
        console.log(error)
      }
    )
  }
  openErrorModal(id: string) {
    this.errormodalService.open(id);
  }

  closeErrorModal(id: string) {
    this.errormodalService.close(id);
  }
}

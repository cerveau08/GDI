import { OthersService } from './../../services/others.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  
  item = {
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
  };
  dataInterSousContrat;
  show = false;

  pieceForm: FormGroup;
  dataMatriculeInter;
  prenom;
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
  url1="../assets/images/default.png";
  image ;
  p = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  constructor(private dataService: DataService, 
              private otherService: OthersService,
              private route: Router
    ) { }

  ngOnInit() {
    this.user = localStorage.getItem('user');
    this.otherService. getInterSousContrat().subscribe(
      data => {
       this.dataInterSousContrat = data.data;
       console.log(data);
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
      prenom: new FormControl(''),
      nom: new FormControl(''),
      email: new FormControl(''),
      telephone: new FormControl(''),
      fonction: new FormControl(''),
      login: new FormControl(''),
      profil: new FormControl('8'),
      avatar: new FormControl(''),
      agenceID: new FormControl(''),
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
      }
    );


      //recupere les profils
    this.otherService.getprofil().subscribe(
      data => {
        this.dataprofils = data["data"];
        console.log(data);
      }
    );
    this.onChanges();
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

  ajouterUser() {
    const formdata = new FormData();  
    const value = this.userAgentForm.value;
    formdata.append("prenom",this.userAgentForm.value.prenom);
    formdata.append("nom",this.userAgentForm.value.nom);
   formdata.append("profil",this.userAgentForm.value.profil);
    formdata.append("fonction",this.userAgentForm.value.poste);
    formdata.append("agenceId",this.userAgentForm.value.agenceId);
    formdata.append("email",this.userAgentForm.value.email);
    formdata.append("telephone",this.userAgentForm.value.telephone);
    formdata.append("matricule",this.userAgentForm.value.matricule);
    formdata.append("interimaireId",this.userAgentForm.value.interimaireId);
    formdata.append("structureId",this.userAgentForm.value.structureId);
    formdata.append("avatar",this.fichierPhoto);
    console.log(formdata);
    console.log(this.userAgentForm.value);
    this.otherService.addUser(formdata).subscribe(
      (response) =>{
        console.log(response)
        this.route.navigate(['/accueil/souscontrat']);
      },
      (error) =>{
        console.log(error)
      }
    )
  }
}

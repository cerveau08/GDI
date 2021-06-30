import { OthersService } from './../../services/others.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';

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
  show = false;
  matriculeForm: FormGroup;
  userForm: FormGroup;
  userAgentForm: FormGroup;
  datas: any;
  fichierPhoto?: File;
  photoName;
  user;
  url1="../assets/images/default.png";
  image ;
  p = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  constructor(private dataService: DataService, private otherService: OthersService) { }

  ngOnInit() {
    this.user = localStorage.getItem('user');
    this.datas = this.dataService.getData();
    this.matriculeForm = new FormGroup({
      matricule: new FormControl(''),
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
    const info = {
        matricule: this.matriculeForm.value.matricule,
    } 
    this.show = true;
    console.log(info);
    return info;
  }
  submitted2() {
    this.show = false;
  }

  ajouterUser() {
    const formdata = new FormData();
    const value = this.userAgentForm.value;
    formdata.append("prenom",this.userAgentForm.value.prenom);
    formdata.append("nom",this.userAgentForm.value.nom);
   // formdata.append("profil",this.userAgentForm.value.profil);
    formdata.append("profil","8");
    formdata.append("fonction",this.userAgentForm.value.poste);
    formdata.append("agenceId",this.userAgentForm.value.agenceId);
    formdata.append("email",this.userAgentForm.value.email);
    formdata.append("telephone",this.userAgentForm.value.telephone);
    formdata.append("matricule",this.userAgentForm.value.matricule);
    formdata.append("avatar",this.fichierPhoto);
    formdata.append("isManager","false");
    console.log(formdata);
    console.log(this.userAgentForm.value);
    this.otherService.addUser(formdata).subscribe(
      (response) =>{
        console.log(response)
      },
      (error) =>{
        console.log(error)
      }
    )
  }
}

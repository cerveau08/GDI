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
  user;
  p = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  constructor(private dataService: DataService) { }

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
      poste: new FormControl(''),
      login: new FormControl(''),
      password: new FormControl('')
    })
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

  submitAgent() {
    const agent = {
      prenom: this.userAgentForm.value.prenom,
      nom: this.userAgentForm.value.nom,
      email: this.userAgentForm.value.email,
      telephone: this.userAgentForm.value.telephone,
      poste: this.userAgentForm.value.poste,
      login: this.userAgentForm.value.login,
      password: this.userAgentForm.value.password
    }
    console.log(agent);
    return agent;
  }
}

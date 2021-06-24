import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxFileSaverService } from '@clemox/ngx-file-saver';
import { DataService } from 'src/app/service/data.service';
import { ModalService } from 'src/app/_modal/modal.service';

@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.scss']
})
export class AgenceComponent implements OnInit {

  item = {
    id: 19,
    prenom: "Amadou Dieye",
    nom: "LEYE",
    poste: "Développeur Web",
    dateDebut: "Mon Jan 01 2021 00:00:00 GMT+0000 (Greenwich Mean Time)",
    dateFin: "Mon Dec 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)",
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
    site: "www.2t-s.com",
    adagen: "Sacré Cœur 3 Pyrotechnie, Immeuble USAID à coté de la Pharmacie Mame Oumy GUEYE",
    manager: "Madiagne SYLLA",
    email: "amadou.dieye.leye@orange-sonatel.com",
    telephone: "+ 221 33 824 91 31",
    adresse: "mbour",
    photo: "manager.png",
    matricule: "060210",
    statut: "non",
    file: "1.pdf",
    agentimg: "oval1.png",
    pathfile: "../assets/doc/1.pdf",
    postem: "Chef de Services Production et Maintenance Applicatif",
    nomInt: "5"
  };
  showHome = true;
  url1;
  url3;
  url2;
  urlUser;
  user;
  filename1 = "";
  filename2 = "";
  filename3 = "";
  filenameUser = "";
  showupdate;
  showadduser;
  datas: any;
  agenceForm: FormGroup;
  userAgenceForm: FormGroup;
  viewer = 'google';
  DemoDoc="http://www.africau.edu/images/default/sample.pdf" 
  DemoDoc1="https://file-examples.com/wp-content/uploads/2017/02/file-sample_100kB.doc"
  DemoDoc2="https://www.le.ac.uk/oerresources/bdra/html/resources/example.txt" 
  constructor(private fileSaver: NgxFileSaverService,
    private modalService: ModalService,
    private dataService: DataService,) { }

  ngOnInit() {
    this.user = localStorage.getItem('user');
    if(this.user == 'agence' || this.user == 'drh') {
      this.showupdate = true;
    } else {
      this.showupdate = false;
    }
    this.user = localStorage.getItem('user');
    if(this.user == 'inter') {
      this.showHome = false;
    } else {
      this.showHome = true;
    }
    this.datas = this.dataService.getData();
    this.agenceForm = new FormGroup({
      nom: new FormControl (''),
      directeur: new FormControl(''),
      numerodg: new FormControl (''),
      email: new FormControl(''),
      mobile: new FormControl (''),
      fixe: new FormControl(''),
      website: new FormControl (''),
      adresse: new FormControl(''),
      photo: new FormControl (''),
      contrat: new FormControl(''),
      cnidg: new FormControl (''),
    });
    this.userAgenceForm = new FormGroup({
      prenom: new FormControl (''),
      nom: new FormControl(''),
      poste: new FormControl (''),
      email: new FormControl(''),
      mobile: new FormControl (''),
      adresse: new FormControl(''),
      photo: new FormControl (''),
    });
  }

  submitted1() {
    const info = {
        nom: this.agenceForm.value.nom,
        directeur: this.agenceForm.value.directeur,
        numerodg: this.agenceForm.value.numerodg,
        email: this.agenceForm.value.email,
        mobile: this.agenceForm.value.mobile,
        fixe: this.agenceForm.value.fixe,
        website: this.agenceForm.value.website,
        adresse: this.agenceForm.value.adresse,
        photo: this.agenceForm.value.photo,
        contrat: this.agenceForm.value.contrat,
        cnidg: this.agenceForm.value.cnidg,
    } 
    console.log(info);
    return info;
  }

  ajouterUser() {
    console.log(this.userAgenceForm.value);
  }

  public getfilemodal() {
    this.fileSaver.saveUrl(this.DemoDoc, 'contrat');
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
//photo
  readUrl(event: any) {
    console.log('readUrl');
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.url1 = event.target.result;
        }
      
        reader.readAsDataURL(event.target.files[0]);
      }
  }
//contrat
  readUrl1(event: any) {
    console.log('readUrl');
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
      
        reader.onload = (event: any) => {
          this.url2 = event.target.result;
        }
        this.filename2 = event.target.files[0].name;
        reader.readAsDataURL(event.target.files[0]);
      }
  }
  //cnidg
  readUrl2(event: any) {
    console.log('readUrl');
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
      
        reader.onload = (event: any) => {
          this.url3 = event.target.result;
        }
        this.filename3 = event.target.files[0].name;
        reader.readAsDataURL(event.target.files[0]);
      }
  }

  readUrlUser(event: any) {
    console.log('readUrl');
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
      
        reader.onload = (event: any) => {
          this.urlUser = event.target.result;
        }
        this.filenameUser = event.target.files[0].name;
        reader.readAsDataURL(event.target.files[0]);
      }
  }

  delete(id) {
  }
}

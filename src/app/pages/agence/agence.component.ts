import { OthersService } from './../../services/others.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxFileSaverService } from '@clemox/ngx-file-saver';
import { DataService } from 'src/app/service/data.service';
import { ModalService } from 'src/app/_modal/modal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.scss']
})
export class AgenceComponent implements OnInit {

  item;
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
  dataAgence;
  nom;
  responsable;
  numdg;
  email;
  telephone;
  contratDoc;
  siteweb;
  adresse;
  logo;
  contrat;
  userAgence;
  dataTotalAgence;
  total;
  actifs;
  inactifs;
  viewer = 'google';
  DemoDoc="http://www.africau.edu/images/default/sample.pdf" 
  DemoDoc1="https://file-examples.com/wp-content/uploads/2017/02/file-sample_100kB.doc"
  DemoDoc2="https://www.le.ac.uk/oerresources/bdra/html/resources/example.txt" 

  constructor(private fileSaver: NgxFileSaverService,
    private modalService: ModalService,
    private dataService: DataService,
    private otherService: OthersService) { }

  ngOnInit() {
    this.agenceForm = new FormGroup({
      nom: new FormControl (''),
      responsable: new FormControl(''),
      numdg: new FormControl (''),
      email: new FormControl(''),
      telephone: new FormControl (''),
      fixe: new FormControl(''),
      site: new FormControl (''),
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
    this.item = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.item.agence.id)
    this.user = localStorage.getItem('user');
    if(this.user == 'agence') {
      this.showupdate = true;
    } else {
      this.showupdate = false;
    }
    if(this.user == 'inter') {
      this.showHome = false;
    } else {
      this.showHome = true;
    }
    this.otherService.getOneAgenceById(this.item.agence.id).subscribe(
      data =>{
        this.dataAgence = data;
        console.log(this.dataAgence);
        this.nom = this.dataAgence.data.nom;
        this.responsable  = this.dataAgence.data.responsable;
        this.numdg = this.dataAgence.data.numdg;
        this.email = this.dataAgence.data.email;
        this.telephone = this.dataAgence.data.telephone;
        this.contratDoc = this.dataAgence.data.contrat;
        this.siteweb = this.dataAgence.data.site;
        this.adresse = this.dataAgence.data.adresse;
        this.logo = this.dataAgence.data.logo;
        this.contrat = this.dataAgence.data.contrat;
      //  this.cnidg = this.dataAgence.data.data.cnidg;
        this.userAgence = this.dataAgence.data['user'];
        console.log(this.userAgence);
        
      },
      error =>{
        console.log(error)
      }
    );
    this.otherService.getTotalAgenceActifInactif(this.item.agence.id).subscribe(
      data =>{
        this.dataAgence = data;
        this.dataTotalAgence = this.dataAgence['data'];
        console.log(this.dataTotalAgence);
        this.nom = this.dataTotalAgence[0].nom;
        console.log(this.nom);
        
        this.total = this.dataTotalAgence[0].total;
        this.actifs = this.dataTotalAgence[0].actifs;
        this.inactifs = this.dataTotalAgence[0].inactifs;
      });
    
  }

  submitted1() {
    const info = {
        nom: this.agenceForm.value.nom,
        nomdg: this.agenceForm.value.nomdg,
        numerodg: this.agenceForm.value.numerodg,
        email: this.agenceForm.value.email,
        mobile: this.agenceForm.value.mobile,
        fixe: this.agenceForm.value.fixe,
        site: this.agenceForm.value.siteweb,
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

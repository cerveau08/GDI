import { DataService } from 'src/app/service/data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalService } from 'src/app/_modal/modal.service';
import { ActivatedRoute, Router } from '@angular/router';
import {OthersService} from '../../services/others.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-listeragence',
  templateUrl: './listeragence.component.html',
  styleUrls: ['./listeragence.component.scss']
})
export class ListeragenceComponent implements OnInit {

  url1;
  url3;
  user;
  showupdate;
  showadduser;
  id: any;
  item:any;
  datas: any;  
  agenceForm: FormGroup;
  userForm: FormGroup;
  photo;
  errorMsg;
  dataAgence: any;

  page = 1;
  itemsPerPage = 3;
  totalItems : any;
  public reqUrl = environment.base_url;
  constructor(private dataService: DataService,
    private modalService: ModalService,
    private activeroute: ActivatedRoute,
    public router: Router,
    private http: HttpClient,
    private otherService: OthersService) {}

  ngOnInit() {
    this.user = localStorage.getItem('user');
    if(this.user == 'drh') {
      this.showupdate = true;
    } else {
      this.showupdate = false;
    }
   
    this.datas = this.dataService.getData();
    this.agenceForm = new FormGroup({
      nom: new FormControl (''),
      nomdg: new FormControl(''),
      numdg: new FormControl (''),
      email: new FormControl(''),
      mobile: new FormControl (''),
      fixe: new FormControl(''),
      siteweb: new FormControl (''),
      adresse: new FormControl(''),
      photo: new FormControl (''),
      contrat: new FormControl(''),
      cnidg: new FormControl (''),
      ninea: new FormControl (''),
      rccm: new FormControl (''),
    });
    this.gty(this.page);
  }
  //URL/api?page=1&limite=8
  gty(page: any){
    this.http.get(this.reqUrl + `/listeAgence?page=${page}&limit=${this.itemsPerPage}`).subscribe((data: any) => {
      this.dataAgence =  data.data;
      this.totalItems = data.total;
      console.log(this.dataAgence);
      console.log(this.totalItems);
      
    })
  }

  openDetail(data) {
    this.router.navigate(['/accueil/detailagence'], {
      queryParams: {
        user: JSON.stringify(data)
      }
    })

    //this.getAgence();
  }
  submitted1() {
    console.log(this.agenceForm.value);
    const value = this.agenceForm.value;
    const info = new FormData();
    info.append("nom",value.nom);
    info.append("nomdg",value.nomdg);
    info.append("numdg",value.numdg);
    info.append("email",value.email);
    info.append("mobile",value.mobile);
    info.append("fixe",value.fixe);
    info.append("siteweb",value.siteweb);
    info.append("adresse",value.adresse);
    info.append("logo",this.photo);
    info.append("contrat",value.contrat);
    info.append("cnidg",value.cnidg);
    info.append("ninea",value.ninea);
    info.append("rccm",value.rccm);
   console.log(info);
  }

 // submitted2() {
   // const info = {
      //  prenom: this.userForm.value.prenom,
       // nom: this.userForm.value.nom,
       // email: this.userForm.value.email,
      //  telephone: this.userForm.value.telephone,
     //   profil: this.userForm.value.profil,
    //    photot: this.userForm.value.photo,
   // } 
   // console.log(info);
   // return info;
  //}

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

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
  readUrl1(event: any) {
    console.log('readUrl');
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
      
        reader.onload = (event: any) => {
          this.url3 = event.target.result;
        }
      
        reader.readAsDataURL(event.target.files[0]);
      }
  }
}

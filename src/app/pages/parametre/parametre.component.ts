import { PaginationService } from 'src/app/service/pagination.service';
import { DataService } from 'src/app/service/data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { OthersService } from 'src/app/services/others.service';
import { ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.scss']
})
export class ParametreComponent implements OnInit {
 
  showHome = true;
  passwordForm: FormGroup;
  newpasswordForm: FormGroup;
  videos: any;
  changepassword = false;
  show1 = false;
  display = 1;
  datas: any;
  selected = 0;
  selected1 = 0;
  color1 = "#ff7900";
  border1 = "1px solid #ff7900";
  color2 = "#000";
  border2= "1px solid #000";
  colora = "#ff7900";
  bordera = "1px solid #ff7900";
  colorb = "#000";
  borderb= "1px solid #000";
  colorc = "#000";
  borderc= "1px solid #000";
  data = [{
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
  }];
  user;
  constructor(private dataService: DataService,
             private paginationService: PaginationService,
             private otherService: OthersService,
             private route: ActivatedRoute,
             public fb: FormBuilder,
             ) { 
              /*this.passwordForm = this.fb.group({
                email: [''],
                password: [''],
                password_confirmation: [''],
                passwordToken: ['']
              });
              route.queryParams.subscribe((params) => {
                this.passwordForm.controls.passwordToken.setValue(params.token);
              });*/
             }

  ngOnInit() {
    this.user = localStorage.getItem('user');
    if(this.user == 'inter') {
      this.showHome = false;
    } else {
      this.showHome = true;
    }
    this.datas = this.dataService.getData();
    this.videos = this.paginationService.getVidoes();
    // this.passwordForm = new FormGroup({
    //   password: new FormControl('')
    // });
    this.newpasswordForm = new FormGroup({
      password: new FormControl(''),
      plainPassword: new FormControl(''),
      oldPassword: new FormControl('')
    })
  }
//verifier password
  validerPassword() {
    const password = {
      password: this.passwordForm.value.password
    }
    console.log(password);
    this.changepassword = true;
  }
  
  //changer password
  confirmPassword() {
    this.otherService.changePassword(this.newpasswordForm.value).subscribe(
      result => {
        //alert('Password has been updated');
        console.log(result);
        this.passwordForm.reset();
      },
      error => {
        this.handleError(error);
      }
    );
  }
    handleError(error) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
      } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
  }
  
  changeShowa() {
    this.show1 = true;
    this.color2 = "#ff7900";
    this.border2 = "1px solid #ff7900";
    this.border1 = "1px solid #000";
    this.color1 = "#000";
    return this.show1;
  }
  changeShowb() {  
    this.show1 = false;
    this.color1 = "#ff7900";
    this.border1 = "1px solid #ff7900";
    this.border2 = "1px solid #000";
    this.color2 = "#000";
    return this.show1;
  }
  changedisplay1() {
    this.display = 1;
    this.colora = "#ff7900";
    this.bordera = "1px solid #ff7900";
    this.borderb = "1px solid #000";
    this.colorb = "#000";
    this.borderc = "1px solid #000";
    this.colorc = "#000";
    return this.display;
  }
  changedisplay2() {  
    this.display = 2;
    this.colorb = "#ff7900";
    this.borderb = "1px solid #ff7900";
    this.bordera = "1px solid #000";
    this.colora = "#000";
    this.borderc = "1px solid #000";
    this.colorc = "#000";
    return this.display;
  }
  changedisplay3() {  
    this.display = 3;
    this.colorc = "#ff7900";
    this.borderc = "1px solid #ff7900";
    this.borderb = "1px solid #000";
    this.colorb = "#000";
    this.bordera = "1px solid #000";
    this.colora = "#000";
    return this.display;
  }
}

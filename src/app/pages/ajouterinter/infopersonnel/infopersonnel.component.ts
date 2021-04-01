import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-infopersonnel',
  templateUrl: './infopersonnel.component.html',
  styleUrls: ['./infopersonnel.component.scss']
})
export class InfopersonnelComponent implements OnInit {

  matricule = "Tmp_02568";
  url1="../assets/images/default.png";
  url2;
  constructor() { }

  @Input() infoForm: FormGroup;
  ngOnInit() {
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

  step1Submitted() {
    this.infoForm.get('infopersonnel').get('firstname').markAsTouched();
    this.infoForm.get('infopersonnel').get('firstname').updateValueAndValidity();
    this.infoForm.get('infopersonnel').get('lastname').markAsTouched();
    this.infoForm.get('infopersonnel').get('lastname').updateValueAndValidity();
  }

  

  submitted1() {
    const infopersonnel = this.infoForm.value.infopersonnel;
    const cni = infopersonnel.numeroCni;
    const preno = infopersonnel.prenom;
    const name = infopersonnel.nom;
    const mail = infopersonnel.email;
    const date = infopersonnel.dateNais;
    const lieu = infopersonnel.lieuNais;
    const sexe = infopersonnel.genre;
    const situation = infopersonnel.situationmatri;
    const grade = infopersonnel.diplome;
    const school = infopersonnel.ecole;
    const image = infopersonnel.photo;
    const info = {
      infopersonnel: {
        numeroCni: cni,
        prenom: preno,
        nom: name,
        email: mail,
        dateNais: date,
        lieuNais: lieu,
        genre: sexe,
        situationmatri: situation,
        diplome: grade,
        ecole: school,
        photo: image,
      }
    } 
    console.log(info);
    localStorage.setItem('color1', "20px solid #f16e00");
    localStorage.setItem('color2', "20px solid #ff7900");
    localStorage.setItem('colora', "#f16e00");
    localStorage.setItem('colorb', "#ff7900");
    return info;
  }
}

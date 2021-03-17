import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.scss']
})
export class ContratComponent implements OnInit {

  matricule = "Tmp_02568";
  url1="../assets/images/default.png";
  url2;
  sommes: any = [
    '20.000f', 
    '30.000f', 
    '40.000f', 
    '50.000f',
    '60.000f',
    '70.000f',
    '80.000f', 
  ];
  @Input() infoForm: FormGroup;
  constructor() { }

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

  submitted2() {
    const contrat = this.infoForm.value.contrat;
    const typ = contrat.type;
    const agen = contrat.agence;
    const dateD = contrat.dateDebut;
    const dateF = contrat.dateFin;
    const categori = contrat.categorie;
    const salair = contrat.salaire;
    const struct = contrat.structure;
    const direc = contrat.direction;
    const depart = contrat.departement;
    const servi = contrat.service;
    const file = contrat.filecontrat;
    const info = {
      contrat: {
        type: typ,
        agence: agen,
        dateDebut: dateD,
        dateFin: dateF,
        categorie: categori,
        salaire: salair,
        structure: struct,
        direction: direc,
        departement: depart,
        service: servi,
        filecontrat: file,
      }
    } 
    console.log(info);
    localStorage.setItem('color2', "20px solid #f16e00");
    localStorage.setItem('color3', "20px solid #ff7900");
    localStorage.setItem('colorb', "#f16e00");
    localStorage.setItem('colorc', "#ff7900");
    return info;
  }
}

import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajoutsociete',
  templateUrl: './ajoutsociete.component.html',
  styleUrls: ['./ajoutsociete.component.scss']
})
export class AjoutsocieteComponent implements OnInit {
  searchForm: FormGroup;
  dataSociete;
  videsociete;
  videtelephone;
  videnumeroPiece;
  videtypePiece;
  ListePiece;
  constructor() { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      numeroPiece: new FormControl(''),
      societe: new FormControl(''),
      telephone: new FormControl(''),
      typePiece: new FormControl(''),
    });
  }

  rechercherInterimaire() {}
}

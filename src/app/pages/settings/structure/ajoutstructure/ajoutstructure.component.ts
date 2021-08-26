import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajoutstructure',
  templateUrl: './ajoutstructure.component.html',
  styleUrls: ['./ajoutstructure.component.scss']
})
export class AjoutstructureComponent implements OnInit {
  searchForm: FormGroup;
  constructor() { }

  ngOnInit() {
    
    this.searchForm = new FormGroup({
      numeroPiece: new FormControl(''),
      societe: new FormControl(''),
      telephone: new FormControl(''),
      typePiece: new FormControl(''),
    });
  }

}

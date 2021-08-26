import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajoutdirection',
  templateUrl: './ajoutdirection.component.html',
  styleUrls: ['./ajoutdirection.component.scss']
})
export class AjoutdirectionComponent implements OnInit {
  directionForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.directionForm = new FormGroup({
      numeroPiece: new FormControl(''),
      societe: new FormControl(''),
      telephone: new FormControl(''),
      typePiece: new FormControl(''),
    });
  }

}

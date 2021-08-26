import { OthersService } from './../../../../services/others.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajoutprofil',
  templateUrl: './ajoutprofil.component.html',
  styleUrls: ['./ajoutprofil.component.scss']
})
export class AjoutprofilComponent implements OnInit {
  profilForm: FormGroup;
  libelle;
  code;
  description;
  emptyLib = false;
  constructor(private otherService: OthersService) { }

  ngOnInit() {
    this.profilForm = new FormGroup({
      libelle: new FormControl(''),
      code: new FormControl(''),
      description: new FormControl(''),
    });
  }

  rechercherInterimaire() { 
    this.libelle = this.profilForm.value.libelle;
    this.code = this.profilForm.value.code;
    this.description = this.profilForm.value.description;
    if(!this.libelle) {
      this.emptyLib = true;
    }
    this.otherService.pieceFilter(this.profilForm.value).subscribe(
    )
      }
  }


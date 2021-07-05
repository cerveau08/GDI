import { FormControl, FormGroup } from '@angular/forms';
import { OthersService } from 'src/app/services/others.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoundText } from '@angular/compiler/src/render3/r3_ast';
import { ModalService } from 'src/app/_modal';

@Component({
  selector: 'app-objectifs',
  templateUrl: './objectifs.component.html',
  styleUrls: ['./objectifs.component.scss']
})
export class ObjectifsComponent implements OnInit {

  objectif;
  item;
  data;
  interimaire;
  prenon;
  nom;
  objectifForm: FormGroup;
  noteForm: FormGroup;
  constructor(private otherService: OthersService,
    private modalService: ModalService,
    private activeroute: ActivatedRoute,) {
    this.activeroute.queryParams.subscribe(params => {
      this.item = JSON.parse(params["interimaire"]);
      console.log(this.item);
    });
  }

  ngOnInit() {
    this.otherService.getListeObjectif(this.item).subscribe(
      data => {
        this.data = data
        this.objectif = this.data["data"];
        console.log(data);
      }
    );
    this.objectifForm = new FormGroup({
      titre: new FormControl(''),
      description: new FormControl(''),
      interimaire: new FormControl(''),
      structure_id: new FormControl(''),
      bareme: new FormControl(''),
      date_objectif: new FormControl('')
    });
    this.noteForm = new FormGroup({
      note: new FormControl(''),
      commentaire: new FormControl('')
    });
    this.otherService.getOneInterById(this.item).subscribe(
      data =>{
        this.interimaire = data;
        this.interimaire.data.prenom;
        this.interimaire.data.nom;
        this.objectifForm.patchValue({structure_id: this.interimaire.data.structure.id});
      },
      error =>{
        console.log(error)
      }
    );
    this.objectifForm.patchValue({interimaire: this.item});
  }

  addObject() {
    console.log(this.objectifForm.value);
    this.otherService.addObjectifs(this.objectifForm.value).subscribe(
      data =>{
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
  }

  notezObjectif(id) {
    console.log(this.noteForm.value);
    this.otherService.notezObjectif(this.noteForm.value, id).subscribe(
      data =>{
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    )
  }
  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}

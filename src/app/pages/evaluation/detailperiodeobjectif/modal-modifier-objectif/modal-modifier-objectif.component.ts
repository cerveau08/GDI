import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OthersService } from 'src/app/services/others.service';
import { ModalService } from 'src/app/modal/_modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-modifier-objectif',
  templateUrl: './modal-modifier-objectif.component.html',
  styleUrls: ['./modal-modifier-objectif.component.scss']
})
export class ModalModifierObjectifComponent implements OnInit {

  
  @Input('objectifData') itemobjectif;
  message = 'true';
  @Output() messageEvent = new EventEmitter<string>();
  modifierForm: FormGroup;
  description;
  titre;
  id;
  successMsg;
  data;
  errorMsg: any;
  constructor(private otherService: OthersService,
    private modalService: ModalService,
    public router: Router,
    ) { }

  ngOnInit() {
    this.modifierForm = new FormGroup({
      titre: new FormControl(''),
      description: new FormControl(''),
      indicateur: new FormControl(''),
      valeurCible: new FormControl(''),
    });
  }

  modifierObjectif(id) {
    this.otherService.modifierOneObjectif(this.modifierForm.value, id).subscribe(
      data =>{
        console.log(id);
        this.data = data;
        this.successMsg = this.data.status
        if(this.successMsg == true) {
          this.messageEvent.emit(this.message)
        }
      }
    )
  }

  closeModal(id: string) {
    this.modalService.close(id);
    console.log(id);
  }
}

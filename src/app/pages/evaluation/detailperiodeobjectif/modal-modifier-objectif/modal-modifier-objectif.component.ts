import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OthersService } from 'src/app/services/others.service';
import { ModalService } from 'src/app/modal/_modal';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrormodalService } from 'src/app/modal/_errormodals';

@Component({
  selector: 'app-modal-modifier-objectif',
  templateUrl: './modal-modifier-objectif.component.html',
  styleUrls: ['./modal-modifier-objectif.component.scss']
})
export class ModalModifierObjectifComponent implements OnInit {

  
  @Input('objectifData') itemobjectif;
  modifierForm: FormGroup;
  description;
  titre;
  id;
  successMsg;
  data;
  errorMsg: any;
  constructor(private otherService: OthersService,
    private modalService: ModalService,
    private activeroute: ActivatedRoute,
    private errormodalService: ErrormodalService,
    public router: Router,
    ) { }

  ngOnInit() {
    this.modifierForm = new FormGroup({
      titre: new FormControl(''),
      description: new FormControl(''),
      indicateur: new FormControl(''),
      valeurCible: new FormControl(''),
      idEvaluation: new FormControl(''),
    });
  }

  modifierObjectif(id) {
    this.otherService.modifierObjectif(this.modifierForm.value, id).subscribe(
      data =>{
        this.data = data;
        this.successMsg = this.data.status
        if(this.successMsg == true) {
          this.closeModal('modif-modal-'+id);
        }
      },
      error=> {
        this.errorMsg = error;
        this.closeModal('modif-modal-'+id);
        this.errormodalService.open('error-modal-1');
      }
    )
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}

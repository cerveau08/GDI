import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OthersService } from 'src/app/services/others.service';
import { ModalService } from 'src/app/_modal';
import { ErrormodalService } from 'src/app/_errormodals';

@Component({
  selector: 'app-modal-modifier',
  templateUrl: './modal-modifier.component.html',
  styleUrls: ['./modal-modifier.component.scss']
})
export class ModalModifierComponent implements OnInit {

  @Input('objectifData') itemobjectif= '';
  modifierForm: FormGroup;
  description;
  titre;
  id;
  successMsg;
  data;
  constructor(private otherService: OthersService,
    private modalService: ModalService,
    private activeroute: ActivatedRoute,
    private errormodalService: ErrormodalService,
    public router: Router,
    ) { }

  ngOnInit() {
    this.modifierForm = new FormGroup({
      titre: new FormControl(''),
      description: new FormControl('')
    });
  }

  modifierObjectif(id) {
    console.log(this.modifierForm.value);
    this.otherService.modifierObjectif(this.modifierForm.value, id).subscribe(
      data =>{
        console.log(data);
        this.data = data;
        this.successMsg = this.data.status
        if(this.successMsg == true) {
          this.closeModal('modif-modal-'+id);
          //this.ngOnInit();
        }
      },
      error=>{
        console.log(error);
      }
    )
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  openErrorModal(id: string) {
    this.errormodalService.open(id);
  }

  closeErrorModal(id: string) {
    this.errormodalService.close(id);
  }

}

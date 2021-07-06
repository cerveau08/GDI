import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OthersService } from 'src/app/services/others.service';
import { ModalService } from 'src/app/_modal';

@Component({
  selector: 'app-modal-modifier',
  templateUrl: './modal-modifier.component.html',
  styleUrls: ['./modal-modifier.component.scss']
})
export class ModalModifierComponent implements OnInit {

  @Input('objectifData') itemobjectif= '';
  modifierForm: FormGroup;
  constructor(private otherService: OthersService,
    private modalService: ModalService,
    private activeroute: ActivatedRoute,
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
        this.closeModal('modif-modal-'+id);
      },
      error=>{
        console.log(error);
      }
    )
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}

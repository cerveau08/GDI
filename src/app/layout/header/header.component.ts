import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ModalService } from 'src/app/_modal/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public click: any;
  filterterm: string;

  scrHeight:any;
  scrWidth:any;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
        console.log(this.scrHeight, this.scrWidth);
  }
  mois: any = [
    'Janvier', 
    'Février', 
    'Mars', 
    'Avril',
    'Mai',
    'Juin',
    'Juillet', 
    'Aout', 
    'Septembre', 
    'Octobre',
    'Novembre',
    'Décembre',
  ];
  sommes: any = [
    '20.000f', 
    '30.000f', 
    '40.000f', 
    '50.000f',
    '60.000f',
    '70.000f',
    '80.000f', 
  ];
  moisSelect
  demandeForm: FormGroup;
  constructor(private modalService: ModalService,) {
    this.getScreenSize();
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  ngOnInit() {
    this.demandeForm = new FormGroup({
      moi: new FormControl (''),
      somme: new FormControl('')
    });
  }
  onSubmit(id: string) {
    const demande =
    {
      moi: this.demandeForm.value.moi,
      somme: this.demandeForm.value.somme
    } 
    console.log(demande);
  }
  updown(item) {
      if (!this.click) {
        this.click = 1;
        return this.click;
      } else if (this.click = 1) {
        this.click = null;
        return this.click;
      }
  }
}

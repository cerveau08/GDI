import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-posta',
  templateUrl: './posta.component.html',
  styleUrls: ['./posta.component.scss']
})
export class PostaComponent implements OnInit {

  @Input() infoForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }
  
  submit() {
    console.log(this.infoForm.value);
  }
}

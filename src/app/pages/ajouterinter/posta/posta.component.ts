import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-posta',
  templateUrl: './posta.component.html',
  styleUrls: ['./posta.component.scss']
})
export class PostaComponent implements OnInit {

  url1="../assets/images/default.png";
  url2;
  @Input() submited = false;
  @Input() childMessage ;
  @Input() infoForm: FormGroup;
  sommes: any = [
    '20.000f', 
    '30.000f', 
    '40.000f', 
    '50.000f',
    '60.000f',
    '70.000f',
    '80.000f', 
  ];
  @ViewChild('stepper', { static: false }) stepper: MatStepper;
  constructor() { }
  message = "ok"

  @Output() messageEvent = new EventEmitter<string>();
  sendMessage() {
    this.messageEvent.emit(this.message)
  }
  ngOnInit() {
  }
  move(index: number) {
    localStorage.removeItem('reset');
    this.stepper.selectedIndex = index;
  }
  readUrl(event: any) {
    console.log('readUrl');
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
      
        reader.onload = (event: any) => {
          this.url1 = event.target.result;
        }
      
        reader.readAsDataURL(event.target.files[0]);
      }
  }

  submit() {
    console.log(this.infoForm.value);
    localStorage.setItem('color3', "20px solid #f16e00");
    localStorage.setItem('colorc', "#f16e00");
    this.submited = true;
    this.messageEvent.emit(this.message);
  }

  removeItem() {
    localStorage.removeItem('color1');
    localStorage.removeItem('color2');
    localStorage.removeItem('color3');
    localStorage.removeItem('colora');
    localStorage.removeItem('colorb');
    localStorage.removeItem('colorc');
    this.submited = false;
  }
}
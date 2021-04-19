import { PaginationService } from 'src/app/service/pagination.service';
import { DataService } from 'src/app/service/data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.scss']
})
export class ParametreComponent implements OnInit {
 
  passwordForm: FormGroup;
  newpasswordForm: FormGroup;
  videos: any;
  changepassword = false;
  show1 = false;
  display = 1;
  datas: any;
  selected = 0;
  selected1 = 0;
  color1 = "#ff7900";
  border1 = "1px solid #ff7900";
  color2 = "#000";
  border2= "1px solid #000";
  colora = "#ff7900";
  bordera = "1px solid #ff7900";
  colorb = "#000";
  borderb= "1px solid #000";
  colorc = "#000";
  borderc= "1px solid #000"
  constructor(private dataService: DataService, private paginationService: PaginationService) { }

  ngOnInit() {
    this.datas = this.dataService.getData();
    this.videos = this.paginationService.getVidoes();
    this.passwordForm = new FormGroup({
      password: new FormControl('')
    });
    this.newpasswordForm = new FormGroup({
      newpassword: new FormControl(''),
      confirmpassword: new FormControl('')
    })
  }

  validerPassword() {
    const password = {
      password: this.passwordForm.value.password
    }
    console.log(password);
    this.changepassword = true;
  }
  confirmPassword() {
    const newpassword = {
      newpassword: this.passwordForm.value.newpassword,
      confirmpassword: this.passwordForm.value.confirmpassword
    }
    console.log(newpassword);
  }
  
  changeShowa() {
    this.show1 = true;
    this.color2 = "#ff7900";
    this.border2 = "1px solid #ff7900";
    this.border1 = "1px solid #000";
    this.color1 = "#000";
    return this.show1;
  }
  changeShowb() {  
    this.show1 = false;
    this.color1 = "#ff7900";
    this.border1 = "1px solid #ff7900";
    this.border2 = "1px solid #000";
    this.color2 = "#000";
    return this.show1;
  }
  changedisplay1() {
    this.display = 1;
    this.colora = "#ff7900";
    this.bordera = "1px solid #ff7900";
    this.borderb = "1px solid #000";
    this.colorb = "#000";
    this.borderc = "1px solid #000";
    this.colorc = "#000";
    return this.display;
  }
  changedisplay2() {  
    this.display = 2;
    this.colorb = "#ff7900";
    this.borderb = "1px solid #ff7900";
    this.bordera = "1px solid #000";
    this.colora = "#000";
    this.borderc = "1px solid #000";
    this.colorc = "#000";
    return this.display;
  }
  changedisplay3() {  
    this.display = 3;
    this.colorc = "#ff7900";
    this.borderc = "1px solid #ff7900";
    this.borderb = "1px solid #000";
    this.colorb = "#000";
    this.bordera = "1px solid #000";
    this.colora = "#000";
    return this.display;
  }
}

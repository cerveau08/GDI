import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgxFileSaverService } from '@clemox/ngx-file-saver';
import { DataService } from 'src/app/service/data.service';
import { ModalService } from 'src/app/_modal/modal.service';

@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.scss']
})
export class PresenceComponent implements OnInit {

  public restant: any;
  public nombre = 69;
  public left: any;
  public datas: any;
  pager: any = {};
  filterterm: string;
  public p: any;
  pagedItems: any[];
  date: any;
  tempArr: any = { "brands": [] };
  form: FormGroup;
  parentCk=false;
  ck=false;
  viewer = 'google';  
  selectedType = 'docx';   
  DemoDoc="http://www.africau.edu/images/default/sample.pdf" 
  DemoDoc1="https://file-examples.com/wp-content/uploads/2017/02/file-sample_100kB.doc"
  DemoDoc2="https://www.le.ac.uk/oerresources/bdra/html/resources/example.txt" 
  constructor(private dataService: DataService,
    private fb: FormBuilder,
    private modalService: ModalService,
    private fileSaver: NgxFileSaverService,
    public datepipe: DatePipe) {
      this.form = this.fb.group({
        checkArray: this.fb.array([])
      })
    }

  ngOnInit() {
    this.datas = this.dataService.getData();
  }

  parentcheck(event) {
    if (event.target.checked) {
      this.ck = true;
    } else {
      this.ck = false;
    }
    return this.ck;
  }
  annuler1() {
    this.ck = false;
  }
  annuler2() {
    this.parentCk = false;
  }
  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;
  
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  submitForm() {
    console.log(this.form.value)
  }

  getwidth() {
    this.restant = this.nombre + "%";
    return this.restant;
  }
  getposition() {
    let left1 = this.nombre - 1;
    this.left = left1 + "%";
    return this.left;
  }
  

  onChangeCategory(event, cat: any){ // Use appropriate model type instead of any
    this.tempArr.brands.push(cat.statutr);
    console.log(this.tempArr.brands.push(cat.id));
  }

  getcolor1(p) {
    let color = "#ff0000"
    let d = new Date();
    var g1 = new Date(d.getFullYear(), d.getMonth()+1, d.getDate());
    let date = new Date(p.dateFin);
    let now = this.datepipe.transform(g1, 'yyyyMMdd');
    let dates = this.datepipe.transform(date, 'yyyyMMdd');
    console.log(date);
    console.log(now);
    console.log(dates);
    if(now > dates) {
      color = "#8c8c8c"
    } else {
      color = "#009393"
    }  
    return color; 
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  public getfilemodal() {
    this.fileSaver.saveUrl(this.DemoDoc, 'contrat');
  }
}

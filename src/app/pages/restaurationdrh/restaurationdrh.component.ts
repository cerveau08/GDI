import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
import { PaginationService } from 'src/app/service/pagination.service';
import { ModalService } from 'src/app/_modal';

@Component({
  selector: 'app-restaurationdrh',
  templateUrl: './restaurationdrh.component.html',
  styleUrls: ['./restaurationdrh.component.scss']
})
export class RestaurationdrhComponent implements OnInit {

  public restant: any;
  public nombre = 69;
  public left: any;
  public datas: any;
  // pager object
  pager: any = {};
  filterterm: string;
  public p: any;
  // paged items
  pagedItems: any[];
  date: any;
  tempArr: any = { "brands": [] };
  form: FormGroup;
  parentCk=false;
  ck=false;
 // check: any = {};
  constructor(private dataService: DataService,
    private pagerService: PaginationService,
    private modalService: ModalService,
    private fb: FormBuilder,
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
}

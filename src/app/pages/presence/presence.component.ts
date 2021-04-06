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

  checkedList:any;
  selectedAll: any;
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

  selectAll() {
    for (var i = 0; i < this.datas.length; i++) {
      this.datas[i].statut = this.selectedAll;
    }
    this.getCheckedItemList();
  }
  checkIfAllSelected(event) {
    this.selectedAll = this.datas.every(function(item:any) {
     // item.s = event.target.checked;
      return item.statut == true;
    })
    this.getCheckedItemList();
  }
  getCheckedItemList(){
    this.checkedList = [];
    for (var i = 0; i < this.datas.length; i++) {
      if(this.datas[i].statut)
      this.checkedList.push(this.datas[i]);
    }
    this.checkedList = /*JSON.stringify(*/this.checkedList;
    console.log(this.checkedList);
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
  
/*
  onChangeCategory(event, cat: any){
    this.tempArr.brands.push(cat.statutr);
    console.log(this.tempArr.brands.push(cat.id));
  }*/

  getcolor1(p) {
    let color = "#8c8c8c"
    let d = new Date();
    var g1 = new Date(d.getFullYear(), d.getMonth()+1, d.getDate());
    let date = new Date(p.dateFin);
    let now = this.datepipe.transform(g1, 'yyyyMMdd');
    let dates = this.datepipe.transform(date, 'yyyyMMdd');
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

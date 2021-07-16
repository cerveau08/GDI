import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NgxFileSaverService } from '@clemox/ngx-file-saver';
import { DataService } from 'src/app/service/data.service';
import { OthersService } from 'src/app/services/others.service';
import { ModalService } from 'src/app/_modal';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lesdemandes',
  templateUrl: './lesdemandes.component.html',
  styleUrls: ['./lesdemandes.component.scss']
})
export class LesdemandesComponent implements OnInit {

  checkedList:any;
  selectedAll: any;
  public restant: any;
  public nombre = 69;
  public left: any;
  public datas: any;
  dd :any;
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
  scrHeight:any;
  scrWidth:any;
  validerForm : FormGroup;
  result;
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
        console.log(this.scrHeight, this.scrWidth);
  }
  public reqUrl = environment.base_url;
  constructor(private dataService: DataService,
    private fb: FormBuilder,
    private modalService: ModalService,
    private fileSaver: NgxFileSaverService,
    private otherService: OthersService,
    private http: HttpClient,
    public datepipe: DatePipe) {
      this.form = this.fb.group({
        checkArray: this.fb.array([])
      });
      this.getScreenSize();
    }

  ngOnInit() {
    this.validerForm = new FormGroup({
      status: new FormControl('')
    })
    this.getDemandes();
  }
 
  getDemandes() {
    this.otherService.getListDemandes().subscribe(
      data => this.dd = data.data
    );
  }


  selectAll() {
    for (var i = 0; i < this.dd.length; i++) {
      this.dd[i].etat = this.selectedAll;
    }
    this.getCheckedItemList();
  }
  checkIfAllSelected(event) {
    this.selectedAll = this.dd.every(function(item:any) {
      return item.etat == 0;
    })
    this.getCheckedItemList();
  }
  getCheckedItemList() {
    this.checkedList = [];
    for (var i = 0; i < this.dd.length; i++) {
      if(this.dd[i].etat) {
        this.checkedList.push(this.dd[i]);
        this.http.post(`${this.reqUrl}/validerDemande/${this.dd[i].id}`, null).subscribe(
          data => {
            this.result = data;
            console.log(data);
          }
        )
      }
    }
    this.checkedList = this.checkedList;
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

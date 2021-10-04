import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ModalService } from 'src/app/modal/_modal';
import { OthersService } from 'src/app/services/others.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-manager-evalu',
  templateUrl: './manager-evalu.component.html',
  styleUrls: ['./manager-evalu.component.scss']
})
export class ManagerEvaluComponent implements OnInit {

  public data; any;
  public datas: any;
  role;
  dataInter: any;
  attestationForm: FormGroup;
  filterForm: FormGroup;
  page = 1;
  itemsPerPage = 10;
  pageAgence = 1;
  itemsPerPageAgence = 100;
  totalItems : any;
  successMsg;
  errorMsg: any;
  dataSociete;
  listeFonction;
  public reqUrl = environment.base_url;
  dataAgence: any;
  constructor(
    public router: Router,
    private modalService: ModalService,
    private otherService: OthersService,
    private http: HttpClient,
    private toastr: ToastrService,
    ) { }

  ngOnInit() {
    this.role = localStorage.getItem('user');

    this.filterForm = new FormGroup({
      status: new FormControl(''),
    });
    this.gty(this.page);

    this.otherService.extraireInterimaire(this.filterForm.value).subscribe(
      data => {
        this.data = data;
        this.successMsg = this.data.status
        console.log(this.data);
        
      }
    )

    this.otherService.getFonctions().subscribe(data => this.listeFonction = data.data);

    this.http.get(this.reqUrl + `/listeAgence?page=${this.pageAgence}&limit=${this.itemsPerPageAgence}`).subscribe((data: any) => {
      this.dataAgence =  data.data;
    })
  }

  gty(page: any){
    this.otherService.getInterimaireSousContrat(page, this.itemsPerPage, null, null, null, null, null).subscribe((data: any) => {
      this.dataInter =  data.data;
      this.totalItems = data.total;
    }, error=> {
      this.errorMsg = error;
      this.toastr.error(this.errorMsg, 'Echec', {
        timeOut: 5000,
      });
    })
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}

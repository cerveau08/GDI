import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxFileSaverService } from '@clemox/ngx-file-saver';
import { ToastrService } from 'ngx-toastr';
import { ErrormodalService } from 'src/app/modal/_errormodals';
import { ModalService } from 'src/app/modal/_modal';
import { AuthService } from 'src/app/services/auth.service';
import { OthersService } from 'src/app/services/others.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pasevaluation',
  templateUrl: './pasevaluation.component.html',
  styleUrls: ['./pasevaluation.component.scss']
})
export class PasevaluationComponent implements OnInit {
  public data; any;
  date = new Date();
  public datas: any;
  isData = false;
  role;
  dataInter: any;
  attestationForm: FormGroup;
  filterForm: FormGroup;
  page = 1;
  itemsPerPage = 10;
  pageAgence = 1;
  itemsPerPageAgence = 100;
  totalItems : any;
  filterterm;
  result;
  success;
  successMsg;
  annee: Date;
  yearOnly;
  errorMsg: any;
  dataAgence;
  year = this.date.getFullYear();
  month = this.date.getMonth() + 1;
  debutmonth = this.date.getMonth() - 3;
  day = this.date.getDate();
  public dateDebut = this.year + '-' + this.debutmonth + '-' + this.day;
  public dateFin = this.year + '-' + this.month + '-' + this.day;
  public reqUrl = environment.base_url;
  constructor(
    public router: Router,
    private otherService: OthersService,
    private toastr: ToastrService,
    ) { }

  ngOnInit() {
    this.role = localStorage.getItem('user');
    this.gty(this.page);
    this.otherService.extractEvaluations(this.dateDebut, this.dateFin).subscribe(
      data => {
        this.data = data;
        this.successMsg = this.data.status
      }
    )
  }

  gty(page: any){
    this.otherService.listAllEvaluations(page, this.itemsPerPage, this.dateDebut, this.dateFin).subscribe((data: any) => {
      this.dataInter =  data.data;
      this.totalItems = data.total;
    }, error=> {
      this.errorMsg = error;
      this.toastr.error(this.errorMsg, 'Echec', {
        timeOut: 5000,
      });
    })
  }

  openDetail(data) {
    this.router.navigate(['/accueil/detailinter'], {
      queryParams: {
        user: JSON.stringify(data)
      }
    });
  }

  relancer() {}

}

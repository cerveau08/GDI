import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from 'src/app/_modal/modal.service';
import { NgxFileSaverService } from '@clemox/ngx-file-saver';

@Component({
  selector: 'app-detailinter',
  templateUrl: './detailinter.component.html',
  styleUrls: ['./detailinter.component.scss']
})
export class DetailinterComponent implements OnInit {

  item: any;
  public restant: any;
  public nombre = 29;
  public left: any;
  donnees: any;
  datas = [{
    id: 1,
    prenom: "Amadou Dieye",
    nom: "LEYE",
    poste: "Développeur Web",
    dateDebut: "25/12/2020",
    dateFin: "25/12/2022",
    tmp: "tmp_0254",
    agence: "Set Interim",
    dateNais: "10/12/1992",
    lieuNais: "Mbour",
    genre: "masculin",
    cni: "1 619 1992 2154",
    categorie: "Cadre C1C",
    structure: "Sonatel SA",
    direction: "DST",
    pole: "DD",
    departement: "DASI",
    service: "PMA",
    manager: "Madiagne SYLLA",
    postem: "Chef de Services Production et Maintenance Applicatif",
    email: "amadou.dieye.leye@orange-sonatel.com",
    telephone: "+ 221 33 824 91 31",
    adresse: "mbour",
    photo: "inter.png",
    matricule: "060210",
    nomInt: "5"
  }];
  constructor(private activeroute: ActivatedRoute,
              private modalService: ModalService,
              private dataService: DataService,
              private fileSaver: NgxFileSaverService, ) { 
    this.activeroute.queryParams.subscribe(params => {
      this.item = JSON.parse(params["user"]);
      console.log(this.item);
    })
  }

  ngOnInit() {
    this.donnees = this.dataService.getData();
  }

  public get(p) {
    this.fileSaver.saveUrl(p.pathfile, p.file);
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

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}

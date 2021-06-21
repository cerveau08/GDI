import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from 'src/app/_modal/modal.service';
import { NgxFileSaverService } from '@clemox/ngx-file-saver';
import { OthersService } from 'src/app/services/others.service';

@Component({
  selector: 'app-detailinter',
  templateUrl: './detailinter.component.html',
  styleUrls: ['./detailinter.component.scss']
})
export class DetailinterComponent implements OnInit {

  item: any;
  id: any;
  public restant: any;
  public nombre = 59;
  public left: any;
  donnees: any;
  dataInter:any;
  objetctis = [
    {
      title: "Objectif 1",
      libelle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      title: "Objectif 2",
      libelle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
  ];
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
  viewer = 'google';  
  selectedType = 'docx';   
  DemoDoc="http://www.africau.edu/images/default/sample.pdf" 
  DemoDoc1="https://file-examples.com/wp-content/uploads/2017/02/file-sample_100kB.doc"
  DemoDoc2="https://www.le.ac.uk/oerresources/bdra/html/resources/example.txt" 
  data;
  nom;
  prenom;
  datedenaissance;
  lieudenaissance;
  telephone;
  sitmat;
  adresse;
  agence;
  categorie;
  diplome;
  ncni;
  email;
  profession;
  matricule;
  salaire_brut;
  universite;
  sexe;
  direction;
  departement;
  service
  constructor(private activeroute: ActivatedRoute,
              private modalService: ModalService,
              private dataService: DataService,
              private otherService: OthersService,
              private fileSaver: NgxFileSaverService,
              public router: Router, ) { 
    this.activeroute.queryParams.subscribe(params => {
      this.item = JSON.parse(params["user"]);
      console.log(this.item);
      this.otherService.getOneInterById(this.item).subscribe(
        //data =>{
          // this.dataInter = data;
           //console.log(this.dataInter);
           data =>{
            this.data = data;
            this.dataInter = this.data.data;
            console.log(this.dataInter);
            this.nom = this.dataInter.nom;
            this.prenom = this.dataInter.prenom;
            this.datedenaissance = this.dataInter.datedenaissance;
            this.lieudenaissance = this.dataInter.lieudenaissance;
            this.ncni = this.dataInter.ncni;
            this.diplome = this.dataInter.diplome;
            this.email = this.dataInter.email;
            this.adresse = this.dataInter.adresse;
            this.profession = this.dataInter.profession;
            this.salaire_brut = this.dataInter.salaire_brut;
            this.profession = this.dataInter.profession;
            this.telephone = this.dataInter.telephone;
            this.universite = this.dataInter.universite;
            this.sitmat = this.dataInter.sitmat;
            this.agence = this.dataInter.agence;
            this.categorie = this.dataInter.categorie;
            this.matricule = this.dataInter.matricule;
            this.sexe = this.dataInter.sexe;
           /* this.direction = this.dataInter.direction;
            this.departement = this.dataInter.departement;
            this.service = this.dataInter.service;*/
        },
        error =>{
          console.log(error)
        }
      );
    })
  }
  ngOnInit() {
    //this.donnees = this.dataService.getData();
    /*this.otherService.getOneInterById(this.item).subscribe(
      data =>{
         this.dataInter = data;
         console.log(this.dataInter);
      },
      error =>{
        console.log(error)
      }
    );*/
  }

  public get(p) {
    this.fileSaver.saveUrl(p.pathfile, p.file);
  }
  public getfilemodal() {
    this.fileSaver.saveUrl(this.DemoDoc, 'contrat');
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

  modifierInter() {
    this.router.navigate(['accueil/modifierinter'], {
      queryParams: {
        user: JSON.stringify(this.item)
      }
    })
  }
}

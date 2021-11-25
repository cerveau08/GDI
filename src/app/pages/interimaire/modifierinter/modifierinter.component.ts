import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { OthersService } from 'src/app/services/others.service';
import { ErrormodalService } from 'src/app/modal/_errormodals';
import {Location} from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modifierinter',
  templateUrl: './modifierinter.component.html',
  styleUrls: ['./modifierinter.component.scss']
})
export class ModifierinterComponent implements OnInit {

  item;
  filecontrat;
  fileCni;
  fileFicheposte;
  fileproceverbal;
  diplome;
  sommes: any = [
    '20.000f', 
    '30.000f', 
    '40.000f', 
    '50.000f',
    '60.000f',
    '70.000f',
    '80.000f', 
  ];
  submited = false;
  matricule = "Tmp_02568";
  url1="../../../assets/images/{{item.photo}}";
  url2="../assets/images/{{item.photo}}";
  url3="../assets/images/{{item.photo}}";
  url4="../assets/images/{{item.photo}}";
  colora = "#ff7900";
  colorb = "#000";
  colorc = "#000";
  color1 = "20px solid #ff7900"
  color2 = "20px solid #000"
  color3 = "20px solid #000"
  interForm: FormGroup;
  isLinear = true;
  infoForm : FormGroup;
  contactForm : FormGroup;
  posteForm : FormGroup;
  formPhoneGroup : FormGroup;
  datas: any;
  dataSociete;
  dataDirection;
  dataDepartement;
  donneeService;
  dataInter;
  nomUpdate;
  structureId;
  directionId;
  departementId;
  societeId;
  prenom;
  nom;
  adresse;
  numeroPiece;
  profession;
  dateNaissance;
  lieuNaissance;
  dateSignature
  sexe;
  dateDebut;
  dateFin;
  sitmat;
  email;
  dataDomaine;
  categorieId;
  ficheposte;
  proceverbal;
  telephone;
  categorie;
  salaireBrut;
  typePiece;
  agence;
  structure;
  direction;
  departement;
  service;
  photo;
  photoUpload;
  image;
  universite;
  dataCategorie;
  fichierDiplome?: File;
  fichierContrat?: File;
  fichierPoste?: File;
  fichierProceVerbal?: File;
  fichierCni?: File;
  fichierdiplome1?: File;
  fichierdiplome2?: File;
  fichierdiplome3?: File;
  fichierDiplomeUpload: File;
  fichierContratUpload: File;
  fichierPosteUpload: File;
  fichierProceVerbalUpload: File;
  fichierCniUpload: File;
  fichierdiplome1Upload: File;
  fichierdiplome2Upload: File;
  fichierdiplome3Upload: File;
  contratName;
  societeName;
  cniName;
  fichedeposteName;
  proceverbalName;
  lesDiplome;
  lesDiplomeUpload;
  diplomeName;
  diplomeName1;
  diplomeName2;
  diplomeName3;
  structureName;
  idDiplome1;
  idDiplome2;
  idDiplome3;
  ListePiece = [
    {
      libelle: "cni",
    },
    {
      libelle: "passeport"
    }
  ];
  info = new FormData();
  errorMsg: any;
  data: any;
  successMsg: any;
  departementName: any;
  directionName: any;
  fileVisiteContreVisite: any;
  fileCv: any;
  fichierCvUpload: any;
  cvName: any;
  fichiervisiteContreVisiteUpload: any;
  visiteContreVisiteName: any;
  listeFonction: any;
  fonction: any;
  poste: any;
  posteId: any;
  videprenom: string;
  invalidprenom: string;
  videnom: string;
  invalidnom: string;
  videdateN: string;
  videlieuN: string;
  videsexe: string;
  videdateBC: string;
  videnumBC: string;
  videtelephoneOM: string;
  invalidtelephoneOM: string;
  invaliddiplome: string;
  ListeDiplome = [
    {
      libelle: "CFEE"
    },{
      libelle: "BFEM"
    },{
      libelle: "Baccalaurèat"
    },{
      libelle: "CAP"
    },{
      libelle: "BTS"
    },{
      libelle: "DUT"
    },{
      libelle: "Licence"
    },{
      libelle: "DIT"
    },{
      libelle: "Master"
    },{
      libelle: "Doctorat"
    }
  ];
  ListeSitmat = [
    {
      libelle: "marié(e)",
    },
    {
      libelle: "célibataire"
    },{
      libelle: "divorcé(e)",
    },
    {
      libelle: "veuf(ve)"
    }
  ];
  ListeSexe = [
    {
      libelle: "femme",
    },
    {
      libelle: "homme"
    }
  ];
  videNumber: string;
  invalideNumber: string;
  invalidEmail: string;
  videEmail: string;
  public reqUrl = environment.base_url;
  contratForm: FormGroup;
  diplome_eleve: any;
  nationalite: any;
  numBonCommande: any;
  dateBonCommande: any;
  dataSite: any;
  page = 1;
  itemParPage = 900;
  region = null;
  selected1: boolean;
  selected2: boolean;
  site: any;
  domaineId: any;
  telephoneOM: any;
  date_bon_commande: any;
  num_bon_commande: any;
  constructor(private activeroute: ActivatedRoute,
    private router: Router,
    private errormodalService: ErrormodalService,
    private otherService: OthersService,
    private location: Location,
    private toastr: ToastrService) {
      this.activeroute.queryParams.subscribe(params => {
        this.item = JSON.parse(params["user"]);
        this.otherService.getOneInterById(this.item).subscribe(
          data =>{
            this.dataInter = data;
            this.image = this.reqUrl + '/public/' + this.dataInter.data.photo;
            this.prenom = this.dataInter.data.prenom;
            this.nom = this.dataInter.data.nom;
            this.adresse = this.dataInter.data.adresse;
            this.numeroPiece = this.dataInter.data.numeroPiece;
            this.typePiece = this.dataInter.data.typePiece;
            this.profession = this.dataInter.data.profession;
            this.email = this.dataInter.data.email;
            this.sitmat = this.dataInter.data.sitmat;
            this.matricule = this.dataInter.data.matricule;
            this.dateNaissance = this.dataInter.data.datedenaissance;
            this.lieuNaissance = this.dataInter.data.lieudenaissance;
            this.dateSignature = this.dataInter.data.contrat.dateSignature;
            this.sexe = this.dataInter.data.sexe;
            this.diplome_eleve = this.dataInter.data.diplomeEleve;
            this.nationalite = this.dataInter.data.nationalite;
            this.num_bon_commande = this.dataInter.data.numBonCommande;
            this.date_bon_commande = this.dataInter.data.dateBonCommande? this.dataInter.data.dateBonCommande.date : null;
            this.fonction = this.dataInter.data.posteId;
            this.dateDebut = this.dataInter.data.contrat.dateDebut;
            this.dateFin = this.dataInter.data.contrat.dateFin;
            this.departementId = this.dataInter.data.structure.departement;
            this.structureId = this.dataInter.data.structure.id;
            this.structureName = this.dataInter.data.structure.libelle;
            this.societeName = this.dataInter.data.societe.libelle;
            this.directionName = this.dataInter.data.structure.direction.libelle;
            this.departementName = this.dataInter.data.structure.departement;
            this.directionId = this.dataInter.data.structure.direction.id;
            this.societeId = this.dataInter.data.societe.id;
            this.salaireBrut = this.dataInter.data.salaire_brut;
            this.categorie = this.dataInter.data.categorie.libelle;
            this.categorieId = this.dataInter.data.categorie.id;
            this.telephone = this.dataInter.data.telephone;
            this.fichierPoste = this.dataInter.data.fileFichePoste;
            this.fichierContrat = this.dataInter.data.fileContrat;
            this.fichierProceVerbal = this.dataInter.data.proceverbal;
            this.fileCv = this.dataInter.data.fileCv;
            this.fileVisiteContreVisite = this.dataInter.data.fileVisiteContreVisite;
            this.universite = this.dataInter.data.universite;
            this.agence = this.dataInter.data.agence;
            this.poste = this.dataInter.data.poste;
            this.site = this.dataInter.data.site;
            this.domaineId = this.dataInter.data.domaine.id;
            this.telephoneOM = this.dataInter.data.telephone;
          }
        );
      })
  }

  ngOnInit() {
    this.interForm = new FormGroup({
      nationalite: new FormControl(''),
      typePiece: new FormControl(''),
      numeroPiece: new FormControl(''),
      prenom: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])),
      nom: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')
      ])),
      telephone: new FormControl(''),
      dateNaissance: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      lieuNaissance: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])),
      sexe: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])),
      sitmat: new FormControl(''),
      adresse: new FormControl(''),
      nPassport: new FormControl(''),
      diplome: new FormControl(''),
      diplome_eleve: new FormControl(''),
      universite: new FormControl(''),
      photo: new FormControl(''),
      //structureId: new FormControl(''),
      matriculeManager: new FormControl(''),
      fileFicheposte: new FormControl(''),
      fileproceverbal: new FormControl(''),
      fileCni: new FormControl(''),
      fileCv: new FormControl(''),
      fileVisiteContreVisite: new FormControl(''),
      diplome1: new FormControl(''),
      diplome2: new FormControl(''),
      diplome3: new FormControl(''),
      fonction: new FormControl(''),
      profession: new FormControl(''),
    });
    this.contratForm = new FormGroup({
      num_bon_commande: new FormControl('', Validators.compose([
        Validators.required
      ])),
      date_bon_commande: new FormControl('', Validators.compose([
        Validators.required
      ])),
      dateDebut: new FormControl(''),
      telephoneOM: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('7[05678][0-9]{7}')
      ])),
      dateFin: new FormControl(''),
      dateSignature: new FormControl(''),
      categorieId: new FormControl(''),
      salaireBrut: new FormControl(''),
      domaineId: new FormControl(''),
      directionId: new FormControl(''),
      departementId: new FormControl(''),
      societeId: new FormControl(''),
      poste: new FormControl(''),
      site: new FormControl(''),
      contratDoc: new FormControl(''),
    });

    this.otherService.getAllSociete().subscribe(
      data => {
        this.dataSociete = data["data"];
      }
    );
    this.otherService.getDomaine().subscribe(
      data => {
        this.dataDomaine = data["data"];
      }
    );
    this.otherService.getAllCategorie().subscribe(
      data => {
        this.dataCategorie = data["data"];
      }
    );
    this.otherService.listeSite(this.page, this.itemParPage, this.region).subscribe(
      data => {
        this.dataSite = data.data;
      }
    )
    this.otherService.getFonctions().subscribe(data => this.listeFonction = data.data);
    this.onChanges();
  }

  onChanges(): void {
    this.contratForm.get('categorieId').valueChanges.subscribe(val => {
      this.salaireBrut = val;
      this.otherService.getOneCategorie(val).subscribe(
        data => {
          this.data = data;
          this.salaireBrut = this.data.data.salaireBrute;
        }
      )
    });
  }

  backClicked() {
    this.location.back();
  }

  public savePoste(e): void {
    let libelle = e.target.value;
    let list = this.listeFonction.filter(x => x.libelle === libelle)[0];
    this.interForm.patchValue({poste: list.libelle});
  }

  get f() { return this.interForm.controls; }
  submitted1() {
    this.colora = "#f16e00";
    this.colorb = "#ff7900";
    this.color1 = "20px solid #f16e00";
    this.color2 = "20px solid #ff7900";
  }
  submitted2() {
    this.colorb = "#f16e00";
    this.colorc = "#ff7900";
    this.color2 = "20px solid #f16e00";
    this.color3 = "20px solid #ff7900";
  }

  get fileDiplome(): FormArray {
    return this.interForm.get('fileDiplome') as FormArray;
  }
  getDiplomes(e:any) {
    this.fichierDiplome= e.target.files.item(0);
    for (let i = 0; i < this.fileDiplome.length; i++) {
      this.diplomeName = this.fichierDiplome.name;
    }
  }
  getPhoto(e:any) {
    this.photoUpload = e.files.item(0);
    let reader = new FileReader();
    reader.readAsDataURL( this.photoUpload)
    reader.onload= ()=>{
      this.image= reader.result
    } 
  }
  
  getFileContrat(e:any) {
    this.fichierContratUpload = e.target.files.item(0);
    this.contratName = this.fichierContratUpload.name;
  }

  getFileCni(event: any) {
    this.fichierCniUpload = event.target.files[0];
    this.cniName = this.fichierCniUpload.name;
    console.log(this.cniName);
  }

  getFichePoste(event: any) {
    this.fichierPosteUpload = event.target.files[0];
    this.fichedeposteName = this.fichierPosteUpload.name;
    
  }

  getProceVerbal(event: any) {
    this.fichierProceVerbalUpload = event.target.files[0];
    this.proceverbalName = this.fichierProceVerbalUpload.name;
  }

  getCv(event: any) {
    this.fichierCvUpload = event.target.files[0];
    this.cvName = this.fichierCvUpload.name;
  }

  getVisiteContreVisite(event: any) {
    this.fichiervisiteContreVisiteUpload = event.target.files[0];
    this.visiteContreVisiteName = this.fichiervisiteContreVisiteUpload.name;
  }

  //les diplomes
  getDiplome1(event: any) {
    this.fichierdiplome1 = event.target.files[0];
    this.diplomeName1 = this.fichierdiplome1.name;
    console.log(this.diplomeName1);
  }
  getDiplome2(event: any) {
    this.fichierdiplome2 = event.target.files[0];
    this.diplomeName2 = this.fichierdiplome2.name;
  }
  getDiplome3(event: any) {
    this.fichierdiplome3 = event.target.files[0];
    this.diplomeName3 = this.fichierdiplome3.name;
  }

  submit() {
    this.colorc = "#f16e00";
    this.color3 = "20px solid #f16e00";
    this.lesDiplomeUpload = [
      {
        id: this.idDiplome1,
        diplome: this.fichierdiplome1Upload,
      },
      {
        id: this.idDiplome2,
        diplome: this.fichierdiplome2Upload
      },
      {
        id: this.idDiplome3,
        diplome: this.fichierdiplome3Upload
      },
    ];
    const info = new FormData();
    info.append("societeId", this.contratForm.value.societeId);
    info.append("typePiece",this.interForm.value.typePiece);
    info.append("numeroPiece",this.interForm.value.numeroPiece);
    info.append("nom",this.interForm.value.nom);
    info.append("prenom",this.interForm.value.prenom);
    info.append("telephoneOM",this.contratForm.value.telephoneOM);
    info.append("adresse",this.interForm.value.adresse);
    info.append("email",this.interForm.value.email);
    info.append("telephone",this.interForm.value.telephone);
    info.append("universite",this.interForm.value.universite);
    info.append("sexe",this.interForm.value.sexe);
    info.append("sitmat",this.interForm.value.sitmat);
    info.append("dateNaissance",this.interForm.value.dateNaissance);
    info.append("lieuNaissance",this.interForm.value.lieuNaissance);
    info.append("nationalite",this.interForm.value.nationalite);
    info.append("diplome_eleve",this.interForm.value.diplome_eleve);
    info.append("date_bon_commande",this.contratForm.value.date_bon_commande);
    info.append("num_bon_commande",this.contratForm.value.num_bon_commande);
    if(this.contratForm.value.categorieId != "") {
      info.append("categorieId", this.contratForm.value.categorieId);
    }
    if(this.contratForm.value.salaireBrut != "") {
      info.append("salaireBrut", this.contratForm.value.salaireBrut);
    }
    if(this.contratForm.value.site != "") {
      info.append("siteId", this.contratForm.value.site);
    }
    if(this.contratForm.value.dateDebut != "") {
      info.append("dateDebut", this.contratForm.value.dateDebut);
    }
    if(this.contratForm.value.dateFin != "") {
      info.append("dateFin", this.contratForm.value.dateFin);
    }
    if(this.contratForm.value.domaineId != "") {
      info.append("domaineId", this.contratForm.value.domaineId);
    }
    if(this.contratForm.value.dateSignature != "") {
      info.append("dateSignature", this.contratForm.value.dateSignature);
    }
    if(this.contratForm.value.poste != "") {
      info.append("fonction", this.contratForm.value.poste);
      info.append("poste", this.contratForm.value.poste);
    }
    if(this.fichierdiplome1 != undefined) {
      info.append("fileDiplome[]",this.fichierdiplome1);
    }
    if(this.fichierdiplome2 != undefined) {
      info.append("fileDiplome[]",this.fichierdiplome2);
    }
    if(this.fichierdiplome3 != undefined) {
      info.append("fileDiplome[]",this.fichierdiplome3);
    }
    if(this.fichierPosteUpload != undefined) {
      info.append("fileFicheposte",this.fichierPosteUpload);
    }
    if(this.fichierContratUpload != undefined) {
      info.append("contratDoc",this.fichierContratUpload);
    }
    if(this.fichierCniUpload != undefined) {
      info.append("fileCni",this.fichierCniUpload);
    }
    if(this.fichierCvUpload != undefined) {
      info.append("fileCv",this.fichierCvUpload);
    }
    if(this.fichiervisiteContreVisiteUpload != undefined) {
      info.append("fileVisiteContreVisite",this.fichiervisiteContreVisiteUpload);
    }
    if(this.photoUpload != undefined) {
      info.append("photo",this.photoUpload);
    }
    if(this.fichierProceVerbalUpload != undefined) {
      info.append("fileproceverbal",this.fichierProceVerbalUpload);
    }
    this.otherService.updateInter(info, this.item).subscribe(
      (data) =>{
        if(data){
          this.data = data
          this.successMsg = this.data.status
          if(this.successMsg == true) {
            this.toastr.success(this.data.message, 'Success', {
              timeOut: 3000,
            });
            this.router.navigate(['accueil/detailinter'], {
              queryParams: {
                interimaire: JSON.stringify(this.item)
              }
            })
          }
        }
      }, error=> {
        this.errorMsg = error;
        this.toastr.error(this.errorMsg, 'Echec', {
          timeOut: 5000,
        });
      }
    )
  }

  directionsListe(value) {
    this.otherService.getAllDirection(value).subscribe(
      data => {
        this.dataDirection = data['data'];
      }
    ); 
  }

  departementListe(value) {
    this.otherService.getAllDepartement(value).subscribe(
      data => {
        this.dataDepartement = data['data'];
      }
    ); 
  }

  addDiplome1() {
    this.selected1 = true;
  }
  addDiplome2() {
    this.selected2 = true;
  }
  deleteDiplome2() {
    this.selected1 = false;
  }
  deleteDiplome3() {
    this.selected2 = false;
  }

  serviceListe(value) {
    this.otherService.getAllService(value).subscribe(
      data => {
        this.donneeService = data['data'];
      }
    ); 
  }
    
  
  readUrl1(event: any) {
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
      
        reader.onload = (event: any) => {
          this.url1 = event.target.result;
        }
      
        reader.readAsDataURL(event.target.files[0]);
      }
  }
  
  readUrl2(event: any) {
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
      
        reader.onload = (event: any) => {
          this.url2 = event.target.result;
        }
      
        reader.readAsDataURL(event.target.files[0]);
      }
  }

  readUrl3(event: any) {
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
      
        reader.onload = (event: any) => {
          this.url3 = event.target.result;
        }
      
        reader.readAsDataURL(event.target.files[0]);
      }
  }
  readUrl4(event: any) {
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
      
        reader.onload = (event: any) => {
          this.url4 = event.target.result;
        }
      
        reader.readAsDataURL(event.target.files[0]);
      }
  }
  colors1() {
    let colora = "#ff7900";
    if(localStorage.getItem('colora')){
      colora = localStorage.getItem('colora')
    } 
    return colora;
  }
  colors2() {
    let colorb = "black";
    if(localStorage.getItem('colorb')){
      colorb = localStorage.getItem('colorb')
    } 
    return colorb;
  }
  colors3() {
    let colorb = "black";
    if(localStorage.getItem('colorc')){
      colorb = localStorage.getItem('colorc');
    } 
    return colorb;
  }
  getcolor1() {
    let color = "20px solid #ff7900" 
    if(localStorage.getItem('color1')){
      color = localStorage.getItem('color1');
    } 
    return color;
  }
  getcolor2() {
    let color = "20px solid black" 
    if(localStorage.getItem('color2')){
      color = localStorage.getItem('color2');
    } 
    return color;
  }
  getcolor3() {
    let color = "20px solid black" 
    if(localStorage.getItem('color3')){
      color = localStorage.getItem('color3');
    } 
    return color;
  }

  removeItem() {
    localStorage.removeItem('color1');
    localStorage.removeItem('color2');
    localStorage.removeItem('color3');
    localStorage.removeItem('colora');
    localStorage.removeItem('colorb');
    localStorage.removeItem('colorc');
    this.submited = false;
    this.url1="../assets/images/default.png";
    this.url2="../assets/images/default.png";
    this.url3="../assets/images/default.png";
  }

  openErrorModal(id: string) {
    this.errormodalService.open(id);
  }

  closeErrorModal(id: string) {
    this.errormodalService.close(id);
  }

}
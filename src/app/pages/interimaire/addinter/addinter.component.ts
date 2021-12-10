import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OthersService } from 'src/app/services/others.service';
import { ErrormodalService } from 'src/app/modal/_errormodals';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatStepper } from '@angular/material';
import { Country } from '@angular-material-extensions/select-country';

@Component({
  selector: 'app-addinter',
  templateUrl: './addinter.component.html',
  styleUrls: ['./addinter.component.scss']
})
export class AddinterComponent implements OnInit {

  @ViewChild('stepper', {static: true}) stepper: MatStepper;
  selectedStepIndex = 0;
  //societeSearch;
  //typePieceSearch;
  //numeroPieceSearch;
  isAdmissible = false;
  isBlackliste = true;
  submited = false;
  url1="../../assets/images/default.png";
  url2="../assets/images/default.png";
  url3="../assets/images/default.png";
  url4="../assets/images/default.png";
  interForm: FormGroup;
  contratForm: FormGroup;
  diplomeForm: FormGroup;
  isLinear = true;
  photo: any;
  fichierDiplome?: File;
  fichierContrat?: File;
  fichierPoste?: File;
  fichierProceVerbal?: File;
  fichierCni?: File;
  fichierdiplome1?: File;
  fichierdiplome2?: File;
  fichierdiplome3?: File;
  errorMsg: string;
  infoForm : FormGroup;
  formPhoneGroup : FormGroup;
  dataSociete: any;
  dataDirection: any;
  dataAgence: any;
  dataDepartement: any;
  dataCategorie;
  dataDomaine;
  id: any;
  itemd;
  image;
  donneeService;
  itemdept;
  datajson;
  contrat;
  contratDoc;
  fileFicheposte;
  proceverbal;
  fileCni;
  contratName;
  cniName;
  fichedeposteName;
  proceverbalName;
  diplomeName;
  diplomeName1;
  diplomeName2;
  diplomeName3;
  duree;
  keyword = 'name';
  fileDiplome: FormArray;
  ListePiece = [
    {
      id: 1, 
      libelle: "cni",
    },
    {
      id: 2, 
      libelle: "passeport"
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
  data;
  successMsg;
  selected1 = false;
  selected2 = false;
  colora = "#ff7900";
  colorb = "#000";
  colorc = "#000";
  color1 = "20px solid #ff7900"
  color2 = "20px solid #000"
  color3 = "20px solid #000";
  listeFonction;
  item;
  dataMatriculeInter;
  prenom;
  nom;
  telephoneSearch;
  telephone;
  sitmat;
  sexe;
  lieuNaissance;
  dateNaissance;
  email;
  universite;
  adresse;
  profession;
  poste;
  searchForm: FormGroup;
  numeroPiece;
  typePiece;
  societe;
  videtypePiece = false;
  videnumeroPiece = false;
  videtelephone = false;
  videsociete = false;
  dataSite: any;
  page = 1;
  itemParPage = 900;
  region = null;
  loading = false;
  videNumber: string;
  invalideNumber: string;
  invalidEmail: string;
  videEmail: string;
  fichierCv: any;
  cvName: any;
  fichierVisiteContreVisite: any;
  visiteContreVisiteName: any;
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
  paysSelectionne = 'SEN';
  senegal: Country = {
    name: "Senegal",
    alpha2Code: "SN",
    alpha3Code: "SEN",
    numericCode: "686"
  };
  nationalite: any;
  videNationalite: boolean;
  laSociete = [
    {
      id: null,
      libelle: null
    }
  ];
  salaireBrut: any;
  codeRetour: any;
  constructor(private otherService: OthersService,
              private errormodalService: ErrormodalService,
              private toastr: ToastrService,
              private router: Router,
              public formBuilder: FormBuilder, 
              private spinner: NgxSpinnerService
              ) {
   // this.datajson = this.dataService.getData();
   }
    
  ngOnInit() {
    this.interForm = new FormGroup({
      nationalite: new FormControl('', Validators.compose([
        Validators.required
      ])),
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
      observation: new FormControl('')
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
    this.searchForm = this.formBuilder.group({
      nationalite: new FormControl(this.senegal, Validators.compose([
        Validators.required
      ])),
      numeroPiece: new FormControl('', Validators.compose([
        Validators.required,
       // Validators.pattern('[0-9]')
      ])),
      societe: new FormControl('', Validators.compose([
        Validators.required
      ])),
      typePiece: new FormControl('cni', Validators.compose([
        Validators.required
      ])),
      telephone: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('7[05678][0-9]{7}')
      ])),
    })
    this.otherService.getAllSociete().subscribe(
      data => {
        this.dataSociete = data["data"];
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
    this.otherService.getDomaine().subscribe(data => this.dataDomaine = data["data"]);
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

  rechargerPage() {
    window.location.reload();
    this.ngOnInit();
  }

  onCountrySelected($event: Country) {
    this.paysSelectionne = $event.alpha3Code;
  }
  public saveProfession(e): void {
    let libelle = e.target.value;
    let list = this.listeFonction.filter(x => x.libelle === libelle)[0];
    this.interForm.patchValue({profession: list.libelle});
  }
  public savePoste(e): void {
    let libelle = e.target.value;
    let list = this.listeFonction.filter(x => x.libelle === libelle)[0];
    this.interForm.patchValue({poste: list.libelle});
  }

  public saveDomaine(e): void {
    let libelle = e.target.value;
    let list = this.dataDomaine.filter(x => x.libelle === libelle)[0];
  //  this.interForm.patchValue({domaineId: list.id});
  }
  
  rechercherInterimaire() { 
    if(this.searchForm.value.telephone.length === 0) {
      this.videNumber = 'Veuillez saisir votre numero de téléphone';
    } else {
      this.videNumber = '';
    }
    if(this.searchForm.value.telephone.length !== 0 && this.searchForm.controls.telephone.status == 'INVALID') {
      this.invalideNumber = 'Le format de numéro que vous avez saisi est incorrecte';
    } else {
      this.invalideNumber = '';
    }
    this.videNationalite = !this.searchForm.value.nationalite ? true: false;
    this.videtypePiece = !this.searchForm.value.typePiece ? true: false;
    this.videnumeroPiece = !this.searchForm.value.numeroPiece ? true: false;
    this.videsociete = !this.searchForm.value.societe ? true: false;
    this.societe = this.searchForm.value.societe;
    this.nationalite = this.searchForm.value.nationalite.name;
    this.typePiece = this.searchForm.value.typePiece;
    this.numeroPiece = this.searchForm.value.numeroPiece;
    this.telephone = this.searchForm.value.telephone;
    let formValid = {
      societe_id: Number(this.searchForm.value.societe),
      nationalite: this.searchForm.value.nationalite.name,
      typePiece: this.searchForm.value.typePiece,
      numeroPiece: this.searchForm.value.numeroPiece,
      telephone: this.searchForm.value.telephone,
    }
    if(this.searchForm.valid) {
      this.otherService.pieceFilter(formValid).subscribe(
        (response) => {
          this.dataMatriculeInter = response;
          this.isBlackliste = this.dataMatriculeInter.isBlacklisted
          this.codeRetour = this.dataMatriculeInter.code
          if(this.isBlackliste == false) {
            if(this.codeRetour == 206) {
              this.prenom = "cette";
              this.nom = "personne";
              this.openErrorModal('blacklist-modal-2');
            }
            if(this.codeRetour == 202) {
              this.toastr.success('Vous pouvez ajouter cette personne comme interimaire', 'Success', {
                timeOut: 3000,
              });
              this.isAdmissible = true;
            } else if(this.codeRetour == 204 && this.dataMatriculeInter.data) {
              if(this.dataMatriculeInter.data.interimaire) {
                this.toastr.info('Cette personne existe deja comme interimaire veuillez l\'ajouter un contrat à partir de la page détail intérimaire', 'Information', {
                  timeOut: 10000,
                });
                this.otherService.societe_id = Number(this.searchForm.value.societe);
                this.router.navigate(['/accueil/detailinter'], {
                  queryParams: {
                    interimaire: JSON.stringify(this.dataMatriculeInter.data.interimaire.id)
                  }
                });
              } else {
                this.toastr.success('Vous pouvez ajouter cette personne comme interimaire', 'Success', {
                  timeOut: 3000,
                });
                this.isAdmissible = true;
              }
            }
            if(this.dataMatriculeInter.message == 'Interimaire inexistant!') {
              this.toastr.success('Vous pouvez ajouter cette personne comme interimaire', 'Success', {
                timeOut: 3000,
              });
              this.isAdmissible = true;
            }
          } else if(this.isBlackliste == true) {
            this.prenom = "cette";
            this.nom = "personne";
            this.openErrorModal('blacklist-modal-1');
          }
        }
      );
    }
  }
  
  get diplome(): FormArray {
    return this.interForm.get('fileDiplome') as FormArray;
  }
  addNameField() { 
    this.diplome.push(new FormControl('', Validators.required)); 
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

  //recuperation du fiche de poste
  getDiplomes(e:any) {
    this.fichierDiplome= e.target.files.item(0);
    for (let i = 0; i < this.diplome.length; i++) {
      this.diplomeName = this.fichierDiplome.name;
    }
  }
  submitted1(){
    if(this.interForm.value.email.length === 0) {
      this.videEmail = 'Veuillez saisir l\'email';
    } else {
      this.videEmail = '';
    }
    if(this.interForm.value.email.length !== 0 && this.interForm.controls.email.status == 'INVALID') {
      this.invalidEmail = 'Le format d\'email que vous avez saisi est incorrecte';
    } else {
      this.invalidEmail = '';
    }
    if(this.interForm.value.prenom.length === 0) {
      this.videprenom = 'Veuillez saisir le prenom';
    } else {
      this.videprenom = '';
    }
    if(this.interForm.value.prenom.length !== 0 && this.interForm.controls.prenom.status == 'INVALID') {
      this.invalidprenom = 'Le format de prenom que vous avez saisi est incorrecte';
    } else {
      this.invalidprenom = '';
    }
    if(this.interForm.value.nom.length === 0) {
      this.videnom = 'Veuillez saisir le nom';
    } else {
      this.videnom = '';
    }
    if(this.interForm.value.nom.length !== 0 && this.interForm.controls.nom.status == 'INVALID') {
      this.invalidnom = 'Le format de nom que vous avez saisi est incorrecte';
    } else {
      this.invalidnom = '';
    }
    if(this.interForm.value.dateNaissance.length === 0) {
      this.videdateN = 'Veuillez saisir la date de naissance';
    } else {
      this.videdateN = '';
    }
    if(this.interForm.value.lieuNaissance.length === 0) {
      this.videlieuN = 'Veuillez saisir la lieu de naissance';
    } else {
      this.videlieuN = '';
    }
    if(this.interForm.value.sexe.length === 0) {
      this.videsexe = 'Veuillez sélectionner le genre';
    } else {
      this.videsexe = '';
    }
    this.colora = "#f16e00";
    this.colorb = "#ff7900";
    this.color1 = "20px solid #f16e00";
    this.color2 = "20px solid #ff7900";
  }
  submitted2(){
    if(this.contratForm.value.telephoneOM.length === 0) {
      this.videtelephoneOM = 'Veuillez saisir le téléphone Orange Money';
    } else {
      this.videtelephoneOM = '';
    }
    if(this.contratForm.value.telephoneOM.length !== 0 && this.contratForm.controls.telephoneOM.status == 'INVALID') {
      this.invalidtelephoneOM = 'Le format du téléphone Orange Money que vous avez saisi est incorrecte';
    } else {
      this.invalidtelephoneOM = '';
    }
    this.videnumBC = !this.contratForm.value.num_bon_commande ? 'Veuillez saisir le numéro de bon de commande': '';
    this.videdateBC = !this.contratForm.value.date_bon_commande ? 'Veuillez saisir la date de fin de validité du de bon de commande': '';
    this.colorb = "#f16e00";
    this.colorc = "#ff7900";
    this.color2 = "20px solid #f16e00";
    this.color3 = "20px solid #ff7900";
  }

  submit() {
    this.colorc = "#f16e00";
    this.color3 = "20px solid #f16e00";
    const formdata = new FormData();
    formdata.append("societeId", this.contratForm.value.societeId);
    formdata.append("typePiece",this.interForm.value.typePiece);
    formdata.append("numeroPiece",this.interForm.value.numeroPiece);
    formdata.append("nom",this.interForm.value.nom);
    formdata.append("prenom",this.interForm.value.prenom);
    formdata.append("telephoneOM",this.contratForm.value.telephoneOM);
    formdata.append("adresse",this.interForm.value.adresse);
    formdata.append("email",this.interForm.value.email);
    formdata.append("telephone",this.interForm.value.telephone);
    formdata.append("universite",this.interForm.value.universite);
    formdata.append("sexe",this.interForm.value.sexe);
    //formdata.append("profession",this.interForm.value.profession);
    formdata.append("sitmat",this.interForm.value.sitmat);
    formdata.append("dateNaissance",this.interForm.value.dateNaissance);
    formdata.append("lieuNaissance",this.interForm.value.lieuNaissance);
    formdata.append("nationalite",this.interForm.value.nationalite);
    formdata.append("diplome_eleve",this.interForm.value.diplome_eleve);
    formdata.append("date_bon_commande",this.contratForm.value.date_bon_commande);
    formdata.append("num_bon_commande",this.contratForm.value.num_bon_commande);
    formdata.append("observation",this.interForm.value.observation);
    if(this.contratForm.value.categorieId != "") {
      formdata.append("categorieId", this.contratForm.value.categorieId);
    }
    if(this.contratForm.value.salaireBrut != "") {
      formdata.append("salaireBrut", this.contratForm.value.salaireBrut);
    }
    if(this.contratForm.value.site != "") {
      formdata.append("siteId", this.contratForm.value.site);
    }
    if(this.contratForm.value.dateDebut != "") {
      formdata.append("dateDebut", this.contratForm.value.dateDebut);
    }
    if(this.contratForm.value.dateFin != "") {
      formdata.append("dateFin", this.contratForm.value.dateFin);
    }
    if(this.contratForm.value.domaineId != "") {
      formdata.append("domaineId", this.contratForm.value.domaineId);
    }
    if(this.contratForm.value.dateSignature != "") {
      formdata.append("dateSignature", this.contratForm.value.dateSignature);
    }
    if(this.contratForm.value.poste != "") {
      formdata.append("fonction", this.contratForm.value.poste);
    }
    if(this.fichierContrat != undefined) {
      formdata.append("contratDoc",this.fichierContrat);
    }
    if(this.fichierCni != undefined) {
      formdata.append("fileCni",this.fichierCni);
    }
    if(this.fichierPoste != undefined) {
      formdata.append("fileFicheposte",this.fichierPoste);
    }
    if(this.fichierProceVerbal != undefined) {
      formdata.append("fileproceverbal",this.fichierProceVerbal);
    }
    if(this.fichierCv != undefined) {
      formdata.append("fileCv", this.fichierCv);
    }
    if(this.fichierVisiteContreVisite != undefined) {
      formdata.append("fileVisiteContreVisite",this.fichierVisiteContreVisite);
    }
    if(this.photo != undefined) {
      formdata.append("photo",this.photo);
    }
    if(this.fichierdiplome1 != undefined) {
      formdata.append("fileDiplome[]",this.fichierdiplome1);
    }
    if(this.fichierdiplome2 != undefined) {
      formdata.append("fileDiplome[]",this.fichierdiplome2);
    }
    if(this.fichierdiplome3 != undefined) {
      formdata.append("fileDiplome[]",this.fichierdiplome3);
    }
    if(!this.fichierdiplome1 && !this.fichierdiplome2 && !this.fichierdiplome3) {
        this.invaliddiplome = 'Veuillez uploader au moins un diplome';
    } else {
      this.loading = true;
      this.otherService.addInter(formdata).subscribe(
        data => {
          this.loading = false;
          this.data = data
          this.successMsg = this.data.status
          if(this.successMsg == true) {
            this.loading = false;
            this.toastr.success('L\'intérimaire a été ajouté', 'Success', {
              timeOut: 3000,
            });
            this.submited = true;
          }
        }, error=> {
          this.loading = false;
          this.errorMsg = error;
          this.toastr.error(this.errorMsg, 'Echec', {
            timeOut: 5000,
          });
        }
      )
    }
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

  serviceListe(value) {
    this.otherService.getAllService(value).subscribe(
      data => {
        this.donneeService = data['data'];
       }
    ); 
  }

   getPhoto(e:any) {
    this.photo= e.files.item(0);
    let reader = new FileReader();
    reader.readAsDataURL( this.photo)
    reader.onload= ()=>{
      this.image= reader.result
    }
  }

  //recuperation du  contrat
  getFileContrat(event: any) {
    this.fichierContrat = event.target.files[0];
    this.contratName = this.fichierContrat.name;
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

   //recuperation  du proceverbal
   getProceVerbal(e:any) {
    this.fichierProceVerbal= e.target.files.item(0);
    this.proceverbalName = this.fichierProceVerbal.name;
  }

   //recuperation du fiche de poste
   getFichePoste(e:any) {
    this.fichierPoste= e.target.files.item(0);
    this.fichedeposteName = this.fichierPoste.name;
  }

  getFileCni(e:any) {
    this.fichierCni= e.target.files.item(0);
    this.cniName = this.fichierCni.name;
  }

  getCv(e:any) {
    this.fichierCv= e.target.files.item(0);
    this.cvName = this.fichierCv.name;
  }

  getVisiteContreVisite(e:any) {
    this.fichierVisiteContreVisite= e.target.files.item(0);
    this.visiteContreVisiteName = this.fichierVisiteContreVisite.name;
  }

  removeItem() {
    this.colora = "#ff7900";
    this.colorb = "#000";
    this.colorc = "#000";
    this.color1 = "20px solid #ff7900"
    this.color2 = "20px solid #000"
    this.color3 = "20px solid #000"
    this.submited = false;
    this.url1="../assets/images/default.png";
    this.url2="../assets/images/default.png";
    this.url3="../assets/images/default.png";
    this.ngOnInit();
  }
  openErrorModal(id: string) {
    this.errormodalService.open(id);
  }

  closeErrorModal(id: string) {
    this.errormodalService.close(id);
  }
}


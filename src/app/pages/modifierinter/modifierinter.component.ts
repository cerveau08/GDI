import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { OthersService } from 'src/app/services/others.service';

@Component({
  selector: 'app-modifierinter',
  templateUrl: './modifierinter.component.html',
  styleUrls: ['./modifierinter.component.scss']
})
export class ModifierinterComponent implements OnInit {

  item;
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
  datedenaissance;
  lieudenaissance;
  sexe;
  dateDebut;
  dateFin;
  sitmat;
  email;
  categorieId;
  ficheposte;
  proceverbal;
  telephone;
  categorie;
  salaire_brut;
  agence;
  structure;
  direction;
  departement;
  service;
  photo;
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
  contratName;
  cniName;
  fichedeposteName;
  proceverbalName;
  lesDiplome;
  diplomeName;
  diplomeName1;
  diplomeName2;
  diplomeName3;
  idDiplome = 1;
  constructor(private activeroute: ActivatedRoute,
    private fb: FormBuilder,
    private dataService: DataService,
    private route: Router,
    private otherService: OthersService) {
      //this.datas = this.dataService.getData();
      this.activeroute.queryParams.subscribe(params => {
        this.item = JSON.parse(params["user"]);
        console.log(this.item);
        this.otherService.getOneInterById(this.item).subscribe(
          data =>{
            this.dataInter = data;
            console.log(this.dataInter);
            this.photo = this.dataInter.data.photo;
            this.prenom = this.dataInter.data.prenom;
            this.nom = this.dataInter.data.nom;
            this.adresse = this.dataInter.data.adresse;
            this.numeroPiece = this.dataInter.data.numeroPiece;
            this.profession = this.dataInter.data.profession;
            this.email = this.dataInter.data.email;
            this.sitmat = this.dataInter.data.sitmat;
            this.matricule = this.dataInter.data.matricule;
            this.datedenaissance = this.dataInter.data.datedenaissance;
            this.lieudenaissance = this.dataInter.data.lieudenaissance;
            this.sexe = this.dataInter.data.sexe;
            this.dateDebut = this.dataInter.data.contrat.dateDebut;
            this.dateFin = this.dataInter.data.contrat.dateFin;
            this.departementId = this.dataInter.data.structure.departement;
            this.structureId = this.dataInter.data.structure.service;
            this.directionId = this.dataInter.data.structure.direction;
            this.societeId = this.dataInter.data.structure.societe;
            this.salaire_brut = this.dataInter.data.salaire_brut;
            this.categorie = this.dataInter.data.categorie.libelle;
            this.categorieId = this.dataInter.data.categorie.id;
            this.telephone = this.dataInter.data.telephone;
            this.ficheposte = this.dataInter.data.ficheposte;
            this.proceverbal = this.dataInter.data.proceverbal;
            this.universite = this.dataInter.data.universite;
            this.agence = this.dataInter.data.agence;
          },
          error =>{
            console.log(error)
          }
        );
      })
  }

  ngOnInit() {
   /* this.url1 = this.item.photo;*/
    this.interForm = new FormGroup({
        numeroPiece: new FormControl(''),
        prenom: new FormControl(''),
        nom: new FormControl(''),
        email: new FormControl(''),
        adresse: new FormControl(''),
        datedenaissance: new FormControl(''),
        lieudenaissance: new FormControl(''),
        sexe: new FormControl(''),
        //adresse: new FormControl(''),
        sitmat: new FormControl(''),
        universite: new FormControl(''),
        photo: new FormControl(''),
        typePiece: new FormControl(''),
        agence: new FormControl(''),
        dateDebut: new FormControl(''),
        dateFin: new FormControl(''),
        categorieId: new FormControl(''),
        salaire_brut: new FormControl(''),
        structureId: new FormControl(''),
        direction: new FormControl(''),
        societeId: new FormControl(''),
        departement: new FormControl(''),
        filecontrat: new FormControl(''),
        profession: new FormControl(''),
        telephone: new FormControl(''),
        matriculemanager: new FormControl(''),
        fileFicheposte: new FormControl(''),
        fileproceverbal: new FormControl(''),
        fileDiplome: new FormArray([
          new FormGroup({
            id: new FormControl(''),
            diplome: new FormControl('')
          }),
          new FormGroup({
            id: new FormControl(''),
            diplome: new FormControl('')
          }),
          new FormGroup({
            id: new FormControl(''),
            diplome: new FormControl('')
          }),
        ])
    });

      //recupere les societes
      this.otherService.getAllSociete().subscribe(
        data => {
          this.dataSociete = data["data"];
          console.log(data);
        }
      );

       //recupere les categories
       this.otherService.getAllCategorie().subscribe(
        data => {
          this.dataCategorie = data["data"];
          console.log(data);
        }
      );
  }

  get f() { return this.interForm.controls; }
  submitted1() {
    
  }
  submitted2() {
  
  }

  get fileDiplome(): FormArray {
    return this.interForm.get('fileDiplome') as FormArray;
  }
  getDiplomes(e:any) {
    this.fichierDiplome= e.target.files.item(0);
    for (let i = 0; i < this.fileDiplome.length; i++) {
      console.log(this.fileDiplome.at(i).value);
      this.diplomeName = this.fichierDiplome.name;
      console.log(this.diplomeName);
    }
  }

   //recuperation du  contrat
   getFileContrat(event: any) {
    this.fichierContrat = event.target.files[0];
    this.contratName = this.fichierContrat.name;
    console.log(this.contratName);
  }
  
  getFileCni(event: any) {
    this.fichierCni = event.target.files[0];
    this.cniName = this.fichierCni.name;
    console.log(this.cniName);
  }

  getFichePoste(event: any) {
    this.fichierPoste = event.target.files[0];
    this.fichedeposteName = this.fichierPoste.name;
    console.log(this.fichedeposteName);
  }

  getProceVerbal(event: any) {
    this.fichierProceVerbal = event.target.files[0];
    this.proceverbalName = this.fichierProceVerbal.name;
    console.log(this.proceverbalName);
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
    console.log(this.diplomeName2);
  }
  getDiplome3(event: any) {
    this.fichierdiplome3 = event.target.files[0];
    this.diplomeName3 = this.fichierdiplome3.name;
    console.log(this.diplomeName3);
  }

  submit() {
    this.lesDiplome = [
      {
        id: this.idDiplome,
        diplome: this.fichierdiplome1
      },
      {
        id: this.idDiplome,
        diplome: this.fichierdiplome2
      },
      {
        id: this.idDiplome,
        diplome: this.fichierdiplome3
      },
    ];
    console.log(this.lesDiplome[0].diplome);
    console.log(this.fileDiplome.value);
    console.log(this.interForm.value);
    const value = this.interForm.value;
    const info = new FormData();
    info.append("societeId","3");
    info.append("structureId","14");
    info.append("domaineId","2");
    info.append("typePiece",this.interForm.value.typePiece);
    info.append("numeroPiece",this.interForm.value.numeroPiece);
    info.append("nom",this.interForm.value.nom);
    info.append("prenom",this.interForm.value.prenom);
    info.append("adresse",this.interForm.value.adresse);
    info.append("email",this.interForm.value.email);
    info.append("telephone",this.interForm.value.telephone);
    info.append("universite",this.interForm.value.universite);
    info.append("sexe",this.interForm.value.sexe);
    info.append("profession",this.interForm.value.profession);
    info.append("categorieId",this.interForm.value.categorieId);
    info.append("directionId",this.interForm.value.direction);
    info.append("departementId",this.interForm.value.departement);
    info.append("sitmat",this.interForm.value.sitmat);
    info.append("salaireBrut",this.interForm.value.salaireBrut);
    info.append("datedenaissance",this.interForm.value.dateNaissance);
    info.append("lieudenaissance",this.interForm.value.lieuNaissance);
    info.append("dateDebut",this.interForm.value.dateDebut);
    info.append("dateFin",this.interForm.value.dateFin);
    info.append("dateSignature",this.interForm.value.dateSignature);
    info.append("poste",this.interForm.value.poste);
    info.append("contratDoc",this.fichierContrat);
    info.append("fileCni",this.fichierCni);
    info.append("fileFicheposte",this.fichierPoste);
    info.append("fileproceverbal",this.fichierProceVerbal);
    info.append("photo",this.photo);
    info.append("matriculeManager",this.interForm.value.matriculeManager);
    info.append("fileDiplome",this.lesDiplome);
    console.log(info);
    console.log(this.item);
    this.otherService.updateInter(info, this.item).subscribe(
      (res) =>{
        console.log(res);
        if(res){
          this.route.navigate(['/accueil/souscontrat']);
        }
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  directionsListe(value) {
    console.log(value);
    this.otherService.getAllDirection(value).subscribe(
      data => {
        this.dataDirection = data['data'];
       console.log(data);
       }
    ); 
  }

  departementListe(value) {
    console.log(value);
    this.otherService.getAllDepartement(value).subscribe(
      data => {
        this.dataDepartement = data['data'];
       console.log(data);
       }
    ); 
  }

  serviceListe(value) {
    console.log(value);
    this.otherService.getAllService(value).subscribe(
      data => {
        this.donneeService = data['data'];
       console.log(data);
       }
    ); 
  }
 
    //recuperation de l'image
    getPhoto(e:any) {
      this.photo= e.files.item(0);
      let reader = new FileReader();
      reader.readAsDataURL( this.photo)
      reader.onload= ()=>{
        this.image= reader.result
      } 
    }
  
  readUrl1(event: any) {
    console.log('readUrl');
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
      
        reader.onload = (event: any) => {
          this.url1 = event.target.result;
        }
      
        reader.readAsDataURL(event.target.files[0]);
      }
  }
  
  readUrl2(event: any) {
    console.log('readUrl');
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
      
        reader.onload = (event: any) => {
          this.url2 = event.target.result;
        }
      
        reader.readAsDataURL(event.target.files[0]);
      }
  }

  readUrl3(event: any) {
    console.log('readUrl');
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
      
        reader.onload = (event: any) => {
          this.url3 = event.target.result;
        }
      
        reader.readAsDataURL(event.target.files[0]);
      }
  }
  readUrl4(event: any) {
    console.log('readUrl');
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

}

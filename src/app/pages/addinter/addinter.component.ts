import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DataService } from 'src/app/service/data.service';
import { OthersService } from 'src/app/services/others.service';
//import { MatAutocompleteSelectedEvent } from '@angular/material';

@Component({
  selector: 'app-addinter',
  templateUrl: './addinter.component.html',
  styleUrls: ['./addinter.component.scss']
})
export class AddinterComponent implements OnInit {

  societeSearch;
  typePieceSearch;
  numeroPieceSearch;
  submited = false;
  url1="../assets/images/default.png";
  url2="../assets/images/default.png";
  url3="../assets/images/default.png";
  url4="../assets/images/default.png";
  interForm: FormGroup;
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
  streets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
  filteredStreets: Observable<string[]>;
  control = new FormControl();
  selected1 = false;
  selected2 = false;
  colora = "#ff7900";
  colorb = "#000";
  colorc = "#000";
  color1 = "20px solid #ff7900"
  color2 = "20px solid #000"
  color3 = "20px solid #000"
  constructor(private fb: FormBuilder,
              private dataService: DataService,
              private otherService: OthersService,
              private route: Router) {
    this.datajson = this.dataService.getData();
   }
  ngOnInit() {
    // this.filteredStreets = this.interForm.value.poste.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filter(value))
    // );
    this.interForm = new FormGroup({
        numeroPiece: new FormControl(''),
        prenom: new FormControl(''),
        nom: new FormControl(''),
        email: new FormControl(''),
        telephone: new FormControl(''),
        dateNaissance: new FormControl(''),
        lieuNaissance: new FormControl(''),
        sexe: new FormControl(''),
        sitmat: new FormControl(''),
        adresse: new FormControl(''),
        nPassport: new FormControl(''),
        diplome: new FormControl(''),
        universite: new FormControl(''),
        photo: new FormControl(''),
        dateDebut: new FormControl(''),
        dateFin: new FormControl(''),
        dateSignature: new FormControl(''),
        categorieId: new FormControl(''),
        salaireBrut: new FormControl(''),
        structureId: new FormControl(''),
        domaineId: new FormControl(''),
        directionId: new FormControl(''),
        departementId: new FormControl(''),
        societeId: new FormControl(''),
        profession: new FormControl(''),
        poste: new FormControl(''),
        contratDoc: new FormControl(''),
        matriculeManager: new FormControl(''),
        fileFicheposte: new FormControl(''),
        fileproceverbal: new FormControl(''),
        fileCni: new FormControl(''),
        typePiece: new FormControl(''),
        diplome1: new FormControl(''),
        diplome2: new FormControl(''),
        diplome3: new FormControl(''),
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
     //recupere les domaines
     this.otherService.getDomaine().subscribe(
      data => {
        this.dataDomaine = data["data"];
        console.log(data);
      }
    );
    this.onChanges();
  }
  onChanges(): void {
    this.interForm.get('societeId').valueChanges.subscribe(val => {
      this.societeSearch = val;
      console.log(val);
      this.interForm.get('typePiece').valueChanges.subscribe(typep => {
        this.typePieceSearch = typep
        this.interForm.get('numeroPiece').valueChanges.subscribe(nump => {
          this.numeroPieceSearch = nump
          this.rechercherInterimaire(this.numeroPieceSearch, this.typePieceSearch, this.societeSearch);
        });
      });
    });
    
    
    const donneSearch = {
      societeId: this.societeSearch,
      typePiece: this.typePieceSearch,
      numeroPiece: this.numeroPieceSearch,
    }
    console.log(donneSearch);
    
  }
  rechercherInterimaire(piece, type, societe) {  
    const donneeSearch = {
      societeId: societe,
      typePiece: type,
      numeroPiece: piece
    }
    console.log(donneeSearch);
    
    this.otherService.pieceFilter(donneeSearch).subscribe(
      (response) => {
        console.log(response);
        // this.dataMatriculeInter = response;
        // console.log(this.dataMatriculeInter);
        // this.prenom = this.dataMatriculeInter.data.personne.prenom;
        // this.nom = this.dataMatriculeInter.data.personne.nom;
        // this.telephone = this.dataMatriculeInter.data.personne.telephone;
        // this.userAgentForm.patchValue({interimaireId: this.dataMatriculeInter.data.interimaire.id});
      },
      (error) =>{
        console.log(error)
      }
    )
  }
  // onSelectionChanged(event: MatAutocompleteSelectedEvent) {
  //   console.log(event.option.value);
  // }
  // private _filter(value): string[] {
  //   const filterValue = this._normalizeValue(value);
  //   return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  // }

  // private _normalizeValue(value: string): string {
  //   return value.toLowerCase().replace(/\s/g, '');
  // }
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
      console.log(this.diplome.at(i).value);
      this.diplomeName = this.fichierDiplome.name;
      console.log(this.diplomeName);
    }
  }
  submitted1(){
    this.colora = "#f16e00";
    this.colorb = "#ff7900";
    this.color1 = "20px solid #f16e00";
    this.color2 = "20px solid #ff7900";
  }
  submitted2(){
    this.colorb = "#f16e00";
    this.colorc = "#ff7900";
    this.color2 = "20px solid #f16e00";
    this.color3 = "20px solid #ff7900";
  }
  submit() {
    this.colorc = "#f16e00";
    this.color3 = "20px solid #f16e00";
    const value = this.interForm.value;
    const formdata = new FormData();
    formdata.append("societeId", this.interForm.value.societeId);
    formdata.append("structureId",this.interForm.value.structureId);
    formdata.append("domaineId",this.interForm.value.domaineId);
    formdata.append("typePiece",this.interForm.value.typePiece);
    formdata.append("numeroPiece",this.interForm.value.numeroPiece);
    formdata.append("nom",this.interForm.value.nom);
    formdata.append("prenom",this.interForm.value.prenom);
    formdata.append("adresse",this.interForm.value.adresse);
    formdata.append("email",this.interForm.value.email);
    formdata.append("telephone",this.interForm.value.telephone);
    formdata.append("universite",this.interForm.value.universite);
    formdata.append("sexe",this.interForm.value.sexe);
    formdata.append("profession",this.interForm.value.profession);
    formdata.append("categorieId",this.interForm.value.categorieId);
    formdata.append("sitmat",this.interForm.value.sitmat);
    formdata.append("salaireBrut",this.interForm.value.salaireBrut);
    formdata.append("dateNaissance",this.interForm.value.dateNaissance);
    formdata.append("lieuNaissance",this.interForm.value.lieuNaissance);
    if(this.interForm.value.categorieId != "") {
      formdata.append("categorieId", this.interForm.value.categorieId);
    }
    if(this.interForm.value.salaireBrut != "") {
      formdata.append("salaireBrut", this.interForm.value.salaireBrut);
    }
    if(this.interForm.value.dateDebut != "") {
      formdata.append("dateDebut", this.interForm.value.dateDebut);
    }
    if(this.interForm.value.dateFin != "") {
      formdata.append("dateFin", this.interForm.value.dateFin);
    }
    if(this.interForm.value.domaineId != "") {
      formdata.append("domaineId", this.interForm.value.domaineId);
    }
    if(this.interForm.value.dateSignature != "") {
      formdata.append("dateSignature", this.interForm.value.dateSignature);
    }
    if(this.interForm.value.poste != "") {
      formdata.append("poste", this.interForm.value.poste);
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
    console.log(this.interForm.value);
    this.otherService.addInter(formdata).subscribe(
      data => {
        console.log(data);
     
        if(data.success == true) {
          this.submited = true;

        }
      },
        error=> {
          this.errorMsg = 'Probleme de connexion au serveur';
          console.log(error)
        }
        //this.ndm.navigateByUrl('/accueil/listUsers');
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
    console.log(this.photo.type);
    let reader = new FileReader();
    reader.readAsDataURL( this.photo)
    reader.onload= ()=>{
      this.image= reader.result
      console.log(this.image)
    }
  }

  //recuperation du  contrat
  getFileContrat(event: any) {
    this.fichierContrat = event.target.files[0];
    this.contratName = this.fichierContrat.name;
    console.log(this.contratName);
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

   //recuperation  du proceverbal
   getProceVerbal(e:any) {
    this.fichierProceVerbal= e.target.files.item(0);
    console.log(this.fichierProceVerbal.type);
    this.proceverbalName = this.fichierProceVerbal.name;
    console.log(this.proceverbalName);
  }

   //recuperation du fiche de poste
   getFichePoste(e:any) {
    this.fichierPoste= e.target.files.item(0);
    console.log(this.fichierPoste.type);
    this.fichedeposteName = this.fichierPoste.name;
    console.log(this.fichedeposteName);
  }

  

  getFileCni(e:any) {
    this.fichierCni= e.target.files.item(0);
   // console.log(this.fichierCni);
    this.cniName = this.fichierCni.name;
    console.log(this.cniName);
    
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
  }
}


import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { OthersService } from 'src/app/services/others.service';

@Component({
  selector: 'app-addinter',
  templateUrl: './addinter.component.html',
  styleUrls: ['./addinter.component.scss']
})
export class AddinterComponent implements OnInit {

 
  submited = false;
  matricule = "Tmp_02568";
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
  errorMsg: string;
  infoForm : FormGroup;
  formPhoneGroup : FormGroup;
  dataSociete: any;
  dataDirection: any;
  dataAgence: any;
  dataDepartement: any;
  dataCategorie;
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
  fileDiplome: FormArray;
  constructor(private fb: FormBuilder,
              private dataService: DataService,
              private otherService: OthersService,
              private route: Router) {
    this.datajson = this.dataService.getData();
   }
  ngOnInit() {
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
        structureId: new FormControl('14'),
        domaineId: new FormControl('2'),
        directionId: new FormControl(''),
        departementId: new FormControl(''),
        societeId: new FormControl(''),
        profession: new FormControl(''),
        contratDoc: new FormControl(''),
        //profession: new FormControl(''),
        matriculeManager: new FormControl(''),
        fileFicheposte: new FormControl(''),
        fileproceverbal: new FormControl(''),
        fileCni: new FormControl(''),
        typePiece: new FormControl(''),
        fileDiplome: new FormArray([
          new FormControl(''),
        ])
       /* diplome: new FormArray([
          new FormGroup({
            document: new FormControl(''),
            typeDocumentId: new FormControl('')
          }),
         new FormGroup({
            document: new FormControl(''),
            typeDocumentId: new FormControl('')
          }),
          new FormGroup({
            document: new FormControl(''),
            typeDocumentId: new FormControl('')
          }),
        ])*/
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
  get diplome(): FormArray {
    return this.interForm.get('fileDiplome') as FormArray;
  }
  addNameField() { 

    this.diplome.push(new FormControl('', Validators.required)); 
  }

  submitted1(){
    localStorage.setItem('color1', "20px solid #f16e00");
    localStorage.setItem('color2', "20px solid #ff7900");
    localStorage.setItem('colora', "#f16e00");
    localStorage.setItem('colorb', "#ff7900");
  }
  submitted2(){
    localStorage.setItem('color2', "20px solid #f16e00");
    localStorage.setItem('color3', "20px solid #ff7900");
    localStorage.setItem('colorb', "#f16e00");
    localStorage.setItem('colorc', "#ff7900");
  }
  submit() {
    for (let i = 0; i < this.diplome.length; i++) {
      console.log(this.diplome.at(i).value);
    }
    console.log(this.diplome.value);
    
    const value = this.interForm.value;
    const formdata = new FormData();
    formdata.append("numeroPiece",this.interForm.value.numeroPiece);
    formdata.append("nom",this.interForm.value.nom);
    formdata.append("prenom",this.interForm.value.prenom);
    formdata.append("adresse",this.interForm.value.adresse);
    formdata.append("email",this.interForm.value.email);
    formdata.append("telephone",this.interForm.value.telephone);
    formdata.append("universite",this.interForm.value.universite);
    formdata.append("sexe",this.interForm.value.sexe);
    formdata.append("profession",this.interForm.value.profession);
    formdata.append("structureId",this.interForm.value.structure);
    formdata.append("categorieId",this.interForm.value.categorieId);
    formdata.append("directionId",this.interForm.value.direction);
    formdata.append("departementId",this.interForm.value.departement);
    formdata.append("structureId",this.interForm.value.sevice);
    formdata.append("domaineId",this.interForm.value.domaineId);
    formdata.append("societeId",this.interForm.value.societeId);
    formdata.append("sitmat",this.interForm.value.sitmat);
    formdata.append("salaireBrut",this.interForm.value.salaireBrut);
    formdata.append("dateNaissance",this.interForm.value.dateNaissance);
    formdata.append("lieuNaissance",this.interForm.value.lieuNaissance);
    formdata.append("dateDebut",this.interForm.value.dateDebut);
    formdata.append("dateFin",this.interForm.value.dateFin);
    formdata.append("dateSignature",this.interForm.value.dateSignature);
    formdata.append("poste",this.interForm.value.poste);
    formdata.append("contratDoc",this.fichierContrat);
    formdata.append("fileCni",this.fichierCni);
    formdata.append("fileFicheposte",this.fichierPoste);
    formdata.append("fileproceverbal",this.fichierProceVerbal);
    formdata.append("photo",this.photo);
    formdata.append("matriculeManager",this.interForm.value.matriculeManager);
    formdata.append("typePiece",value.typePiece);
    formdata.append("fileDiplome",this.diplome.value);
    console.log(this.interForm.value);
    this.otherService.addInter(formdata).subscribe(
      data => {
        console.log(data);
        //if (data) {
         // alert('Intérimaire ajouté avec succées...');
        //}
        //this.route.navigate(['/accueil/listagence']);
        this.submited = true;
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

  //recuperation du fiche de poste
  getDiplomes(e:any) {
    this.fichierDiplome= e.target.files.item(0);
    for (let i = 0; i < this.diplome.length; i++) {
      console.log(this.diplome.at(i).value);
      this.diplomeName[i] = this.fichierDiplome.name;
      console.log(this.diplomeName[i]);
    }
  }

  getFileCni(e:any) {
    this.fichierCni= e.target.files.item(0);
    for (let i = 0; i < this.fileCni.length; i++) {
      console.log(this.fileCni.at(i).value);
      this.cniName[i] = this.fichierCni.name;
      console.log(this.cniName[i]);
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


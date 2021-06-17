import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  image: any;
  errorMsg: string;
  infoForm : FormGroup;
  contactForm : FormGroup;
  posteForm : FormGroup;
  formPhoneGroup : FormGroup;
  dataSociete: any;
  dataDirection: any;
  dataAgence: any;
  dataDepartement: any;
  id: any;
  itemd;
  donneeService;
  itemdept;
  datajson;
  constructor(private fb: FormBuilder,
              private dataService: DataService,
              private otherService: OthersService,
              private route: Router) {
    this.datajson = this.dataService.getData();
   }
  ngOnInit() {
    this.interForm = new FormGroup({
        infopersonnel: new FormGroup({
        nCni: new FormControl(''),
        prenom: new FormControl(''),
        nom: new FormControl(''),
        mail: new FormControl(''),
        dateNaissance: new FormControl(''),
        lieuNaissance: new FormControl(''),
        sexe: new FormControl(''),
        sitmat: new FormControl(''),
        adresse: new FormControl(''),
        nPassport: new FormControl(''),
        diplome: new FormControl(''),
        universite: new FormControl(''),
        photo: new FormControl(''),
      }),
      contrat: new FormGroup({
        type: new FormControl(''),
        agenceId: new FormControl(''),
        dateDebut: new FormControl(''),
        dateFin: new FormControl(''),
        categorieId: new FormControl(''),
        salaireBrut: new FormControl(''),
        structureId: new FormControl(''),
        direction: new FormControl(''),
        departement: new FormControl(''),
        service: new FormControl(''),
        filecontrat: new FormControl(''),
      }),
      poste: new FormGroup({
        titre: new FormControl(''),
        matricule: new FormControl(''),
        ficheposte: new FormControl(''),
        procesverbal: new FormControl(''),
      })
    });
    //liste des agences
    this.otherService.getListAgence().subscribe(
      data => {
        this.dataAgence = data.data;
        console.log(data);
      }
    );
      //recupere les societes
    this.otherService.getAllSociete().subscribe(
      data => {
        this.dataSociete = data["data"];
        console.log(data);
      }
    );
    this.directionsListe(this.itemd)
    this.departementListe(this.itemd)
    this.serviceListe(this.itemd)
  }

  submitted1() {
    console.log(this.interForm.value);
    const value = this.interForm.value;
    const infoInter = new FormData();
    infoInter.append("nCni",value.nCni);
    infoInter.append("prenom",value.prenom);
    infoInter.append("nom",value.nom);
    infoInter.append("mail",value.mail);
    infoInter.append("dateNaissance",value.dateNaissance);
    infoInter.append("lieuNaissance",value.lieuNaissance);
    infoInter.append("sexe",value.sexe);
    infoInter.append("sitmat",value.sitmat);
    infoInter.append("adresse",value.adresse);
    infoInter.append("nPassport",value.nPassport);
    infoInter.append("diplome",value.diplome);
    infoInter.append("universite",value.universite);
    infoInter.append("photo",this.photo);
    console.log(infoInter);
    //localStorage.setItem('color1', "20px solid #f16e00");
    //localStorage.setItem('color2', "20px solid #ff7900");
    //localStorage.setItem('colora', "#f16e00");
    //localStorage.setItem('colorb', "#ff7900");
    //return infoInter;
  }

  submitted2() {
    //const contrat = this.interForm.value.contrat;
    const value = this.interForm.value;
    const infoCont = new FormData();
    infoCont.append("type",value.type);
    infoCont.append("agenceId",value.agenceId);
    infoCont.append("dateDebut",value.dateDebut);
    infoCont.append("dateFin",value.DateFin);
    infoCont.append("categorieId",value.categorieId);
    infoCont.append("salaireBrut",value.salaireBrut);
    infoCont.append("structureId",value.structureId);
    infoCont.append("direction",value.direction);
    infoCont.append("departement",value.departement);
    infoCont.append("service",value.service);
    infoCont.append("filecontrat",value.filecontrat);
    console.log(infoCont);
    //localStorage.setItem('color2', "20px solid #f16e00");
    //localStorage.setItem('color3', "20px solid #ff7900");
    //localStorage.setItem('colorb', "#f16e00");
    //localStorage.setItem('colorc', "#ff7900");
   // return infoCont;
  }

  submit() {
    const interimForm = new FormData();
    interimForm.append("nCni",this.interForm.value.infopersonnel.nCni)
    interimForm.append("universite",this.interForm.value.infopersonnel.universite)
    interimForm.append("sexe",this.interForm.value.infopersonnel.sexe)
    interimForm.append("dateNaissance",this.interForm.value.infopersonnel.dateNaissance)
    interimForm.append("lieuNaissance",this.interForm.value.infopersonnel.lieuNaissance)
    interimForm.append("profession",this.interForm.value.infopersonnel.profession)
    interimForm.append("sitmat",this.interForm.value.infopersonnel.sitmat)
    //interimForm.append("diplome",this.interForm.value.infopersonnel.diplome)
    interimForm.append("adressse",this.interForm.value.infopersonnel.adresse)
    interimForm.append("profilId",'3')
    interimForm.append("categorieId",this.interForm.value.contrat.categorieId)
    interimForm.append("structureId",this.interForm.value.contrat.structureId)
    interimForm.append("domaineId",'1')
    interimForm.append("agenceId",'20')
    interimForm.append("societeId",this.interForm.value.infopersonnel.societeId)
    interimForm.append("salaireBrut",this.interForm.value.infopersonnel.salaireBrut)
    //interimForm.append("titre",this.interForm.value.infoPoste.titre)
    //interimForm.append("matricule",this.interForm.value.infoPoste.matricule)
    //interimForm.append("ficheposte",this.interForm.value.infoPoste.ficheposte)
    //interimForm.append("procesverbal",this.interForm.value.infoPoste.procesverbal)
    console.log(this.interForm.value.infopersonnel);

    console.log(this.interForm.value);
    const value = this.interForm.value;
    const infoPoste = new FormData();
    infoPoste.append("titre",value.titre);
    infoPoste.append("matricule",value.matricule);
    infoPoste.append("ficheposte",value.ficheposte);
    infoPoste.append("procesverbal",value.procesverbal);
    localStorage.setItem('color3', "20px solid #f16e00");
    localStorage.setItem('colorc', "#f16e00");
    this.otherService.addInter(interimForm).subscribe(
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

  //recuperation de l'image
  getPhoto(e:any) {
    this.photo= e.files.item(0);
    console.log(this.photo.type);

    let reader = new FileReader();
    reader.readAsDataURL( this.photo)
    reader.onload= ()=>{
      this.image= reader.result
     // console.log(this.image)
    }
  }
}


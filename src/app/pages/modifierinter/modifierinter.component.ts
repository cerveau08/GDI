import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  prenom;
  nom;
  ncni;
  profession;
  datedenaissance;
  lieudenaissance;
  sexe;
  dateDebut;
  dateFin;
  sitmat;
  email;
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
             this.prenom = this.dataInter.data.prenom;
              this.nom = this.dataInter.data.nom;
              this.ncni = this.dataInter.data.ncni;
              this.profession = this.dataInter.data.profession;
              this.email = this.dataInter.data.email;
              this.sitmat = this.dataInter.data.sitmat;
              this.matricule = this.dataInter.data.matricule;
              this.datedenaissance = this.dataInter.data.datedenaissance;
              this.lieudenaissance = this.dataInter.data.lieudenaissance;
              this.sexe = this.dataInter.data.sexe;
              this.dateDebut = this.dataInter.data.dateDebut;
              this.dateFin = this.dataInter.data.dateFin;
              this.salaire_brut = this.dataInter.data.salaire_brut;
              this.categorie = this.dataInter.data.categorie;
              this.telephone = this.dataInter.data.telephone;
              this.universite = this.dataInter.data.universite;
              this.agence = this.dataInter.data.agence;
              this.structure = this.dataInter.data.structure;
              this.direction = this.dataInter.data.direction;
              this.departement = this.dataInter.data.departement;
              this.service = this.dataInter.data.service;
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
        ncni: new FormControl(''),
        prenom: new FormControl(''),
        nom: new FormControl(''),
        email: new FormControl(''),
        datedenaissance: new FormControl(''),
        lieudenaissance: new FormControl(''),
        sexe: new FormControl(''),
        sitmat: new FormControl(''),
        diplome: new FormControl(''),
        universite: new FormControl(''),
        photo: new FormControl(''),
        type: new FormControl(''),
        agence: new FormControl(''),
        dateDebut: new FormControl(''),
        dateFin: new FormControl(''),
        categorie: new FormControl(''),
        salaire_brut: new FormControl(''),
        structure: new FormControl(''),
        direction: new FormControl(''),
        departement: new FormControl(''),
        service: new FormControl(''),
        filecontrat: new FormControl(''),
        profession: new FormControl(''),
        matriculemanager: new FormControl(''),
        ficheposte: new FormControl(''),
        proceverbal: new FormControl(''),
    });

      //recupere les societes
      this.otherService.getAllSociete().subscribe(
        data => {
          this.dataSociete = data["data"];
          console.log(data);
        }
      );
  }

  get f() { return this.interForm.controls; }
  submitted1() {
    
  }
  submitted2() {
  
  }
  submit() {
   console.log(this.dataInter);
    console.log(this.interForm.value);
    const value = this.interForm.value;
    const info = new FormData();
    info.append("nom",value.nom);
    info.append("prenom",value.prenom);
    info.append("ncni",value.ncni);
    info.append("datedenaissance",value.dateNaissance);
    info.append("lieudenaissance",value.lieuNaissance);
    info.append("telephone",value.telephone);
    info.append("email",value.email);
    info.append("adresse",value.adresse);
    info.append("sexe",value.sexe);
    info.append("sitmat",value.sitmat);
    info.append("diplome",value.diplome);
    info.append("universite",value.universite);
    info.append("type",value.type);
    info.append("agence",value.agence);
    info.append("dateDebut",value.dateDebut);
    info.append("dateFin",value.dateFin);
    info.append("categorie",value.categorie);
    info.append("salaire_brut",value.salaire_brut);
    info.append("structure",value.structure);
    info.append("direction",value.direction);
    info.append("departement",value.departement);
    info.append("service",value.service);
    info.append("file_contrat",value.file_contrat);
    info.append("profession",value.profession);
    info.append("matriculemanager",value.matriculemanager);
    info.append("fichePoste",value.fichePoste);
    info.append("proceverbal",value.proceverbal);
    info.append("logo",this.photo);
    console.log(info);
    console.log(this.item);
    this.otherService.updateInter(this.interForm.value, this.item).subscribe(
          (res) =>{
            console.log(res);
            if(res){
              this.route.navigate(['/accueil/listagence']);
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

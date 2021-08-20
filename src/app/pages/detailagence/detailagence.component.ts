import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxFileSaverService } from '@clemox/ngx-file-saver';
import { DataService } from 'src/app/service/data.service';
import { OthersService } from 'src/app/services/others.service';
import { ModalService } from 'src/app/_modal/modal.service';
import { ErrormodalService } from 'src/app/_errormodals';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detailagence',
  templateUrl: './detailagence.component.html',
  styleUrls: ['./detailagence.component.scss']
})
export class DetailagenceComponent implements OnInit {

  item: any;
  url1;
  url3: any;
  user;
  showupdate;
  showadduser;
  showdelete;
  id: any;
  image: any;
  dataAgence;
  agenceForm: FormGroup;
  userAgenceForm: FormGroup;
  nomUpdate; 
  url2;
  urlUser;
  viewer = 'google';
  contratDoc="";
  DemoDoc1="https://file-examples.com/wp-content/uploads/2017/02/file-sample_100kB.doc";
  DemoDoc2="https://www.le.ac.uk/oerresources/bdra/html/resources/example.txt"; 
  contratName;
  cnidgName;
  fichierCnidg?: File;
  fichierContrat?: File;
  userAgentForm: FormGroup;
  data;
  nom;
  responsable;
  numDg;
  nomdg;
  email;
  telephone;
  fixe;
  site;
  adresse;
  logo;
  contrat;
  cnidg;
  userAgence;
  dataTotalAgence;
  total;
  actifs;
  inactifs;
  dataSociete;
  dataStructure;
  dataprofils;
  listeFonction
  fichierPhoto?: File;
  prenom;
  page = 1;
  itemsPerPage = 8;
  totalItems : any;
  imageName;
  public reqUrl = environment.base_url;
  errorMsg: any;
  dataMatriculeInter: any;
  constructor(private activeroute: ActivatedRoute,
    private modalService: ModalService,
    private dataService: DataService,
    private http: HttpClient,
    private fileSaver: NgxFileSaverService,
    private otherService: OthersService,
    private errormodalService: ErrormodalService,
    private route: Router) { 
      this.activeroute.queryParams.subscribe(params => {
        this.item = JSON.parse(params["agence"]);
        console.log(this.item);
        this.otherService.getOneAgenceById(this.item).subscribe(
          data =>{
            this.data = data;
            this.dataAgence = this.data.data;
            console.log(this.dataAgence);
            this.nom = this.dataAgence.nom;
            this.responsable  = this.dataAgence.responsable;
            this.numDg = this.dataAgence.numDg;
          //  this.nomdg = this.dataAgence.nomdg;
            this.email = this.dataAgence.email;
            this.telephone = this.dataAgence.telephone;
            this.contratDoc = this.dataAgence.contrat;
            this.site = this.dataAgence.site;
            this.adresse = this.dataAgence.adresse;
            this.logo = this.dataAgence.logo;
            this.contrat = this.dataAgence.contrat;
          //  this.cnidg = this.dataAgence.data.cnidg;
            this.userAgence = this.dataAgence['user'];
            console.log(this.userAgence);
            
          },
          error=> {
            this.errorMsg = error;
            this.errormodalService.open('error-modal-1');
            console.log(error)
          }
        );
      })

      this.otherService.getTotalAgenceActifInactif(this.item).subscribe(
        data =>{
          this.data = data;
          this.dataTotalAgence = this.data['data'];
          console.log(this.dataTotalAgence);
          this.nom = this.dataTotalAgence[0].nom;
          console.log(this.nom);
          
          this.total = this.dataTotalAgence[0].total;
          this.actifs = this.dataTotalAgence[0].actifs;
          this.inactifs = this.dataTotalAgence[0].inactifs;
        }, error=> {
          this.errorMsg = error;
          this.errormodalService.open('error-modal-1');
          console.log(error)
        });
    }

  ngOnInit() {
    this.user = localStorage.getItem('user');
    if(this.user == 'AGN' || this.user == 'DRH') {
      this.showupdate = true;
    } else {
      this.showupdate = false;
    }
    //this.datas = this.dataService.getData();
    this.agenceForm = new FormGroup({
      nom: new FormControl(''),
      responsable: new FormControl(''),
      nomdg: new FormControl(''),
      numDg: new FormControl(''),
      email: new FormControl(''),
      telephone: new FormControl(''),
      mobile: new FormControl(''),
      site: new FormControl(''),
      adresse: new FormControl(''),
      logo: new FormControl(''),
      contrat: new FormControl(''),
      cnidg: new FormControl(''),
    });
    
    this.userAgentForm = new FormGroup({
      prenomUser: new FormControl('', Validators.required,),
      nomUser: new FormControl('', Validators.required,),
      emailUser: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]),
      telephoneUser: new FormControl('', Validators.required,),
      fonction: new FormControl('', Validators.required,),
      login: new FormControl(''),
      profil: new FormControl(''),
      avatarUser: new FormControl(''),
      agenceId: new FormControl(''),
    })
  
    //recupere les societes
    this.otherService.getAllSociete().subscribe(
      data => {
        this.dataSociete = data["data"];
        console.log(data);
      }, error=> {
        this.errorMsg = error;
        this.errormodalService.open('error-modal-1');
        console.log(error)
      }
    );

    this.otherService.getAllStructure().subscribe(data => {
      console.log(data);
      this.dataStructure = data['data'];
    }, error=> {
      this.errorMsg = error;
      this.errormodalService.open('error-modal-1');
      console.log(error)
    })

      //recupere les profils
    this.otherService.getprofil().subscribe(
      data => {
        this.dataprofils = data["data"];
        console.log(data);
      }, error=> {
        this.errorMsg = error;
        this.errormodalService.open('error-modal-1');
        console.log(error)
      }
    );
    this.gty(this.page);

    this.otherService.getFonctions().subscribe(data => this.listeFonction = data.data);
  }

  gty(page: any){
    this.http.get(this.reqUrl + `/listeAgence?page=${page}&limit=${this.itemsPerPage}`).subscribe((data: any) => {
      this.dataAgence =  data.data;
      this.totalItems = data.total;
      console.log(this.dataAgence);
      console.log(this.totalItems);
    }, error=> {
      this.errorMsg = error;
      this.errormodalService.open('error-modal-1');
      console.log(error)
    })
  }

  public saveFonction(e): void {
    let libelle = e.target.value;
    let list = this.listeFonction.filter(x => x.libelle === libelle)[0];
    console.log(list.libelle);
    this.userAgentForm.patchValue({fonction: list.libelle});
  }
  
  //ajout user

  ajouterUser() {
    const formdata = new FormData(); 
    formdata.append("prenom",this.userAgentForm.value.prenomUser);
    formdata.append("nom",this.userAgentForm.value.nomUser);
    formdata.append("profil",this.userAgentForm.value.profil);
    formdata.append("fonction",this.userAgentForm.value.fonction);
    formdata.append("agenceId",this.item);
    formdata.append("email",this.userAgentForm.value.emailUser);
    formdata.append("telephone",this.userAgentForm.value.telephoneUser);
    formdata.append("avatar",this.fichierPhoto);
    console.log(formdata);
    console.log(this.userAgentForm.value);
    this.otherService.addUser(formdata).subscribe(
      (response) =>{
        console.log(response)
        this.data = response;
        this.successMsg = this.data.status
        console.log(this.successMsg);
          this.route.navigate(['/accueil/listeuser']);
      },
      error=> {
        this.errorMsg = error;
        this.errormodalService.open('error-modal-1');
        console.log(error)
      }
    )
  }
  successMsg(successMsg: any) {
    throw new Error('Method not implemented.');
  }
//modifier agence
  submitted1() {
    console.log(this.dataAgence);
    console.log(this.agenceForm.value);
    const value = this.agenceForm.value;
    const info = new FormData();
    info.append("nom",value.nom);
  //  info.append("responsable",value.responsable);
    info.append("nomdg",value.responsable);
    info.append("numdg",value.numDg);
    info.append("email",value.email);
    info.append("mobile",value.mobile);
    info.append("fixe",value.telephone);
    info.append("site",value.site);
    info.append("adresse",value.adresse);
    info.append("logo",this.logo);
    info.append("cnidg",this.fichierCnidg);
    info.append("contrat",this.fichierContrat);
    console.log(info);
    console.log(this.item);
    this.otherService.updateAgence(info, this.item).subscribe(
      (res) =>{
        console.log(res);
        if(res){
          this.route.navigate(['/accueil/listagence']);
        }
      },
      error=> {
        this.errorMsg = error;
        this.errormodalService.open('error-modal-1');
        console.log(error)
      }
    )
    } 

    //recuperation de l'image
 getPhoto(e:any) {
    this.logo= e.files.item(0);
    let reader = new FileReader();
    reader.readAsDataURL(this.logo)
    reader.onload= ()=>{
      this.image= reader.result
    } 
  }

  //recuperer image pour add user
  getphoto(event: any) {
    this.fichierPhoto = event.target.files[0];
    this.imageName = this.fichierPhoto.name;
    let reader = new FileReader();
    reader.readAsDataURL( this.fichierPhoto);
    reader.onload= ()=>{
      this.image= reader.result;
      console.log(this.image);
    }
  }
 
   //recuperation du  contrat
   getFileContrat(event: any) {
    this.fichierContrat = event.target.files[0];
    this.contratName = this.fichierContrat.name;
    console.log(this.contratName);
  }
   //recuperation  du cnidg
   getCnidg(e:any) {
    this.fichierCnidg= e.files.item(0);
    console.log(this.fichierCnidg.type);
    this.cnidgName = this.fichierCnidg.name;
    console.log(this.cnidgName);
  }

  public getfilemodal() {
    this.fileSaver.saveUrl(this.contratDoc, 'contrat');
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  openDetail(data) {
    this.route.navigate(['/accueil/detailuser'], {
      queryParams: {
        user: JSON.stringify(data)
      }
    })
  }

  delete() {
    this.otherService.deleteAgence(this.item).subscribe(
      (response) => {
       console.log(response)
       if (response) {
        this.route.navigate(['/accueil/listagence']);
       }
      },
      error => {
        this.errorMsg = error;
        this.errormodalService.open('error-modal-1');
        console.log(error)
      }
    );
  }
  openErrorModal(id: string) {
    this.errormodalService.open(id);
  }

  closeErrorModal(id: string) {
    this.errormodalService.close(id);
  }
}

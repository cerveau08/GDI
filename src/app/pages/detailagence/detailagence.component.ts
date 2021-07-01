import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxFileSaverService } from '@clemox/ngx-file-saver';
import { DataService } from 'src/app/service/data.service';
import { OthersService } from 'src/app/services/others.service';
import { ModalService } from 'src/app/_modal/modal.service';

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
  DemoDoc="http://www.africau.edu/images/default/sample.pdf";
  DemoDoc1="https://file-examples.com/wp-content/uploads/2017/02/file-sample_100kB.doc";
  DemoDoc2="https://www.le.ac.uk/oerresources/bdra/html/resources/example.txt"; 
  contratName;
  cnidgName;
  fichierCnidg?: File;
  fichierContrat?: File;
  data;
  nom;
  responsable;
  numdg;
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
  constructor(private activeroute: ActivatedRoute,
    private modalService: ModalService,
    private dataService: DataService,
    private fileSaver: NgxFileSaverService,
    private otherService: OthersService,
    private route: Router) { 
      this.activeroute.queryParams.subscribe(params => {
        this.item = JSON.parse(params["user"]);
        console.log(this.item);
        this.otherService.getOneAgenceById(this.item).subscribe(
          data =>{
            this.data = data;
            this.dataAgence = this.data.data;
            console.log(this.dataAgence);
            this.nom = this.dataAgence.nom;
            this.responsable = this.dataAgence.responsable;
            this.numdg = this.dataAgence.numdg;
            this.email = this.dataAgence.email;
            this.telephone = this.dataAgence.telephone;
            this.fixe = this.dataAgence.fixe;
            this.site = this.dataAgence.site;
            this.adresse = this.dataAgence.adresse;
            this.logo = this.dataAgence.logo;
            this.contrat = this.dataAgence.data.contrat;
            this.cnidg = this.dataAgence.data.cnidg;
            this.userAgence = this.dataAgence['user'];
            console.log(this.userAgence);
            
          },
          error =>{
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
        })
    }

  ngOnInit() {
    this.user = localStorage.getItem('user');
    if(this.user == 'agence' || this.user == 'drh') {
      this.showupdate = true;
    } else {
      this.showupdate = false;
    }
    //this.datas = this.dataService.getData();
    this.agenceForm = new FormGroup({
      nom: new FormControl(''),
      nomdg: new FormControl(''),
      numdg: new FormControl(''),
      email: new FormControl(''),
      mobile: new FormControl(''),
      fixe: new FormControl(''),
      siteweb: new FormControl(''),
      adresse: new FormControl(''),
      logo: new FormControl(''),
      contrat: new FormControl(''),
      cnidg: new FormControl(''),
    });
   /* this.userAgenceForm = new FormGroup({
      prenom: new FormControl (''),
      nom: new FormControl(''),
      poste: new FormControl (''),
      profil: new FormControl('12'),
      agenceId: new FormControl('32'),
      email: new FormControl(''),
      telephone: new FormControl (''),
      adresse: new FormControl(''),
      logo: new FormControl (''),
    });*/
  }

  submitted1() {
    console.log(this.dataAgence);
    console.log(this.agenceForm.value);
    const value = this.agenceForm.value;
    const info = new FormData();
    info.append("nom",value.nom);
    info.append("nomdg",value.nomdg);
    info.append("numdg",value.numdg);
    info.append("email",value.email);
    info.append("mobile",value.mobile);
    info.append("fixe",value.fixe);
    info.append("siteweb",value.siteweb);
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
          (error)=>{
            console.log(error);
          }
        )
    } 
  /*  ajouterUser() {
      const formdata = new FormData();
      const value = this.userAgenceForm.value;
    formdata.append("prenom",value.prenom);
    formdata.append("nom",value.nom);
    formdata.append("profil",value.profil);
    formdata.append("poste",value.poste);
    formdata.append("agenceid",value.agenceId);
    formdata.append("email",value.email);
    formdata.append("telephone",value.telephone);
    formdata.append("adresse",value.adresse);
    formdata.append("logo",this.logo);
      console.log(this.userAgenceForm.value);
      this.otherService.addUser(formdata).subscribe(
        (response) =>{
          console.log(response)
        },
        (error) =>{
          console.log(error)
        }
      )
    }*/

    //recuperation de l'image
 getPhoto(e:any) {
    this.logo= e.files.item(0);
    let reader = new FileReader();
    reader.readAsDataURL(this.logo)
    reader.onload= ()=>{
      this.image= reader.result
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
    this.fileSaver.saveUrl(this.DemoDoc, 'contrat');
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  delete() {
    this.otherService.deleteAgence(this.item).subscribe(
      (response) =>{
       console.log(response)
       if (response) {
        this.route.navigate(['/accueil/listagence']);
       }
      },
      (error)=>{
        console.log(error);
      }
    );
  }
}

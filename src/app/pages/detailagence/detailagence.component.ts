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
  id: any;
  photo: any;
  image: any;
  dataAgence: any;
  agenceForm: FormGroup;
  nomUpdate; nomDg;
  numdg; email;
  fixe; mobile;
  siteweb; adresse;
  contrat; cnidg;

  viewer = 'google';
  DemoDoc="http://www.africau.edu/images/default/sample.pdf";
  DemoDoc1="https://file-examples.com/wp-content/uploads/2017/02/file-sample_100kB.doc";
  DemoDoc2="https://www.le.ac.uk/oerresources/bdra/html/resources/example.txt"; 
  constructor(private activeroute: ActivatedRoute,
    private modalService: ModalService,
    private dataService: DataService,
    private fileSaver: NgxFileSaverService,
    private otherService: OthersService,
    private route: Router) { 
      this.activeroute.queryParams.subscribe(params => {
        this.item = JSON.parse(params["user"]);
        console.log(this.item);
      })
    }

  ngOnInit() {
    this.user = localStorage.getItem('user');
    if(this.user == 'agence' || this.user == 'drh') {
      this.showupdate = true;
    } else {
      this.showupdate = false;
    }

    this.otherService.getOneAgenceById(this.item).subscribe(
      data =>{
         this.dataAgence = data;
         console.log(this.dataAgence);
      },
      error =>{
        console.log(error)
      });
  
      
    //this.datas = this.dataService.getData();
    this.agenceForm = new FormGroup({
      nom: new FormControl (this.dataAgence.nom),
      nomdg: new FormControl(this.dataAgence.nomdg),
      numdg: new FormControl (this.dataAgence.numdg),
      email: new FormControl(this.dataAgence.email),
      mobile: new FormControl (this.dataAgence.mobile),
      fixe: new FormControl(this.dataAgence.fixe),
      siteweb: new FormControl (this.dataAgence.siteweb),
      adresse: new FormControl(this.dataAgence.adresse),
      photo: new FormControl (this.dataAgence.photo),
      contrat: new FormControl(this.dataAgence.contrat),
      cnidg: new FormControl (this.dataAgence.cnidg),
    });
  }

  submitted1() {
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
    info.append("photo",this.photo);
    info.append("contrat",value.contrat);
    info.append("cnidg",value.cnidg);
    this.otherService.updateAgence(this.item, this.agenceForm.value).subscribe(
          (res) =>{
            console.log(res);
          },
          (error)=>{
            console.log(error);
          }
        )
    } 

   // updateAgence() {
    //  this.route.navigate(['accueil/detailagence'], {
     //   queryParams: {
      //    user: JSON.stringify(this.item)
      //  }
     // })
  //  }
    //recuperation de l'image
  getPhoto(e:any) {
    this.photo= e.files.item(0);
    console.log(this.photo)

    let reader = new FileReader();
    reader.readAsDataURL( this.photo)
    reader.onload= ()=>{
      this.image= reader.result
      console.log(this.image)
    }
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

  readUrl(event: any) {
    console.log('readUrl');
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.url1 = event.target.result;
        }
      
        reader.readAsDataURL(event.target.files[0]);
      }
  }

  readUrl1(event: any) {
    console.log('readUrl');
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
      
        reader.onload = (event: any) => {
          this.url3 = event.target.result;
        }
      
        reader.readAsDataURL(event.target.files[0]);
      }
  }

  delete(id) {

  }
}

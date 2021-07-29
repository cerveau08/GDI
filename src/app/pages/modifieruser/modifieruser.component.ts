import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OthersService } from 'src/app/services/others.service';
import { ErrormodalService } from 'src/app/_errormodals';

@Component({
  selector: 'app-modifieruser',
  templateUrl: './modifieruser.component.html',
  styleUrls: ['./modifieruser.component.scss']
})
export class ModifieruserComponent implements OnInit {
item;
prenom;
nom;
fonction;
matricule;
profil;
telephone;
dataUser;
photoUpload;
avatar;
dataprofils;
image;
email;
listeFonction;
profilId;
request;
next;
errorMsg
userAgentForm: FormGroup;
  constructor(private activeroute: ActivatedRoute,
    private route: Router,
    private errormodalService: ErrormodalService,
    private otherService: OthersService) {
      this.activeroute.queryParams.subscribe(params => {
        this.item = JSON.parse(params["user"]);
        console.log(this.item);
        this.otherService.detailUser(this.item).subscribe(
          data =>{
            this.dataUser = data;
            console.log(this.dataUser);
            this.matricule = this.dataUser.data.matricule;
            this.prenom = this.dataUser.data.prenom;
            this.nom = this.dataUser.data.nom;
            this.email = this.dataUser.data.email;
            this.fonction = this.dataUser.data.fonction;
            this.profil = this.dataUser.data.profil.libelle;
            this.profilId = this.dataUser.data.profil.id;
            this.telephone = this.dataUser.data.telephone;
          })
        })
     }
     ngOnInit() {
      this.userAgentForm = new FormGroup({
        matricule: new FormControl(''),
        prenom: new FormControl(''),
        nom: new FormControl(''),
        email: new FormControl(''),
        telephone: new FormControl(''),
        profil: new FormControl(''),
        avatar: new FormControl(''),
        fonction: new FormControl(''),
    })

      //recupere les profils
      this.otherService.getprofil().subscribe(
        data => {
          this.dataprofils = data["data"];
          console.log(data);
        }
      );
  
      this.otherService.getFonctions().subscribe(data => this.listeFonction = data.data);
  }
  public saveFonction(e): void {
    let libelle = e.target.value;
    let list = this.listeFonction.filter(x => x.libelle === libelle)[0];
    console.log(list.libelle);
    this.userAgentForm.patchValue({fonction: list.libelle});
  }
    modifierUser(){
      console.log(this.userAgentForm.value);
      const value = this.userAgentForm.value;
      const info = new FormData();
      info.append("prenom",this.userAgentForm.value.prenom);
      info.append("nom",this.userAgentForm.value.nom);
      info.append("fonction", this.userAgentForm.value.fonction);
      info.append("telephone",this.userAgentForm.value.telephone);
      info.append("email",this.userAgentForm.value.email);
      info.append("profilId",this.userAgentForm.value.profil);
      if(this.photoUpload != undefined) {
        info.append("avatar",this.photoUpload);
      }
      console.log(info);
      this.otherService.updateUser(info, this.item).subscribe(
        (res) =>{
          console.log(res);
          if(res){
            this.route.navigate(['/accueil/listeuser']);
          }
        },
        error=> {
          this.errorMsg = error;
          this.errormodalService.open('error-modal-1');
          console.log(error)
        }
      )
    }

    openErrorModal(id: string) {
      this.errormodalService.open(id);
    }
  
    closeErrorModal(id: string) {
      this.errormodalService.close(id);
    }
  
    getPhoto(e:any) {
      console.log(this.avatar);
      this.photoUpload = e.files.item(0);
      let reader = new FileReader();
      reader.readAsDataURL( this.photoUpload)
      reader.onload= ()=>{
        this.image= reader.result
      } 
    }
}

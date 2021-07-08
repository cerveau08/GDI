import { PresenceComponent } from './../pages/presence/presence.component';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loading = false;
  loginForm: FormGroup;
  constructor(private route: Router,
              private auth: AuthService) {
    this.getScreenSize();
  }

  scrHeight:any;
  scrWidth:any;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
        //console.log(this.scrHeight, this.scrWidth);
  }
  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl (''),
      password: new FormControl('')
    });
  }
  
  onSubmit() {
    this.loading = true;
    const user =
    {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    } 
    //console.log(user);
    this.auth.login(user).subscribe(
      data => {
        console.log(data)
        //console.log(data.data['role'][0])
        let profil = data.data.profil
        console.log(profil);
        let prenom = data.data.prenom
        console.log(prenom);
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', profil)
        localStorage.setItem('prenom', prenom);
        this.loading = false;
        if(data) {
          this.route.navigate(['accueil/home']);
        }
      }, error => {
        this.loading = false;
      }
    )
  }
}

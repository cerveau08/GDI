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
  errorMsg: string;
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
    this.auth.login(user).subscribe(
      data => {
        console.log(data)
        let profil = data.data.profil
        let prenom = data.data.prenom
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', profil)
        localStorage.setItem('prenom', prenom);
        this.loading = false;
        if(data) {
          this.route.navigate(['accueil/home']);
        }
      }, error => {
        this.errorMsg = 'Login ou Password incorrect';
        console.log(error);
      }
    )
  }
}

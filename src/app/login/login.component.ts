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

        localStorage.setItem('token', data.token)
        localStorage.setItem('user', profil);
        if(data) {
          this.route.navigate(['accueil/home']);
        }
      }
    )
  }
}

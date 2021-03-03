import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private route: Router) {
    this.getScreenSize();
  }

  scrHeight:any;
  scrWidth:any;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
        console.log(this.scrHeight, this.scrWidth);
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
    localStorage.setItem('user', this.loginForm.value.username);
    console.log(user);
    this.route.navigate(['accueil/home']);
  }
}

import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OthersService } from '../services/others.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {

  loginForm: FormGroup;
  successMsg= null;
  errors= null;
  constructor(
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router,
              private otherService: OthersService) {
    this.getScreenSize();
    route.queryParams.subscribe((params) => {
      this.loginForm.controls.passwordToken.setValue(params.token);
    });
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
    this.loginForm = this.formBuilder.group({
      newpassword: ['', [Validators.required]],
      confirmpassword: ['', [Validators.required]],
    }); 
  }
  onSubmit() {
    this.otherService.nouveauPassword(this.loginForm.value).subscribe(
      (result) => {
        this.successMsg = result;
        console.log(result);
        this.router.navigate(['login']);
      }, (error) => {
        this.errors = error.error.message;
      });
  }
}

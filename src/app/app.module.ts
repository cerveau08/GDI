import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { DefaultComponent } from './layout/default/default.component';
import { NavComponent } from './layout/nav/nav.component';
import { AsideComponent } from './layout/aside/aside.component';
import { HeaderComponent } from './layout/header/header.component';
import { ManagerComponent } from './pages/manager/manager.component';
import { InterimaireComponent } from './pages/interimaire/interimaire.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CompteComponent } from './pages/compte/compte.component';
import { DemandeComponent } from './pages/demande/demande.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { RestaurationComponent } from './pages/restauration/restauration.component';
import { ModalModule } from './_modal';
import { PasswordforgetComponent } from './passwordforget/passwordforget.component';
import { PasswordforgetMailComponent } from './passwordforget-mail/passwordforget-mail.component';
import { HomedrhComponent } from './pages/homedrh/homedrh.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DefaultComponent,
    NavComponent,
    AsideComponent,
    HeaderComponent,
    ManagerComponent,
    InterimaireComponent,
    CompteComponent,
    DemandeComponent,
    RestaurationComponent,
    PasswordforgetComponent,
    PasswordforgetMailComponent,
    HomedrhComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    ModalModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

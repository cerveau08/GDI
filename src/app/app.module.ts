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
import { NgApexchartsModule } from 'ng-apexcharts';
import { IntersouscontratComponent } from './pages/intersouscontrat/intersouscontrat.component';
import { InterfincontratComponent } from './pages/interfincontrat/interfincontrat.component';
import { AjouterinterComponent } from './pages/ajouterinter/ajouterinter.component';
import { ListermanagerComponent } from './pages/listermanager/listermanager.component';
import { AddmanagerComponent } from './pages/addmanager/addmanager.component';
import { AlertComponent } from './pages/alert/alert.component';
import { StatistiquesComponent } from './pages/statistiques/statistiques.component';
import { ParametreComponent } from './pages/parametre/parametre.component';
import { AddagenceComponent } from './pages/addagence/addagence.component';
import { ListeragenceComponent } from './pages/listeragence/listeragence.component';
import { AttestationpresenceComponent } from './pages/attestationpresence/attestationpresence.component';
import { DetailmanagerComponent } from './pages/detailmanager/detailmanager.component';
import { DetailinterComponent } from './pages/detailinter/detailinter.component';
import { DetailagenceComponent } from './pages/detailagence/detailagence.component';
import { DatePipe } from '@angular/common';
import { RestaurationdrhComponent } from './pages/restaurationdrh/restaurationdrh.component';
import { NgxFileSaverModule } from '@clemox/ngx-file-saver';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { InfopersonnelComponent } from './pages/ajouterinter/infopersonnel/infopersonnel.component';
import { ContratComponent } from './pages/ajouterinter/contrat/contrat.component';
import { PostaComponent } from './pages/ajouterinter/posta/posta.component';
import { MatButtonModule, MatInputModule, MatSidenavModule, MatStepperModule, MatToolbarModule } from '@angular/material';
import { PresenceComponent } from './pages/presence/presence.component';
import { AgenceComponent } from './pages/agence/agence.component';
import { OffreComponent } from './pages/offre/offre.component';
import { NewinterComponent } from './pages/newinter/newinter.component';
import { ListeattestationComponent } from './pages/listeattestation/listeattestation.component';

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
    HomedrhComponent,
    IntersouscontratComponent,
    InterfincontratComponent,
    AjouterinterComponent,
    ListermanagerComponent,
    AddmanagerComponent,
    AlertComponent,
    StatistiquesComponent,
    ParametreComponent,
    AddagenceComponent,
    ListeragenceComponent,
    AttestationpresenceComponent,
    DetailmanagerComponent,
    DetailinterComponent,
    DetailagenceComponent,
    RestaurationdrhComponent,
    InfopersonnelComponent,
    ContratComponent,
    PostaComponent,
    PresenceComponent,
    AgenceComponent,
    OffreComponent,
    NewinterComponent,
    ListeattestationComponent
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
    NgApexchartsModule,
    NgxFileSaverModule,
    NgxDocViewerModule,
    MatStepperModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatSidenavModule,
    MatInputModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

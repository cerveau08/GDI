import { SidenavModule } from './sidenav';
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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { NgxFileSaverModule } from '@clemox/ngx-file-saver';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { MatAutocompleteModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatStepperModule, MatToolbarModule, MatDatepickerModule, MatDialogModule, MatNativeDateModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatListModule, MatMenuModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatTooltipModule } from '@angular/material';
import { PresenceComponent } from './pages/presence/presence.component';
import { AgenceComponent } from './pages/agence/agence.component';
import { OffreComponent } from './pages/offre/offre.component';
import { NewinterComponent } from './pages/newinter/newinter.component';
import { ListeattestationComponent } from './pages/listeattestation/listeattestation.component';
import { AddinterComponent } from './pages/addinter/addinter.component';
import { ModifierinterComponent } from './pages/modifierinter/modifierinter.component';
import { AdduserComponent } from './pages/adduser/adduser.component';
import { LesdemandesComponent } from './pages/lesdemandes/lesdemandes.component';
import { JwtInterceptorService } from './helpers/jwt-interceptor.service';
import { ObjectifsComponent } from './pages/objectifs/objectifs.component';
import { NgxLoadingModule } from 'ngx-loading';
import { ModalModifierComponent } from './pages/objectifs/modal-modifier/modal-modifier.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { InterarchiveComponent } from './pages/interarchive/interarchive.component';
import { InterenattenteComponent } from './pages/interenattente/interenattente.component';
import { MultiDatepickerComponent } from './multidatepicker/multidatepicker.component';
import { MonthPickerComponent } from './multidatepicker/month-picker-component/month-picker.component';
import { YearPickerComponent } from './multidatepicker/year-picker-component/year-picker.component';
import { RegularDatepickerComponent } from './multidatepicker/regular-datepicker-component/regular-datepicker.component';
import { PasswordResetModule } from './password-reset/password-reset.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { ListuserComponent } from './pages/listuser/listuser.component';
import { DetailuserComponent } from './pages/detailuser/detailuser.component';
import { ModifieruserComponent } from './pages/modifieruser/modifieruser.component';
import { MesObjectifsComponent } from './pages/mes-objectifs/mes-objectifs.component';
import { MonAgenceComponent } from './pages/mon-agence/mon-agence.component';
import { MonManagerComponent } from './pages/mon-manager/mon-manager.component';

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
    PresenceComponent,
    AgenceComponent,
    OffreComponent,
    NewinterComponent,
    ListeattestationComponent,
    AddinterComponent,
    ModifierinterComponent,
    AdduserComponent,
    LesdemandesComponent,
    ObjectifsComponent,
    ModalModifierComponent,
    InterarchiveComponent,
    InterenattenteComponent,
    MultiDatepickerComponent,
    MonthPickerComponent,
    YearPickerComponent,
    RegularDatepickerComponent,
    ListuserComponent,
    DetailuserComponent,
    ModifieruserComponent,
    MesObjectifsComponent,
    MonAgenceComponent,
    MonManagerComponent,
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
    SidenavModule,
    NgApexchartsModule,
    NgxFileSaverModule,
    NgxDocViewerModule,
    MatStepperModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatSidenavModule,
    MatInputModule,
    MatAutocompleteModule, 
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    //AlertModule,
    PdfViewerModule,
    NgCircleProgressModule.forRoot({}),
    NgxLoadingModule.forRoot({}),
    PasswordResetModule,
  ],
  providers: [DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

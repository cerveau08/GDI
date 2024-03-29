import { StatagenceComponent } from './pages/statistiques/statagence/statagence.component';
import { DetailevaluationComponent } from './pages/evaluation/detailevaluation/detailevaluation.component';
import { SidenavModule } from './modal/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './connexion/login/login.component';
import { DefaultComponent } from './layout/default/default.component';
import { NavComponent } from './layout/nav/nav.component';
import { AsideComponent } from './layout/aside/aside.component';
import { HeaderComponent } from './layout/header/header.component';
import { ManagerComponent } from './pages/managers/manager/manager.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CompteComponent } from './pages/interimaire/compte/compte.component';
import { DemandeComponent } from './pages/autres/demande/demande.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { RestaurationComponent } from './pages/autres/restauration/restauration.component';
import { ModalModule } from './modal/_modal';
import { PasswordforgetComponent } from './connexion/passwordforget/passwordforget.component';
import { PasswordforgetMailComponent } from './connexion/passwordforget-mail/passwordforget-mail.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgApexchartsModule } from 'ng-apexcharts';
import { IntersouscontratComponent } from './pages/interimaire/intersouscontrat/intersouscontrat.component';
import { InterfincontratComponent } from './pages/interimaire/interfincontrat/interfincontrat.component';
import { ListermanagerComponent } from './pages/managers/listermanager/listermanager.component';
import { AddmanagerComponent } from './pages/managers/addmanager/addmanager.component';
import { AlertComponent } from './pages/autres/alert/alert.component';
import { StatistiquesComponent } from './pages/statistiques/statistiques.component';
import { ParametreComponent } from './pages/autres/parametre/parametre.component';
import { AddagenceComponent } from './pages/agences/addagence/addagence.component';
import { ListeragenceComponent } from './pages/agences/listeragence/listeragence.component';
import { AttestationpresenceComponent } from './pages/attestation/attestationpresence/attestationpresence.component';
import { DetailmanagerComponent } from './pages/managers/detailmanager/detailmanager.component';
import { DetailinterComponent } from './pages/interimaire/detailinter/detailinter.component';
import { DetailagenceComponent } from './pages/agences/detailagence/detailagence.component';
import { DatePipe, registerLocaleData } from '@angular/common';
import { NgxFileSaverModule } from '@clemox/ngx-file-saver';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { MatAutocompleteModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatToolbarModule, MatDatepickerModule, MatDialogModule, MatNativeDateModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatListModule, MatMenuModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatTooltipModule, MatStepperModule } from '@angular/material';
import { AgenceComponent } from './pages/agences/agence/agence.component';
import { OffreComponent } from './pages/autres/offre/offre.component';
import { NewinterComponent } from './pages/interimaire/newinter/newinter.component';
import { ListeattestationComponent } from './pages/attestation/listeattestation/listeattestation.component';
import { AddinterComponent } from './pages/interimaire/addinter/addinter.component';
import { ModifierinterComponent } from './pages/interimaire/modifierinter/modifierinter.component';
import { AdduserComponent } from './pages/users/adduser/adduser.component';
import { LesdemandesComponent } from './pages/autres/lesdemandes/lesdemandes.component';
import { JwtInterceptorService } from './helpers/jwt-interceptor.service';
import { ObjectifsComponent } from './pages/evaluation/objectifs/objectifs.component';
import { NgxLoadingModule } from 'ngx-loading';
import { ModalModifierComponent } from './pages/evaluation/objectifs/modal-modifier/modal-modifier.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { InterarchiveComponent } from './pages/interimaire/interarchive/interarchive.component';
import { InterenattenteComponent } from './pages/interimaire/interenattente/interenattente.component';
import { PasswordResetModule } from './connexion/password-reset/password-reset.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { ListuserComponent } from './pages/users/listuser/listuser.component';
import { DetailuserComponent } from './pages/users/detailuser/detailuser.component';
import { ModifieruserComponent } from './pages/users/modifieruser/modifieruser.component';
import { MesObjectifsComponent } from './pages/evaluation/mes-objectifs/mes-objectifs.component';
import { MonAgenceComponent } from './pages/agences/mon-agence/mon-agence.component';
import { MonManagerComponent } from './pages/managers/mon-manager/mon-manager.component';
import { ErrormodalModule } from './modal/_errormodals';
import { ListehistoriquecontratComponent } from './pages/interimaire/listehistoriquecontrat/listehistoriquecontrat.component';
import { DetailcontratComponent } from './pages/interimaire/detailcontrat/detailcontrat.component';
import { ListeblacklisterComponent } from './pages/users/listeblacklister/listeblacklister.component';
import { AddattestationComponent } from './pages/attestation/addattestation/addattestation.component';
import { ListeevaluationComponent } from './pages/evaluation/listeevaluation/listeevaluation.component';
import { AttestationmesInterimaireComponent } from './pages/attestation/attestationmesInterimaire/attestationmesInterimaire.component';
import { EvaluerComponent } from './pages/evaluation/evaluer/evaluer.component';
import { EffectifComponent } from './pages/statistiques/effectif/effectif.component';
import { GenreComponent } from './pages/statistiques/genre/genre.component';
import { PresenceComponent } from './pages/statistiques/presence/presence.component';
import { StatcategorieComponent } from './pages/statistiques/statcategorie/statcategorie.component';
import { ModifEvaluerComponent } from './pages/evaluation/evaluer/modif-evaluer/modif-evaluer.component';
import { StatageComponent } from './pages/statistiques/statage/statage.component';
import { DetailattestationComponent } from './pages/attestation/detailattestation/detailattestation.component';
import { ListdomaineComponent } from './pages/settings/domaine/listdomaine/listdomaine.component';
import { ListdirectionComponent } from './pages/settings/direction/listdirection/listdirection.component';
import { ListcommissionComponent } from './pages/settings/commission/listcommission/listcommission.component';
import { AjoutcommissionComponent } from './pages/settings/commission/ajoutcommission/ajoutcommission.component';
import { ModifcommissionComponent } from './pages/settings/commission/modifcommission/modifcommission.component';
import { ModifcategorieComponent } from './pages/settings/categorie/modifcategorie/modifcategorie.component';
import { AjoutcategorieComponent } from './pages/settings/categorie/ajoutcategorie/ajoutcategorie.component';
import { ListcategorieComponent } from './pages/settings/categorie/listcategorie/listcategorie.component';
import { ListsiteComponent } from './pages/settings/site/listsite/listsite.component';
import { ModifperiodeComponent } from './pages/settings/periode/modifperiode/modifperiode.component';
import { ListperiodeComponent } from './pages/settings/periode/listperiode/listperiode.component';
import { AjoutperiodeComponent } from './pages/settings/periode/ajoutperiode/ajoutperiode.component';
import { ListprofilComponent } from './pages/settings/profil/listprofil/listprofil.component';
import { ListsocieteComponent } from './pages/settings/societe/listsociete/listsociete.component';
import { AjoutstructureComponent } from './pages/settings/structure/ajoutstructure/ajoutstructure.component';
import { ListstructureComponent } from './pages/settings/structure/liststructure/liststructure.component';
import { ModifstructureComponent } from './pages/settings/structure/modifstructure/modifstructure.component';
import { ListfonctionComponent } from './pages/settings/fonction/listfonction/listfonction.component';
import { ToastrModule } from 'ngx-toastr';
import { DomaineComponent } from './pages/statistiques/domaine/domaine.component';
import { StatsiteComponent } from './pages/statistiques/statsite/statsite.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { AddobjectifComponent } from './pages/evaluation/addobjectif/addobjectif.component';
import { ListeperiodeobjectifComponent } from './pages/evaluation/listeperiodeobjectif/listeperiodeobjectif.component';
import { ModifierperiodeobjectifComponent } from './pages/evaluation/modifierperiodeobjectif/modifierperiodeobjectif.component';
import { DetailperiodeobjectifComponent } from './pages/evaluation/detailperiodeobjectif/detailperiodeobjectif.component';
import { ModalModifierObjectifComponent } from './pages/evaluation/detailperiodeobjectif/modal-modifier-objectif/modal-modifier-objectif.component';
import { ReconduireobjectifComponent } from './pages/evaluation/reconduireobjectif/reconduireobjectif.component';
import { PeriodedetailComponent } from './pages/evaluation/periodedetail/periodedetail.component';
import { ModifdetailComponent } from './pages/evaluation/modifdetail/modifdetail.component';
import { ManagerEvaluComponent } from './pages/evaluation/manager-evalu/manager-evalu.component';
import { LesnonattestationComponent } from './pages/attestation/lesnonattestation/lesnonattestation.component';
import { DocumentsComponent } from './pages/settings/documents/documents.component';
import { ExtractionlisteComponent } from './pages/evaluation/extractionliste/extractionliste.component';
import { PasobjectifComponent } from './pages/evaluation/pasobjectif/pasobjectif.component';
import { PasevaluationComponent } from './pages/evaluation/pasevaluation/pasevaluation.component';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { CacheInterceptor } from './helpers/cache.interceptor';


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
    CompteComponent,
    DemandeComponent,
    RestaurationComponent,
    PasswordforgetComponent,
    PasswordforgetMailComponent,
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
    AttestationmesInterimaireComponent,
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
    ListuserComponent,
    DetailuserComponent,
    ModifieruserComponent,
    MesObjectifsComponent,
    MonAgenceComponent,
    MonManagerComponent,
    ListehistoriquecontratComponent,
    DetailcontratComponent,
    ListeblacklisterComponent,
    AddattestationComponent,
    ListeevaluationComponent,
    DetailevaluationComponent,
    EvaluerComponent,
    EffectifComponent,
    GenreComponent,
    PresenceComponent,
    StatagenceComponent,
    StatcategorieComponent,
    ModifEvaluerComponent,
    StatageComponent,
    DetailattestationComponent,
    ListdomaineComponent,
    ListdirectionComponent,
    ListcommissionComponent,
    AjoutcommissionComponent,
    ModifcommissionComponent,
    ModifcategorieComponent,
    AjoutcategorieComponent,
    ListcategorieComponent,
    ListsiteComponent,
    ModifperiodeComponent,
    ListperiodeComponent,
    AjoutperiodeComponent,
    ListprofilComponent,
    ListsocieteComponent,
    AjoutstructureComponent,
    ListstructureComponent,
    ModifstructureComponent,
    ListfonctionComponent,
    DomaineComponent,
    StatsiteComponent,
    AddobjectifComponent,
    ListeperiodeobjectifComponent,
    ModifierperiodeobjectifComponent,
    DetailperiodeobjectifComponent,
    ModalModifierObjectifComponent,
    ReconduireobjectifComponent,
    PeriodedetailComponent,
    ModifdetailComponent,
    ManagerEvaluComponent,
    LesnonattestationComponent,
    DocumentsComponent,
    ExtractionlisteComponent,
    PasobjectifComponent,
    PasevaluationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
    ErrormodalModule,
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
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    PdfViewerModule,
    PasswordResetModule,
    NgCircleProgressModule.forRoot({}),
    NgxLoadingModule.forRoot({}),
    ToastrModule.forRoot({
      timeOut: 9000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    NgxSpinnerModule,
    HttpClientModule, 
    MatSelectCountryModule
  ],
  providers: [DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    //  { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

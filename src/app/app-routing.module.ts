import { DetailevaluationComponent } from './pages/detailevaluation/detailevaluation.component';
import { ListeevaluationComponent } from './pages/listeevaluation/listeevaluation.component';
import { AddattestationComponent } from './pages/addattestation/addattestation.component';
import { ListehistoriquecontratComponent } from './pages/listehistoriquecontrat/listehistoriquecontrat.component';
import { ListeblacklisterComponent } from './pages/listeblacklister/listeblacklister.component';
import { ObjectifsComponent } from './pages/objectifs/objectifs.component';
import { LesdemandesComponent } from './pages/lesdemandes/lesdemandes.component';
import { AdduserComponent } from './pages/adduser/adduser.component';
import { ModifierinterComponent } from './pages/modifierinter/modifierinter.component';
import { ListeattestationComponent } from './pages/listeattestation/listeattestation.component';
import { NewinterComponent } from './pages/newinter/newinter.component';
import { OffreComponent } from './pages/offre/offre.component';
import { AgenceComponent } from './pages/agence/agence.component';
import { InterimaireComponent } from './pages/interimaire/interimaire.component';
import { DetailmanagerComponent } from './pages/detailmanager/detailmanager.component';
import { DetailagenceComponent } from './pages/detailagence/detailagence.component';
import { DetailinterComponent } from './pages/detailinter/detailinter.component';
import { ParametreComponent } from './pages/parametre/parametre.component';
import { StatistiquesComponent } from './pages/statistiques/statistiques.component';
import { AttestationpresenceComponent } from './pages/attestationpresence/attestationpresence.component';
import { AlertComponent } from './pages/alert/alert.component';
import { ListermanagerComponent } from './pages/listermanager/listermanager.component';
import { AddmanagerComponent } from './pages/addmanager/addmanager.component';
import { AddagenceComponent } from './pages/addagence/addagence.component';
import { ListeragenceComponent } from './pages/listeragence/listeragence.component';
import { InterfincontratComponent } from './pages/interfincontrat/interfincontrat.component';
import { IntersouscontratComponent } from './pages/intersouscontrat/intersouscontrat.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { LoginComponent } from './login/login.component';
import { CompteComponent } from './pages/compte/compte.component';
import { DemandeComponent } from './pages/demande/demande.component';
import { HomeComponent } from './pages/home/home.component';
import { HomedrhComponent } from './pages/homedrh/homedrh.component';
import { ManagerComponent } from './pages/manager/manager.component';
import { RestaurationComponent } from './pages/restauration/restauration.component';
import { PasswordforgetMailComponent } from './passwordforget-mail/passwordforget-mail.component';
import { PasswordforgetComponent } from './passwordforget/passwordforget.component';
import { AddinterComponent } from './pages/addinter/addinter.component';
import { AuthGuard } from './helpers/auth.guard';
import { InterarchiveComponent } from './pages/interarchive/interarchive.component';
import { InterenattenteComponent } from './pages/interenattente/interenattente.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ListuserComponent } from './pages/listuser/listuser.component';
import { DetailuserComponent } from './pages/detailuser/detailuser.component';
import { ModifieruserComponent } from './pages/modifieruser/modifieruser.component';
import { MesObjectifsComponent } from './pages/mes-objectifs/mes-objectifs.component';
import { MonAgenceComponent } from './pages/mon-agence/mon-agence.component';
import { MonManagerComponent } from './pages/mon-manager/mon-manager.component';
import { DetailcontratComponent } from './pages/detailcontrat/detailcontrat.component';
import { AttestationmesInterimaireComponent } from './pages/attestationmesInterimaire/attestationmesInterimaire.component';


const routes: Routes = [
  { 
    path: 'passwordforgetmail', 
    component: PasswordforgetMailComponent
  },
  { 
    path: 'passwordforget', 
    component: PasswordforgetComponent
  },
  { path: 'passwordreset', 
  loadChildren: () => import('src/app/password-reset/password-reset.module').then(m => m.PasswordResetModule) },
  // { path: 'passwordreset', 
  // loadChildren: 'app/password-reset/password-reset.module#PasswordResetModule' },
  // { 
  //   path: 'passwordreset', 
  //   component: PasswordResetComponent
  // },
  { 
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'accueil',
    component: DefaultComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home', 
        component: HomeComponent
      },
      {
        path: 'homedrh', 
        component: HomedrhComponent
      },
      { path: 'manager',
        component: ManagerComponent,
          canActivate: [AuthGuard]
      },
      { path: 'compte',
        component: CompteComponent,
          canActivate: [AuthGuard]
      },
      { path: 'demande',
        component: DemandeComponent,
          canActivate: [AuthGuard]
      },
      { path: 'restauration',
        component: RestaurationComponent,
          canActivate: [AuthGuard]
      },
      { path: 'attestationmesinterimaires',
        component: AttestationmesInterimaireComponent,
          canActivate: [AuthGuard]
      },
      { path: 'listinter',
        component: InterimaireComponent,
          canActivate: [AuthGuard]
      },
      { path: 'souscontrat',
        component: IntersouscontratComponent,
          canActivate: [AuthGuard]
      },
      { path: 'fincontrat',
        component: InterfincontratComponent,
          canActivate: [AuthGuard]
      },
      { path: 'interarchive',
        component: InterarchiveComponent,
        canActivate: [AuthGuard]
      },
      { path: 'interenattente',
        component: InterenattenteComponent,
        canActivate: [AuthGuard]
      },
      { path: 'addinter',
        component: AddinterComponent,
          canActivate: [AuthGuard]
      },
      { path: 'listagence',
        component: ListeragenceComponent,
         canActivate: [AuthGuard]
      },
      { path: 'ajouteragence',
        component: AddagenceComponent,
          canActivate: [AuthGuard]
      },
      { path: 'ajoutermanager',
        component: AddmanagerComponent,
          canActivate: [AuthGuard]
      },
      { path: 'listmanager',
        component: ListermanagerComponent,
          canActivate: [AuthGuard]
      },
      { path: 'alertes',
        component: AlertComponent,
          canActivate: [AuthGuard]
      },
      { path: 'attestation',
        component: AttestationpresenceComponent,
          canActivate: [AuthGuard]
      },
      { path: 'statistique',
        component: StatistiquesComponent,
          canActivate: [AuthGuard]
      },
      { path: 'parametre',
        component: ParametreComponent,
          canActivate: [AuthGuard]
      },
      { path: 'detailagence',
        component: DetailagenceComponent,
          canActivate: [AuthGuard]
      },
      { path: 'detailinter',
        component: DetailinterComponent,
          canActivate: [AuthGuard]
      },
      { path: 'detailmanager',
        component: DetailmanagerComponent,
          canActivate: [AuthGuard]
      },
      { path: 'agence',
        component: AgenceComponent,
          canActivate: [AuthGuard]
      },
      { path: 'offre',
        component: OffreComponent,
          canActivate: [AuthGuard]
      },
      { path: 'newinter',
        component: NewinterComponent,
          canActivate: [AuthGuard]
      },
      { path: 'listeattestation',
        component: ListeattestationComponent,
          canActivate: [AuthGuard]
      },
      { path: 'modifierinter',
        component: ModifierinterComponent,
          canActivate: [AuthGuard]
      },
      { path: 'adduser',
        component: AdduserComponent,
          canActivate: [AuthGuard]
      },
      { path: 'lesdemande',
        component: LesdemandesComponent,
          canActivate: [AuthGuard]
      },
      { path: 'objectif',
        component: ObjectifsComponent,
          canActivate: [AuthGuard]
      },
      { path: 'detailuser',
        component: DetailuserComponent,
          canActivate: [AuthGuard]
      },
      { path: 'listeuser',
        component: ListuserComponent,
          canActivate: [AuthGuard]
      },
      { path: 'modifieruser',
        component: ModifieruserComponent,
          canActivate: [AuthGuard]
      },
      { path: 'mesobjectif',
        component: MesObjectifsComponent,
          canActivate: [AuthGuard]
      },{ path: 'monagence',
        component: MonAgenceComponent,
        canActivate: [AuthGuard]
      },{ path: 'monmanager',
        component: MonManagerComponent,
        canActivate: [AuthGuard]
      },
      { path: 'blacklist',
        component: ListeblacklisterComponent,
          canActivate: [AuthGuard]
      },{ path: 'historiquecontrat',
        component: ListehistoriquecontratComponent,
        canActivate: [AuthGuard]
      },{ path: 'detailcontrat',
        component: DetailcontratComponent,
        canActivate: [AuthGuard]
      },{ path: 'addattestation',
       component: AddattestationComponent,
       canActivate: [AuthGuard]
      },
      { path: 'listeevaluation',
        component: ListeevaluationComponent,
          canActivate: [AuthGuard]
      },
      { path: 'detailevaluation',
        component: DetailevaluationComponent,
          canActivate: [AuthGuard]
      },
      {
        path: '',
        redirectTo: 'accueil/home',
        pathMatch: 'full'
      },
      { path: '**', redirectTo: 'accueil/home' },
    ]
  },
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
//  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

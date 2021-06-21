import { ObjectifsComponent } from './pages/objectifs/objectifs.component';
import { LesdemandesComponent } from './pages/lesdemandes/lesdemandes.component';
import { AdduserComponent } from './pages/adduser/adduser.component';
import { ModifierinterComponent } from './pages/modifierinter/modifierinter.component';
import { ListeattestationComponent } from './pages/listeattestation/listeattestation.component';
import { NewinterComponent } from './pages/newinter/newinter.component';
import { OffreComponent } from './pages/offre/offre.component';
import { AgenceComponent } from './pages/agence/agence.component';
import { PresenceComponent } from './pages/presence/presence.component';
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


const routes: Routes = [
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
      { path: 'presence',
        component: PresenceComponent,
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
      {
        path: '',
        redirectTo: 'accueil/home',
        pathMatch: 'full'
      },
      { path: '**', redirectTo: 'accueil/home' },
    ]
  },
  { 
    path: 'passwordforgetmail', 
    component: PasswordforgetMailComponent
  },
  { 
    path: 'passwordforget', 
    component: PasswordforgetComponent
  },
  { 
    path: 'login', 
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

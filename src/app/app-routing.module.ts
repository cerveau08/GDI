import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { LoginComponent } from './login/login.component';
import { CompteComponent } from './pages/compte/compte.component';
import { DemandeComponent } from './pages/demande/demande.component';
import { HomeComponent } from './pages/home/home.component';
import { ManagerComponent } from './pages/manager/manager.component';


const routes: Routes = [
  {
    path: 'accueil',
    component: DefaultComponent,
   // canActivate: [AuthGuard],
    children: [
      {path: 'home', component: HomeComponent},
      { path: 'manager',
        component: ManagerComponent,
       //   canActivate: [AuthGuard]
      },
      { path: 'compte',
        component: CompteComponent,
       //   canActivate: [AuthGuard]
      },
      { path: 'demande',
        component: DemandeComponent,
       //   canActivate: [AuthGuard]
      },
      {
        path: '',
        redirectTo: 'accueil/home',
        pathMatch: 'full'
      },
      { path: '**', redirectTo: 'accueil/home' },
    ]
  },
  { path: 'login', component: LoginComponent},
  {
    path: '',
    redirectTo: 'accueil/home',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: 'accueil/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { LoginComponent } from './login/login.component';
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
      {
        path: '',
        redirectTo: 'accueil/home',
        pathMatch: 'full'
      },
      { path: '**', redirectTo: 'accueil/home' },
    ]
  },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

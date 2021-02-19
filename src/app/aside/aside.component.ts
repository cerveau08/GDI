import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  public eventSources = [
    {
      id: 1,
      title: 'Tableau de bord',
      path: '/',
      icon: "home",
      color: 'primary'
    },
    {
      id: 2,
      title: 'Interimaires',
      path: '/privacy-policy',
      icon: "person",
      color: 'primary'
    },
    {
      id: 3,
      title: 'Agence d\'interim',
      path: '/',
      icon: "local_mall",
      color: 'primary'
    },
    {
      id: 4,
      title: 'Attestations Présence',
      path: '/',
      icon: "grade",
      color: 'primary'
    },
    {
      id: 5,
      title: 'Alertes',
      path: '/',
      icon: "query_builder",
      color: 'primary'
    },
    {
      id: 6,
      title: 'Mon Compte',
      path: '/',
      icon: "folder_shared",
      color: 'primary'
    },
    {
      id: 7,
      title: 'Statistiques',
      path: '/',
      icon: "leaderboard",
      color: 'primary'
    },
    {
      id: 8,
      title: 'Statistiques',
      path: '/',
      icon: "settings",
      color: 'Paramètres'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}

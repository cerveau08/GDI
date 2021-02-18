import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  selected = 0;
  faHome = faHome;
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
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      "musicon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/headphone.svg")
    );
  }

  ngOnInit() {
  }

  getMargin(event) {
    let margin = 10;
    if (event.id == 1) {
      margin = 50;
    } else if (event.id == 6) {
      margin = 50;
    } else  {
      margin = 10;
    } 
    return margin;
  }
}

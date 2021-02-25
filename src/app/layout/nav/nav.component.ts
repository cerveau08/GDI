import { Component, HostListener, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService } from 'src/app/service/data.service';
;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  selected = 0;
  selected1 = 0;
  public click: any;
  public click1: any;
  public click2: any;
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
      title: 'Ma Restauration',
      path: 'restauration',
      icon: "person",
      color: 'primary'
    },
    {
      id: 2,
      title: 'Interimaires',
    //  path: '/privacy-policy',
      icon: "person",
      icon2: "expand_more",
      icon3: "expand_less",
      click: 0,
      color: 'primary',
      activeChoice: -1,
      liste: [
        {
          id: 1,
          title: 'Liste sous contrat',
          path: '/',
        },
        {
          id: 2,
          title: 'Liste en fin de contrat',
          path: '/privacy-policy',
        },
        {
          id: 3,
          title: 'restauration',
          path: '/',
        },
        {
          id: 4,
          title: 'Ajouter',
          path: '/privacy-policy',
        },
      ]
    },
    {
      id: 3,
      title: 'Agence d\'interim',
     // path: '/',
      icon: "local_mall",
      icon2: "expand_more",
      icon3: "expand_less",
      click: false,
      color: 'primary',
      activeChoice: -1,
      liste: [
        {
          title: 'Liste Agence',
          path: '/',
        },
        {
          title: 'Ajouter Agence',
          path: '/privacy-policy',
        },
      ]
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
      title: 'Mes Demandes',
      path: 'demande',
      icon: "local_mall",
      color: 'primary'
    },
    {
      id: 4,
      title: 'Mon Manager',
      path: 'manager',
      icon: "grade",
      color: 'primary'
    },
    {
      id: 6,
      title: 'Manager',
     // path: '',
      icon: "grade",
      icon2: "expand_more",
      icon3: "expand_less",
      click: false,
      color: 'primary',
      activeChoice: -1,
      liste: [
        {
          title: 'Liste',
          path: '/privacy-policy',
        },
        {
          title: 'Ajouter',
          path: '/',
        },
      ]
    },
    {
      id: 7,
      title: 'Alertes',
      path: '/',
      icon: "query_builder",
      color: 'primary'
    },
    {
      id: 8,
      title: 'Mon Compte',
      path: 'compte',
      icon: "folder_shared",
      color: 'primary'
    },
    {
      id: 9,
      title: 'Statistiques',
      path: '/',
      icon: "leaderboard",
      color: 'primary'
    },
    {
      id: 10,
      title: 'Statistiques',
      path: '/',
      icon: "settings",
      color: 'Paramètres'
    },
  ];

  scrHeight:any;
  scrWidth:any;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
        console.log(this.scrHeight, this.scrWidth);
  }
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private dataService: DataService
  ) {
    
    this.matIconRegistry.addSvgIcon(
      "musicon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/headphone.svg")
    );
    this.getScreenSize();
  }

  ngOnInit() {
  }
  onClick(i: number, j: number) {
    this.eventSources[i].activeChoice = j;
  }
  
  updown(item) {
    console.log(this.selected);
  //  if (this.selected == 1) {
      if (!this.click) {
        this.click = 1;
        return this.click;
      } else if (this.click = 1) {
        this.click = null;
        return this.click;
      }
  }
  updown2(item) {
    if (!this.click1) {
      this.click1 = 1;
      return this.click1;
    } else if (this.click1 = 1) {
      this.click = null;
      return this.click1;
    }
  }

  getMargin(event) {
    let margin = 10;
    if (event.id == 1) {
      margin = 50;
    } else if (event.id == 8) {
      margin = 80;
    } else  {
      margin = 1;
    } 
    return margin;
  }
 /* getHeight(event) {
    let height = 10;
    if (event.liste) {
      height = 50;
    }  else  {
      height = 1;
    } 
    return height;
  } */
  getColor(event) {
    let color = "#ff7900";
    if (event.liste) {
      color = "white";
    }  else  {
      color = "#ff7900";
    } 
    return color;
  }
}


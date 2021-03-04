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
  public role: any;
  public menus: any;
  public eventSources = [
    {
      id: 1, title: 'Tableau de bord',
      path: '/', icon: "home",
    },{
      id: 2, title: 'Tableau de bord drh',
      path: 'homedrh',
      icon: "home",
    },{
      id: 2, title: 'Ma Restauration',
      path: 'restauration',icon: "person",
    },{
      id: 2,  title: 'Interimaires',
      icon: "person",  icon2: "expand_more", icon3: "expand_less",
      click: 0,  activeChoice: -1,
      liste: [{
          id: 1,  title: 'Liste sous contrat',  path: '/',
        }, {
          id: 2, title: 'Liste en fin de contrat',  path: '/privacy-policy',
        },{
          id: 3,  title: 'restauration',  path: '/',
        },{
          id: 4,  title: 'Ajouter',  path: '/privacy-policy',
        },
      ]
    }, {
      id: 3,  title: 'Agence d\'interim',
      icon: "local_mall",  icon2: "expand_more",  icon3: "expand_less",
      click: false,  activeChoice: -1,
      liste: [
        {
          title: 'Liste Agence',  path: '/',
        },{
          title: 'Ajouter Agence',  path: '/privacy-policy',
        },
      ]
    },{
      id: 4,  title: 'Attestations Présence',
      path: '/',  icon: "grade",
    }, {
      id: 5,  title: 'Mes Demandes',
      path: 'demande',  icon: "local_mall",
    },{
      id: 4,  title: 'Mon Manager',
      path: 'manager',  icon: "grade",
    },{
      id: 6,  title: 'Manager',  icon: "grade",
      icon2: "expand_more",  icon3: "expand_less",
      click: false,  activeChoice: -1,
      liste: [  {
          title: 'Liste',  path: '/privacy-policy',
        },  {
          title: 'Ajouter',  path: '/',
        },
      ]
    },{
      id: 7,  title: 'Alertes',
      path: '/',  icon: "query_builder",
    },{
      id: 8,  title: 'Mon Compte',
      path: 'compte',  icon: "folder_shared",
    },{
      id: 9,  title: 'Statistiques',
      path: '/',  icon: "leaderboard",
    },{
      id: 10,  title: 'Statistiques',
      path: '/',  icon: "settings",
    },
  ];

  public internav = [
    {
      id: 1, title: 'Tableau de bord',
      path: '/', icon: "home",
    }, {
      id: 5,  title: 'Mes Demandes',
      path: 'demande',  icon: "local_mall",
    },{
      id: 4,  title: 'Mon Manager',
      path: 'manager',  icon: "grade",
    },
    {
      id: 3,  title: 'Mon Agence d\'interim',
      icon: "local_mall",  path: 'monagence',
      click: false,  activeChoice: -1,
    },{
      id: 8,  title: 'Mon Compte',
      path: 'compte',  icon: "folder_shared",
    }
  ];

  public drhnav = [
    {
      id: 1, title: 'Tableau de bord',
      path: 'homedrh',
      icon: "home",
    },{
      id: 3,  title: 'Interimaires',
      icon: "person",  icon2: "expand_more", icon3: "expand_less",
      click: 0,  activeChoice: -1,
      liste: [{
          id: 1,  title: 'Liste sous contrat',  path: 'souscontrat',
        }, {
          id: 2, title: 'Liste en fin de contrat',  path: 'fincontrat',
        },{
          id: 3,  title: 'restauration',  path: 'restaurationdrh',
        },{
          id: 4,  title: 'Ajouter',  path: 'ajouterinter',
        },
      ]
    }, {
      id: 4,  title: 'Agence d\'interim',
      icon: "local_mall",  icon2: "expand_more",  icon3: "expand_less",
      click: false,  activeChoice: -1,
      liste: [
        {
          title: 'Liste Agence',  path: 'listagence',
        },{
          title: 'Ajouter Agence',  path: 'ajouteragence',
        },
      ]
    },{
      id: 5,  title: 'Manager',  icon: "grade",
      icon2: "expand_more",  icon3: "expand_less",
      click: false,  activeChoice: -1,
      liste: [  {
          title: 'Liste',  path: 'listmanager',
        }, {
          title: 'Ajouter',  path: 'ajoutermanager',
        },
      ]
    },{
      id: 6,  title: 'Alertes',
      path: 'alertes',  icon: "query_builder",
    },{
      id: 8,  title: 'Mon Compte',
      path: 'compte',  icon: "folder_shared",
    },{
      id: 9,  title: 'Statistiques',
      path: 'statistique',  icon: "leaderboard",
    },{
      id: 10,  title: 'Paramètres',
      path: 'parametre',  icon: "settings",
    },
  ];

  public agencenav = [
    {
      id: 1, title: 'Tableau de bord',
      path: 'homedrh',
      icon: "home",
    },{
      id: 3,  title: 'Interimaires',
      icon: "person",  icon2: "expand_more", icon3: "expand_less",
      click: 0,  activeChoice: -1,
      liste: [{
        id: 1,  title: 'Liste sous contrat',  path: 'souscontrat',
      }, {
        id: 2, title: 'Liste en fin de contrat',  path: 'fincontrat',
      },{
        id: 4,  title: 'Ajouter',  path: 'ajouterinter',
      },
      ]
    }, {
      id: 4,  title: 'Agence d\'interim',
      icon: "local_mall",  path: 'listagence',  
    }, {
      id: 4,  title: 'Attestation de Présence',
      icon: "grade", path: 'attestation',   
    },{
      id: 6,  title: 'Alertes',
      path: 'alertes',  icon: "query_builder",
    },{
      id: 8,  title: 'Mon Compte',
      path: 'compte',  icon: "folder_shared",
    },{
      id: 9,  title: 'Statistiques',
      path: 'statistique',  icon: "leaderboard",
    },{
      id: 10,  title: 'Paramètres',
      path: 'parametre',  icon: "settings",
    },
  ];
  
  public managernav = [
    {
      id: 1, title: 'Tableau de bord',
      path: '/', icon: "home",
    }, {
      id: 5,  title: 'Interimaire',
      path: 'listinter',  icon: "person",
    },{
      id: 3,  title: 'Agence d\'interim',
      icon: "local_mall",  path: 'listagence',
    },{
      id: 4,  title: 'Attestations Présence',
      path: 'attestation',  icon: "grade",
    },{
      id: 6,  title: 'Alertes',
      path: '/',  icon: "query_builder",
    }
    ,{
      id: 8,  title: 'Mon Compte',
      path: 'compte',  icon: "folder_shared",
    },{
      id: 9,  title: 'Statistiques',
      path: 'statistique',  icon: "leaderboard",
    },{
      id: 10,  title: 'Paramètres',
      path: 'parametre',  icon: "settings",
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
    this.role = localStorage.getItem('user')
    if(this.role == "inter") {
      this.menus = this.internav;
    } else if(this.role == "drh") {
      this.menus = this.drhnav;
    } else if(this.role == "agence") {
      this.menus = this.agencenav;
    } else if(this.role == "manager") {
      this.menus = this.managernav;
    } else {
      this.menus = this.eventSources
    }
    return this.menus;
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

  getColor(event) {
    let color = "#ff7900";
    if (event.liste) {
      color = "white";
    }  else  {
      color = "#ff7900";
    } 
    return color;
  }

  getNav() {
    this.role = localStorage.getItem('user')
    if(this.role == "inter") {
      this.menus = this.internav;
    } else if(this.role == "drh") {
      this.menus = this.drhnav;
    } else if(this.role == "agence") {
      this.menus = this.agencenav;
    } else if(this.role == "manager") {
      this.menus = this.managernav;
    } else {
      this.menus = this.eventSources
    }
    return this.menus;
  }
}


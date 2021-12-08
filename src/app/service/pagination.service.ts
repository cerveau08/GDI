import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  public role: any;
  public menus: any;
  public eventSources = [
    {
      id: 1, title: 'Tableau de bord',
      path: '/', icon: "home",
    },{
      id: 2,  title: 'Interimaires',
      icon: "person",  icon2: "expand_more", icon3: "expand_less",
      click: 0,  activeChoice: -1,
      liste: [{
          id: 1,  title: 'Liste sous contrat',  path: '/',
        }, {
          id: 2, title: 'Liste en fin de contrat',  path: '/privacy-policy',
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
      id: 10,  title: 'Aide et Assistance',
      path: 'parametre',  icon: "settings",
    }
  ];

  public internav = [
    {
      id: 1, title: 'Tableau de bord',
      path: 'home', icon: "home",
    },{
      id: 7,  title: 'Objectifs',
      path: 'detailperiodeobjectif',  icon: "grade",
    },{
      id: 7,  title: 'Evaluations',
      path: 'listeevaluation',  icon: "done_all",
    }, {
      id: 5,  title: 'Mes Demandes',
      path: 'demande',  icon: "local_mall",
    },
    {
      id: 3,  title: 'Mon Agence',
      icon: "local_mall",  path: 'monagence',
      click: false,  activeChoice: -1,
    }, {
      id: 4,  title: 'Liste Attestations',
      path: 'attestation',  icon: "bookmark_border",
    },{
      id: 7,  title: 'Alertes',
      path: 'alertes',  icon: "query_builder",
    },{
      id: 8,  title: 'Mon Compte',
      path: 'compte',  icon: "folder_shared",
    },{
      id: 10,  title: 'Aide et Assistance',
      path: 'parametre',  icon: "settings",
    },
  ];

  public drhnavMan = [
    {
      id: 1, title: 'Tableau de bord',
      path: 'home',
      icon: "home",
    },{
      id: 3,  title: 'Interimaires',
      icon: "person",  icon2: "expand_more", icon3: "expand_less",
      liste: [{
          id: 1,  title: 'Liste sous contrat',  path: 'souscontrat',
        }, {
          id: 2, title: 'Liste en fin de contrat',  path: 'fincontrat',
        }, {
          id: 2, title: 'Liste en attente',  path: 'interenattente',
        }, {
          id: 2, title: 'Liste archivé',  path: 'interarchive',
        }
      ]
    }, {
      id: 4,  title: 'Agence d\'interim',
      icon: "local_mall",  icon2: "expand_more",  icon3: "expand_less",
      liste: [
        {
          title: 'Liste Agence',  path: 'listagence',
        },{
          title: 'Ajouter Agence',  path: 'ajouteragence',
        }
      ]
    },{
      id: 5,  title: 'Manager',  icon: "grade",
      icon2: "expand_more",  icon3: "expand_less",
      liste: [  {
          title: 'Liste',  path: 'listmanager',
        }, {
          title: 'Ajouter',  path: 'ajoutermanager',
        },
      ]
    },{
      id: 5,  title: 'Liste Attestations',  icon: "bookmark_border",
      icon2: "expand_more",  icon3: "expand_less",
      liste: [  {
          title: 'Pour tous',  path: 'listeattestation',
        }, {
          title: 'Pour mes Interimaires',  path: 'attestationmesinterimaires',
        },{
          id: 1,  title: 'Ajouter Attestation',  path: 'addattestation',
        },{
          id: 1,  title: 'pas encore d\'attestation',  path: 'lesnonattestation',
        }
      ]
    },{
      id: 5,  title: 'Liste Restauration',
      path: 'restauration',  icon: "restaurant",
    },{
      id: 5,  title: 'Évaluation',  icon: "local_mall",
      icon2: "expand_more",  icon3: "expand_less",
      liste: [  {
          title: 'liste évaluation',  path: 'extractevaluation',
        }, {
          title: 'Pas d\'objectifs',  path: 'pasobjectif',
        },{
          title: 'pas d\'évaluation',  path: 'pasevaluation',
        }
      ]
    }
    ,{
      id: 5,  title: 'Demandes',
      path: 'lesdemande',  icon: "local_mall",
    },{
      id: 11,  title: 'Liste Utilisateur',
      path: 'listeuser',  icon: "person",
    },{
      id: 6,  title: 'Alertes',
      path: 'alertes',  icon: "query_builder",
    }
    ,{
      id: 8,  title: 'Statistiques',  icon: "grade",
      icon2: "expand_more",  icon3: "expand_less",
      liste: [  
        {
          title: 'Par Effectif',  path: 'stateffectif',
        }, {
          title: 'Par Genre',  path: 'statgenre',
        },{
          title: 'Par Agence',  path: 'statagence',
        }, {
          title: 'Par Présence',  path: 'statpresence',
        },{
          title: 'Par Domaine',  path: 'statdomaine',
        },{
          title: 'Par Site',  path: 'statsite',
        },{
          title: 'Par Catégorie',  path: 'statcategorie',
        },{
          title: 'Par Tranche d\'age',  path: 'statage',
        },
      ]
    },{
      id: 11,  title: 'Liste Noire',
      path: 'blacklist',  icon: "person_off",
    },{
      id: 10,  title: 'Aide et Assistance',
      path: 'parametre',  icon: "settings",
    },
    {
      id: 11,  title: 'Paramètres',  icon: "settings",
      icon2: "expand_more",  icon3: "expand_less",
      liste: [  
        {
          title: 'Domaine',  path: 'listedomaine',
        }, {
          title: 'Fonction',  path: 'listefonction',
        },{
          title: 'Site',  path: 'listesite',
        }, {
          title: 'Catégorie',  path: 'listcategorie',
         },
         //{
        //   title: 'Comission',  path: 'ajoutcommission',
        // },
        {
          title: 'Direction',  path: 'listdirection',
        },{
          title: 'Profil',  path: 'listprofil',
        }
        // ,{
        //   title: 'Periode',  path: 'listperiode',
        // }
        ,{
          title: 'Societe',  path: 'listsociete',
        }
        ,{
          title: 'Structure',  path: 'liststructure',
        },
      ]
    }
  ];

  public drhnav = [
    {
      id: 1, title: 'Tableau de bord',
      path: 'home',
      icon: "home",
    },{
      id: 3,  title: 'Interimaires',
      icon: "person",  icon2: "expand_more", icon3: "expand_less",
      liste: [{
          id: 1,  title: 'Liste sous contrat',  path: 'souscontrat',
        }, {
          id: 2, title: 'Liste en fin de contrat',  path: 'fincontrat',
        }, {
          id: 2, title: 'Liste en attente',  path: 'interenattente',
        }, {
          id: 2, title: 'Liste archivé',  path: 'interarchive',
        }
      ]
    }, {
      id: 4,  title: 'Agence d\'interim',
      icon: "local_mall",  icon2: "expand_more",  icon3: "expand_less",
      liste: [
        {
          title: 'Liste Agence',  path: 'listagence',
        },{
          title: 'Ajouter Agence',  path: 'ajouteragence',
        }
      ]
    },{
      id: 5,  title: 'Manager',  icon: "grade",
      icon2: "expand_more",  icon3: "expand_less",
      liste: [  {
          title: 'Liste',  path: 'listmanager',
        }, {
          title: 'Ajouter',  path: 'ajoutermanager',
        },
      ]
    },{
      id: 5,  title: 'Attestations',  icon: "bookmark_border",
      icon2: "expand_more",  icon3: "expand_less",
      liste: [  {
          title: 'Liste des Attestations',  path: 'listeattestation',
        },{
          id: 1,  title: 'pas encore d\'attestation',  path: 'lesnonattestation',
        }
      ]
    },{
      id: 5,  title: 'Liste Restauration',
      path: 'restauration',  icon: "restaurant",
    },{
      id: 5,  title: 'Évaluation',  icon: "local_mall",
      icon2: "expand_more",  icon3: "expand_less",
      liste: [  {
          title: 'liste évaluation',  path: 'extractevaluation',
        }, {
          title: 'Pas d\'objectifs',  path: 'pasobjectif',
        },{
          title: 'pas d\'évaluation',  path: 'pasevaluation',
        }
      ]
    }
    ,{
      id: 5,  title: 'Demandes',
      path: 'lesdemande',  icon: "local_mall",
    },{
      id: 11,  title: 'Liste Utilisateur',
      path: 'listeuser',  icon: "person",
    },{
      id: 6,  title: 'Alertes',
      path: 'alertes',  icon: "query_builder",
    }
    ,{
      id: 8,  title: 'Statistiques',  icon: "grade",
      icon2: "expand_more",  icon3: "expand_less",
      liste: [  
        {
          title: 'Par Effectif',  path: 'stateffectif',
        }, {
          title: 'Par Genre',  path: 'statgenre',
        },{
          title: 'Par Agence',  path: 'statagence',
        }, {
          title: 'Par Présence',  path: 'statpresence',
        },{
          title: 'Par Domaine',  path: 'statdomaine',
        },{
          title: 'Par Site',  path: 'statsite',
        },{
          title: 'Par Catégorie',  path: 'statcategorie',
        },{
          title: 'Par Tranche d\'age',  path: 'statage',
        },
      ]
    },{
      id: 11,  title: 'Liste Noire',
      path: 'blacklist',  icon: "person_off",
    },{
      id: 10,  title: 'Aide et Assistance',
      path: 'parametre',  icon: "settings",
    },
    {
      id: 11,  title: 'Paramètres',  icon: "settings",
      icon2: "expand_more",  icon3: "expand_less",
      liste: [  
        {
          title: 'Domaine',  path: 'listedomaine',
        }, {
          title: 'Fonction',  path: 'listefonction',
        },{
          title: 'Site',  path: 'listesite',
        }, {
          title: 'Catégorie',  path: 'listcategorie',
        },
        //{
        //   title: 'Comission',  path: 'ajoutcommission',
        // },
        {
          title: 'Direction',  path: 'listdirection',
        },{
          title: 'Profil',  path: 'listprofil',
        }
        // ,{
        //   title: 'Periode',  path: 'listperiode',
        // }
        ,{
          title: 'Societe',  path: 'listsociete',
        }
        ,{
          title: 'Structure',  path: 'liststructure',
        },
      ]
    }
  ];

  public agencenav = [
    {
      id: 1, title: 'Tableau de bord',
      path: 'home',
      icon: "home",
    },{
      id: 3,  title: 'Interimaires',
      icon: "person",  icon2: "expand_more", icon3: "expand_less",
      click: 0,  activeChoice: -1,
      liste: [{
        id: 1,  title: 'Liste sous contrat',  path: 'souscontrat',
      }, {
        id: 2, title: 'Liste en fin de contrat',  path: 'fincontrat',
      }, {
        id: 2, title: 'Liste en attente',  path: 'interenattente',
      }, {
        id: 2, title: 'Liste archivé',  path: 'interarchive',
      },{
        id: 4,  title: 'Ajouter',  path: 'addinter',
      },
      ]
    }, {
      id: 4,  title: 'Liste Attestations',
      path: 'attestation',  icon: "bookmark_border",
    },{
      id: 5,  title: 'Demandes',
      path: 'lesdemande',  icon: "local_mall",
    },{
      id: 11,  title: 'Liste Utilisateur',
      path: 'listeuser',  icon: "person",
    },{
      id: 6,  title: 'Alertes',
      path: 'alertes',  icon: "query_builder",
    },{
      id: 8,  title: 'Mon Compte',
      path: 'agence',  icon: "folder_shared",
    },{
      id: 10,  title: 'Aide et Assistance',
      path: 'parametre',  icon: "settings",
    },
  ];
  
  public managernav = [
    {
      id: 1, title: 'Tableau de bord',
      path: 'home', icon: "home",
    }, {
      id: 3,  title: 'Interimaires',
      icon: "person",  icon2: "expand_more", icon3: "expand_less",
      liste: [{
          id: 1,  title: 'Liste sous contrat',  path: 'souscontrat',
        }, {
          id: 2, title: 'Liste en fin de contrat',  path: 'fincontrat',
        }, {
          id: 2, title: 'Liste archivé',  path: 'interarchive',
        }
      ]
    }, {
      id: 3,  title: 'Attestation',
      icon: "bookmark_border",  icon2: "expand_more", icon3: "expand_less",
      liste: [{
          id: 1,  title: 'Ajouter Attestation',  path: 'addattestation',
        }, {
          id: 2, title: 'Liste Attestations',  path: 'listeattestation',
        },
      ]
    },{
      id: 5,  title: 'Demandes',
      path: 'lesdemande',  icon: "local_mall",
    },{
      id: 6,  title: 'Alertes',
      path: 'alertes',  icon: "query_builder",
    }
    ,{
      id: 8,  title: 'Mon Compte',
      path: 'manager',  icon: "folder_shared",
    },{
      id: 10,  title: 'Aide et Assistance',
      path: 'parametre',  icon: "settings",
    },
  ];
  public drhGDInav = [
    {
      id: 1, title: 'Tableau de bord',
      path: 'home',
      icon: "home",
    },{
      id: 3,  title: 'Interimaires',
      icon: "person",  icon2: "expand_more", icon3: "expand_less",
      liste: [{
          id: 1,  title: 'Liste sous contrat',  path: 'souscontrat',
        }, {
          id: 2, title: 'Liste en fin de contrat',  path: 'fincontrat',
        }, {
          id: 2, title: 'Liste en attente',  path: 'interenattente',
        }, {
          id: 2, title: 'Liste archivé',  path: 'interarchive',
        }
      ]
    }, {
      id: 4,  title: 'Agence d\'interim',
      icon: "local_mall",  icon2: "expand_more",  icon3: "expand_less",
      liste: [
        {
          title: 'Liste Agence',  path: 'listagence',
        },{
          title: 'Ajouter Agence',  path: 'ajouteragence',
        }
      ]
    },{
      id: 5,  title: 'Manager',  icon: "grade",
      icon2: "expand_more",  icon3: "expand_less",
    //  click: false,  activeChoice: -1,
      liste: [  {
          title: 'Liste',  path: 'listmanager',
        }, {
          title: 'Ajouter',  path: 'ajoutermanager',
        },
      ]
    },{
      id: 5,  title: 'Attestations',  icon: "bookmark_border",
      icon2: "expand_more",  icon3: "expand_less",
      liste: [  {
          title: 'Liste',  path: 'listeattestation',
        },{
          id: 1,  title: 'pas encore d\'attestation',  path: 'lesnonattestation',
        }
      ]
    },{
      id: 5,  title: 'Évaluation',  icon: "local_mall",
      icon2: "expand_more",  icon3: "expand_less",
      liste: [  {
          title: 'liste évaluation',  path: 'extractevaluation',
        }, {
          title: 'Pas d\'objectifs',  path: 'pasobjectif',
        },{
          title: 'pas d\'évaluation',  path: 'pasevaluation',
        }
      ]
    }
    ,{
      id: 5,  title: 'Demandes',
      path: 'lesdemande',  icon: "local_mall",
    },{
      id: 11,  title: 'Liste Utilisateur',
      path: 'listeuser',  icon: "person",
    },{
      id: 6,  title: 'Alertes',
      path: 'alertes',  icon: "query_builder",
    }
    ,{
      id: 8,  title: 'Statistiques',  icon: "grade",
      icon2: "expand_more",  icon3: "expand_less",
      liste: [  
        {
          title: 'Par Effectif',  path: 'stateffectif',
        }, {
          title: 'Par Genre',  path: 'statgenre',
        },{
          title: 'Par Agence',  path: 'statagence',
        }, {
          title: 'Par Présence',  path: 'statpresence',
        },{
          title: 'Par Domaine',  path: 'statdomaine',
        },{
          title: 'Par Site',  path: 'statsite',
        },{
          title: 'Par Catégorie',  path: 'statcategorie',
        },{
          title: 'Par Tranche d\'age',  path: 'statage',
        },
      ]
    },{
      id: 11,  title: 'Liste Noire',
      path: 'blacklist',  icon: "person_off",
    },{
      id: 10,  title: 'Aide et Assistance',
      path: 'parametre',  icon: "settings",
    },
    {
      id: 11,  title: 'Paramètres',  icon: "settings",
      icon2: "expand_more",  icon3: "expand_less",
      liste: [  
        {
          title: 'Domaine',  path: 'listedomaine',
        }, {
          title: 'Fonction',  path: 'listefonction',
        },{
          title: 'Site',  path: 'listesite',
        }, {
          title: 'Catégorie',  path: 'listcategorie',
        },
        //{
        //   title: 'Comission',  path: 'ajoutcommission',
        // },
        {
          title: 'Direction',  path: 'listdirection',
        },{
          title: 'Profil',  path: 'listprofil',
        }
        // ,{
        //   title: 'Periode',  path: 'listperiode',
        // }
        ,{
          title: 'Societe',  path: 'listsociete',
        }
        ,{
          title: 'Structure',  path: 'liststructure',
        },
      ]
    }
  ];
  public drhGDInavMan = [
    {
      id: 1, title: 'Tableau de bord',
      path: 'home',
      icon: "home",
    },{
      id: 3,  title: 'Interimaires',
      icon: "person",  icon2: "expand_more", icon3: "expand_less",
      liste: [{
          id: 1,  title: 'Liste sous contrat',  path: 'souscontrat',
        }, {
          id: 2, title: 'Liste en fin de contrat',  path: 'fincontrat',
        }, {
          id: 2, title: 'Liste en attente',  path: 'interenattente',
        }, {
          id: 2, title: 'Liste archivé',  path: 'interarchive',
        }
      ]
    }, {
      id: 4,  title: 'Agence d\'interim',
      icon: "local_mall",  icon2: "expand_more",  icon3: "expand_less",
      liste: [
        {
          title: 'Liste Agence',  path: 'listagence',
        },{
          title: 'Ajouter Agence',  path: 'ajouteragence',
        }
      ]
    },{
      id: 5,  title: 'Manager',  icon: "grade",
      icon2: "expand_more",  icon3: "expand_less",
      liste: [  {
          title: 'Liste',  path: 'listmanager',
        }, {
          title: 'Ajouter',  path: 'ajoutermanager',
        },
      ]
    },{
      id: 5,  title: 'Liste Attestations',  icon: "bookmark_border",
      icon2: "expand_more",  icon3: "expand_less",
      liste: [  {
          title: 'Pour tous',  path: 'listeattestation',
        }, {
          title: 'Pour mes Interimaires',  path: 'attestationmesinterimaires',
        },{
          id: 1,  title: 'Ajouter Attestation',  path: 'addattestation',
        },{
          id: 1,  title: 'pas encore d\'attestation',  path: 'lesnonattestation',
        }
      ]
    },{
      id: 5,  title: 'Évaluation',  icon: "local_mall",
      icon2: "expand_more",  icon3: "expand_less",
      liste: [  {
          title: 'liste évaluation',  path: 'extractevaluation',
        }, {
          title: 'Pas d\'objectifs',  path: 'pasobjectif',
        },{
          title: 'pas d\'évaluation',  path: 'pasevaluation',
        }
      ]
    }
    ,{
      id: 5,  title: 'Demandes',
      path: 'lesdemande',  icon: "local_mall",
    },{
      id: 11,  title: 'Liste Utilisateur',
      path: 'listeuser',  icon: "person",
    },{
      id: 6,  title: 'Alertes',
      path: 'alertes',  icon: "query_builder",
    }
    ,{
      id: 8,  title: 'Statistiques',  icon: "grade",
      icon2: "expand_more",  icon3: "expand_less",
      liste: [  
        {
          title: 'Par Effectif',  path: 'stateffectif',
        }, {
          title: 'Par Genre',  path: 'statgenre',
        },{
          title: 'Par Agence',  path: 'statagence',
        }, {
          title: 'Par Présence',  path: 'statpresence',
        },{
          title: 'Par Domaine',  path: 'statdomaine',
        },{
          title: 'Par Site',  path: 'statsite',
        },{
          title: 'Par Catégorie',  path: 'statcategorie',
        },{
          title: 'Par Tranche d\'age',  path: 'statage',
        },
      ]
    },{
      id: 11,  title: 'Liste Noire',
      path: 'blacklist',  icon: "person_off",
    },{
      id: 10,  title: 'Aide et Assistance',
      path: 'parametre',  icon: "settings",
    },
    {
      id: 11,  title: 'Paramètres',  icon: "settings",
      icon2: "expand_more",  icon3: "expand_less",
      liste: [  
        {
          title: 'Domaine',  path: 'listedomaine',
        }, {
          title: 'Fonction',  path: 'listefonction',
        },{
          title: 'Site',  path: 'listesite',
        }, {
          title: 'Catégorie',  path: 'listcategorie',
        },
        //{
        //   title: 'Comission',  path: 'ajoutcommission',
        // },
        {
          title: 'Direction',  path: 'listdirection',
        },{
          title: 'Profil',  path: 'listprofil',
        }
        // ,{
        //   title: 'Periode',  path: 'listperiode',
        // }
        ,{
          title: 'Societe',  path: 'listsociete',
        }
        ,{
          title: 'Structure',  path: 'liststructure',
        },
      ]
    }
  ];
  public drhComnav = [
    {
      id: 1, title: 'Tableau de bord',
      path: 'home',
      icon: "home",
    },{
      id: 5,  title: 'Liste Restauration',
      path: 'restauration',  icon: "restaurant",
    },{
      id: 3,  title: 'Interimaires',
      icon: "person",  icon2: "expand_more", icon3: "expand_less",
      liste: [{
          id: 1,  title: 'Liste sous contrat',  path: 'souscontrat',
        }, {
          id: 2, title: 'Liste en fin de contrat',  path: 'fincontrat',
        }, {
          id: 2, title: 'Liste archivé',  path: 'interarchive',
        }
      ]
    },{
      id: 5,  title: 'Liste Attestations',  icon: "bookmark_border", path: 'listeattestation',
    },{
      id: 5,  title: 'Liste Agence',
      path: 'listagence',  icon: "local_mall",
    }
    ,{
      id: 5,  title: 'Demandes',
      path: 'lesdemande',  icon: "local_mall",
    },{
      id: 8,  title: 'Alertes',
      path: 'alertes',  icon: "query_builder",
    },{
      id: 11,  title: 'Liste Noire',
      path: 'blacklist',  icon: "person_off",
    },{
      id: 10,  title: 'Aide et Assistance',
      path: 'parametre',  icon: "settings",
    }
  ];
  public drhComnavMan = [
    {
      id: 1, title: 'Tableau de bord',
      path: 'home',
      icon: "home",
    },{
      id: 5,  title: 'Liste Restauration',
      path: 'restauration',  icon: "restaurant",
    },{
      id: 3,  title: 'Interimaires',
      icon: "person",  icon2: "expand_more", icon3: "expand_less",
      liste: [{
          id: 1,  title: 'Liste sous contrat',  path: 'souscontrat',
        }, {
          id: 2, title: 'Liste en fin de contrat',  path: 'fincontrat',
        }, {
          id: 2, title: 'Liste archivé',  path: 'interarchive',
        }
      ]
    },{
      id: 5,  title: 'Attestations',  icon: "bookmark_border",
      icon2: "expand_more",  icon3: "expand_less",
      liste: [  {
          title: 'Pour tous',  path: 'listeattestation',
        }, {
          title: 'Pour mes Interimaires',  path: 'attestationmesinterimaires',
        },{
          id: 1,  title: 'Ajouter Attestation',  path: 'addattestation',
        }
      ]
    },{
      id: 5,  title: 'Liste Agence',
      path: 'listagence',  icon: "local_mall",
    }
    ,{
      id: 5,  title: 'Demandes',
      path: 'lesdemande',  icon: "local_mall",
    },{
      id: 8,  title: 'Alertes',
      path: 'alertes',  icon: "query_builder",
    },{
      id: 11,  title: 'Liste Noire',
      path: 'blacklist',  icon: "person_off",
    },{
      id: 10,  title: 'Aide et Assistance',
      path: 'parametre',  icon: "settings",
    }
  ];
  public drhRepnav = [
    {
      id: 1, title: 'Tableau de bord',
      path: 'home',
      icon: "home",
    },{
      id: 2,  title: 'Statistiques',  icon: "grade",
      icon2: "expand_more",  icon3: "expand_less",
    //  click: false,  activeChoice: -1,
      liste: [  
        {
          title: 'Par Effectif',  path: 'stateffectif',
        }, {
          title: 'Par Genre',  path: 'statgenre',
        },{
          title: 'Par Agence',  path: 'statagence',
        }, {
          title: 'Par Présence',  path: 'statpresence',
        },{
          title: 'Par Domaine',  path: 'statdomaine',
        },{
          title: 'Par Site',  path: 'statsite',
        },{
          title: 'Par Catégorie',  path: 'statcategorie',
        },{
          title: 'Par Tranche d\'age',  path: 'statage',
        },
      ]
    },{
      id: 3,  title: 'Interimaires',
      icon: "person",  icon2: "expand_more", icon3: "expand_less",
      liste: [{
          id: 1,  title: 'Liste sous contrat',  path: 'souscontrat',
        }, {
          id: 2, title: 'Liste en fin de contrat',  path: 'fincontrat',
        }, {
          id: 2, title: 'Liste archivé',  path: 'interarchive',
        }
      ]
    },{
      id: 5,  title: 'Liste Attestations',  icon: "bookmark_border",
      path: 'listeattestation'
    }, {
      id: 4,  title: 'Agence d\'interim',
      icon: "local_mall",  icon2: "expand_more",  icon3: "expand_less",
      liste: [
        {
          title: 'Liste Agence',  path: 'listagence',
        }
      ]
    },{
      id: 5,  title: 'Manager',  icon: "grade", path: 'listmanager',
    },{
      id: 5,  title: 'Liste Attestations',  icon: "bookmark_border",
      path: 'listeattestation'
    }
    ,{
      id: 5,  title: 'Demandes',
      path: 'lesdemande',  icon: "local_mall",
    },{
      id: 8,  title: 'Alertes',
      path: 'alertes',  icon: "query_builder",
    }
    ,{
      id: 11,  title: 'Liste Noire',
      path: 'blacklist',  icon: "person_off",
    },{
      id: 10,  title: 'Aide et Assistance',
      path: 'parametre',  icon: "settings",
    }
  ];
  public drhRepnavMan = [
    {
      id: 1, title: 'Tableau de bord',
      path: 'home',
      icon: "home",
    },{
      id: 2,  title: 'Statistiques',  icon: "grade",
      icon2: "expand_more",  icon3: "expand_less",
    //  click: false,  activeChoice: -1,
      liste: [  
        {
          title: 'Par Effectif',  path: 'stateffectif',
        }, {
          title: 'Par Genre',  path: 'statgenre',
        },{
          title: 'Par Agence',  path: 'statagence',
        }, {
          title: 'Par Présence',  path: 'statpresence',
        },{
          title: 'Par Domaine',  path: 'statdomaine',
        },{
          title: 'Par Site',  path: 'statsite',
        },{
          title: 'Par Catégorie',  path: 'statcategorie',
        },{
          title: 'Par Tranche d\'age',  path: 'statage',
        },
      ]
    },{
      id: 3,  title: 'Interimaires',
      icon: "person",  icon2: "expand_more", icon3: "expand_less",
      liste: [{
          id: 1,  title: 'Liste sous contrat',  path: 'souscontrat',
        }, {
          id: 2, title: 'Liste en fin de contrat',  path: 'fincontrat',
        }, {
          id: 2, title: 'Liste archivé',  path: 'interarchive',
        }
      ]
    },{
      id: 5,  title: 'Attestations',  icon: "bookmark_border",
      icon2: "expand_more",  icon3: "expand_less",
      liste: [  {
          title: 'Pour tous',  path: 'listeattestation',
        }, {
          title: 'Pour mes Interimaires',  path: 'attestationmesinterimaires',
        },{
          id: 1,  title: 'Ajouter Attestation',  path: 'addattestation',
        }
      ]
    }, {
      id: 4,  title: 'Agence d\'interim',
      icon: "local_mall",  path: 'listagence'
    },{
      id: 5,  title: 'Manager',  icon: "grade", path: 'listmanager',
    },{
      id: 5,  title: 'Liste Attestations',  icon: "bookmark_border",
      icon2: "expand_more",  icon3: "expand_less",
      liste: [  {
          title: 'Pour tous',  path: 'listeattestation',
        }, {
          title: 'Pour mes Interimaires',  path: 'attestationmesinterimaires',
        },{
          id: 1,  title: 'Ajouter Attestation',  path: 'addattestation',
        }
      ]
    },{
      id: 5,  title: 'liste évaluation',
      path: 'extractevaluation',  icon: "local_mall",
    }
    ,{
      id: 5,  title: 'Demandes',
      path: 'lesdemande',  icon: "local_mall",
    },{
      id: 8,  title: 'Alertes',
      path: 'alertes',  icon: "query_builder",
    }
    ,{
      id: 11,  title: 'Liste Noire',
      path: 'blacklist',  icon: "person_off",
    },{
      id: 10,  title: 'Aide et Assistance',
      path: 'parametre',  icon: "settings",
    }
  ];
  userInfo: any;
  isManager: any;

  constructor() { }

  getMenu() {
    this.userInfo = JSON.parse(localStorage.getItem('currentUser'));
    this.isManager = this.userInfo.data.isManager;
    this.role = localStorage.getItem('user')
    if(this.role == "INT") {
      this.menus = this.internav;
    } else if(this.role == "DRH" && this.isManager == false) {
      this.menus = this.drhnav;
    } else if(this.role == "DRH" && this.isManager == true) {
      this.menus = this.drhnavMan;
    } else if(this.role == "AGN") {
      this.menus = this.agencenav;
    } else if(this.role == "MNG") {
      this.menus = this.managernav;
    } else if(this.role == "ASTDG") {
      this.menus = this.agencenav;
    } else if(this.role == "DRHAG") {
      this.menus = this.agencenav;
    } else if(this.role == "RH_GDI" && this.isManager == false) {
      this.menus = this.drhGDInav;
    } else if(this.role == "RH_REP" && this.isManager == false) {
      this.menus = this.drhRepnav;
    } else if(this.role == "RH_AFS" && this.isManager == false) {
      this.menus = this.drhComnav;
    } else if(this.role == "RH_GDI" && this.isManager == true) {
      this.menus = this.drhGDInavMan;
    } else if(this.role == "RH_REP" && this.isManager == true) {
      this.menus = this.drhRepnavMan;
    } else if(this.role == "RH_AFS" && this.isManager == true) {
      this.menus = this.drhComnavMan;
    } else if(this.role == "RH") {
      this.menus = this.agencenav;
    } else {
      this.menus = this.eventSources
    }
    return this.menus;
  }

  private videos = [
    {
      id: 1,
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      subtitle: "By Google",
      thumb: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
      title: "For Bigger Escape",
      img: "idole2.jpg"
    },
    {
      id: 2,
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      subtitle: "By Google",
      thumb: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",
      title: "For Bigger Fun",
      img: "karma1.jpg"
    },
    {
      id: 3,
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      subtitle: "By Google",
      thumb: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
      title: "For Bigger Blazes",
      img: "karma1.jpg"
    }
  ];

  public getVidoes() {
    return this.videos;
  }
  
}

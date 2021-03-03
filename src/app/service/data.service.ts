import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public data = [
    {
      id: 1,
      prenom: "Amadou Dieye",
      nom: "LEYE",
      poste: "Développeur Web",
      dateDebut: "25/12/2020",
      dateFin: "25/12/2022",
      tmp: "tmp_0254",
      agence: "Set Interim",
      dateNais: "10/12/1992",
      lieuNais: "Mbour",
      genre: "masculin",
      cni: "1 619 1992 2154",
      categorie: "Cadre C1C",
      structure: "Sonatel SA",
      direction: "DST",
      pole: "DD",
      departement: "DASI",
      service: "PMA",
      manager: "Madiagne SYLLA",
      postem: "Chef de Services Production et Maintenance Applicatif",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+ 221 33 824 91 31",
      adresse: "mbour",
      photo: "inter.png",
      matricule: "060210",
      statut: "oui",
      nomInt: "5"
    },
    {
      id: 2,
      prenom: "Aliou",
      nom: "DIOP",
      poste: "Développeur mobile",
      dateDebut: "28/02/2021",
      dateFin: "24/08/2021",
      tmp: "tmp_0844",
      agence: "Interim plus",
      dateNais: "27/03/1997",
      lieuNais: "Pikine",
      genre: "masculin",
      cni: "1 359 1997 2554",
      categorie: "Cadre C1C",
      structure: "Sonatel SA",
      direction: "DST",
      pole: "DD",
      departement: "DASI",
      service: "PMA",
      manager: "Madiagne SYLLA",
      postem: "Chef de Services Production et Maintenance Applicatif",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+ 221 33 824 91 31",
      adresse: "mbour",
      photo: "inter.png",
      matricule: "060210",
      statut: "non",
      nomInt: "4"
    },
    {
      id: 3,
      prenom: "Amadou Dieye",
      nom: "LEYE",
      poste: "Développeur Web",
      dateDebut: "25/12/2020",
      dateFin: "25/03/2021",
      tmp: "tmp_0254",
      agence: "Set Interim",
      dateNais: "10/12/1992",
      postem: "Chef de Services Production et Maintenance Applicatif",
      lieuNais: "Mbour",
      genre: "masculin",
      cni: "1 619 1992 2154",
      categorie: "Cadre C1C",
      structure: "Sonatel SA",
      direction: "DST",
      pole: "DD",
      departement: "DASI",
      service: "PMA",
      manager: "Madiagne SYLLA",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+ 221 33 824 91 31",
      adresse: "mbour",
      photo: "inter.png",
      matricule: "060210",
      statut: "oui",
      nomInt: "5"
    },
    {
      id: 4,
      prenom: "Aliou",
      nom: "DIOP",
      poste: "Développeur mobile",
      dateDebut: "28/02/2021",
      dateFin: "24/08/2021",
      tmp: "tmp_0844",
      agence: "Interim plus",
      dateNais: "27/03/1997",
      lieuNais: "Pikine",
      genre: "masculin",
      cni: "1 359 1997 2554",
      categorie: "Cadre C1C",
      structure: "Sonatel SA",
      direction: "DST",
      pole: "DD",
      departement: "DASI",
      service: "PMA",
      manager: "Madiagne SYLLA",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+ 221 33 824 91 31",
      adresse: "mbour",
      photo: "inter.png",
      matricule: "060210",
      statut: "non",
      postem: "Chef de Services Production et Maintenance Applicatif",
      nomInt: "4"
    },
    {
      id: 5,
      prenom: "Amadou Dieye",
      nom: "LEYE",
      poste: "Développeur Web",
      dateDebut: "25/12/2020",
      dateFin: "25/12/2022",
      tmp: "tmp_0254",
      agence: "Set Interim",
      dateNais: "10/12/1992",
      lieuNais: "Mbour",
      genre: "masculin",
      cni: "1 619 1992 2154",
      categorie: "Cadre C1C",
      structure: "Sonatel SA",
      direction: "DST",
      pole: "DD",
      departement: "DASI",
      service: "PMA",
      manager: "Madiagne SYLLA",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+ 221 33 824 91 31",
      adresse: "mbour",
      photo: "inter.png",
      postem: "Chef de Services Production et Maintenance Applicatif",
      matricule: "060210",
      statut: "non",
      nomInt: "5"
    },
    {
      id: 6,
      prenom: "Aliou",
      nom: "DIOP",
      poste: "Développeur mobile",
      dateDebut: "28/02/2021",
      dateFin: "24/08/2021",
      tmp: "tmp_0844",
      agence: "Interim plus",
      dateNais: "27/03/1997",
      lieuNais: "Pikine",
      genre: "masculin",
      cni: "1 359 1997 2554",
      categorie: "Cadre C1C",
      structure: "Sonatel SA",
      direction: "DST",
      pole: "DD",
      departement: "DASI",
      service: "PMA",
      manager: "Madiagne SYLLA",
      email: "amadou.dieye.leye@orange-sonatel.com",
      postem: "Chef de Services Production et Maintenance Applicatif",
      telephone: "+ 221 33 824 91 31",
      adresse: "mbour",
      photo: "inter.png",
      matricule: "060210",
      statut: "non",
      nomInt: "4"
    },
    {
      id: 7,
      prenom: "Amadou Dieye",
      nom: "LEYE",
      poste: "Développeur Web",
      dateDebut: "25/12/2020",
      dateFin: "25/12/2022",
      tmp: "tmp_0254",
      agence: "Set Interim",
      dateNais: "10/12/1992",
      lieuNais: "Mbour",
      genre: "masculin",
      cni: "1 619 1992 2154",
      categorie: "Cadre C1C",
      structure: "Sonatel SA",
      direction: "DST",
      pole: "DD",
      departement: "DASI",
      service: "PMA",
      manager: "Madiagne SYLLA",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+ 221 33 824 91 31",
      adresse: "mbour",
      photo: "inter.png",
      postem: "Chef de Services Production et Maintenance Applicatif",
      matricule: "060210",
      statut: "oui",
      nomInt: "5"
    },
    {
      id: 8,
      prenom: "Aliou",
      nom: "DIOP",
      poste: "Développeur mobile",
      dateDebut: "28/02/2021",
      dateFin: "24/08/2021",
      tmp: "tmp_0844",
      agence: "Interim plus",
      dateNais: "27/03/1997",
      lieuNais: "Pikine",
      genre: "masculin",
      cni: "1 359 1997 2554",
      categorie: "Cadre C1C",
      structure: "Sonatel SA",
      direction: "DST",
      pole: "DD",
      departement: "DASI",
      service: "PMA",
      manager: "Madiagne SYLLA",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+ 221 33 824 91 31",
      adresse: "mbour",
      photo: "inter.png",
      matricule: "060210",
      nomInt: "4",
      statut: "oui",
      postem: "Chef de Services Production et Maintenance Applicatif",
    },
    {
      id: 9,
      prenom: "Amadou Dieye",
      nom: "LEYE",
      poste: "Développeur Web",
      dateDebut: "25/12/2020",
      dateFin: "25/12/2022",
      tmp: "tmp_0254",
      agence: "Set Interim",
      dateNais: "10/12/1992",
      lieuNais: "Mbour",
      genre: "masculin",
      cni: "1 619 1992 2154",
      categorie: "Cadre C1C",
      structure: "Sonatel SA",
      direction: "DST",
      pole: "DD",
      departement: "DASI",
      service: "PMA",
      manager: "Madiagne SYLLA",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+ 221 33 824 91 31",
      adresse: "mbour",
      photo: "inter.png",
      postem: "Chef de Services Production et Maintenance Applicatif",
      matricule: "060210",
      statut: "oui",
      nomInt: "5"
    },
    {
      id: 10,
      prenom: "Aliou",
      nom: "DIOP",
      poste: "Développeur mobile",
      dateDebut: "28/02/2021",
      dateFin: "24/08/2021",
      tmp: "tmp_0844",
      agence: "Interim plus",
      dateNais: "27/03/1997",
      lieuNais: "Pikine",
      genre: "masculin",
      cni: "1 359 1997 2554",
      categorie: "Cadre C1C",
      structure: "Sonatel SA",
      direction: "DST",
      pole: "DD",
      departement: "DASI",
      service: "PMA",
      manager: "Madiagne SYLLA",
      postem: "Chef de Services Production et Maintenance Applicatif",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+ 221 33 824 91 31",
      adresse: "mbour",
      photo: "inter.png",
      matricule: "060210",
      statut: "oui",
      nomInt: "4"
    },
    {
      id: 11,
      prenom: "Amadou Dieye",
      nom: "LEYE",
      poste: "Développeur Web",
      dateDebut: "25/12/2020",
      dateFin: "25/12/2022",
      tmp: "tmp_0254",
      agence: "Set Interim",
      dateNais: "10/12/1992",
      lieuNais: "Mbour",
      genre: "masculin",
      cni: "1 619 1992 2154",
      categorie: "Cadre C1C",
      structure: "Sonatel SA",
      direction: "DST",
      pole: "DD",
      departement: "DASI",
      service: "PMA",
      manager: "Madiagne SYLLA",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+ 221 33 824 91 31",
      adresse: "mbour",
      photo: "manager.png",
      matricule: "060210",
      statut: "oui",
      postem: "Chef de Services Production et Maintenance Applicatif",
      nomInt: "5"
    },
    {
      id: 12,
      prenom: "Aliou",
      nom: "DIOP",
      poste: "Développeur mobile",
      dateDebut: "28/02/2021",
      dateFin: "24/08/2021",
      tmp: "tmp_0844",
      agence: "Interim plus",
      dateNais: "27/03/1997",
      lieuNais: "Pikine",
      genre: "masculin",
      cni: "1 359 1997 2554",
      categorie: "Cadre C1C",
      structure: "Sonatel SA",
      direction: "DST",
      pole: "DD",
      departement: "DASI",
      service: "PMA",
      manager: "Madiagne SYLLA",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+ 221 33 824 91 31",
      adresse: "mbour",
      photo: "manager.png",
      postem: "Chef de Services Production et Maintenance Applicatif",
      matricule: "060210",
      statut: "oui",
      nomInt: "4"
    },
    {
      id: 13,
      prenom: "Amadou Dieye",
      nom: "LEYE",
      poste: "Développeur Web",
      dateDebut: "25/12/2020",
      dateFin: "25/12/2022",
      tmp: "tmp_0254",
      agence: "Set Interim",
      dateNais: "10/12/1992",
      lieuNais: "Mbour",
      genre: "masculin",
      cni: "1 619 1992 2154",
      categorie: "Cadre C1C",
      structure: "Sonatel SA",
      direction: "DST",
      pole: "DD",
      departement: "DASI",
      service: "PMA",
      manager: "Madiagne SYLLA",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+ 221 33 824 91 31",
      adresse: "mbour",
      photo: "manager.png",
      matricule: "060210",
      statut: "non",
      postem: "Chef de Services Production et Maintenance Applicatif",
      nomInt: "5"
    },
    {
      id: 14,
      prenom: "Aliou",
      nom: "DIOP",
      poste: "Développeur mobile",
      dateDebut: "28/02/2021",
      dateFin: "24/08/2021",
      tmp: "tmp_0844",
      agence: "Interim plus",
      dateNais: "27/03/1997",
      lieuNais: "Pikine",
      genre: "masculin",
      cni: "1 359 1997 2554",
      categorie: "Cadre C1C",
      structure: "Sonatel SA",
      direction: "DST",
      pole: "DD",
      departement: "DASI",
      service: "PMA",
      manager: "Madiagne SYLLA",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+ 221 33 824 91 31",
      postem: "Chef de Services Production et Maintenance Applicatif",
      adresse: "mbour",
      photo: "manager.png",
      matricule: "060210",
      statut: "non",
      nomInt: "4"
    },
    {
      id: 15,
      prenom: "Amadou Dieye",
      nom: "LEYE",
      poste: "Développeur Web",
      dateDebut: "25/12/2020",
      dateFin: "25/12/2022",
      tmp: "tmp_0254",
      agence: "Set Interim",
      dateNais: "10/12/1992",
      lieuNais: "Mbour",
      genre: "masculin",
      cni: "1 619 1992 2154",
      categorie: "Cadre C1C",
      structure: "Sonatel SA",
      direction: "DST",
      pole: "DD",
      departement: "DASI",
      service: "PMA",
      manager: "Madiagne SYLLA",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+ 221 33 824 91 31",
      adresse: "mbour",
      postem: "Chef de Services Production et Maintenance Applicatif",
      photo: "manager.png",
      matricule: "060210",
      statut: "non",
      nomInt: "5"
    },
    {
      id: 16,
      prenom: "Aliou",
      nom: "DIOP",
      poste: "Développeur mobile",
      dateDebut: "28/02/2021",
      dateFin: "24/08/2021",
      tmp: "tmp_0844",
      agence: "Interim plus",
      dateNais: "27/03/1997",
      lieuNais: "Pikine",
      genre: "masculin",
      cni: "1 359 1997 2554",
      categorie: "Cadre C1C",
      structure: "Sonatel SA",
      direction: "DST",
      pole: "DD",
      departement: "DASI",
      service: "PMA",
      manager: "Madiagne SYLLA",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+ 221 33 824 91 31",
      adresse: "mbour",
      photo: "manager.png",
      postem: "Chef de Services Production et Maintenance Applicatif",
      matricule: "060210",
      statut: "non",
      nomInt: "4"
    },
    {
      id: 17,
      prenom: "Amadou Dieye",
      nom: "LEYE",
      poste: "Développeur Web",
      dateDebut: "25/12/2020",
      dateFin: "25/12/2022",
      tmp: "tmp_0254",
      agence: "Set Interim",
      dateNais: "10/12/1992",
      lieuNais: "Mbour",
      genre: "masculin",
      cni: "1 619 1992 2154",
      categorie: "Cadre C1C",
      structure: "Sonatel SA",
      direction: "DST",
      pole: "DD",
      departement: "DASI",
      service: "PMA",
      manager: "Madiagne SYLLA",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+ 221 33 824 91 31",
      postem: "Chef de Services Production et Maintenance Applicatif",
      adresse: "mbour",
      photo: "manager.png",
      matricule: "060210",
      statut: "oui",
      nomInt: "5"
    },
    {
      id: 18,
      prenom: "Aliou",
      nom: "DIOP",
      poste: "Développeur mobile",
      dateDebut: "28/02/2021",
      dateFin: "24/08/2021",
      tmp: "tmp_0844",
      agence: "Interim plus",
      dateNais: "27/03/1997",
      lieuNais: "Pikine",
      genre: "masculin",
      cni: "1 359 1997 2554",
      categorie: "Cadre C1C",
      structure: "Sonatel SA",
      direction: "DST",
      pole: "DD",
      departement: "DASI",
      service: "PMA",
      manager: "Madiagne SYLLA",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+ 221 33 824 91 31",
      adresse: "mbour",
      postem: "Chef de Services Production et Maintenance Applicatif",
      photo: "manager.png",
      matricule: "060210",
      statut: "oui",
      nomInt: "4"
    },
    {
      id: 19,
      prenom: "Amadou Dieye",
      nom: "LEYE",
      poste: "Développeur Web",
      dateDebut: "25/12/2020",
      dateFin: "25/12/2022",
      tmp: "tmp_0254",
      agence: "Set Interim",
      dateNais: "10/12/1992",
      lieuNais: "Mbour",
      genre: "masculin",
      cni: "1 619 1992 2154",
      categorie: "Cadre C1C",
      structure: "Sonatel SA",
      direction: "DST",
      pole: "DD",
      departement: "DASI",
      service: "PMA",
      manager: "Madiagne SYLLA",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+ 221 33 824 91 31",
      adresse: "mbour",
      photo: "manager.png",
      matricule: "060210",
      statut: "non",
      postem: "Chef de Services Production et Maintenance Applicatif",
      nomInt: "5"
    },
    {
      id: 20,
      prenom: "Aliou",
      nom: "DIOP",
      poste: "Développeur mobile",
      dateDebut: "28/02/2021",
      dateFin: "24/08/2021",
      tmp: "tmp_0844",
      agence: "Interim plus",
      dateNais: "27/03/1997",
      lieuNais: "Pikine",
      genre: "masculin",
      cni: "1 359 1997 2554",
      categorie: "Cadre C1C",
      structure: "Sonatel SA",
      direction: "DST",
      pole: "DD",
      departement: "DASI",
      service: "PMA",
      manager: "Madiagne SYLLA",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+ 221 33 824 91 31",
      adresse: "mbour",
      photo: "manager.png",
      postem: "Chef de Services Production et Maintenance Applicatif",
      matricule: "060210",
      statut: "oui",
      nomInt: "4"
    },
  ];

  public diagrammes = [
    {
      id: 1,
      mois: "Janvier",
      finis: 85,
      nouveaux: 105,
      total: 900
    },
    {
      id: 2,
      mois: "Fevrier",
      finis: 95,
      nouveaux: 105,
      total: 385
    },
    {
      id: 3,
      mois: "Mars",
      finis: 85,
      nouveaux: 125,
      total: 596
    },
    {
      id: 4,
      mois: "Avril",
      finis: 105,
      nouveaux: 155,
      total: 386
    },
    {
      id: 5,
      mois: "Mai",
      finis: 25,
      nouveaux: 250,
      total: 606
    },
    {
      id: 6,
      mois: "Juin",
      finis: 99,
      nouveaux: 139,
      total: 408
    },
    {
      id: 7,
      mois: "Juillet",
      finis: 65,
      nouveaux: 117,
      total: 789
    },
    {
      id: 8,
      mois: "Aout",
      finis: 76,
      nouveaux: 312,
      total: 659
    },
    {
      id: 9,
      mois: "Septembre",
      finis: 19,
      nouveaux: 308,
      total: 908
    },
    {
      id: 10,
      mois: "Octobre",
      finis: 58,
      nouveaux: 111,
      total: 608
    },
    {
      id: 11,
      mois: "Noovembre",
      finis: 157,
      nouveaux: 28,
      total: 894
    },
    {
      id: 12,
      mois: "Decembre",
      finis: 17,
      nouveaux: 286,
      total: 789
    },
  ];
  constructor() { }

  public getData() {
    return this.data;
  }

  public getDiagramme() {
    return this.diagrammes;
  }
}

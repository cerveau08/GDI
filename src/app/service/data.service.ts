import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
      dateDebut: "Mon Jan 01 2021 00:00:00 GMT+0000 (Greenwich Mean Time)",
      dateFin: "Mon Apr 03 2021 00:00:00 GMT+0000 (Greenwich Mean Time)",
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
      theme: "Fin de Contrat",
      libele: "Le contrat de Lamine MBODJI fini dans 10 jours.",
      heure: "15h25",
      site: "www.2t-s.com",
      adagen: "Sacré Cœur 3 Pyrotechnie, Immeuble USAID à coté de la Pharmacie Mame Oumy GUEYE",
      manager: "Madiagne SYLLA",
      postem: "Chef de Services Production et Maintenance Applicatif",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+221 33 824 91 31",
      adresse: "mbour",
      photo: "inter.png",
      matricule: "060210",
      statut: false,
      file: "3.pdf",
      agentimg: "oval1.png",
      pathfile: "../assets/doc/3.pdf",
      nomInt: "4"
    },
    {
      id: 2,
      prenom: "Aliou",
      nom: "DIOP",
      poste: "Développeur mobile",
      dateDebut: "Mon Jan 01 2019 00:00:00 GMT+0000 (Greenwich Mean Time)",
      dateFin: "Mon Feb 22 2021 00:00:00 GMT+0000 (Greenwich Mean Time)",
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
      theme: "Fin de Contrat",
      libele: "Le contrat de Lamine MBODJI fini dans 10 jours.",
      heure: "15h25",
      site: "www.2t-s.com",
      adagen: "Sacré Cœur 3 Pyrotechnie, Immeuble USAID à coté de la Pharmacie Mame Oumy GUEYE",
      manager: "Madiagne SYLLA",
      postem: "Chef de Services Production et Maintenance Applicatif",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+221 33 824 91 31",
      adresse: "mbour",
      photo: "inter.png",
      matricule: "060210",
      statut: false,
      file: "1.pdf",
      agentimg: "oval.png",
      pathfile: "../assets/doc/1.pdf",
      nomInt: "4"
    },
    {
      id: 3,
      prenom: "Amadou Dieye",
      nom: "LEYE",
      poste: "Développeur Web",
      dateDebut: "Mon Jan 01 2021 00:00:00 GMT+0000 (Greenwich Mean Time)",
      dateFin: "Mon Dec 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)",
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
      theme: "Fin de Contrat",
      libele: "Le contrat de Lamine MBODJI fini dans 10 jours.",
      heure: "15h25",
      site: "www.2t-s.com",
      adagen: "Sacré Cœur 3 Pyrotechnie, Immeuble USAID à coté de la Pharmacie Mame Oumy GUEYE",
      manager: "Madiagne SYLLA",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+221 33 824 91 31",
      adresse: "mbour",
      photo: "inter.png",
      matricule: "060210",
      statut: false,
      file: "4.pdf",
      agentimg: "oval1.png",
      pathfile: "../assets/doc/4.pdf",
      nomInt: "5"
    },
    {
      id: 4,
      prenom: "Aliou",
      nom: "DIOP",
      poste: "Développeur mobile",
      dateDebut: "Mon Jan 01 2021 00:00:00 GMT+0000 (Greenwich Mean Time)",
      dateFin: "Mon Dec 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)",
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
      theme: "Fin de Contrat",
      libele: "Le contrat de Lamine MBODJI fini dans 10 jours.",
      heure: "15h25",
      site: "www.2t-s.com",
      adagen: "Sacré Cœur 3 Pyrotechnie, Immeuble USAID à coté de la Pharmacie Mame Oumy GUEYE",
      manager: "Madiagne SYLLA",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+221 33 824 91 31",
      adresse: "mbour",
      photo: "inter.png",
      matricule: "060210",
      statut: false,
      file: "5.pdf",
      agentimg: "oval.png",
      pathfile: "../assets/doc/5.pdf",
      postem: "Chef de Services Production et Maintenance Applicatif",
      nomInt: "4"
    },
    {
      id: 5,
      prenom: "Amadou Dieye",
      nom: "LEYE",
      poste: "Développeur Web",
      dateDebut: "Mon Jan 01 2021 00:00:00 GMT+0000 (Greenwich Mean Time)",
      dateFin: "Mon Feb 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)",
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
      theme: "Fin de Contrat",
      libele: "Le contrat de Lamine MBODJI fini dans 10 jours.",
      heure: "15h25",
      site: "www.2t-s.com",
      adagen: "Sacré Cœur 3 Pyrotechnie, Immeuble USAID à coté de la Pharmacie Mame Oumy GUEYE",
      manager: "Madiagne SYLLA",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+221 33 824 91 31",
      adresse: "mbour",
      photo: "inter.png",
      postem: "Chef de Services Production et Maintenance Applicatif",
      matricule: "060210",
      statut: false,
      file: "2.pdf",
      agentimg: "oval1.png",
      pathfile: "../assets/doc/2.pdf",
      nomInt: "5"
    },
    {
      id: 6,
      prenom: "Aliou",
      nom: "DIOP",
      poste: "Développeur mobile",
      dateDebut: "Mon Jan 01 2021 00:00:00 GMT+0000 (Greenwich Mean Time)",
      dateFin: "Mon Mar 31 2021 00:00:00 GMT+0000 (Greenwich Mean Time)",
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
      theme: "Fin de Contrat",
      libele: "Le contrat de Lamine MBODJI fini dans 10 jours.",
      heure: "15h25",
      site: "www.2t-s.com",
      adagen: "Sacré Cœur 3 Pyrotechnie, Immeuble USAID à coté de la Pharmacie Mame Oumy GUEYE",
      manager: "Madiagne SYLLA",
      email: "amadou.dieye.leye@orange-sonatel.com",
      postem: "Chef de Services Production et Maintenance Applicatif",
      telephone: "+221 33 824 91 31",
      adresse: "mbour",
      photo: "inter.png",
      matricule: "060210",
      statut: false,
      file: "1.pdf",
      agentimg: "oval.png",
      pathfile: "../assets/doc/1.pdf",
      nomInt: "4"
    },
    {
      id: 7,
      prenom: "Amadou Dieye",
      nom: "LEYE",
      poste: "Développeur Web",
      dateDebut: "Mon Jan 01 2021 00:00:00 GMT+0000 (Greenwich Mean Time)",
      dateFin: "Mon Dec 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)",
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
      theme: "Fin de Contrat",
      libele: "Le contrat de Lamine MBODJI fini dans 10 jours.",
      heure: "15h25",
      site: "www.2t-s.com",
      adagen: "Sacré Cœur 3 Pyrotechnie, Immeuble USAID à coté de la Pharmacie Mame Oumy GUEYE",
      manager: "Madiagne SYLLA",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+221 33 824 91 31",
      adresse: "mbour",
      photo: "inter.png",
      postem: "Chef de Services Production et Maintenance Applicatif",
      matricule: "060210",
      statut: false,
      file: "3.pdf",
      agentimg: "oval1.png",
      pathfile: "../assets/doc/3.pdf",
      nomInt: "5"
    },
    {
      id: 8,
      prenom: "Aliou",
      nom: "DIOP",
      poste: "Développeur mobile",
      dateDebut: "Mon Jan 01 2021 00:00:00 GMT+0000 (Greenwich Mean Time)",
      dateFin: "Mon Dec 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)",
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
      theme: "Fin de Contrat",
      libele: "Le contrat de Lamine MBODJI fini dans 10 jours.",
      heure: "15h25",
      site: "www.2t-s.com",
      adagen: "Sacré Cœur 3 Pyrotechnie, Immeuble USAID à coté de la Pharmacie Mame Oumy GUEYE",
      manager: "Madiagne SYLLA",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+221 33 824 91 31",
      adresse: "mbour",
      photo: "inter.png",
      matricule: "060210",
      statut: false,
      nomInt: "4",
      file: "1.pdf",
      agentimg: "oval.png",
      pathfile: "../assets/doc/1.pdf",
      postem: "Chef de Services Production et Maintenance Applicatif",
    },
    {
      id: 9,
      prenom: "Amadou Dieye",
      nom: "LEYE",
      poste: "Développeur Web",
      dateDebut: "Mon Jan 01 2021 00:00:00 GMT+0000 (Greenwich Mean Time)",
      dateFin: "Mon Dec 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)",
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
      theme: "Fin de Contrat",
      libele: "Le contrat de Lamine MBODJI fini dans 10 jours.",
      heure: "15h25",
      site: "www.2t-s.com",
      adagen: "Sacré Cœur 3 Pyrotechnie, Immeuble USAID à coté de la Pharmacie Mame Oumy GUEYE",
      manager: "Madiagne SYLLA",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+221 33 824 91 31",
      adresse: "mbour",
      photo: "inter.png",
      postem: "Chef de Services Production et Maintenance Applicatif",
      matricule: "060210",
      statut: false,
      file: "4.pdf",
      agentimg: "oval1.png",
      pathfile: "../assets/doc/4.pdf",
      nomInt: "4"
    },
    {
      id: 10,
      prenom: "Aliou",
      nom: "DIOP",
      poste: "Développeur mobile",
      dateDebut: "Mon Jan 01 2021 00:00:00 GMT+0000 (Greenwich Mean Time)",
      dateFin: "Mon Dec 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)",
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
      theme: "Fin de Contrat",
      libele: "Le contrat de Lamine MBODJI fini dans 10 jours.",
      heure: "15h25",
      site: "www.2t-s.com",
      adagen: "Sacré Cœur 3 Pyrotechnie, Immeuble USAID à coté de la Pharmacie Mame Oumy GUEYE",
      manager: "Madiagne SYLLA",
      postem: "Chef de Services Production et Maintenance Applicatif",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+221 33 824 91 31",
      adresse: "mbour",
      photo: "inter.png",
      matricule: "060210",
      statut: false,
      file: "5.pdf",
      agentimg: "oval.png",
      pathfile: "../assets/doc/5.pdf",
      nomInt: "4"
    },
    {
      id: 11,
      prenom: "Amadou Dieye",
      nom: "LEYE",
      poste: "Développeur Web",
      dateDebut: "Mon Jan 01 2021 00:00:00 GMT+0000 (Greenwich Mean Time)",
      dateFin: "Mon Dec 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)",
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
      theme: "Fin de Contrat",
      libele: "Le contrat de Lamine MBODJI fini dans 10 jours.",
      heure: "15h25",
      site: "www.2t-s.com",
      adagen: "Sacré Cœur 3 Pyrotechnie, Immeuble USAID à coté de la Pharmacie Mame Oumy GUEYE",
      manager: "Madiagne SYLLA",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+221 33 824 91 31",
      adresse: "mbour",
      photo: "manager.png",
      matricule: "060210",
      statut: false,
      nomInt: "4",
      file: "2.pdf",
      agentimg: "oval1.png",
      pathfile: "../assets/doc/2.pdf",
      postem: "Chef de Services Production et Maintenance Applicatif",
    },
    {
      id: 12,
      prenom: "Aliou",
      nom: "DIOP",
      poste: "Développeur mobile",
      dateDebut: "Mon Jan 01 2021 00:00:00 GMT+0000 (Greenwich Mean Time)",
      dateFin: "Mon Dec 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)",
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
      theme: "Fin de Contrat",
      libele: "Le contrat de Lamine MBODJI fini dans 10 jours.",
      heure: "15h25",
      site: "www.2t-s.com",
      adagen: "Sacré Cœur 3 Pyrotechnie, Immeuble USAID à coté de la Pharmacie Mame Oumy GUEYE",
      manager: "Madiagne SYLLA",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+221 33 824 91 31",
      adresse: "mbour",
      photo: "manager.png",
      postem: "Chef de Services Production et Maintenance Applicatif",
      matricule: "060210",
      statut: false,
      file: "5.pdf",
      agentimg: "oval.png",
      pathfile: "../assets/doc/5.pdf",
      nomInt: "4"
    },
    {
      id: 13,
      prenom: "Amadou Dieye",
      nom: "LEYE",
      poste: "Développeur Web",
      dateDebut: "Mon Jan 01 2021 00:00:00 GMT+0000 (Greenwich Mean Time)",
      dateFin: "Mon Dec 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)",
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
      theme: "Fin de Contrat",
      libele: "Le contrat de Lamine MBODJI fini dans 10 jours.",
      heure: "15h25",
      site: "www.2t-s.com",
      adagen: "Sacré Cœur 3 Pyrotechnie, Immeuble USAID à coté de la Pharmacie Mame Oumy GUEYE",
      manager: "Madiagne SYLLA",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+221 33 824 91 31",
      adresse: "mbour",
      photo: "manager.png",
      matricule: "060210",
      statut: false,
      nomInt: "4",
      file: "3.pdf",
      agentimg: "oval1.png",
      pathfile: "../assets/doc/3.pdf",
      postem: "Chef de Services Production et Maintenance Applicatif",
    },
    {
      id: 14,
      prenom: "Aliou",
      nom: "DIOP",
      poste: "Développeur mobile",
      dateDebut: "Mon Jan 01 2021 00:00:00 GMT+0000 (Greenwich Mean Time)",
      dateFin: "Mon Dec 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)",
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
      theme: "Fin de Contrat",
      libele: "Le contrat de Lamine MBODJI fini dans 10 jours.",
      heure: "15h25",
      site: "www.2t-s.com",
      adagen: "Sacré Cœur 3 Pyrotechnie, Immeuble USAID à coté de la Pharmacie Mame Oumy GUEYE",
      manager: "Madiagne SYLLA",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+221 33 824 91 31",
      postem: "Chef de Services Production et Maintenance Applicatif",
      adresse: "mbour",
      photo: "manager.png",
      matricule: "060210",
      statut: false,
      file: "2.pdf",
      agentimg: "oval.png",
      pathfile: "../assets/doc/1.pdf",
      nomInt: "4"
    },
    {
      id: 15,
      prenom: "Amadou Dieye",
      nom: "LEYE",
      poste: "Développeur Web",
      dateDebut: "Mon Jan 01 2021 00:00:00 GMT+0000 (Greenwich Mean Time)",
      dateFin: "Mon Dec 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)",
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
      theme: "Fin de Contrat",
      libele: "Le contrat de Lamine MBODJI fini dans 10 jours.",
      heure: "15h25",
      site: "www.2t-s.com",
      adagen: "Sacré Cœur 3 Pyrotechnie, Immeuble USAID à coté de la Pharmacie Mame Oumy GUEYE",
      manager: "Madiagne SYLLA",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+221 33 824 91 31",
      adresse: "mbour",
      postem: "Chef de Services Production et Maintenance Applicatif",
      photo: "manager.png",
      matricule: "060210",
      statut: false,
      file: "3.pdf",
      agentimg: "oval1.png",
      nomInt: "4"
    },
    {
      id: 16,
      prenom: "Aliou",
      nom: "DIOP",
      poste: "Développeur mobile",
      dateDebut: "Mon Jan 01 2021 00:00:00 GMT+0000 (Greenwich Mean Time)",
      dateFin: "Mon Dec 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)",
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
      theme: "Fin de Contrat",
      libele: "Le contrat de Lamine MBODJI fini dans 10 jours.",
      heure: "15h25",
      site: "www.2t-s.com",
      adagen: "Sacré Cœur 3 Pyrotechnie, Immeuble USAID à coté de la Pharmacie Mame Oumy GUEYE",
      manager: "Madiagne SYLLA",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+221 33 824 91 31",
      adresse: "mbour",
      photo: "manager.png",
      postem: "Chef de Services Production et Maintenance Applicatif",
      matricule: "060210",
      statut: false,
      file: "5.pdf",
      agentimg: "oval.png",
      pathfile: "../assets/doc/1.pdf",
      nomInt: "4"
    },
    {
      id: 17,
      prenom: "Amadou Dieye",
      nom: "LEYE",
      poste: "Développeur Web",
      dateDebut: "Mon Jan 01 2021 00:00:00 GMT+0000 (Greenwich Mean Time)",
      dateFin: "Mon Dec 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)",
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
      theme: "Fin de Contrat",
      libele: "Le contrat de Lamine MBODJI fini dans 10 jours.",
      heure: "15h25",
      site: "www.2t-s.com",
      adagen: "Sacré Cœur 3 Pyrotechnie, Immeuble USAID à coté de la Pharmacie Mame Oumy GUEYE",
      manager: "Madiagne SYLLA",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+221 33 824 91 31",
      postem: "Chef de Services Production et Maintenance Applicatif",
      adresse: "mbour",
      photo: "manager.png",
      matricule: "060210",
      statut: false,
      file: "2.pdf",
      agentimg: "oval1.png",
      nomInt: "4"
    },
    {
      id: 18,
      prenom: "Aliou",
      nom: "DIOP",
      poste: "Développeur mobile",
      dateDebut: "Mon Jan 01 2021 00:00:00 GMT+0000 (Greenwich Mean Time)",
      dateFin: "Mon Dec 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)",
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
      theme: "Fin de Contrat",
      libele: "Le contrat de Lamine MBODJI fini dans 10 jours.",
      heure: "15h25",
      site: "www.2t-s.com",
      adagen: "Sacré Cœur 3 Pyrotechnie, Immeuble USAID à coté de la Pharmacie Mame Oumy GUEYE",
      manager: "Madiagne SYLLA",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+221 33 824 91 31",
      adresse: "mbour",
      postem: "Chef de Services Production et Maintenance Applicatif",
      photo: "manager.png",
      matricule: "060210",
      statut: false,
      file: "5.pdf",
      agentimg: "oval.png",
      pathfile: "../assets/doc/1.pdf",
      nomInt: "4"
    },
    {
      id: 19,
      prenom: "Amadou Dieye",
      nom: "LEYE",
      poste: "Développeur Web",
      dateDebut: "Mon Jan 01 2021 00:00:00 GMT+0000 (Greenwich Mean Time)",
      dateFin: "Mon Dec 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)",
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
      theme: "Fin de Contrat",
      libele: "Le contrat de Lamine MBODJI fini dans 10 jours.",
      heure: "15h25",
      site: "www.2t-s.com",
      adagen: "Sacré Cœur 3 Pyrotechnie, Immeuble USAID à coté de la Pharmacie Mame Oumy GUEYE",
      manager: "Madiagne SYLLA",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+221 33 824 91 31",
      adresse: "mbour",
      photo: "manager.png",
      matricule: "060210",
      statut: false,
      file: "1.pdf",
      agentimg: "oval1.png",
      pathfile: "../assets/doc/1.pdf",
      postem: "Chef de Services Production et Maintenance Applicatif",
      nomInt: "5"
    },
    {
      id: 20,
      prenom: "Aliou",
      nom: "DIOP",
      poste: "Développeur mobile",
      dateDebut: "Mon Jan 01 2021 00:00:00 GMT+0000 (Greenwich Mean Time)",
      dateFin: "Mon Dec 31 2022 00:00:00 GMT+0000 (Greenwich Mean Time)",
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
      theme: "Fin de Contrat",
      libele: "Le contrat de Lamine MBODJI fini dans 10 jours.",
      heure: "15h25",
      site: "www.2t-s.com",
      adagen: "Sacré Cœur 3 Pyrotechnie, Immeuble USAID à coté de la Pharmacie Mame Oumy GUEYE",
      manager: "Madiagne SYLLA",
      email: "amadou.dieye.leye@orange-sonatel.com",
      telephone: "+221 33 824 91 31",
      adresse: "mbour",
      photo: "manager.png",
      postem: "Chef de Services Production et Maintenance Applicatif",
      matricule: "060210",
      statut: false,
      nomInt: "4",
      file: "4.pdf",
      agentimg: "oval.png",
      pathfile: "../assets/doc/1.pdf",
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

  public dataStat = [
    {
      id:1, 
      societe: "SONATEL",
      directions: [
        {
          id: 1,
          direction: "ARQ",
          poles: [
            {
              id: 1,
              pole: "AI",
              departements: [
                {
                  id: 1,
                  departement: "AIGP",
                },{
                  id: 2,
                  departement: "AISEO",
                },{
                  id: 3,
                  departement: "AISUP",
                },{
                  id: 4,
                  departement: "AITN",
                },{
                  id: 5,
                  departement: "COPE",
                },
              ]
            },{
              id: 2,
              pole: "DMI",
              departements: [
                {
                  id: 1,
                  departement: "EPP",
                },{
                  id: 2,
                  departement: "MIB",
                },{
                  id: 3,
                  departement: "MISF",
                },{
                  id: 4,
                  departement: "MITE",
                },
              ]
            },{
              id: 3,
              pole: "PACO",
              departements: [
                null
              ]
            },{
              id: 4,
              pole: "RCI",
              departements: [
                {
                  id: 1,
                  departement: "PACI",
                },{
                  id: 2,
                  departement: "SMAR",
                },
              ]
            },{
              id: 5,
              pole: "SIG",
              departements: [
                null
              ]
            },{
              id: 6,
              pole: "SOM",
              departements: [
                null
              ]
            }
          ]
        },{
          id: 2,
          direction: "DAL",
          poles: [
            {
              id: 1,
              pole: "APPS",
              departements: [
                {
                  id: 1,
                  departement: "CDE",
                },{
                  id: 2,
                  departement: "PPA",
                }
              ]
            },{
              id: 2,
              pole: "GCL",
              departements: [
                {
                  id: 1,
                  departement: "CSC",
                },{
                  id: 2,
                  departement: "GDA",
                },{
                  id: 3,
                  departement: "GDS",
                },{
                  id: 4,
                  departement: "SGD",
                },
              ]
            },{
              id: 3,
              pole: "IMMO & TR",
              departements: [
                {
                  id: 1,
                  departement: "EMI",
                },{
                  id: 2,
                  departement: "ESP",
                },{
                  id: 3,
                  departement: "GPI",
                },{
                  id: 4,
                  departement: "GRE",
                },{
                  id: 5,
                  departement: "TRA",
                },
              ]
            },{
              id: 4,
              pole: "MCG",
              departements: [
                {
                  id: 1,
                  departement: "AB",
                },{
                  id: 2,
                  departement: "AG",
                },{
                  id: 3,
                  departement: "AMCT",
                },
              ]
            },{
              id: 5,
              pole: "SIG",
              departements: [
                {
                  id: 1,
                  departement: "ACR",
                },{
                  id: 2,
                  departement: "FR",
                },{
                  id: 3,
                  departement: "SI",
                },
              ]
            },
          ]
        },{
          id: 3,
          direction: "DCIRE",
          poles: [
            {
              id: 1,
              pole: "CIR",
              departements: [
                {
                  id: 1,
                  departement: "RSE",
                }
              ]
            },{
              id: 2,
              pole: "CORP",
              departements: [
                {
                  id: 1,
                  departement: "CDMS",
                },{
                  id: 2,
                  departement: "INST",
                },
              ]
            },{
              id: 3,
              pole: "FONDATION",
              departements: [
                null
              ]
            },{
              id: 4,
              pole: "REX",
              departements: [
                {
                  id: 1,
                  departement: "RP",
                },{
                  id: 2,
                  departement: "SAN",
                },{
                  id: 3,
                  departement: "SP",
                },
              ]
            },{
              id: 5,
              pole: "RSEP",
              departements: [
                {
                  id: 1,
                  departement: "DD",
                },{
                  id: 2,
                  departement: "ENS",
                },
              ]
            },{
              id: 6,
              pole: "SPP",
              departements: [
                null
              ]
            },
          ]
        },{
          id: 4,
          direction: "DDE",
          poles: [
            {
              id: 1,
              pole: "DCC",
              departements: [
                {
                  id: 1,
                  departement: "MPD",
                },{
                  id: 2,
                  departement: "OSC",
                },{
                  id: 3,
                  departement: "SBD",
                },
              ]
            },{
              id: 2,
              pole: "DDP",
              departements: [
                {
                  id: 1,
                  departement: "DTNE",
                },{
                  id: 2,
                  departement: "PAP",
                },
              ]
            },{
              id: 3,
              pole: "DM",
              departements: [
                {
                  id: 1,
                  departement: "AMA",
                },{
                  id: 2,
                  departement: "SCM",
                },{
                  id: 3,
                  departement: "SFC",
                },{
                  id: 4,
                  departement: "SMO",
                },{
                  id: 5,
                  departement: "SMT",
                },{
                  id: 6,
                  departement: "SRC",
                },
              ]
            },{
              id: 4,
              pole: "DMV",
              departements: [
                null
              ]
            },{
              id: 5,
              pole: "DRC",
              departements: [
                {
                  id: 1,
                  departement: "CCC",
                },{
                  id: 2,
                  departement: "CLF",
                },{
                  id: 3,
                  departement: "CLM",
                },{
                  id: 4,
                  departement: "CPP",
                },{
                  id: 6,
                  departement: "CSTC",
                },{
                  id: 6,
                  departement: "FRE",
                },{
                  id: 7,
                  departement: "PCS",
                },{
                  id: 8,
                  departement: "SCE",
                },{
                  id: 9,
                  departement: "SEG",
                },{
                  id: 10,
                  departement: "SPL",
                },
              ]
            },{
              id: 6,
              pole: "DVE",
              departements: [
                {
                  id: 1,
                  departement: "DDV",
                },{
                  id: 2,
                  departement: "EGO",
                },{
                  id: 3,
                  departement: "FIN",
                },{
                  id: 4,
                  departement: "IND",
                },{
                  id: 6,
                  departement: "OAC",
                },{
                  id: 6,
                  departement: "SDC",
                },{
                  id: 7,
                  departement: "SER",
                }
              ]
            },{
              id: 7,
              pole: "DVPS",
              departements: [
                {
                  id: 1,
                  departement: "DIPT",
                },{
                  id: 2,
                  departement: "S1P",
                },{
                  id: 3,
                  departement: "S2P",
                },
              ]
            },{
              id: 7,
              pole: "TEC",
              departements: [
                {
                  id: 1,
                  departement: "SCA",
                },{
                  id: 2,
                  departement: "SPEC",
                },{
                  id: 3,
                  departement: "STCB",
                },
              ]
            },
          ]
        },{
          id: 5,
          direction: "DFC",
          poles: [
            {
              id: 1,
              pole: "CGBU",
              departements: [
                {
                  id: 1,
                  departement: "CAPEX",
                },{
                  id: 2,
                  departement: "OPEX",
                },
              ]
            },{
              id: 2,
              pole: "CGCS",
              departements: [
                {
                  id: 1,
                  departement: "RAGC",
                },{
                  id: 2,
                  departement: "SFI",
                },
                {
                  id: 1,
                  departement: "SOM",
                },{
                  id: 2,
                  departement: "BUD",
                },
              ]
            },{
              id: 3,
              pole: "CGS",
              departements: [
                {
                  id: 1,
                  departement: "CGCSN",
                },{
                  id: 2,
                  departement: "CGE",
                },{
                  id: 3,
                  departement: "CGGP",
                },{
                  id: 4,
                  departement: "CGW",
                },
              ]
            },{
              id: 4,
              pole: "CRA",
              departements: [
                {
                  id: 1,
                  departement: "FRA",
                },{
                  id: 2,
                  departement: "MACC",
                },{
                  id: 3,
                  departement: "RAG",
                },
              ]
            },{
              id: 5,
              pole: "DCC",
              departements: [
                {
                  id: 1,
                  departement: "SCE-GC",
                },{
                  id: 2,
                  departement: "SCE-VDD",
                },{
                  id: 3,
                  departement: "SCE-VI",
                },{
                  id: 4,
                  departement: "SCE-VRNC",
                },{
                  id: 6,
                  departement: "SCE-VRSE",
                },{
                  id: 6,
                  departement: "SCPO",
                },{
                  id: 7,
                  departement: "SFR",
                },
              ]
            },{
              id: 6,
              pole: "DPC",
              departements: [
                {
                  id: 1,
                  departement: "CAU",
                },{
                  id: 2,
                  departement: "CG",
                },{
                  id: 3,
                  departement: "CGF",
                },{
                  id: 4,
                  departement: "CGM",
                },{
                  id: 6,
                  departement: "COB",
                },{
                  id: 7,
                  departement: "RC",
                },
              ]
            },{
              id: 7,
              pole: "FGI",
              departements: [
                {
                  id: 1,
                  departement: "GIF",
                },{
                  id: 2,
                  departement: "GIM",
                },{
                  id: 3,
                  departement: "SFE",
                },{
                  id: 4,
                  departement: "SFI",
                },
              ]
            },{
              id: 7,
              pole: "FIN",
              departements: [
                {
                  id: 1,
                  departement: "CPF",
                },{
                  id: 2,
                  departement: "RI",
                },{
                  id: 3,
                  departement: "TRE",
                },
              ]
            },{
              id: 8,
              pole: "FISC",
              departements: [
                {
                  id: 1,
                  departement: "SID",
                },{
                  id: 2,
                  departement: "SII",
                },
              ]
            },{
              id: 9,
              pole: "SMP",
              departements: [
                {
                  id: 1,
                  departement: "MPF",
                },{
                  id: 2,
                  departement: "SFO",
                },
              ]
            },
          ]
        },{
          id: 6,
          direction: "DG",
          poles: [
            {
              id: 1,
              pole: "SECU",
              departements: [
                {
                  id: 1,
                  departement: "PPS",
                },{
                  id: 2,
                  departement: "SIT",
                },{
                  id: 3,
                  departement: "SUC",
                },
              ]
            },
          ]
        },{
          id: 7,
          direction: "DGA",
          poles: [
            {
              id: 1,
              pole: "DD",
              departements: [
                {
                  id: 1,
                  departement: "DDO",
                },{
                  id: 2,
                  departement: "DPD",
                  services: [
                    {
                      id: 1,
                      service: "SDM"
                    }
                  ]
                },
              ]
            },{
              id: 2,
              pole: "ECT",
              departements: [
                {
                  id: 1,
                  departement: "SEUC",
                },{
                  id: 2,
                  departement: "PTTM",
                },
                {
                  id: 1,
                  departement: "SEIC",
                },
              ]
            },
          ]
        },
      ]
    }
  ]
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();
  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  public getData() {
    return this.data;
  }
  
  public getDataStatistique() {
    return this.dataStat;
  }  

  
}

import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OthersService {
  public reqUrl = environment.base_url;
  public societe_id: any;
  constructor(private http: HttpClient) { }

// recupere la liste des interimaire sous contrat
  getInterSousContrat(): Observable<any> {
    return this.http.get<any>(this.reqUrl + '/interimSousContrat');
  }
  // recupere la liste des users 
  getUsersAll(): Observable<any> {
    return this.http.get<any>(this.reqUrl + '/users/all');
  }
  // recupere la liste des interimaire fin de contrat
  getInter(): Observable<any> {
    return this.http.get<any>(this.reqUrl + '/interimFinContrat');
  }
  getInterEnAttente(): Observable<any> {
    return this.http.get<any>(this.reqUrl + '/interimEnAttente');
  }
  // recupere la liste des noueveaux recrus
  getNouveauRecrus(): Observable<any> {
    return this.http.get<any>(this.reqUrl + '/interimaires/dernierrecrues?page=1');
  }

  // recupere la liste des manager
  getListManager(): Observable<any> {
    return this.http.get<any>(this.reqUrl + '/managers/list');
  } 
  // details manager
  getDetailsManagerById(id) {
    //const data = {page: page, limit: limit};
    return this.http.get(this.reqUrl + `/manager/${id}`);
  }
  //liste des demandes
  getListDemandes(): Observable<any> {
    return this.http.get<any>(this.reqUrl + '/listeDemandes');
  }
  // recupere la liste des agences
  getListAgence(): Observable<any> {
    return this.http.get<any>(this.reqUrl + '/listeAgence');
  }
   // recupere les details d'une agence
  getOneAgenceById(id: number) {
    return this.http.get(this.reqUrl + `/detailAgence/${id}`);
  }
   // recupere les details d'une agence
   getOneManagerById(id: number) {
    return this.http.get(this.reqUrl + `/lasnotifAgence/${id}`);
  }
  // recupere les lasnotifs d'un interimaire
  getOneInterById(id: number) {
    return this.http.get(this.reqUrl + `/interimaire/${id}`);
  }
 // recupere le liste des attestation
 getListAttest(): Observable<any> {
  return this.http.get<any>(this.reqUrl + '/listeAttestationByMonth');
}
//updateUser(user, id: number): Observable<any> {
  //return this.http.put<any>(`${this.reqUrl}/users/update/${id}`, user);
//}
getAllUser() {
  return this.http.get(`${this.reqUrl}/users/all`);
}
deleteUser(id: number): Observable<any> {
  return this.http.delete<any>(`${this.reqUrl}/users/update/${id}`);
}
addAgence(data) {
    return this.http.post<any>(`${this.reqUrl}/ajoutAgence`, data);
  }
  updateAgence(data:any, id: number): Observable<any> {
    return this.http.post<any>(`${this.reqUrl}/updateAgence/${id}`, data);
  }
  updateInter(data:any, id: number): Observable<any> {
    return this.http.post<any>(`${this.reqUrl}/updateInterimaire/${id}`, data);
  }
  getAgenceById(id: number): Observable<any> {
    return this.http.get<any>(`${this.reqUrl}/lasnotifAgence/${id}`);
  }
  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.reqUrl}/users/${id}`);
  }
  delete(id: string) {
    return this.http.delete(`${this.reqUrl}/users/${id}`)
  }
  addInter(data) {
    return this.http.post<any>(`${this.reqUrl}/interimaire/create`, data);
  }
  renouvellerContrat(data) {
    return this.http.post<any>(`${this.reqUrl}/ajoutContrat`, data);
  }
  reconduireContrat(data) {
    return this.http.post<any>(`${this.reqUrl}/reconduireContrat`, data);
  }
  getListInterFinContrat(id: number): Observable<any> {
    return this.http.get<any>(`${this.reqUrl}/interimFinContrat`);
  }
  

  getAllRegion(){
    return this.http.get(this.reqUrl + '/listeRegions');
  }
  getAllCategorie(){
    return this.http.get(this.reqUrl + '/categories')
  }
  getOneCategorie(id: number){
    return this.http.get(`${this.reqUrl}/detailCategorie/${id}`);
  }
  getAllPoles(id: number){
    return this.http.get(`${this.reqUrl}/poles/${id}`);
  }
  
  getAllDirection(id: number){
    return this.http.get(`${this.reqUrl}/direction/${id}`);
  }
  getListDirection(id: number){
    let data = {societe_id: id}
    return this.http.post(`${this.reqUrl}/listDirection`, data);
  }
  
  getAllService(id: number){
    return this.http.get(`${this.reqUrl}/services/${id}`);
  }
  getAllDepartement(id: number){
    return this.http.get(`${this.reqUrl}/departement/${id}`);
  }
  //delete une agence en l'archivant
  deleteAgence(id: string) {
    return this.http.delete(`${this.reqUrl}/deleteAgence/${id}`);
  }

  getListeNotification(): Observable<any> {
    return this.http.get<any>(this.reqUrl + '/notification/all/');
  }
 
  getListeObjectif(id, page,limit, periode) {
    const data = {page: page, limit: limit, periode: periode};
    return this.http.get(`${this.reqUrl}/listeObjectifs/${id}`, {params: data});
  }

  getListeEvaluation(id, page,limit, isEvaluated) {
    const data = {page: page, limit: limit, isEvaluated: isEvaluated};
    return this.http.get(`${this.reqUrl}/listEvaluations/${id}`, {params: data});
  }

  detailPeriodeObjectif(id: string) {
    return this.http.get(`${this.reqUrl}/detailPerideObjectif/${id}`);
  }

  getPeriodeObjectif(page,limit, isEvaluated, id: number){
    const data = {page: page, limit: limit, isEvaluated: isEvaluated};
    return this.http.get(`${this.reqUrl}/periodeObjectif/${id}`, {params: data});
  }

  addUser(data) {
    return this.http.post<any>(`${this.reqUrl}/users/create`, data);
  }

  
  renouvelerContrat(data) {
    return this.http.post<any>(`${this.reqUrl}/ajoutContrat`, data);
  }
  resetPassword(token, data){
    return this.http.post<any>(`${this.reqUrl}/reset/${token}`, data);
  }
  verifierPassword(data){
    return this.http.post<any>(`${this.reqUrl}/verifiePassword`, data);
  }
  postDemande(data) {
    return this.http.post<any>(`${this.reqUrl}/ajoutDemande`, data);
  }

  pieceFilter(data) {
    return this.http.post<any>(`${this.reqUrl}/interimaireByPiece`, data);
  }

  matriculeFilter(matricule) {
    const data = {matricule: matricule};
    return this.http.post<any>(`${this.reqUrl}/interimaireByMatricule `, data);
  }

  getListMatricule(): Observable<any> {
    return this.http.get<any>(this.reqUrl + '/managers/list');
  }
  getTotalAgenceActifInactif(id: number) {
    return this.http.get(`${this.reqUrl}/statInterimaireAgence/${id}`);
  }
  statInterByYear(an, so){
    const data = {annee: an, societe: so};
    return this.http.get(`${this.reqUrl}/statInterimaireByYear`, {params: data});
  } 
  statTotalInter(annee, societe){
    const data = {annee: annee, societe: societe};
    return this.http.get(`${this.reqUrl}/statInterimaire`, {params: data});
  }

  statInterByMonth(annee) {
    const data = {annee: annee};
    return this.http.get(`${this.reqUrl}/statInterimaireByMonth`, {params: data});
  }
  
  statInterByAgence(){
    return this.http.get(`${this.reqUrl}/statInterimaireByAgence`);
  }
  
  statInterAgence(id: number){
    return this.http.get(`${this.reqUrl}/statInterimaireAgence/${id}`);
  }
  arreterContrat(id: number, data: string){
    return this.http.post(`${this.reqUrl}/arreterContrat/${id}`, data);
  }
  getprofil(): Observable<any> {
    return this.http.get<any>(this.reqUrl + '/profils');
  }
  // recupere les details d'une agence
  getContratById(id: number) {
    return this.http.get(this.reqUrl + `/contrat/${id}`);
  }
  addObjectifs(data, id: number){
    return this.http.post(`${this.reqUrl}/ajoutObjectif/${id}`, data);
  }
  notezObjectif(data:any, id: number): Observable<any> {
    return this.http.post<any>(`${this.reqUrl}/noterObjectif/${id}`, data);
  }
  modifierObjectif(data:any, id: number): Observable<any> {
    return this.http.post<any>(`${this.reqUrl}/updateObjectifs/${id}`, data);
  }
  modifierOneObjectif(data:any, id: number): Observable<any> {
    return this.http.post<any>(`${this.reqUrl}/updateObjectif/${id}`, data);
  }
  addDemande(data){
    return this.http.post(`${this.reqUrl}/ajoutDemande`, data);
  }
  sendResetPassword(data) {
    return this.http.post(`${this.reqUrl}/reinitialisationMotDePass`, data);
  }
  changePassword(data) {
    return this.http.post(`${this.reqUrl}/passwordChange`, data);
  }
  validerInter(id: number, data): Observable<any> {
    return this.http.post<any>(`${this.reqUrl}/validerInterimaire/${id}`, data);
  }
  getTypeDemande(): Observable<any> {
    return this.http.get<any>(this.reqUrl + '/typeDemande');
  }
  addAttestation(data) {
    return this.http.post(`${this.reqUrl}/ajoutAttestation`, data);
  }
  rechercheAvance(data) {
    return this.http.post(`${this.reqUrl}/recherche`, data);
  }
  detailUser(id: number) {
    return this.http.get(`${this.reqUrl}/users/${id}`);
  }
  validerInterimaire(data:any, id: number): Observable<any> {
    return this.http.post<any>(`${this.reqUrl}/validerInterimaire/${id}`, data);
  }
  addemailInterimaire(data:any): Observable<any> {
    return this.http.post<any>(`${this.reqUrl}/ajoutEmailInter`, data);
  }
  bolquerInter(id: number, data:any): Observable<any> {
    return this.http.post<any>(`${this.reqUrl}/block/${id}`, data);
  }
  updateUser(data, id: number){
    return this.http.post<any>(`${this.reqUrl}/users/update/${id}`, data);
  }
  listArchive(){
    return this.http.get<any>(this.reqUrl + '/listArchived');
  }
  bloquerUser(id: number, data:any): Observable<any> {
    return this.http.post<any>(`${this.reqUrl}/users/activeDesactive/${id}`, data);
  }
  blacklist(){
    return this.http.get<any>(this.reqUrl + '/blacklist');
  }
  deleteInterblacklister(id: string){
    return this.http.delete<any>(`${this.reqUrl} + '/interimBlacklist/${id}`);
  }
  addAttestationEnMasse(data:any): Observable<any> {
    return this.http.post<any>(`${this.reqUrl}/ajoutAttestationEnMasse`, data);
  }
  extraireAttestation(data:any): Observable<any> {
    return this.http.post<any>(`${this.reqUrl}/extractionAttestation`, data);
  }
  extraireInterimaire(data:any): Observable<any> {
    return this.http.post<any>(`${this.reqUrl}/extractionInterimaire`, data);
  }
  historiqueInter(id: number){
    return this.http.get<any>(`${this.reqUrl}/histoContratInterimaire/${id}`);
  }
  extraireEvaluation(id: number){
    return this.http.get<any>(`${this.reqUrl}/extracEvaluation/${id}`);
  }
  addDocument(data:any): Observable<any> {
    return this.http.post<any>(`${this.reqUrl}/document/add`, data);
  }
  updateDocument(id, data:any): Observable<any> {
    return this.http.post<any>(`${this.reqUrl}/updateDocument/${id}`, data);
  }
  getTypeDocuments() {
    return this.http.get<any>(`${this.reqUrl}/typeDocuments`);
  }
  getListAttestation() {
    return this.http.get<any>(`${this.reqUrl}/listeAttestation`);
  }
  attestionMesInter(){
    return this.http.get<any>(this.reqUrl + '/attestationMesInterimaires');
  }
  getOneEvaluation(id: number, isEvaluated){
    const data = {isEvaluated: isEvaluated};
    return this.http.get<any>(`${this.reqUrl}/evaluation/${id}`, {params: data});
  }
  evaluer(data:any): Observable<any> {
    return this.http.post<any>(`${this.reqUrl}/notation`, data);
  }
  updateEvaluation(data, id: number){
    return this.http.post<any>(`${this.reqUrl}/updateEvaluation/${id}`, data);
  }
  objectifEvaluation(id_inter: number, id_evaluation){
    return this.http.get<any>(`${this.reqUrl}/objectif/${id_inter}/${id_evaluation}`);
  }
  getStatPresence(): Observable<any> {
    return this.http.get<any>(this.reqUrl + '/statDemande');
  }
  getStatPresenceTab(annee, societe): Observable<any> {
    const data = {annee: annee, societe: societe};
    return this.http.get<any>(`${this.reqUrl}/statDemandeAnnee`, {params: data});
  }

  getLastNotification(): Observable<any> {
    return this.http.get<any>(this.reqUrl + '/latestNotification');
  }
  statInterPourcent(societe){
    const data = {societe: societe};
    return this.http.get<any>(`${this.reqUrl}/statInterimairePourcent`, {params: data});
  }
  statDemandeDirection(id: number){
    return this.http.get<any>(`${this.reqUrl}/statDemandeDirection/${id}`);
  }

  statInterAge(societe, annee){
    const data = {annee: annee, societe: societe};
    return this.http.get<any>(`${this.reqUrl}/statsInterAge`, {params: data});
  }

  statInterCategorie(societe, annee){
    const data = {annee: annee, societe: societe};
    return this.http.get<any>(`${this.reqUrl}/statsInterCategorie`, {params: data});
  }

  statInterCategorieParDirection(societe, annee){
    const data = {annee: annee, societe: societe};
    return this.http.get<any>(`${this.reqUrl}/statsInterCategorieByDirection`, {params: data});
  }

  getInterimaireSousContrat(page, limit, matricule, poste, agence, societe, direction) {
    const data = {page: page, limit: limit, matricule: matricule, poste: poste, agence: agence, societe: societe, direction: direction};
    return this.http.get<any>(this.reqUrl + '/interimSousContrat', {params: data});
  }

  listeAgence(page, limit) {
    const data = {page: page, limit: limit};
    return this.http.get<any>(this.reqUrl + '/listeAgence', {params: data});
  }

  listAttestationFilter(page,limit, mois, annee, reference) {
    const data = {page: page, limit: limit, mois: mois,  annee: annee ,reference: reference};
    return this.http.get<any>(this.reqUrl + '/listeAttestation', {params: data});
  }

  listMesAttestationFilter(page,limit, mois, annee, reference) {
    const data = {page: page, limit: limit, mois: mois,  annee: annee ,reference: reference};
    return this.http.get<any>(this.reqUrl + '/attestationMesInterimaires', {params: data});
  }


  listArchivedFilter(page, limit, admissible, societe) {
    const data = {page: page, limit: limit, admissible: admissible ,societe: societe};
    return this.http.get<any>(this.reqUrl + '/listArchived', {params: data});
  }

  getInterimaireFinContrat(page, limit, matricule, poste, agence, societe, direction) {
    const data = {page: page, limit: limit, matricule: matricule, poste: poste, agence: agence, societe: societe, direction: direction};
    return this.http.get<any>(this.reqUrl + '/interimFinContrat', {params: data});
  }

  getInterimaireEnattente(page, limit, cni, poste, agence, societe, direction) {
    const data = {page: page, limit: limit, cni: cni, poste: poste, agence: agence, societe: societe, direction: direction};
    return this.http.get<any>(this.reqUrl + '/interimEnAttente', {params: data});
  }

  getListedesDemande(page, limit, type, etat) {
    const data = {page: page, limit: limit, type: type, etat: etat};
    return this.http.get<any>(this.reqUrl + '/listeDemandes', {params: data});
  }

  getListeNoire(page, limit, telephone, typePiece, numeroPiece) {
    const data = {page: page, limit: limit, telephone: telephone, typepiece: typePiece, numpiece: numeroPiece};
    return this.http.get<any>(this.reqUrl + '/blacklist', {params: data});
  }

  exportStatInterimByYear(annee) {
    const data = {annee: annee};
    return this.http.get<any>(this.reqUrl + '/ExportStatInterimByYear', {params: data});
  }

  extractionStatistiqueInterim(societe) {
    const data = {societe: societe};
    return this.http.get<any>(this.reqUrl + '/extractionStatistiqueInterim', {params: data});
  }

  extractionStatistiqueGenreInterim(id) {
    return this.http.get<any>(`${this.reqUrl}/ExtractionStatInterimairePourcent/${id}`);
  }

  extractionInterAge(annee, societe){
    const data = {annee: annee, societe: societe};
    return this.http.get<any>(`${this.reqUrl}/extractionsInterAge`, {params: data});
  }

  extractionInterCategorie(annee, societe){
    const data = {annee: annee, societe: societe};
    return this.http.get<any>(`${this.reqUrl}/extractionsInterCategorie`, {params: data});
  }

  statDomaineByYear(an, so){
    const data = {annee: an, societe: so};
    return this.http.get(`${this.reqUrl}/statsInterDomaine`, {params: data});
  } 
  statSiteByYear(an, so){
    const data = {annee: an, societe: so};
    return this.http.get(`${this.reqUrl}/statSite`, {params: data});
  } 

  extractionStatSite(annee, societe){
    const data = {annee: annee, societe: societe};
    return this.http.get<any>(`${this.reqUrl}/extractStatSite`, {params: data});
  }

  // extractionStatSite(annee, societe){
  //   const data = {annee: annee, societe: societe};
  //   return this.http.get<any>(`${this.reqUrl}/extractStatSite`, {params: data});
  // }

  extractionInterCategorieParDirection(annee, societe){
    const data = {annee: annee, societe: societe};
    return this.http.get<any>(`${this.reqUrl}/extractionStatInterimaireByCategorie`, {params: data});
  }

  getOneAttestation(id) {
    return this.http.get<any>(`${this.reqUrl}/detailAttestation/${id}`);
  }

  listeProfil(page, limit) {
    const data = {page: page, limit: limit};
    return this.http.get<any>(this.reqUrl + '/profils', {params: data});
  }
  listeRegions() {
     return this.http.get<any>(this.reqUrl + '/listeRegions');
  }
  interimRestau(page, limit, mois, annee){
    const data = {page: page, limit: limit, mois: mois, annee: annee};
    return this.http.get<any>(this.reqUrl + '/interimRestau', {params: data})
  }
  listeDirections(id: number) {
    return this.http.get<any>(`${this.reqUrl}/direction/${id}`);
  }
 
  extractionListeResto(){
    return this.http.get<any>(`${this.reqUrl}/extractionListeResto`);
  }
  addProfil(data){
    return this.http.post<any>(`${this.reqUrl}/profils`, data);
  }

  updateProfil(id, data){
    return this.http.post<any>(`${this.reqUrl}/profils/update/${id}`, data);
  }

  deleteProfil(id){
    return this.http.post<any>(`${this.reqUrl}/profils/delete/${id}`, null);
  }

  addDirection(data){
    return this.http.post<any>(`${this.reqUrl}/addDirection`, data);
  }
  
  addSite(data){
    return this.http.post<any>(`${this.reqUrl}/addSite`, data);
  }

  listeSite(page, limit, region) {
    const data = {page: page, limit: limit ,region: region};
    return this.http.get<any>(this.reqUrl + '/listeSite', {params: data});
  }

  updateSite(id, data){
    return this.http.post<any>(`${this.reqUrl}/updateSite/${id}`, data);
  }

  updateDirection(data){
    return this.http.post<any>(`${this.reqUrl}/updateDirection`, data);
  }

  deleteDirection(id){
    return this.http.get<any>(`${this.reqUrl}/deleteDirection/${id}`);
  }

  deleteSite(id){
    return this.http.get<any>(`${this.reqUrl}/deleteSite/${id}`);
  }

  addCategorie(data){
    return this.http.post<any>(`${this.reqUrl}/new_categorie`, data);
  }

  listeCategorie() {
    return this.http.get<any>(this.reqUrl + '/categories');
  }
  
  updateCategorie(id, data){
    return this.http.post<any>(`${this.reqUrl}/update_categorie`, data);
  }

  deleteCategorie(id){
    return this.http.get<any>(`${this.reqUrl}/deleteCategorie/${id}`);
  }


  getDomaine() {
    return this.http.get(`${this.reqUrl}/domaines`);
  }

  addDomaine(data){
    return this.http.post<any>(`${this.reqUrl}/domaines`, data);
  }
  
  updateDomaine(id, data){
    return this.http.put<any>(`${this.reqUrl}/domaine/${id}`, data);
  }

  deleteDomaine(id){
    let data = {id: id}
    return this.http.get<any>(`${this.reqUrl}/deleteDomaine`, {params: data});
  }

  getFonctions(): Observable<any> {
    return this.http.get<any>(this.reqUrl + '/fonctions');
  }

  addfonction(data){
    return this.http.post<any>(`${this.reqUrl}/ajoutFonction`, data);
  }
  
  updatefonction(data){
    return this.http.post<any>(`${this.reqUrl}/updateFonction`, data);
  }

  deletefonction(id){
    return this.http.get<any>(`${this.reqUrl}/deleteFonction/${id}`);
  }

  getAllSociete(){
    return this.http.get(this.reqUrl + '/societe/all');
  }

  addSociete(data){
    return this.http.post<any>(`${this.reqUrl}/societe`, data);
  }
  
  updateSociete(id, data){
    return this.http.put<any>(`${this.reqUrl}/societe/${id}`, data);
  }

  deleteSociete(id){
    return this.http.delete<any>(`${this.reqUrl}/deleteSociete/${id}`);
  }


  getAllStructure(page, limit, direction, type) {
    let data = {page: page, limit: limit} 
    let donnee = {direction_id: direction, typeStructure_id: type}
    return this.http.post(`${this.reqUrl}/structure/all`, donnee, {params: data});
  }

  addPeriode(data){
    return this.http.post<any>(`${this.reqUrl}/addPeriode`, data);
  }
  addStructure(data){
    return this.http.post<any>(`${this.reqUrl}/structure/create`, data);
  }
  updateStructure(id, data){
    return this.http.post<any>(`${this.reqUrl}/structure/update/${id}`, data);
  }

  deleteStructure(id){
    return this.http.get<any>(`${this.reqUrl}/structure/delete/${id}`);
  }

  getProfil(){
    return this.http.get<any>(`${this.reqUrl}/profils`);
  }


  statContratInter(id: number, societe_id) {
    let data = {societe_id: societe_id}
    return this.http.get<any>(`${this.reqUrl}/interimaireDashboard/${id}`, {params: data});
  }

  listeInterForAttestation(){
    return this.http.get<any>(`${this.reqUrl}/interimForAttestation`);
  }

  lesNonAttestation(page, limit, mois, dateFin){
    const data = {page: page, limit: limit, mois: mois, dateFin: dateFin};
    return this.http.get<any>(this.reqUrl + '/allInterimForAttestation', {params: data})
  }

  listeInterNonEvaluer(page, limit){
    const data = {page: page, limit: limit};
    return this.http.get<any>(this.reqUrl + '/listeInterNonEvaluer', {params: data})
  }

  listeInterimWithoutObjectif(page, limit){
    const data = {page: page, limit: limit};
    return this.http.get<any>(this.reqUrl + '/listeInterimWithoutObjectif', {params: data})
  }

  relanceEvaluationManager(){
    return this.http.get<any>(this.reqUrl + '/relanceEvaluationManager')
  }

  listAllEvaluations(page, limit, dateDebut, dateFin){
    const data = {page: page, limit: limit, dateDebut: dateDebut, dateFin: dateFin};
    return this.http.get<any>(this.reqUrl + '/listAllEvaluations', {params: data})
  }

  extractEvaluations(dateDebut, dateFin){
    const data = {dateDebut: dateDebut, dateFin: dateFin};
    return this.http.get<any>(this.reqUrl + '/extractionsEvaluations', {params: data})
  }

  lastEvaluationInt(id: number) {
    return this.http.get<any>(`${this.reqUrl}/lastEvaluationInterimaire/${id}`);
  }

  lastAttestationInt(id: number) {
    return this.http.get<any>(`${this.reqUrl}/lastAttestationInterimaire/${id}`);
  }

  searchInfoManager(matricule){
    const data = {matricule: matricule};
    return this.http.get<any>(this.reqUrl + '/searchManager', {params: data})
  }
  commentaireInterimaire(id: number, data:any): Observable<any> {
    return this.http.post<any>(`${this.reqUrl}/updateEvaluationInterimaire/${id}`, data);
  }

  validationAttestation(id, action){
    const data = {action: action};
    return this.http.get<any>(`${this.reqUrl}/validerAttestation/${id}`, {params: data});
  }
}

import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OthersService {
  public reqUrl = environment.base_url;
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
    return this.http.get<any>(this.reqUrl + '/interimFinContrat?page=1&limit=3');
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
getDetailsManagerById(id: number) {
  return this.http.get(this.reqUrl + `/manager/${id}`);
}
//liste des demandes
  getListDemandes(): Observable<any> {
    return this.http.get<any>(this.reqUrl + '/listeDemandes');
  }
  // recupere la liste des agences
  getListAgence(): Observable<any> {
    return this.http.get<any>(this.reqUrl + '/listeAgence?page=1');
  }
   // recupere les details d'une agence
   getOneAgenceById(id: number) {
    return this.http.get(this.reqUrl + `/detailAgence/${id}`);
  }
   // recupere les details d'une agence
   getOneManagerById(id: number) {
    return this.http.get(this.reqUrl + `/detailAgence/${id}`);
  }
  // recupere les details d'un interimaire
  getOneInterById(id: number) {
    return this.http.get(this.reqUrl + `/interimaire/${id}`);
  }
 // recupere le liste des attestation
 getListAttest(): Observable<any> {
  return this.http.get<any>(this.reqUrl + '/listeAttestationByMonth');
}
updateUser(user, id: number): Observable<any> {
  return this.http.put<any>(`${this.reqUrl}/users/update/${id}`, user);
}
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
    return this.http.get<any>(`${this.reqUrl}/detailAgence/${id}`);
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
  getListInterFinContrat(id: number): Observable<any> {
    return this.http.get<any>(`${this.reqUrl}/interimFinContrat?page=1`);
  }
  getAllSociete(){
    return this.http.get(this.reqUrl + '/societe/all');
  }
  getAllCategorie(){
    return this.http.get(this.reqUrl + '/categories')
  }
  getAllPoles(id: number){
    return this.http.get(`${this.reqUrl}/poles/${id}`);
  }
  getAllDirection(id: number){
    return this.http.get(`${this.reqUrl}/direction/${id}`);
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
 
  getListeObjectif(id: number){
    return this.http.get(`${this.reqUrl}/listeObjectifs/${id}`);
  }
  addUser(data) {
    return this.http.post<any>(`${this.reqUrl}/users/create`, data);
  }
  renouvelerContrat(data) {
    return this.http.post<any>(`${this.reqUrl}/ajoutContrat`, data);
  }
  getAllStructure() {
    return this.http.get(`${this.reqUrl}/structure/all`);
  }
  resetPassword(data){
    return this.http.post<any>(`${this.reqUrl}/changePassword`, data);
  }
  verifierPassword(data){
    return this.http.post<any>(`${this.reqUrl}/verifiePassword`, data);
  }
  getDomaine() {
    return this.http.get(`${this.reqUrl}/domaines`);
  }
  postDemande(data) {
    return this.http.post<any>(`${this.reqUrl}/ajoutDemande`, data);
  }

  pieceFilter(data) {
    return this.http.post<any>(`${this.reqUrl}/interimaireByPiece`, data);
  }

  getListMatricule(): Observable<any> {
    return this.http.get<any>(this.reqUrl + '/managers/list');
  }
  getTotalAgenceActifInactif(id: number) {
    return this.http.get(`${this.reqUrl}/statInterimaireAgence/${id}`);
  }
}

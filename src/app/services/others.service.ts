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
    return this.http.get<any>(this.reqUrl + '/interimaires/listeInterimParContrat');
  }
  // recupere la liste des interimaire sous contrat
  getUsersAll(): Observable<any> {
    return this.http.get<any>(this.reqUrl + '/users/all');
  }
// recupere la liste des interimaire fin de contrat
  getInterFinContrat(): Observable<any> {
    return this.http.get<any>(this.reqUrl + '/listeInterimParContrat');
  }

  // recupere la liste des manager
  getListManager(): Observable<any> {
    return this.http.get<any>(this.reqUrl + '/managers/list');
  }
  getListDemandes(): Observable<any> {
    return this.http.get<any>(this.reqUrl + '/listeDemandes');
  }

  // recupere la liste des agences
  getListAgence(): Observable<any> {
    return this.http.get<any>(this.reqUrl + '/listeAgence');
  }
   // recupere les details d'une agence
  getAgenceId(id: any): Observable<any> {
    return this.http.get<any>(this.reqUrl + '/detailAgence', id);
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
  updateAgence(user, id: number): Observable<any> {
    return this.http.put<any>(`${this.reqUrl}/updateAgence/${id}`, user);
  }
  getAgenceById(id: number): Observable<any> {
    return this.http.get<any>(`${this.reqUrl}/detailAgence/${id}`);
  }
  delete(id: string) {
    return this.http.delete(`${this.reqUrl}/users/${id}`)
  }
}

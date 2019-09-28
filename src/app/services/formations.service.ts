import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Formation } from './../business-objects/formation';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const pathBack = 'http://localhost:4000/api/';

@Injectable({
  providedIn: 'root'
})


export class FormationsService {
  constructor(private http: HttpClient) { }

  getFormations() {
    return this.http.get<Formation[]>('http://localhost:4000/api/formations');
  }

  getFormation(id: string) {
    return this.http.get<Formation>(`http://localhost:4000/api/formations/${id}`);
  }

  getFormationByCategorie(id: number) {
    return this.http.get<Formation>(`http://localhost:4000/api/formations/categorie/${id}`);
  }
  /**
   * Create Formation
   * @param request 
   */
  addFormation(request): Observable<any> {
    return this.http.post<any>(pathBack + 'formations', JSON.stringify(request), {
      headers: new HttpHeaders()
          .set('Content-Type', 'application/json'),
      observe: 'response'
  }).pipe(
      tap(resp => setTimeout(() => {  console.log('header :::: ', resp.headers) }, 3000))
      // map(this.extractData)
    );
  }
  /**
   * Update Formation
   * @param request 
   */
  updateFormation(id, request): Observable<any> {
    return this.http.put<any>(`${pathBack}formations/${id}`, JSON.stringify(request), {
      headers: new HttpHeaders()
          .set('Content-Type', 'application/json'),
      observe: 'response'
  }).pipe(
      tap(resp => setTimeout(() => {  console.log('header :::: ', resp.headers) }, 3000))
      // map(this.extractData)
    );
  }

  deleteFormation(id): Observable<any> {
    return this.http.delete<any>(`${pathBack}formations/${id}`, {
      headers: new HttpHeaders()
          .set('Content-Type', 'application/json'),
      observe: 'response'
  }).pipe(
      tap(resp => setTimeout(() => {  console.log('header :::: ', resp.headers) }, 3000))
      // map(this.extractData)
    );
  }
}

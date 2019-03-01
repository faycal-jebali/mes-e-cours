import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Formation } from './../business-objects/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationsService {
  constructor(private http: HttpClient) { }

  getFormations() {
    return this.http.get<Formation[]>('http://localhost:4000/api/formations');
  }

  getFormation(id: number) {
    return this.http.get<Formation>(`http://localhost:4000/api/formation/${id}`);
  }

  getFormationByCategorie(id: number) {
    return this.http.get<Formation>(`http://localhost:4000/api/formations/categorie/${id}`);
  }
}

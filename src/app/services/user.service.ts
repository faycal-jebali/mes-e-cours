import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './../business-objects/user';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


const pathBack = 'http://localhost:4000/api/';
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjIsImlhdCI6MTU1MjI1Nzc4NCwiZXhwIjoxNTUyMjY0OTg0fQ.rGVX1DQYtiQPDVhWW6nJT6JhL9Lk7fYC5OziJLsb35w';
const acces_token = localStorage.getItem('access_token');
console.log('acces_tocken : ', acces_token);
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': `Bearer ${acces_token}`,
    observe: 'response' 
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>('http://localhost:4000/api/mock/users');
  }
  getUser(id) {
    return this.http.get<User[]>(`http://localhost:4000/api/users/${id}`);
  }
  // attachTraining(id) {
  //   return this.http.put<User[]>(`http://localhost:4000/api/attach/${id}`);
  // }

   /**
   * Attach Formation To Me
   * @param request 
   */
  attachTraining(request): Observable<any> {
    return this.http.put<any>(`${pathBack}attach`, JSON.stringify(request), {
      headers: new HttpHeaders()
          .set('Content-Type', 'application/json'),
      observe: 'response'
  }).pipe(
      tap(resp => setTimeout(() => {  console.log('header :::: ', resp.headers) }, 3000))
      // map(this.extractData)
    );
  }

  getCurrentUser(id) {
    return this.http.get<User>(`http://localhost:4000/api/currentUser/${id}`);
  }
  getAllUsers() {
    return this.http.get<User[]>('http://localhost:4000/api/users');
  }

  newUser(request): Observable<any> {
    return this.http.post<any>(pathBack + 'users', JSON.stringify(request), {
      headers: new HttpHeaders()
          .set('Content-Type', 'application/json'),
      observe: 'response'
  }).pipe(
      tap(resp => setTimeout(() => {  console.log('header :::: ', resp.headers) }, 3000))
      // map(this.extractData)
    );
  }

  updateUser(id, request): Observable<any> {
    return this.http.put<any>(`${pathBack}users/${id}`, JSON.stringify(request), {
      headers: new HttpHeaders()
          .set('Content-Type', 'application/json'),
      observe: 'response'
  }).pipe(
      tap(resp => setTimeout(() => {  console.log('header :::: ', resp.headers) }, 3000))
      // map(this.extractData)
    );
  }

  deleteUser(id): Observable<any> {
    return this.http.delete<any>(`${pathBack}users/${id}`, {
      headers: new HttpHeaders()
          .set('Content-Type', 'application/json'),
      observe: 'response'
  }).pipe(
      tap(resp => setTimeout(() => {  console.log('header :::: ', resp.headers) }, 3000))
      // map(this.extractData)
    );
  }
}

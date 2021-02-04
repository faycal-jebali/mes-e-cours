import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { User } from "./../business-objects/user";

const pathBack = "http://localhost:5100/api";

const acces_token = localStorage.getItem("access_token");
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: `Bearer ${acces_token}`,
    observe: "response",
  }),
};

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(id) {
    return this.http.get<User[]>(`${pathBack}/users/${id}`, httpOptions);
  }
  // attachTraining(id) {
  //   return this.http.put<User[]>(`http://localhost:5100/api/attach/${id}`);
  // }

  /**
   * Attach Course To Me
   * @param request
   */
  attachTraining(request): Observable<any> {
    return this.http.put<any>(
      `${pathBack}/attach`,
      JSON.stringify(request),
      httpOptions
    );
  }

  getCurrentUser(id) {
    return this.http.get<User>(`${pathBack}/currentUser/${id}`, httpOptions);
  }

  getAllUsers() {
    console.log("get all users");
    return this.http.get<User[]>(`${pathBack}/users`, httpOptions);
  }

  newUser(request): Observable<any> {
    return this.http.post<any>(
      `${pathBack}/users`,
      JSON.stringify(request),
      httpOptions
    );
  }

  updateUser(id, request): Observable<any> {
    return this.http.put<any>(
      `${pathBack}users/${id}`,
      JSON.stringify(request),
      httpOptions
    );
  }

  deleteUser(id): Observable<any> {
    return this.http.delete<any>(`${pathBack}users/${id}`, httpOptions);
  }
}

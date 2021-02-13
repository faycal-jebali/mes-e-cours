import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

const pathBack = "http://localhost:5100/api";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  currentUser = new BehaviorSubject({});

  constructor(private http: HttpClient) {
    const current_user = localStorage.getItem("current_user");
    if (current_user) {
      this.currentUser.next(JSON.parse(current_user));
      console.log("current_user :: ", JSON.parse(current_user)._id);
    }
  }

  public getToken(): string {
    return localStorage.getItem("access_token");
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http
      .post<{ token: string; userData: string }>(`${pathBack}/auth`, {
        username: username,
        password: password,
      })
      .pipe(
        map((result) => {
          console.log("result :: ", result);
          localStorage.setItem("access_token", result.token);
          localStorage.setItem("current_user", JSON.stringify(result.userData));
          this.currentUser.next(result.userData);
          return true;
        })
      );
  }

  logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("current_user");
    return false;
  }

  public get loggedIn(): boolean {
    return this.getToken() !== null;
  }

  public getCurrentUser(): Object {
    return JSON.parse(localStorage.getItem("current_user"));
  }
}

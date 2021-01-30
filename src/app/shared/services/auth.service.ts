import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { UserService } from "./user.service";

@Injectable()
export class AuthService {
  currentUser = new BehaviorSubject({});
  constructor(private http: HttpClient, private userService: UserService) {
    const current_user = localStorage.getItem("current_user");
    if (current_user) {
      this.currentUser.next(JSON.parse(current_user));
      console.log("current_user :: ", JSON.parse(current_user)._id);
    }
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http
      .post<{ token: string; userData: string }>(
        "http://localhost:5100/api/auth",
        { username: username, password: password }
      )
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
    return localStorage.getItem("access_token") !== null;
  }
}

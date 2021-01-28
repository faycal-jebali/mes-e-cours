import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Category } from "./../business-objects/category";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { ConfigurationApp } from "./../config/config";

// const pathBack = ConfigurationApp.pathBack;

const pathBack = "http://localhost:4000/api/";
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
export class CategoryService {
  constructor(private http: HttpClient) {}
  getCategory(id) {
    return this.http.get<Category[]>(
      `http://localhost:4000/api/categories/${id}`
    );
  }
  getCategories() {
    return this.http.get<Category[]>("http://localhost:4000/api/categories");
  }

  newCategory(request): Observable<any> {
    return this.http
      .post<any>(pathBack + "categories", JSON.stringify(request), {
        headers: new HttpHeaders().set("Content-Type", "application/json"),
        observe: "response",
      })
      .pipe(
        tap((resp) =>
          setTimeout(() => {
            console.log("header :::: ", resp.headers);
          }, 3000)
        )
      );
  }

  updateCategory(id, request): Observable<any> {
    return this.http
      .put<any>(`${pathBack}categories/${id}`, JSON.stringify(request), {
        headers: new HttpHeaders().set("Content-Type", "application/json"),
        observe: "response",
      })
      .pipe(
        tap((resp) =>
          setTimeout(() => {
            console.log("header :::: ", resp.headers);
          }, 3000)
        )
      );
  }

  deleteCategory(id): Observable<any> {
    return this.http
      .delete<any>(`${pathBack}categories/${id}`, {
        headers: new HttpHeaders().set("Content-Type", "application/json"),
        observe: "response",
      })
      .pipe(
        tap((resp) =>
          setTimeout(() => {
            console.log("header :::: ", resp.headers);
          }, 3000)
        )
      );
  }
}

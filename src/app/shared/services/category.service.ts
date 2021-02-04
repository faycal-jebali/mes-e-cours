import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Category } from "./../business-objects/category";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { ConfigurationApp } from "./../config/config";

// const pathBack = ConfigurationApp.pathBack;

const pathBack = "http://localhost:5100/api";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
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
      `${pathBack}/categories/${id}`,
      httpOptions
    );
  }
  getCategories() {
    return this.http.get<Category[]>(`${pathBack}/categories`, httpOptions);
  }

  newCategory(request): Observable<any> {
    return this.http.post<any>(
      `${pathBack}/categories`,
      JSON.stringify(request),
      httpOptions
    );
  }

  updateCategory(id, request): Observable<any> {
    return this.http.put<any>(
      `${pathBack}/categories/${id}`,
      JSON.stringify(request),
      httpOptions
    );
  }

  deleteCategory(id): Observable<any> {
    return this.http.delete<any>(`${pathBack}/categories/${id}`, httpOptions);
  }
}

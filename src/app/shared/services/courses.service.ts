import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

import { Course } from "../business-objects/course";

const pathBack = "http://localhost:5100/api/";

@Injectable({
  providedIn: "root",
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  getCourses() {
    return this.http.get<Course[]>("http://localhost:5100/api/courses");
  }

  getCourse(id: string) {
    return this.http.get<Course>(`http://localhost:5100/api/courses/${id}`);
  }

  getCourseByCategorie(id: number) {
    return this.http.get<Course>(
      `http://localhost:5100/api/courses/categorie/${id}`
    );
  }
  /**
   * Create Course
   * @param request
   */
  addCourse(request): Observable<any> {
    return this.http
      .post<any>(pathBack + "courses", JSON.stringify(request), {
        headers: new HttpHeaders().set("Content-Type", "application/json"),
        observe: "response",
      })
      .pipe(
        tap((resp) =>
          setTimeout(() => {
            console.log("header :::: ", resp.headers);
          }, 3000)
        )
        // map(this.extractData)
      );
  }
  /**
   * Update Course
   * @param request
   */
  updateCourse(id, request): Observable<any> {
    return this.http
      .put<any>(`${pathBack}courses/${id}`, JSON.stringify(request), {
        headers: new HttpHeaders().set("Content-Type", "application/json"),
        observe: "response",
      })
      .pipe(
        tap((resp) =>
          setTimeout(() => {
            console.log("header :::: ", resp.headers);
          }, 3000)
        )
        // map(this.extractData)
      );
  }

  deleteCourse(id): Observable<any> {
    return this.http
      .delete<any>(`${pathBack}courses/${id}`, {
        headers: new HttpHeaders().set("Content-Type", "application/json"),
        observe: "response",
      })
      .pipe(
        tap((resp) =>
          setTimeout(() => {
            console.log("header :::: ", resp.headers);
          }, 3000)
        )
        // map(this.extractData)
      );
  }
}

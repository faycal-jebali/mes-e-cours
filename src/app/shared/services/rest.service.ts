import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, of, empty } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

const pathBack = "http://localhost:5100/api/";
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjIsImlhdCI6MTU1MjI1Nzc4NCwiZXhwIjoxNTUyMjY0OTg0fQ.rGVX1DQYtiQPDVhWW6nJT6JhL9Lk7fYC5OziJLsb35w';
const acces_token = localStorage.getItem("access_token");
console.log("acces_tocken : ", acces_token);
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
export class RestService {
  // constructor(private http: HttpClient) {}
  // getProducts(): Observable<any> {
  //   return this.http.get(pathBack + "products").pipe(map(this.extractData));
  // }
  // getProduct(id): Observable<any> {
  //   return this.http
  //     .get(pathBack + "products/" + id)
  //     .pipe(map(this.extractData));
  // }
  // addCourse2(product): Observable<any> {
  //   console.log(product);
  //   return this.http
  //     .post<any>(pathBack + "products", JSON.stringify(product), httpOptions)
  //     .pipe(
  //       tap((product) => console.log(`added product w/ id=${product._id}`)),
  //       catchError(this.handleError<any>("addCourse"))
  //     );
  // }
  // private extractData(res: Response) {
  //   let body = res;
  //   console.log("ExtratData body : ", body);
  //   console.log("ExtratData Location : ", res.headers);
  //   return body || {};
  // }
  // updateProduct(id, product): Observable<any> {
  //   return this.http
  //     .put(pathBack + "products/" + id, JSON.stringify(product), httpOptions)
  //     .pipe(
  //       tap((_) => console.log(`updated product id=${id}`)),
  //       catchError(this.handleError<any>("updateProduct"))
  //     );
  // }
  // deleteProduct(id): Observable<any> {
  //   return this.http.delete<any>(pathBack + "products/" + id, httpOptions).pipe(
  //     tap((_) => console.log(`deleted product id=${id}`)),
  //     catchError(this.handleError<any>("deleteProduct"))
  //   );
  // }
  // private handleError<T>(operation = "operation", result?: T) {
  //   return (error: any): Observable<T> => {
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead
  //     // TODO: better job of transforming error for user consumption
  //     console.log(`${operation} failed: ${error.message}`);
  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }
}

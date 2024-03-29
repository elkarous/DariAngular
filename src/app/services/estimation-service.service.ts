import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { House } from '../model/house';
import { Unitprice } from '../model/unitprice';

@Injectable({
  providedIn: 'root'
})
export class EstimationServiceService {
  private apiServer = "http://localhost:8081/dari/estimation/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http :HttpClient) { }

  create(unitprice:Unitprice): Observable<Unitprice> {
    return this.http.post<Unitprice>(this.apiServer + 'addunitprice', this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  } 
  update( unitprice:Unitprice): Observable<Unitprice> {
    return this.http.put<Unitprice>(this.apiServer + 'updateunitprice' , this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  delete(id: number){
    return this.http.delete<Unitprice>(this.apiServer + 'deleteunitprice/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  estimation (house:House) {
    return this.http.post(this.apiServer + 'estimation', this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  } 
  estimationWithEmail (house:House, email:string) {
    return this.http.post(this.apiServer + 'estimationWithMail/'+email, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  } 

  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}

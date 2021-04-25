import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import { Bank } from '../model/bank';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BankOffres } from '../model/bankOffres';

@Injectable({
  providedIn: 'root'
})
export class BankServiceService {
  private apiServer = "http://localhost:8081/dari/bank/";
  bank!: Bank;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http :HttpClient) { }

  getAll(): Observable<Bank[]> {
    return this.http.get<Bank[]>(this.apiServer + 'getAllBanks') .pipe(
      catchError(this.errorHandler))
   
  }
  create(): Observable<Bank> {
    return this.http.post<Bank>(this.apiServer + 'addBank', this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getByName(): Observable<Bank> {
    return this.http.post<Bank>(this.apiServer + 'getBankByName', this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  

  update( bank:any): Observable<Bank> {
    return this.http.put<Bank>(this.apiServer + 'updateBank' , this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id: number){
    return this.http.delete<Bank>(this.apiServer + 'deleteBank/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getBankOffreByName(): Observable<BankOffres[]> {
    return this.http.post<BankOffres[]>(this.apiServer + 'getBankOffreByname', this.httpOptions)
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





  


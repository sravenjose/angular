import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {  Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { catchError ,map} from 'rxjs/operators'

 
const endpoint = 'http://localhost:3000';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestuserService {

  responseStatus: any;
  
  constructor(private http: HttpClient,private router:Router) { }

  login(lg): Observable<any> {
    console.log(lg)
    return this.http.post<any>(endpoint + '/users/login', lg ,httpOptions )
      .pipe(map((res) => {
        
        return this.responseStatus=res.status
      }));
      // .pipe(catchError(this.handleError<any>('login')));
  }
  
  register(user): Observable<any> {
    console.log(user);
    return this.http.post<any>(endpoint + '/users', user, httpOptions)
    .pipe(catchError(this.handleError<any>('addUser')));
  }
  
  updateUser(user): Observable<any> {
    return this.http.put<any>(endpoint + `/users`, user, httpOptions).
    pipe(catchError(this.handleError<any>('updateUser')));
  }
  
  deleteUser (name): Observable<any> {
    return this.http.delete<any>(endpoint + `/users/${name}`).
    pipe(catchError((error:HttpErrorResponse)=>{
     return [{ status: error }]
    }));
    
  }

  logout(): void {
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('token');
  } 

  public isLoggedIn(): boolean{
    let status = false;
    if( localStorage.getItem('isLoggedIn') == "true"){
      status = true;
    }
    else{
      status = false;
    }
    return status;

  }




  ///////errr handling
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  
  }
  
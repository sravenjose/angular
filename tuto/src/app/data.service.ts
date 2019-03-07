import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators'
 
const endpoint = 'http://localhost:3000';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

constructor(private http: HttpClient) { }

private extractData(res: Response) {
  let body = res;
  return body || { };
}

getUsers(): Observable<any> {
  return this.http.get<any>(endpoint + '/users').pipe(map(this.extractData));
}

getUser(name): Observable<any> {
  return this.http.get<any>(endpoint + `/users/${name}`)
  .pipe(map(this.extractData));
}

addUser(user): Observable<any> {
  console.log(user);
  return this.http.post<any>(endpoint + '/users', user, httpOptions)
  .pipe(catchError(this.handleError<any>('addUser')));
}

updateUser(user): Observable<any> {
  return this.http.put<any>(endpoint + `/users`, user, httpOptions).
  pipe(catchError(this.handleError<any>('updateUser')));
}

deleteUser (name): Observable<any> {
  // console.log(name);
  return this.http.delete<any>(endpoint + `/users/${name}`).
  pipe(catchError((error:HttpErrorResponse)=>{
   return [{ status: error }]
  }));
  
}

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}

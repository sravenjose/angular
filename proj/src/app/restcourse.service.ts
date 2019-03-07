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
export class RestcourseService {


  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  
  getCourses(): Observable<any> {
    return this.http.get<any>(endpoint + '/courses');
  }

  getCourse(name): Observable<any> {
    console.log(name)
    return this.http.get<any>(endpoint + `/courses/${name}`);
     
  }
  
  

  deleteCourse(name): Observable<any> {
    // console.log(name);
    return this.http.delete<any>(endpoint + `/courses/${name}`).
    pipe(catchError((error:HttpErrorResponse)=>{
     return [{ status: error }]
    }));
    
  }
  addCourse(course): Observable<any> {
    console.log(course);
    return this.http.post<any>(endpoint + '/courses', course, httpOptions)
    .pipe(catchError(this.handleError<any>('addCourse')));
  }
  
  updateCourse(course): Observable<any> {
    console.log(course);
    return this.http.put<any>(endpoint + '/courses', course, httpOptions)
    .pipe(catchError(this.handleError<any>('updateCourse')));
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

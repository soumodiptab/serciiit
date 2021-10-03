import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { faculty } from './classes/faculty';
@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  private facultiesUrl = 'api/faculties'; 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor( private http: HttpClient) { }
  /** GET heroes from the server */
  getFaculties(): Observable<faculty[]> {
    return this.http.get<faculty[]>(this.facultiesUrl)
      .pipe(
        tap(_ => console.log('fetched faculties')),
        catchError(this.handleError<faculty[]>('getFaculties', []))
      );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getFacultyNo404<Data>(id: number): Observable<faculty> {
    const url = `${this.facultiesUrl}/?id=${id}`;
    return this.http.get<faculty[]>(url)
      .pipe(
        map(faculties => faculties[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          console.log(`${outcome} faculty id=${id}`);
        }),
        catchError(this.handleError<faculty>(`getFaculty id=${id}`))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getFaculty(id: number): Observable<faculty> {
    const url = `${this.facultiesUrl}/${id}`;
    return this.http.get<faculty>(url).pipe(
      tap(_ => console.log(`fetched faculty id=${id}`)),
      catchError(this.handleError<faculty>(`getFaculty id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
  searchFaculties(term: string): Observable<faculty[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<faculty[]>(`${this.facultiesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         console.log(`found faculties matching "${term}"`) :
         console.log(`no faculties matching "${term}"`)),
      catchError(this.handleError<faculty[]>('searchFaculties', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addFaculty(f: faculty): Observable<faculty> {
    return this.http.post<faculty>(this.facultiesUrl, f, this.httpOptions).pipe(
      tap((newFaculty: faculty) => console.log(`added faculty w/ id=${newFaculty.id}`)),
      catchError(this.handleError<faculty>('addFaculty'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteFaculty(id: number): Observable<faculty> {
    const url = `${this.facultiesUrl}/${id}`;

    return this.http.delete<faculty>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted faculty id=${id}`)),
      catchError(this.handleError<faculty>('deleteFaculty'))
    );
  }

  /** PUT: update the hero on the server */
  updateFaculty(f: faculty): Observable<any> {
    return this.http.put(this.facultiesUrl, f, this.httpOptions).pipe(
      tap(_ => console.log(`updated faculty id=${f.id}`)),
      catchError(this.handleError<any>('updateFaculty'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { GeneralGenre , GeneralGenreInterface , createGeneralGenre } from './general-genre-interface';
@Injectable({
  providedIn: 'root'
})
export class GeneralGenreService {
  private apiUrl = 'https://localhost:7010/api/generalgenres';

  constructor(private http: HttpClient) { }

  createGeneralGenre(formData: createGeneralGenre): Observable<createGeneralGenre> {
    return this.http.post<createGeneralGenre>(`${this.apiUrl}/createGeneralGenre`, formData)
    .pipe(
      catchError(this.handleError)
    );
  }

  getGeneralGenre(): Observable<GeneralGenre> {
    return this.http.get<GeneralGenre>(`${this.apiUrl}/getGeneralGenre`);
  }


  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }
}

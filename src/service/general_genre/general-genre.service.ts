import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IGeneralGenre , IGeneralGenreDetails , ICreateGeneralGenre } from './general-genre-interface';
@Injectable({
  providedIn: 'root'
})
export class GeneralGenreService {
  private apiUrl = 'https://localhost:7010/api/generalgenres';

  constructor(private http: HttpClient) { }

  createGeneralGenre(formData: ICreateGeneralGenre): Observable<ICreateGeneralGenre> {
    return this.http.post<ICreateGeneralGenre>(`${this.apiUrl}/createGeneralGenre`, formData)
    .pipe(
      catchError(this.handleError)
    );
  }

  getGeneralGenre(): Observable<IGeneralGenre> {
    return this.http.get<IGeneralGenre>(`${this.apiUrl}/getGeneralGenre`);
  }

  GetGeneralCategoryDetailsById(id : number): Observable<IGeneralGenreDetails> {
    return this.http.get<IGeneralGenreDetails>(`${this.apiUrl}/GetGeneralCategoryDetailsById/${id}`);
  }


  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }
}

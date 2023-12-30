import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Category ,CategoryInterface } from './category-interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'https://localhost:7010/api/categories';
  constructor(private http: HttpClient) { }

  createCategory(formData: Category): Observable<Category> {
    return this.http.post<Category>(`${this.apiUrl}/createCategory`, formData)
    .pipe(
      catchError(this.handleError)
    );
  }

  getCategory(): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/getCategory`);
  }


  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }
}

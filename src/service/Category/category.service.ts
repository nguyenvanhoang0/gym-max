import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ICategorys ,CategoryInterface} from './category-interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'https://localhost:7010/api/categories';
  constructor(private http: HttpClient) { }

  createCategory(formData: ICategorys): Observable<ICategorys> {
    return this.http.post<ICategorys>(`${this.apiUrl}/createCategory`, formData)
  }

  getCategory(): Observable<ICategorys> {
    return this.http.get<ICategorys>(`${this.apiUrl}/getCategory`);
  }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }
}

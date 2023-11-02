import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BigExerciseGeneralGenreInterface } from './big-exercise-general-genre-interface';
@Injectable({
  providedIn: 'root'
})
export class BigExerciseGeneralGenreService {
  private apiUrl = 'https://localhost:7010/api/big-exercise-general-genres';
  constructor(private http: HttpClient) { }

  createBigExerciseGeneralGenre(data: BigExerciseGeneralGenreInterface) {
    return this.http.post(`${this.apiUrl}/CreateBigExerciseGeneralGenre`, data);
  }
}

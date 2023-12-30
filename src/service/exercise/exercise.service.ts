import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import {ExerciseInterface , ExercisesInterface} from './exercise-interface';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private apiUrl = 'https://localhost:7010/api/ExerciseControllers'; 
  constructor(private http: HttpClient) { }

  createExercise(data: ExerciseInterface):Observable<ExerciseInterface> {
    return this.http.post<ExerciseInterface>(`${this.apiUrl}/createExercise`, data);
  }

  getExercise(): Observable<ExerciseInterface> {
    return this.http.get<ExerciseInterface>(`${this.apiUrl}/getExercise`);
  }

  getExerciseByUserId(userId: number): Observable<ExercisesInterface> {
    return this.http.get<ExercisesInterface>(`${this.apiUrl}/getExerciseByUserId/${userId}`);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import {IExercise , IExercises , ICreateExercise} from './exercise-interface';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private apiUrl = 'https://localhost:7010/api/ExerciseControllers'; 
  constructor(private http: HttpClient) { }

  createExercise(data: ICreateExercise):Observable<ICreateExercise> {
    return this.http.post<ICreateExercise>(`${this.apiUrl}/createExercise`, data);
  }

  getExercise(): Observable<IExercise> {
    return this.http.get<IExercise>(`${this.apiUrl}/getExercise`);
  }

  getExerciseByUserId(userId: number): Observable<IExercises> {
    return this.http.get<IExercises>(`${this.apiUrl}/getExerciseByUserId/${userId}`);
  }

}

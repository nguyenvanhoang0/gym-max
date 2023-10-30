import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IsolationExercisesInterface } from './isolation-exercises-interface';

@Injectable({
  providedIn: 'root'
})
export class IsolationExercisesService {
  private apiUrl = 'https://localhost:7010/api/ExerciseControllers';

  constructor(private http: HttpClient) { }

  createExercise(exercise: IsolationExercisesInterface): Observable<any> {
    return this.http.post(`${this.apiUrl}/createExercise`, exercise);
  }
}

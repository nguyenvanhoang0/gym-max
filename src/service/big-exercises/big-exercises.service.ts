import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { createdWorkoutsInterface } from './big-exercises-interface';
@Injectable({
  providedIn: 'root'
})
export class BigExercisesService {
  private apiUrl = 'https://localhost:7010/api/BigExerciseControllers'; 
  constructor(private http: HttpClient) { }

  getcreatedWorkouts(id: number): Observable<createdWorkoutsInterface> {
    return this.http.get<createdWorkoutsInterface>(`${this.apiUrl}/GetBigExercisesByAuthor/${id}`);
  }

}

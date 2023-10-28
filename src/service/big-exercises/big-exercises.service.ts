import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { createdWorkoutsInterface  ,bigExercises} from './big-exercises-interface';
@Injectable({
  providedIn: 'root'
})
export class BigExercisesService {
  private apiUrl = 'https://localhost:7010/api/BigExerciseControllers'; 
  constructor(private http: HttpClient) { }

  createBigExercise(data: any) {
    return this.http.post(`${this.apiUrl}/createBigExercise`, data);
  }

  getcreatedWorkouts(userId: number): Observable<createdWorkoutsInterface> {
    return this.http.get<createdWorkoutsInterface>(`${this.apiUrl}/GetBigExercisesByAuthor/${userId}`);
  }

  getBigExerciseDetails(id: number): Observable<bigExercises> {
    return this.http.get<bigExercises>(`${this.apiUrl}/GetBigExerciseWithRelatedDataById/${id}`);
  }



}

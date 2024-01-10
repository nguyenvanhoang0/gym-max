import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMyWorkout , IMyBigExercise  } from './my-workout-interface';
@Injectable({
  providedIn: 'root'
})
export class MyWorkoutService {
  private apiUrl = 'https://localhost:7010/api/MyWorkoutControllers';
  constructor(private http: HttpClient) { }

  getPracticeTimes(id: number): Observable<IMyWorkout> {
    return this.http.get<IMyWorkout>(`${this.apiUrl}/GetWorkoutByUserID/${id}`);
  } 

  getPracticeTimesByTimeStart(id: number, timeStart: Date): Observable<IMyWorkout> {
    const formattedTimeStart = timeStart.toISOString();
    // console.log(formattedTimeStart); 
    return this.http.get<IMyWorkout>(`${this.apiUrl}/GetUserWorkoutByUserAndTimeStart/${id}/${formattedTimeStart}`);
  }

  GetBigExerciseInMyWorkoutsByUserId(idUser: number): Observable<IMyBigExercise> {
    return this.http.get<IMyBigExercise>(`${this.apiUrl}/GetBigExerciseInMyWorkoutsByUserId/${idUser}`);
  }

  updateMyWorkout( data : string ,MyWorkoutId: number ): Observable<any> {
    const url = `${this.apiUrl}/UpdateMyWorkout/${MyWorkoutId}`;
    const requestBody = { defaultColor: data }; // Tạo một đối tượng JSON
  console.log(requestBody);
    
    return this.http.put<any>(url, requestBody);
  }

}

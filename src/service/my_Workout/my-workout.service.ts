import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMyWorkout , IMyBigExercise  } from './my-workout-interface';
import { IUpdateColor   } from '../color-preference/color-preference-interface';

@Injectable({
  providedIn: 'root'
})
export class MyWorkoutService {
  private apiUrl = 'https://localhost:7010/api/MyWorkoutControllers';
  constructor(private http: HttpClient) { }

  getPracticeTimes(id: number , Month : number): Observable<IMyWorkout> {
    return this.http.get<IMyWorkout>(`${this.apiUrl}/GetWorkoutByUserID/${id}/${Month}`);
  } 

  getPracticeTimesByTimeStart(id: number, timeStart: Date): Observable<IMyWorkout> {
    const formattedTimeStart = timeStart.toISOString();
    // console.log(formattedTimeStart); 
    return this.http.get<IMyWorkout>(`${this.apiUrl}/GetUserWorkoutByUserAndTimeStart/${id}/${formattedTimeStart}`);
  }

  GetBigExerciseInMyWorkoutsByUserId(idUser: number): Observable<IMyBigExercise> {
    return this.http.get<IMyBigExercise>(`${this.apiUrl}/GetBigExerciseInMyWorkoutsByUserId/${idUser}`);
  }

  updateMyWorkout( data : IUpdateColor): Observable<any> {
    const requestBody = { defaultColor: data.color };
  return this.http.post<any>(`${this.apiUrl}/UpdateMyWorkout/${data.id}`, requestBody);
}

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PracticeTime , MyWorkoutInterface} from './my-workout-interface';
@Injectable({
  providedIn: 'root'
})
export class MyWorkoutService {
  private apiUrl = 'https://localhost:7010/api/MyWorkoutControllers';
  constructor(private http: HttpClient) {}

  getPracticeTimes(id: number): Observable<MyWorkoutInterface> {
    return this.http.get<MyWorkoutInterface>(`${this.apiUrl}/user/${id}`);
  }

  getPracticeTimesByTimeStart(id: number, timeStart: Date): Observable<MyWorkoutInterface> {
    const formattedTimeStart = timeStart.toISOString(); 
    // console.log(formattedTimeStart);
    
    return this.http.get<MyWorkoutInterface>(`${this.apiUrl}/GetUserWorkoutByUserAndTimeStart?userId=${id}&timeStart=${formattedTimeStart}`);
}

}

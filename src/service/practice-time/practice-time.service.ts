import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PracticeTime , PracticeTimes} from './practice-time-interface';
@Injectable({
  providedIn: 'root'
})
export class PracticeTimeService {

  private apiUrl = 'https://localhost:7010/api/PracticeTimeControllers';

  constructor(private http: HttpClient) {}

  getPracticeTimes(): Observable<PracticeTimes> {
    return this.http.get<PracticeTimes>(`${this.apiUrl}/GetPracticeTimesWithExercises`);
  }
}

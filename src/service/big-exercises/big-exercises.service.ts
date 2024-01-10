import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ItargetData  ,IbigExercises, IbigExercisesByAuthor} from './big-exercises-interface';
@Injectable({
  providedIn: 'root'
})
export class BigExercisesService {
  private apiUrl = 'https://localhost:7010/api/BigExerciseControllers'; 
  constructor(private http: HttpClient) { }

  createBigExercise(data: IbigExercises):Observable<IbigExercises> {
    return this.http.post<IbigExercises>(`${this.apiUrl}/createBigExercise`, data);
  }

  getcreatedWorkouts(userId: number): Observable<IbigExercisesByAuthor> {
    return this.http.get<IbigExercisesByAuthor>(`${this.apiUrl}/GetBigExercisesByAuthor/${userId}`);
  }

  // getBigExerciseDetails(id: number): Observable<bigExercises> {
  //   return this.http.get<bigExercises>(`${this.apiUrl}/GetBigExerciseWithRelatedDataById/${id}`);
  // }

  getAllPublicBigExercises(): Observable<IbigExercisesByAuthor> {
    return this.http.get<IbigExercisesByAuthor>(`${this.apiUrl}/GetAllPublicBigExercises`);
  }

  getBigExerciseWithRelatedDataById(id: number): Observable<ItargetData> {
    return this.http.get<ItargetData>(`${this.apiUrl}/GetBigExercisesWithRelatedData/${id}`);
  }

}

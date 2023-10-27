import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BigExercisesService {
  private baseUrl = 'https://localhost:7010/api/BigExerciseControllers'; 
  constructor(private http: HttpClient) { }


}

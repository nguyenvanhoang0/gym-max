import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FormQuestion, InputFormAttribute, InputForm, FormQuestionResponse } from './form-question-interface'; // Đảm bảo import các interfaces phù hợp

@Injectable({
  providedIn: 'root'
})
export class FormQuestionService {
  private baseUrl = 'https://localhost:7010/api/InputForms'; // Thay thế bằng URL của API của bạn

  constructor(private http: HttpClient) { }

  addFormQuestion(formData: FormQuestion): Observable<FormQuestion> {
    return this.http.post<FormQuestion>(`${this.baseUrl}/addFormQuestion`, formData)
      .pipe(
        catchError(this.handleError)
      );
  }

  addInputAttribute(inputAttributeData: InputFormAttribute): Observable<InputFormAttribute> {
    return this.http.post<InputFormAttribute>(`${this.baseUrl}/AddInputAttribute`, inputAttributeData)
      .pipe(
        catchError(this.handleError)
      );
  }

  getAllFormQuestions(): Observable<FormQuestionResponse> {
    return this.http.get<FormQuestionResponse>(`${this.baseUrl}/FormQuestion`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getFormQuestionById(id: number): Observable<InputForm> {
    return this.http.get<InputForm>(`${this.baseUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateFormQuestion(id: number, formData: FormQuestion): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/FormQuestion/${id}`, formData)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateInputAttribute(id: number, inputAttributeData: InputFormAttribute): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/InputAttribute/${id}`, inputAttributeData)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteFormQuestion(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/DeleteFormQuestion/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteInputAttribute(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/InputAttribute/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  IUpdateColor   } from './color-preference-interface';
@Injectable({
  providedIn: 'root'
})
export class ColorPreferenceService {

  private apiUrl = 'https://localhost:7010/api/ColorPreferenceContronllers';


  constructor(private http: HttpClient) { }

  updatecolorPreferen( data : IUpdateColor ): Observable<any> {
    const requestBody = { Color: data.color };
    return this.http.put<any>(`${this.apiUrl}/UpdateColorPreference/${data.id}`,requestBody);
  }
}

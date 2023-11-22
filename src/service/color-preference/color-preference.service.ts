import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  UpdateColorPreference   } from './color-preference-interface';
@Injectable({
  providedIn: 'root'
})
export class ColorPreferenceService {

  private apiUrl = 'https://localhost:7010/api/ColorPreferenceContronllers';


  constructor(private http: HttpClient) { }

  updatecolorPreferen( data : string , colorId: number ): Observable<any> {
    const url = `${this.apiUrl}/UpdateColorPreference/${colorId}`;
    const requestBody = { Color: data }; // Tạo một đối tượng JSON
  console.log(requestBody);
    
    return this.http.put<any>(url, requestBody);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILoginResponse , IUserInfo  } from './auth-interface';
// import { UserInfo } from './UserInfo';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://localhost:7010/api/User';

  constructor(private http: HttpClient,) { }

  setToken(token: string): void {
    localStorage.setItem('accessToken', token);
  }

  // Phương thức để lấy token từ localStorage
  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  login(email: string, password: string): Observable<ILoginResponse> {
    const loginData = { email, password };
    return this.http.post<ILoginResponse>(`${this.baseUrl}/login`, loginData);
  }

  // getCurrentUser(): Observable<UserInfo> {
  //   return this.http.get<UserInfo>(`${this.baseUrl}/current-user`);
  // }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token;
  }
  
}

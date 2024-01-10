import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser , UserInterface , IAddUserInformation} from './user-interface';
import { AuthService } from '../AuthService/auth.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'https://localhost:7010/api/User';

  constructor(
    private http: HttpClient,
    private authService: AuthService) { }

  registerUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.baseUrl}/register`, user);
  }

  loginUser(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { email, password });
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.baseUrl}/users`);
  }

  getUserById(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.baseUrl}/${id}`);
  }

  updateUser(id: number, updateUser: IUser): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, updateUser);
  }

  updateUserColumn(updatedUserInfo: IAddUserInformation): Observable<any> {
    const { id, key, value } = updatedUserInfo;
  const updateData = {
    [key]: value
  };
  return this.http.put<any>(`${this.baseUrl}/${id}`, updateData);
  }
  
  

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  getUserInfo(): Observable<IUser> {
    const token = this.authService.getToken();

    if (!token) {
      return new Observable<IUser>();
    }

    // Thêm token vào tiêu đề của HTTP request
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const options = { headers: headers };
    // console.log(this.getUserInfo)
    return this.http.get<IUser>(`${this.baseUrl}/current-user`, options);
  }
}

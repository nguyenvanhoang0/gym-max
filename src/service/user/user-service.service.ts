import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User , UserInterface } from './user-interface';
import { AuthService } from '../AuthService/auth.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'https://localhost:7010/api/User';

  constructor(
    private http: HttpClient,
    private authService: AuthService) { }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/register`, user);
  }

  loginUser(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { email, password });
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  updateUser(id: number, updateUser: User): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, updateUser);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  getUserInfo(): Observable<UserInterface> {
    const token = this.authService.getToken();

    if (!token) {
      // Xử lý trường hợp token không tồn tại, ví dụ: đưa người dùng đến trang đăng nhập
      // this.router.navigate(['/login']);
      return new Observable<UserInterface>(); // Trả về Observable trống trong trường hợp không có token
    }

    // Thêm token vào tiêu đề của HTTP request
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const options = { headers: headers };
    console.log(this.getUserInfo)
    return this.http.get<UserInterface>(`${this.baseUrl}/current-user`, options);
  }
}

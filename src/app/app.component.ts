import { Component , OnInit  } from '@angular/core';
import { UserService } from '../service/user/user-service.service';
import { User , UserInterface } from '../service/user/user-interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gym-max';
  userInfo: UserInterface | null = null;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.userService.getUserInfo().subscribe(
      (userInfo) => {
        // Xử lý khi nhận được thông tin người dùng
        this.userInfo = userInfo;
        console.log('User Info:', userInfo);
      },
      (error) => {
        // Xử lý lỗi khi gọi API hoặc token không hợp lệ
        console.error('Error:', error);
      }
    );
  }
}

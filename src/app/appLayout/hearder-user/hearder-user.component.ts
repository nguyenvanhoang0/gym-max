import { Component } from '@angular/core';
import { User , UserInterface , AddUserInformation } from '../../../service/user/user-interface';
import { AuthService } from '../../../service/AuthService/auth.service';
import { UserService } from '../../../service/user/user-service.service';

@Component({
  selector: 'app-hearder-user',
  templateUrl: './hearder-user.component.html',
  styleUrls: ['./hearder-user.component.css']
})
export class HearderUserComponent {
  constructor(
    
    private authService: AuthService,
    private userService: UserService,
    
    ) { 
   
  }

  userInfo: User | null = null;

  ngOnInit() {
    this.getUser();
   
  }

  getUser(){
    this.userService.getUserInfo().subscribe(
      (userInfo) => {
        // Xử lý khi nhận được thông tin người dùng
        this.userInfo = userInfo;
        this.userService.getUserById(userInfo.id);
        // this.updatedUserInfo.id = userInfo.id
        console.log('User Info:', userInfo);
      },
      (error) => {
        // Xử lý lỗi khi gọi API hoặc token không hợp lệ
        console.error('Error:', error);
      }
    );
  }
}

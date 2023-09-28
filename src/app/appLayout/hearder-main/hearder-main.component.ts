import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/AuthService/auth.service';
import { UserService } from '../../../service/user/user-service.service';
import { UserInfo } from '../../../service/AuthService/auth-interface';
import { User , UserInterface } from '../../../service/user/user-interface';
interface MenuItem {
  label: string;
  route: string;
  img: string;
}

@Component({
  selector: 'app-hearder-main',
  templateUrl: './hearder-main.component.html',
  styleUrls: ['./hearder-main.component.css']
})


export class HearderMainComponent {


  menuItems: MenuItem[] = [
    { label: 'Exercise', route: '/main/home' ,img:'../../../assets/svg/book.svg'},
    { label: 'Create Exercise', route: '/main/createExercise' ,img:'../../../assets/svg/create_new_books.svg' },
    { label: 'Exercises of the day', route: '/main/home' ,img:'../../../assets/svg/book_pins.svg' },
    { label: 'Instruct', route: '/main/home' ,img:'../../../assets/svg/Instruction_book.svg' },
    { label: 'Exercise library', route: '/main/home' ,img:'../../../assets/svg/book.svg' },
    // Thêm các mục menu khác tương tự ở đây
  ];
  userInfo: User | null = null;

  constructor(
    private router: Router,
    private authService: AuthService,private userService: UserService,) {}
    // private authService: AuthService,
    
   

    ngOnInit() {
      this.getUser();
    }

    getUser(){
      this.userService.getUserInfo().subscribe(
        (userInfo) => {
          // Xử lý khi nhận được thông tin người dùng
          this.userInfo = userInfo;
          this.userService.getUserById(userInfo.id);
          console.log('User Info:', userInfo);
        },
        (error) => {
          // Xử lý lỗi khi gọi API hoặc token không hợp lệ
          console.error('Error:', error);
        }
      );
    }

    navigateToPage() {
      const hasToken = this.authService.isAuthenticated(); // Đã có token hay chưa
  
      if (hasToken) {
        // Nếu có token, chuyển hướng đến trang home
        this.router.navigate(['/main/home']);
      } else {
        // Nếu không có token, chuyển hướng đến trang login
        this.router.navigate(['/login']);
      }
    }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';


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
    { label: 'Create Exercise', route: '/main/home' ,img:'../../../assets/svg/create_new_books.svg' },
    { label: 'Exercises of the day', route: '/main/home' ,img:'../../../assets/svg/book_pins.svg' },
    { label: 'Instruct', route: '/main/home' ,img:'../../../assets/svg/Instruction_book.svg' },
    { label: 'Exercise library', route: '/main/home' ,img:'../../../assets/svg/book.svg' },
    // Thêm các mục menu khác tương tự ở đây
  ];

  constructor(private router: Router) {}

  redirectToPage(route: string) {
    const token = localStorage.getItem('token'); // Kiểm tra token trong localStorage hoặc từ nơi khác

    if (token) {
      this.router.navigateByUrl(route);
    } else {
      this.router.navigateByUrl('/main/profile');
    }
  }
}

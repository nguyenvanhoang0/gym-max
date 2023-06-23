import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  // animations: [
  //   trigger('slideAnimation', [
  //     transition(':enter', [
  //       style({ transform: 'translateX(100%)' }),
  //       animate('1s', style({ transform: 'translateX(0)' }))
  //     ]),
  //     transition(':leave', [
  //       animate('1s', style({ transform: 'translateX(-100%)' }))
  //     ])
  //   ])
  // ]
})
export class IndexComponent {
  items: any[] = [
    { image: '../../../assets/img/img_anime1.jpg', text: "Let's start creating your own exercises", button: "creating", route: '/main/home' },
    { image: '../../../assets/img/img_anime2.jpg', text: 'library with 200+ effective exercise templates', button: "library", route: '/main/home' },
    { image: '../../../assets/img/img_anime3.jpg', text: 'Workout with professional fitness experts', button: "See more", route: '/main/home' },
    { image: '../../../assets/img/img_anime2.jpg', text: 'Register to become a member with many other benefits', button: "Register", route: '/main/home' }
    // Thêm các item khác tương tự
  ];

  imgs: any[] = [
    { image: '../../../assets/img/img_anime1.jpg', },
    { image: '../../../assets/img/img_anime2.jpg', },
    { image: '../../../assets/img/img_anime3.jpg', },
    { image: '../../../assets/img/img_anime2.jpg', }
    // Thêm các item khác tương tự
  ];

  imgs1: any[] = [
    { image: '../../../assets/img/img_anime1.jpg', },
    { image: '../../../assets/img/img_anime2.jpg', },
    { image: '../../../assets/img/img_anime3.jpg', },
    { image: '../../../assets/img/img_anime2.jpg', }
    // Thêm các item khác tương tự
  ];

  img3: any[] = [
    { image: '../../../assets/svg/ssshape (2).svg', },
    // Thêm các item khác tương tự
  ];
  
}


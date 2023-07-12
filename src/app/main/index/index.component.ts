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
    { image: '../../../assets/jpg/sky.jpg', tile: "let's begin", text: "Start creating your own workouts for strength and fitness, and add fun and variety to your daily workout routine.", button: "creating", route: '/main/home' },
    { image: '../../../assets/jpg/sky4.jpg', tile: "resource diversity", text: 'Library with more than 200 effective exercise templates, bringing variety and richness to your training program.', button: "library", route: '/main/home' },
    { image: '../../../assets/jpg/sky5.jpg', tile: "Professional practice.", text: 'Workout with professional fitness experts who will support and advise you throughout your workout, helping you achieve your best results and make tangible progress in improving your health and fitness. ', button: "See more", route: '/main/home' },
    { image: '../../../assets/jpg/sky.jpg', tile: "sign up", text: 'Signing up to become a member not only allows you to enjoy many benefits, but also participates in a community full of support and sharing about health and fitness.', button: "Register", route: '/main/home' }
    // Thêm các item khác tương tự
  ];

  // imgs: any[] = [
  //   { image: '../../../assets/img/img_anime1.jpg', },
  //   { image: '../../../assets/img/img_anime2.jpg', },
  //   { image: '../../../assets/img/img_anime3.jpg', },
  //   { image: '../../../assets/img/img_anime2.jpg', }
  //   // Thêm các item khác tương tự
  // ];

  // img1: any[] = [
  //   { image: '../../../assets/jpg/sky.jpg', },
  //   { image: '../../../assets/jpg/sky2.jpg', },
  //   { image: '../../../assets/jpg/sky3.jpg', },

  //   // Thêm các item khác tương tự
  // ];

  // img3: any[] = [
  //   { image: '../../../assets/svg/ssshape (2).svg', },
  //   // Thêm các item khác tương tự
  // ];


  packages: any[] = [
    { name: "Gym Start", price: "13", expiry: '3', promotion: '7', text: "Get started with creating your own workouts.", image: '../../../assets/img/popup1.png', },
    { name: "Gym Pro", price: "24", expiry: '6', promotion: '15', text: "Expansion and rapid growth.", image: '../../../assets/img/popup2.png', },
    { name: "Gym Max", price: "42", expiry: '12', promotion: '30', text: "become a professional !", image: '../../../assets/img/popup3.png', },
  ];

  GymStarts: any[] = [
    { text: "workout design." },
    { text: "schedule training." },
    { text: "contact professional PT." },
    { text: "private closet." },
    { text: "schedule exercise equipment." },
    { text: "manage your exercises." },
    { text: "health management." },
    { text: "Unlock advanced tools on the web." },
    { text: "Free health index measurement 1/week." },
  ]


}


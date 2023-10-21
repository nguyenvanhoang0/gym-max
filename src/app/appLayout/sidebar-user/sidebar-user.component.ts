import { Component } from '@angular/core';


interface SidebarItem {
  name: string; 
  img_1: string;
  img_2: string;
  showChildItem:boolean;
  url:string;
  items: ChildItem[];
}

interface ChildItem {
  name: string;
  img: string;
  url:string;
}

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.css']
})
export class SidebarUserComponent {
  // showContent: boolean = false;

  Sidebar_Items = [
    { name: 'Item 1', content: 'Content for Item 1'},
    { name: 'Item 2', content: 'Content for Item 2'},
    { name: 'Item 3', content: 'Content for Item 3'}
  ];

   sidebarData: SidebarItem[] = [
    {
      name: 'Item 1',
      img_1: '../../../assets/svg/map.svg',
      img_2: '../../../assets/svg/Dropdown.svg',
      showChildItem: false,
      url: '/main/home',
      items: [
        {
          name: 'Exercise',
          img: '../../../assets/svg/bulk.svg',
          url: '/main/exercise'
        }
      ]
    },
    {
      name: 'Item 2',
      img_1: '../../../assets/svg/map.svg',
      img_2: '../../../assets/svg/Dropdown.svg',
      showChildItem: false,
      url: '/main/about',
      items: [
        {
          name: 'About Us',
          img: '../../../assets/svg/bulk.svg',
          url: '/main/about-us'
        },
        {
          name: 'Our Team',
          img: '../../../assets/svg/bulk.svg',
          url: '/main/our-team'
        }
      ]
    },
    {
      name: 'Item 3',
      img_1: '../../../assets/svg/map.svg',
      img_2: '../../../assets/svg/Dropdown.svg',
      showChildItem: false,
      url: '/main/contact',
      items: [
        {
          name: 'Contact',
          img: '../../../assets/svg/bulk.svg',
          url: '/main/contact-us'
        },
        {
          name: 'Location',
          img: '../../../assets/svg/bulk.svg',
          url: '/main/location'
        },
        {
          name: 'Hours',
          img: '../../../assets/svg/bulk.svg',
          url: '/main/hours'
        }
      ]
    },
    {
      name: 'Item 4',
      img_1: '../../../assets/svg/map.svg',
      img_2: '../../../assets/svg/Dropdown.svg',
      showChildItem: false,
      url: '/main/contact',
      items: []
  
    }
  ];
  

  toggleContent(item: any) {
    item.showChildItem = !item.showChildItem;
    console.log(item);
  }
}

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
  isSidebarOpen: boolean = true;

   sidebarData: SidebarItem[] = [
    {
      name: 'Exercises',
      img_1: '../../../assets/svg/map.svg',
      img_2: '../../../assets/svg/Dropdown.svg',
      showChildItem: false,
      url: '',
      items: [
        {
          name: 'My Workout',
          img: '../../../assets/svg/bulk.svg',
          url: '/user/myWorkout'
        },
        {
          name: 'All Exercises',
          img: '../../../assets/svg/bulk.svg',
          url: '/user/allExercises'
        },
        {
          name: 'Created Exercises',
          img: '../../../assets/svg/bulk.svg',
          url: '/user/createdExercises'
        },
        {
          name: 'Create Exercises',
          img: '../../../assets/svg/bulk.svg',
          url: '/user/createExercises'
        },
        {
          name: 'exercise Content',
          img: '../../../assets/svg/bulk.svg',
          url: '/user/exerciseContent'
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
  

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    console.log(this.isSidebarOpen );
    
  }

  toggleContent(item: any) {
    item.showChildItem = !item.showChildItem;
    console.log(item);
  }

}
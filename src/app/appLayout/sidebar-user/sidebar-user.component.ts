import { Component } from '@angular/core';

interface GroupSidebar {
  name: string;
  img: string;
  item: SidebarItem[];
}


interface SidebarItem {
  name: string;
  img_1: string;
  img_2: string;
  showChildItem: boolean;
  url: string;
  items: ChildItem[];
}

interface ChildItem {
  name: string;
  img: string;
  url: string;
}

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.css']
})
export class SidebarUserComponent {
  isSidebarOpen: boolean = true;

  sidebarData: GroupSidebar[] = [
    {
      name: 'home',
      img: '',
      item: [
        {
          name: 'Dashboard',
          img_1: '../../../assets/svg/map.svg',
          img_2: '../../../assets/svg/Dropdown.svg',
          showChildItem: false,
          url: '',
          items: []
        }
      ]
    },
    {
      name: 'Exercises',
      img: '',
      item: [{
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
        name: 'library',
        img_1: '../../../assets/svg/map.svg',
        img_2: '../../../assets/svg/Dropdown.svg',
        showChildItem: false,
        url: '/main/about',
        items: [
          {
            name: 'Community library',
            img: '../../../assets/svg/bulk.svg',
            url: '/user/communityLibrary'
          },
          {
            name: 'exercise library',
            img: '../../../assets/svg/bulk.svg',
            url: '/user/allExercises'
          }
        ]
      },
      {
        name: 'Create',
        img_1: '../../../assets/svg/add_exercise.svg',
        img_2: '../../../assets/svg/Dropdown.svg',
        showChildItem: false,
        url: '/user/contact',
        items: [
          {
            name: 'Create Exercise',
            img: '../../../assets/svg/bulk.svg',
            url: '/user/createExercise'
          },
          {
            name: 'Create Target',
            img: '../../../assets/svg/bulk.svg',
            url: '/user/createTarget'
          },
          {
            name: 'Hours',
            img: '../../../assets/svg/bulk.svg',
            url: '/user/hours'
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
    ],

    },
    
  ];


  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    console.log(this.isSidebarOpen);

  }

  toggleContent(item: any) {
    item.showChildItem = !item.showChildItem;
    console.log(item);
  }

}

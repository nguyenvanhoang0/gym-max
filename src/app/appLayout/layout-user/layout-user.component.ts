import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-user',
  templateUrl: './layout-user.component.html',
  styleUrls: ['./layout-user.component.css']
})
export class LayoutUserComponent {
  isSidebarOpen: boolean = true;


  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    console.log(this.isSidebarOpen);

  }
}

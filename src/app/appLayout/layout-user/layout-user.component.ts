import { Component, Renderer2, ElementRef, ViewChild, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-layout-user',
  templateUrl: './layout-user.component.html',
  styleUrls: ['./layout-user.component.css']
})
export class LayoutUserComponent {
  isSidebarOpen: boolean = true;
  SidebarLeftWidth : number = 250
  SidebarRightWidth : number = 0  

  constructor(private renderer: Renderer2) {


  }

  ngOnInit(): void {
    this.onResizes();
  }

  screenWidth: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResizes(): void {
    this.screenWidth = window.innerWidth;
    // console.log(this.screenWidth);
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    if(this.isSidebarOpen){
      this.SidebarLeftWidth = 250
    } else{
      this.SidebarLeftWidth = 0

    }
    console.log(this.isSidebarOpen);

  }

  
  changeTheWidthOfTheLeftBar(Width: number) {
    this.SidebarLeftWidth = Width;
  }

  changeTheWidthOfTheRightBar(Width: number) {
    this.SidebarRightWidth = Width;
  }

}

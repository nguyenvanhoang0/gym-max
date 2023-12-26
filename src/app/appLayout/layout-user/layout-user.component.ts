import { Component, Renderer2, ElementRef, ViewChild, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-layout-user',
  templateUrl: './layout-user.component.html',
  styleUrls: ['./layout-user.component.css']
})
export class LayoutUserComponent {
  isSidebarOpen: boolean = true;
  private isResizing = false;
  private _leftSideBarStyle = {
    width: 200,
    zIndex: 101,
    borderRight: "none"
  };

  private _leftSideBarStyle2 = {
    width: 210,
    zIndex: 101,
    borderRight: "none"
  };

  private _rightSideBarStyle = {
    width: 200,
    zIndex: 101,
    borderLeft: "none"
  };

  private _rightSideBarStyle2 = {
    width: 210,
    zIndex: 101,
    borderLeft: "none"
  };

  get leftSideBarStyle() {
    return this._leftSideBarStyle;
  }
  set leftSideBarStyle(value: { width: number, zIndex: number, borderRight: string }) {
    this._leftSideBarStyle = value
  }

  get leftSideBarStyle2() {
    return this._leftSideBarStyle2;
  }
  set leftSideBarStyle2(value: { width: number, zIndex: number, borderRight: string }) {
    this._leftSideBarStyle2 = value
  }

  get rightSideBarStyle() {
    return this._rightSideBarStyle;
  }
  set rightSideBarStyle(value: { width: number, zIndex: number, borderLeft: string }) {
    this._rightSideBarStyle = value
  }

  get rightSideBarStyle2() {
    return this._rightSideBarStyle2;
  }
  set rightSideBarStyle2(value: { width: number, zIndex: number, borderLeft: string }) {
    this._rightSideBarStyle2 = value
  }

  private _mainContentStyle = {
    marginLeft: 250,
    marginRight: 0,
  };

  get mainContentStyle() {
    return this._mainContentStyle;
  }
  set mainContentStyle(value: { marginLeft: number, marginRight: number }) {
    this._mainContentStyle = value
  }

  constructor(private renderer: Renderer2) {


  }

  ngOnInit(): void {
    this.onResizes();
  }

  screenWidth: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResizes(): void {
    this.screenWidth = window.innerWidth;
    console.log(this.screenWidth);
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    console.log(this.isSidebarOpen);
    
    if (this.isSidebarOpen) {
      this.mainContentStyle = {
        ...this._mainContentStyle,
        marginLeft: 250,
        marginRight:0
      };
    }else{
      this.mainContentStyle = {
        ...this._mainContentStyle,
        marginLeft: 200,
        marginRight:200
      };
    }
  }

  onResizeStart(): void {
    this.isResizing = true;
    console.log("Start");
  }

  onResizeLeftEnd(event: MouseEvent): void {
    this.isResizing = false;
    console.log("end");

    if (!this.isResizing) {
      this.updateLeftSidebarStyles(event.clientX)

    }
  }

  onResizeLeft(event: MouseEvent): void {
    if (this.isResizing) {

      this.leftSideBarStyle2 = {
        ...this._leftSideBarStyle2,
        width: event.clientX,
        zIndex: 102,
        borderRight: "1px #ccc solid"
      }

    }
  }

  onResizeRight(event: MouseEvent): void {
    if (this.isResizing) {
      this.rightSideBarStyle2 = {
        ...this.rightSideBarStyle2,
        width: this.screenWidth - event.clientX,
        zIndex: 102,
        borderLeft: "1px #ccc solid"
      }



      console.log(this.screenWidth - event.clientX);
      console.log(event);

    }
  }

  onResizeRightEnd(event: MouseEvent): void {
    this.isResizing = false;
    console.log("End");
    if (!this.isResizing) {
      this.updateRightSidebarStyles(event.clientX)
    }


  }


  private updateLeftSidebarStyles(clientX: number): void {
    this._leftSideBarStyle = {
      ...this._leftSideBarStyle,
      width: clientX
    };

    this.leftSideBarStyle2 = {
      ...this._leftSideBarStyle2,
      width: clientX,
      zIndex: 101,
      borderRight: "none"
    };

    this.mainContentStyle = {
      ...this._mainContentStyle,
      marginLeft: clientX
    };
  }

  private updateRightSidebarStyles(clientX: number): void {
    this._rightSideBarStyle = {
      ...this._rightSideBarStyle,
      width: this.screenWidth - clientX
    };

    this.rightSideBarStyle2 = {
      ...this.rightSideBarStyle2,
      width: this.screenWidth - clientX,
      zIndex: 101,
      borderLeft: "none"
    };

    this.mainContentStyle = {
      ...this._mainContentStyle,
      marginRight: this.screenWidth - clientX
    };
  }

  blocKonResize(event: Event) {
    event.stopPropagation();
    // console.log(12212);

  }

}

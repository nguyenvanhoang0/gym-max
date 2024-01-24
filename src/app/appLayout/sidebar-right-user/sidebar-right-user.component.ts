import { Component, HostListener , Output ,  EventEmitter , Input} from '@angular/core';

import { IDayDetails } from '../../../service/workout-schedule/day-details-interface';


@Component({
  selector: 'app-sidebar-right-user',
  templateUrl: './sidebar-right-user.component.html',
  styleUrls: ['./sidebar-right-user.component.css']
})
export class SidebarRightUserComponent {
  @Output() sidebarWidth = new EventEmitter<number>();
  @Input() selectedDate!: IDayDetails;


  private isResizing = false;
  screenWidth: number = window.innerWidth;
  // sidebarWidth : number = 0;
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

  // ______________________________________________________

  // private _mainContentStyle = {
  //   marginLeft: 250,
  //   marginRight: 0,
  // };

  // get mainContentStyle() {
  //   return this._mainContentStyle;
  // }
  // set mainContentStyle(value: { marginLeft: number, marginRight: number }) {
  //   this._mainContentStyle = value
  // }

  // ______________________________________________________

  ngOnInit(): void {
    this.onResizes();
  }

  @HostListener('window:resize', ['$event'])
  onResizes(): void {
    this.screenWidth = window.innerWidth;
    // console.log(this.screenWidth);
  }

  onResizeStart(): void {
    this.isResizing = true;
    console.log("Start");
  }

  onResizeRight(event: MouseEvent): void {
    if (this.isResizing) {
      this.rightSideBarStyle2 = {
        ...this.rightSideBarStyle2,
        width: this.screenWidth - event.clientX,
        zIndex: 102,
        borderLeft: "1px #ccc solid"
      }



      // console.log(this.screenWidth - event.clientX);
      // console.log(event);

    }
  }

  onResizeRightEnd(event: MouseEvent): void {
    this.isResizing = false;
    console.log("End");
    if (!this.isResizing) {
      this.updateRightSidebarStyles(event.clientX)
     
    }


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
    this.sidebarWidth.emit( this.screenWidth - clientX);
    
  }

  blocKonResize(event: Event) {
    event.stopPropagation();
    // console.log(12212);

  }
}

import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IDayDetails } from '../../../service/workout-schedule/day-details-interface';

@Component({
  selector: 'app-sidebar-left-user',
  templateUrl: './sidebar-left-user.component.html',
  styleUrls: ['./sidebar-left-user.component.css']
})
export class SidebarLeftUserComponent {
  @Output() sidebarWidth = new EventEmitter<number>();
  @Input() selectedDate!: IDayDetails;

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

    this.sidebarWidth.emit(clientX);

  }

  blocKonResize(event: Event) {
    event.stopPropagation();
    // console.log(12212);

  }
}

import { Component } from '@angular/core';
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[conveyorBeltAnimation]'
})
export class ConveyorBeltAnimationDirective {
  @HostBinding('class.active') isActive = false;
  @HostBinding('class.reverse') isReversed = false;

  @HostListener('click') onClick() {
    this.isActive = !this.isActive;
  }

  @HostListener('contextmenu', ['$event']) onRightClick(event: Event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của chuột phải (context menu)
    this.isReversed = !this.isReversed;
  }
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent {
  activeTab: string = 'signup';

  changeTab(tab: string) {
    this.activeTab = tab;
  }
}

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-type-menu',
  templateUrl: './view-type-menu.component.html',
  styleUrls: ['./view-type-menu.component.css']
})
export class ViewTypeMenuComponent {
  @Output() viewTypeChange = new EventEmitter<number>();

  viewType: number = 0;

  ngOnInit(): void {
    this.clickviewType(1)
    
  }

  clickviewType(viewType: number) {
    this.viewType = viewType
    this.viewTypeChange.emit(this.viewType);

    // this.colorId = 0;

  }
}

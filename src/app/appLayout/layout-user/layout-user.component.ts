import { Component , Renderer2, ElementRef, ViewChild} from '@angular/core';


@Component({
  selector: 'app-layout-user',
  templateUrl: './layout-user.component.html',
  styleUrls: ['./layout-user.component.css']
})
export class LayoutUserComponent {
  isSidebarOpen: boolean = true;
  private isResizing = false;
  @ViewChild('resizableDiv', { static: true }) resizableDiv: ElementRef;

  constructor(private renderer: Renderer2) {
    this.resizableDiv = new ElementRef(null);

  }
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    console.log(this.isSidebarOpen);

  }



  onResizeStart(): void {
    this.isResizing = true;
    
  }

  onResizeEnd(): void {
    this.isResizing = false;
  }

  onResizeLeft(event: MouseEvent): void {
    if (this.isResizing) {
      this.renderer.setStyle(
        this.resizableDiv.nativeElement,
        'width',
        event.clientX + 'px'
      );
    }
  }

  onResize(event: MouseEvent): void {
    if (this.isResizing) {
      const newWidth = event.clientX - this.resizableDiv.nativeElement.getBoundingClientRect().left;
      this.renderer.setStyle(
        this.resizableDiv.nativeElement,
        'width',
        newWidth + 'px'
      );
    }
  }

  blocKonResize(event: Event) {
    event.stopPropagation();

  }

}

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
  get leftSideBarStyle() {
    return this._leftSideBarStyle;
  }
  set leftSideBarStyle(value: { width: number, zIndex: number, borderRight: string }) {
    if (value.width <= 600) {
      this._leftSideBarStyle = value
    } else {
      this._leftSideBarStyle = { ...value, width: 600 }
    }

  }

  private _leftSideBarStyle2 = {
    width: 210,
    zIndex: 101,
    borderRight: "none"
  };
  get leftSideBarStyle2() {
    return this._leftSideBarStyle2;
  }
  set leftSideBarStyle2(value: { width: number, zIndex: number, borderRight: string }) {
    if (value.width <= 600) {
      this._leftSideBarStyle2 = value
    } else {
      this._leftSideBarStyle2 = { ...value, width: 600 }
    }
  }

  private _mainContentStyle = {
    marginLeft: 200,
    marginRight: 200,
  };
  get mainContentStyle() {
    return this._mainContentStyle;
  }
  set mainContentStyle(value: { marginLeft: number, marginRight: number }) {
    this._mainContentStyle = value
  }
  @ViewChild('resizableBody') resizableBody: ElementRef;

  @ViewChild('zIndexSidebarLeft', { static: true }) zIndexSidebarLeft: ElementRef;


  @ViewChild('resizableSidebarRight', { static: true }) resizableSidebarRight: ElementRef;
  @ViewChild('resizableSidebarRight2', { static: true }) resizableSidebarRight2: ElementRef;
  @ViewChild('zIndexSidebarRight', { static: true }) zIndexSidebarRight: ElementRef;

  constructor(private renderer: Renderer2) {

    this.resizableBody = new ElementRef(null);
    this.zIndexSidebarLeft = new ElementRef(null);

    // this.resizableBody2 = new ElementRef(null);
    this.resizableSidebarRight = new ElementRef(null);
    this.resizableSidebarRight2 = new ElementRef(null);
    this.zIndexSidebarRight = new ElementRef(null);
  }

  ngOnInit(): void {
    // Thực hiện các hành động khi component được khởi tạo (trang được tải)
    this.onResizes(); // Gọi hàm onResize với event là null
  }

  screenWidth: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResizes(): void {
    this.screenWidth = window.innerWidth;
    console.log(this.screenWidth);
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    // console.log(this.isSidebarOpen);

  }

  onResizeStart(): void {
    this.isResizing = true;
    console.log("Start");
  }

  onResizeLeftEnd(event: MouseEvent): void {
    this.isResizing = false;
    console.log("end");

    if (!this.isResizing) {
      this._leftSideBarStyle = {
        ...this._leftSideBarStyle,
        width: event.clientX
      };
      
      this.leftSideBarStyle2 = {
        ...this._leftSideBarStyle2,
        width: event.clientX,
        zIndex: 101,
        borderRight: "none"
      }
      this.mainContentStyle = {
        ...this._mainContentStyle,
        marginLeft: event.clientX 
      }

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

  // @HostListener('window:resize', ['$event'])
  onResizeRight(event: MouseEvent): void {
    if (this.isResizing) {
      this.renderer.setStyle(
        this.resizableSidebarRight2.nativeElement,
        'width',
        this.screenWidth - event.clientX + 'px'
      );

      this.renderer.setStyle(
        this.zIndexSidebarRight.nativeElement,
        'z-index',
        '102'
      );

      this.renderer.setStyle(
        this.zIndexSidebarRight.nativeElement,
        'border-left',
        '1px #ccc solid'
      );



      console.log(this.screenWidth - event.clientX);
      console.log(event);

    }
  }

  onResizeRightEnd(event: MouseEvent): void {
    this.isResizing = false;
    console.log("End");
    if (!this.isResizing) {
      this.renderer.setStyle(
        this.resizableSidebarRight.nativeElement,
        'width',
        this.screenWidth - event.clientX + 'px'
      );
      this.renderer.setStyle(
        this.zIndexSidebarRight.nativeElement,
        'z-index',
        '101'
      );
      this.renderer.setStyle(
        this.zIndexSidebarRight.nativeElement,
        'border-left',
        'none'
      );
      if (this.screenWidth - event.clientX < 200) {
        this.renderer.setStyle(
          this.resizableBody.nativeElement,
          'margin-right',
          200 + 'px'
        );
      } else {
        this.renderer.setStyle(
          this.resizableBody.nativeElement,
          'margin-right',
          this.screenWidth - event.clientX + 'px'
        );
      }
    }


  }

  blocKonResize(event: Event) {
    event.stopPropagation();

  }

}

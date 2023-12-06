import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarRightUserComponent } from './sidebar-right-user.component';

describe('SidebarRightUserComponent', () => {
  let component: SidebarRightUserComponent;
  let fixture: ComponentFixture<SidebarRightUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarRightUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarRightUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

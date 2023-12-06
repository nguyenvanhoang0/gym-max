import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarLeftUserComponent } from './sidebar-left-user.component';

describe('SidebarLeftUserComponent', () => {
  let component: SidebarLeftUserComponent;
  let fixture: ComponentFixture<SidebarLeftUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarLeftUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarLeftUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

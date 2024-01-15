import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTypeMenuComponent } from './view-type-menu.component';

describe('ViewTypeMenuComponent', () => {
  let component: ViewTypeMenuComponent;
  let fixture: ComponentFixture<ViewTypeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTypeMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTypeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

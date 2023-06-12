import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HearderAdminComponent } from './hearder-admin.component';

describe('HearderAdminComponent', () => {
  let component: HearderAdminComponent;
  let fixture: ComponentFixture<HearderAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HearderAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HearderAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

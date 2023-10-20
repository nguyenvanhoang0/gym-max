import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HearderUserComponent } from './hearder-user.component';

describe('HearderUserComponent', () => {
  let component: HearderUserComponent;
  let fixture: ComponentFixture<HearderUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HearderUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HearderUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

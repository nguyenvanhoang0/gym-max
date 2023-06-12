import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HearderMainComponent } from './hearder-main.component';

describe('HearderMainComponent', () => {
  let component: HearderMainComponent;
  let fixture: ComponentFixture<HearderMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HearderMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HearderMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

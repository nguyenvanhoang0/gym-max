import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDateComponent } from './details-date.component';

describe('DetailsDateComponent', () => {
  let component: DetailsDateComponent;
  let fixture: ComponentFixture<DetailsDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

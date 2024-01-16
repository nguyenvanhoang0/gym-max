import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoTargetComponent } from './no-target.component';

describe('NoTargetComponent', () => {
  let component: NoTargetComponent;
  let fixture: ComponentFixture<NoTargetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoTargetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

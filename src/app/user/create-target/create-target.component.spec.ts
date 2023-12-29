import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTargetComponent } from './create-target.component';

describe('CreateTargetComponent', () => {
  let component: CreateTargetComponent;
  let fixture: ComponentFixture<CreateTargetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTargetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

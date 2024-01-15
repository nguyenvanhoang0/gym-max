import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorUpdateFormComponent } from './color-update-form.component';

describe('ColorUpdateFormComponent', () => {
  let component: ColorUpdateFormComponent;
  let fixture: ComponentFixture<ColorUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorUpdateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

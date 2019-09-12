import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTestimoniesComponent } from './display-testimonies.component';

describe('DisplayTestimoniesComponent', () => {
  let component: DisplayTestimoniesComponent;
  let fixture: ComponentFixture<DisplayTestimoniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayTestimoniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTestimoniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

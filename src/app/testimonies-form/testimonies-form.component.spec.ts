import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimoniesFormComponent } from './testimonies-form.component';

describe('TestimoniesFormComponent', () => {
  let component: TestimoniesFormComponent;
  let fixture: ComponentFixture<TestimoniesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimoniesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimoniesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

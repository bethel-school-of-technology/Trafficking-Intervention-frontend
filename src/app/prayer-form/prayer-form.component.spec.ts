import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerFormComponent } from './prayer-form.component';

describe('PrayerFormComponent', () => {
  let component: PrayerFormComponent;
  let fixture: ComponentFixture<PrayerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedingAlarmComponent } from './feeding-alarm.component';

describe('FeedingAlarmComponent', () => {
  let component: FeedingAlarmComponent;
  let fixture: ComponentFixture<FeedingAlarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedingAlarmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedingAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayDatesComponent } from './play-dates.component';

describe('PlayDatesComponent', () => {
  let component: PlayDatesComponent;
  let fixture: ComponentFixture<PlayDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayDatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkWayneComponent } from './mark-wayne.component';

describe('MarkWayneComponent', () => {
  let component: MarkWayneComponent;
  let fixture: ComponentFixture<MarkWayneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkWayneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkWayneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

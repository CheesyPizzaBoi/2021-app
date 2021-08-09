import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetAssistanceComponent } from './vet-assistance.component';

describe('VetAssistanceComponent', () => {
  let component: VetAssistanceComponent;
  let fixture: ComponentFixture<VetAssistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetAssistanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VetAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

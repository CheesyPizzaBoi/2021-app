import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetAssistComponent } from './vet-assist.component';

describe('VetAssistComponent', () => {
  let component: VetAssistComponent;
  let fixture: ComponentFixture<VetAssistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetAssistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VetAssistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

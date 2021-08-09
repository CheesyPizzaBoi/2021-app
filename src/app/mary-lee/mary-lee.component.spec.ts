import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaryLeeComponent } from './mary-lee.component';

describe('MaryLeeComponent', () => {
  let component: MaryLeeComponent;
  let fixture: ComponentFixture<MaryLeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaryLeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaryLeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

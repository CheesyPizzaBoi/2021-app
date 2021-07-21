import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsOfWisdomComponent } from './words-of-wisdom.component';

describe('WordsOfWisdomComponent', () => {
  let component: WordsOfWisdomComponent;
  let fixture: ComponentFixture<WordsOfWisdomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordsOfWisdomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsOfWisdomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

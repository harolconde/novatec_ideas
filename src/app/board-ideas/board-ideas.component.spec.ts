import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardIdeasComponent } from './board-ideas.component';

describe('BoardIdeasComponent', () => {
  let component: BoardIdeasComponent;
  let fixture: ComponentFixture<BoardIdeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardIdeasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

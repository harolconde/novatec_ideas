import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatIdeasComponent } from './chat-ideas.component';

describe('ChatIdeasComponent', () => {
  let component: ChatIdeasComponent;
  let fixture: ComponentFixture<ChatIdeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatIdeasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

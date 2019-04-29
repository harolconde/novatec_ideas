import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeasDeadComponent } from './ideas-dead.component';

describe('IdeasDeadComponent', () => {
  let component: IdeasDeadComponent;
  let fixture: ComponentFixture<IdeasDeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeasDeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeasDeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

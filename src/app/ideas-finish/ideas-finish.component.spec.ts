import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeasFinishComponent } from './ideas-finish.component';

describe('IdeasFinishComponent', () => {
  let component: IdeasFinishComponent;
  let fixture: ComponentFixture<IdeasFinishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeasFinishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeasFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

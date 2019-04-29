import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesUserComponent } from './dates-user.component';

describe('DatesUserComponent', () => {
  let component: DatesUserComponent;
  let fixture: ComponentFixture<DatesUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatesUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

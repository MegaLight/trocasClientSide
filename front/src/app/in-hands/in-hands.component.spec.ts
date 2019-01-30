import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InHandsComponent } from './in-hands.component';

describe('InHandsComponent', () => {
  let component: InHandsComponent;
  let fixture: ComponentFixture<InHandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InHandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InHandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoypTaskComponent } from './coyp-task.component';

describe('CoypTaskComponent', () => {
  let component: CoypTaskComponent;
  let fixture: ComponentFixture<CoypTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoypTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoypTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

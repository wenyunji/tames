import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskNewListComponent } from './task-new-list.component';

describe('TaskNewListComponent', () => {
  let component: TaskNewListComponent;
  let fixture: ComponentFixture<TaskNewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskNewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskNewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

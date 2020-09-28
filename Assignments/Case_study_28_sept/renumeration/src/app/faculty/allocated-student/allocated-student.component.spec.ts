import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocatedStudentComponent } from './allocated-student.component';

describe('AllocatedStudentComponent', () => {
  let component: AllocatedStudentComponent;
  let fixture: ComponentFixture<AllocatedStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllocatedStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocatedStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

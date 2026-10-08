import { importProvidersFrom } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatNativeDateModule } from '@angular/material/core';
import { StudentRecord } from './student-record';

describe('StudentRecord', () => {
  let component: StudentRecord;
  let fixture: ComponentFixture<StudentRecord>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentRecord],
      providers: [importProvidersFrom(MatNativeDateModule)],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentRecord);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the student record form', () => {
    expect(component).toBeTruthy();
    expect(component.studentDetailsForm.invalid).toBe(true);
  });
});

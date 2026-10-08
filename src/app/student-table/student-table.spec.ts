import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideState, provideStore } from '@ngrx/store';
import { StudentsTableComponent } from './student-table';
import { studentsReducer } from '../state/student.reduer';

describe('StudentsTableComponent', () => {
  let component: StudentsTableComponent;
  let fixture: ComponentFixture<StudentsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsTableComponent],
      providers: [
        provideStore(),
        provideState({ name: 'students', reducer: studentsReducer }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the student table columns', () => {
    const headers = fixture.nativeElement.querySelectorAll('th[mat-header-cell]');
    expect(headers.length).toBe(component.displayColumns.length);
    expect(fixture.nativeElement.textContent).toContain('Students Name/ID');
  });
});

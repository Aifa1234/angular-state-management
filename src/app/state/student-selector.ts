import { createFeatureSelector } from '@ngrx/store';
import { adapter, StudentsRecordsState } from './student-record';

export const selectStudentsState = createFeatureSelector<StudentsRecordsState>('students');
const entitySelectors = adapter.getSelectors(selectStudentsState);

export const selectAllStudents = entitySelectors.selectAll;
export const selectStudentsLoading = (state: { students: StudentsRecordsState }) => state.students.loading;
export const selectStudentsError = (state: { students: StudentsRecordsState }) => state.students.error;

export interface AppState {
    students: StudentsRecordsState;
}
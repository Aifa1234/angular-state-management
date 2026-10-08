import { createAction, props } from '@ngrx/store';
import { StudentRecord } from './student-record-model';

export const callStudentRecordApi = createAction(
    '[Students Table] Load student records'
);
export const callStudentRecordApiSuccess = createAction(
    '[Students API] Load student records success',
    props<{ payload: StudentRecord[] }>()
);
export const callStudentRecordApiFailure = createAction(
    '[Students API] Load student records failure',
    props<{ error: string }>()
);
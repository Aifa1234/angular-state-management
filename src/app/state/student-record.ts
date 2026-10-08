import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { StudentRecord } from './student-record-model';

export interface StudentsRecordsState extends EntityState<StudentRecord> {
    loading: boolean;
    error: string | null;
}

export const adapter: EntityAdapter<StudentRecord> = createEntityAdapter<StudentRecord>();

export const initialState: StudentsRecordsState = adapter.getInitialState({
    loading: false,
    error: null,
});
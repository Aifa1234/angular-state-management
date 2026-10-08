import { createReducer, on } from '@ngrx/store';
import * as Actions from './student-record-action';
import { adapter, initialState } from './student-record';

export const studentsReducer = createReducer(
    initialState,
    on(Actions.callStudentRecordApi, (state) => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(Actions.callStudentRecordApiSuccess, (state, { payload }) =>
        adapter.setAll(payload, {
            ...state,
            loading: false,
            error: null,
        })
    ),
    on(Actions.callStudentRecordApiFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
    }))
);
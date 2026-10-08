import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';

import * as ActionsList from './student-record-action';
import { StudentsRecordsService } from '../services/student-record-service';

@Injectable()
export class StudentsRecordsEffects {
    private readonly actions$ = inject(Actions);
    private readonly studentsRecordsService = inject(StudentsRecordsService);

    loadStudentsRecords$ = createEffect(() => this.actions$.pipe(
        ofType(ActionsList.callStudentRecordApi),
        exhaustMap(() => this.studentsRecordsService.getStudentsRecords()
        .pipe(
            map(payload => ActionsList.callStudentRecordApiSuccess({ payload })),
            catchError((error: unknown) => of(ActionsList.callStudentRecordApiFailure({
                error: error instanceof Error ? error.message : 'Unable to load student records.',
            })))
        ))
    ));
}
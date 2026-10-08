import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { combineLatest, map, Observable, startWith } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { StudentRecord } from '../state/student-record-model';
import {
    AppState,
    selectAllStudents,
    selectStudentsError,
    selectStudentsLoading,
} from '../state/student-selector';
import * as Actions from '../state/student-record-action';

@Component({
    selector: 'app-students-table',
    standalone: true,
    imports: [AsyncPipe, MatTableModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule],
    templateUrl: './student-table.html',
    styleUrl: './student-table.css'
})
export class StudentsTableComponent implements OnInit {
    private readonly store = inject(Store<AppState>);
    readonly studentsControl = new FormControl('', { nonNullable: true });
    readonly displayColumns = [
        'name', 'city', 'country', 'subjects', 'passportDeclaration',
        'fitnessDeclaration', 'courseName', 'date', 'state', 'street',
        'email', 'phone', 'postalCode',
    ];
    readonly loading$ = this.store.select(selectStudentsLoading);
    readonly error$ = this.store.select(selectStudentsError);
    readonly dataSource$: Observable<StudentRecord[]> = combineLatest([
        this.store.select(selectAllStudents),
        this.studentsControl.valueChanges.pipe(startWith(this.studentsControl.value)),
    ]).pipe(
        map(([students, filter]) => {
            const query = filter.trim().toLowerCase();
            if (!query) {
                return students;
            }
            return students.filter((student) =>
                student.name.toLowerCase().includes(query) ||
                String(student.id).includes(query)
            );
        })
    );

    ngOnInit(): void {
        this.store.dispatch(Actions.callStudentRecordApi());
    }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentRecord } from '../state/student-record-model';

@Injectable({
    providedIn: 'root'
})
export class StudentsRecordsService {
    constructor(
        private http: HttpClient
    ) {}

    getStudentsRecords() {
        return this.http.get<StudentRecord[]>('/api/studentsRecords');
    }
}
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { StudentsTableComponent } from '../student-table/student-table';
import { StudentRecord } from "../student-record/student-record";
import { ContactUs } from '../contact-us/contact-us';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatTabsModule,
    StudentsTableComponent,
    StudentRecord,
    ContactUs
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
}
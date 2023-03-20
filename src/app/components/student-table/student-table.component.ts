import {Component, Input} from '@angular/core';
import {Student} from "../../models/student";

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent {
  @Input() students: Student[];
}

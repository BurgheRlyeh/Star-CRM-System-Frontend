import {Component, Input} from '@angular/core';
import {Student} from "../../models/student";

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.scss']
})
export class StudentInfoComponent {
  @Input() student: Student;
}

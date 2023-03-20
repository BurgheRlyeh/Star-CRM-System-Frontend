import {Component} from '@angular/core';
import {Student} from "../../models/student";
import {students as data} from "../../data/students";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent {
  students: Student[] = data;
  public modalService: ModalService;


  constructor() {
    this.modalService = new ModalService();
  }
}

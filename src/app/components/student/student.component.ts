import {Component, Input} from '@angular/core'
import {Student} from "../../models/student";
import {ModalService} from "../../services/modal.service"

@Component({
  selector: 'tr[app-student]',
  templateUrl: './student.component.html'
})
export class StudentComponent {
  @Input() student: Student;
  isOpen: boolean = false;
  public modalService: ModalService;

  constructor() {
    this.modalService = new ModalService();
  }

  open(){
    this.isOpen = !this.isOpen;
  }
}

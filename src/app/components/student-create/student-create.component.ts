import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.scss']
})
export class StudentCreateComponent implements OnInit {



  form = new FormGroup({
    name: new FormControl<string>('',[])
  });

  ngOnInit(): void {
  }

  get name() {
    return this.form.controls.name as FormControl;
  }

  submit() {
    console.log(this.name.value);
  }

}

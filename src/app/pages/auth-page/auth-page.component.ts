import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../models/user";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(public auth: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        email: new FormControl(null, [
          Validators.required,
          Validators.email
        ]),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(6)
        ])
      }
    );
  }

  submit(){
    console.log(this.form)
    if(this.form.invalid){
      return;
    }
    this.submitted = true;
    const user: User = {
      returnSecureToken: true,
      email: this.form.value.email,
      password: this.form.value.password
    };

    this.auth.login(user).subscribe(()=>{
      this.form.reset();
      this.router.navigate(['/students']);
      this.submitted = false;
    }, () => this.submitted = false)
  }

}

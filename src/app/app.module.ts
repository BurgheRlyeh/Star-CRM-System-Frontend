import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StudentsPageComponent} from './pages/students-page/students-page.component';
import {AboutPageComponent} from './pages/about-page/about-page.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {StudentComponent} from "./components/student/student.component";
import { StudentModalComponent } from './components/student-modal/student-modal.component';
import { StudentCreateComponent } from './components/student-create/student-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import { StudentInfoComponent } from './components/student-info/student-info.component';
import { StudentTableComponent } from './components/student-table/student-table.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import {AuthService} from "./services/auth.service";
import {SharedModule} from "./shared/shared.module";
import {AuthGuard} from "./services/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    StudentsPageComponent,
    AboutPageComponent,
    NavigationComponent,
    StudentComponent,
    StudentModalComponent,
    StudentCreateComponent,
    StudentInfoComponent,
    StudentTableComponent,
    AuthPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,

  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentsPageComponent} from "./pages/students-page/students-page.component";
import {AboutPageComponent} from "./pages/about-page/about-page.component";
import {AuthPageComponent} from "./pages/auth-page/auth-page.component";
import {AuthGuard} from "./services/auth.guard";

const routes: Routes = [
  {path: '', component: AuthPageComponent},
  {path: 'students', component: StudentsPageComponent, canActivate: [AuthGuard]},
  {path: 'about', component: AboutPageComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

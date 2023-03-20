import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Student} from "../models/student";

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  constructor(
    private http: HttpClient) {
  }

  students: Student[] = [];

  create(student: Student): Observable<Student> {
    return this.http.post<Student>('https://fakestoreapi.com/products', student)
      .pipe(
        tap(student => this.students.push(student))
      );
  }
}

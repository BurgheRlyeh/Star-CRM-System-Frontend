import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, Subject, tap, throwError} from "rxjs";
import {User} from "../models/user";
import {environment} from "../environments/interface";
import {AuthResponse} from "../models/authResponse";

@Injectable()
export class AuthService {

  public error$: Subject<string> = new Subject<string>()

  get token(): string | null{
    // @ts-ignore
    const expDate = new Date(localStorage.getItem('star-token-exp'))
    if (new Date() > expDate){
      this.logout()
      return null
    }
    // @ts-ignore
    return localStorage.getItem('star-token');
  }

  constructor(private http: HttpClient) {

  }

  login(user: User): Observable<any>{
    return this.http.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=
      ${environment.apiKey}`,
      user).pipe(
      // @ts-ignore
      tap(this.setToken),
      // @ts-ignore
      catchError(this.handleError.bind(this))
    );
  }

  private handleError(error: HttpErrorResponse){
    const {message} = error.error.error;

    switch (message){
      case 'EMAIL_NOT_FOUND':
        this.error$.next('Такой Email не найден');
        break;
      case 'INVALID_EMAIL':
        this.error$.next('Неверный Email');
        break;
      case 'INVALID_PASSWORD':
        this.error$.next('Неверный пароль');
        break;
    }

    return throwError(error);

  }

  logout(){
    this.setToken(null);
  }

  isAuthenticated(): boolean{
    return !!this.token;
  }

  private setToken(response: AuthResponse | null){
    if(response) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000)
      localStorage.setItem('star-token', response.idToken);
      localStorage.setItem('star-token-exp', expDate.toString());
    } else{
      localStorage.clear()
    }

  }
}

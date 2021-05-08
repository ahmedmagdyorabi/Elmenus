import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../ViewModels/iusers';
import { tap } from 'rxjs/operators'
import { SharedService } from './shared.service';
import { Router } from '@angular/router';
interface AuthnResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;

}

@Injectable({
  providedIn: 'root',
})
export class AuthnticationService {
  user = new Subject<User>();
  constructor(private http: HttpClient, private sharedService: SharedService, private router: Router) { }

  signUp(email: String, password: String) {

    return this.http.post<AuthnResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyArkAhV-tyPNZQL0pPqydK2NOZaAPFrLnA',

      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    )
      .pipe(tap(resData => {
        this.handleAuthntication(resData.email, resData.idToken, resData.localId, +resData.expiresIn);


      }))
      ;

  }
  private handleAuthntication(email: string, token: string, id: string, expiresData: number) {
    const expireDate = new Date(new Date().getTime() + expiresData * 1000);
    const user = new User(id, email, token, expireDate);
    this.user.next(user);
    localStorage.setItem('authUser', token);
    localStorage.setItem("User", user.email)

  }

  login(email: String, password: String) {

    return this.http.post<AuthnResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyArkAhV-tyPNZQL0pPqydK2NOZaAPFrLnA',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    ).pipe(tap(resData => {
      this.handleAuthntication(resData.email, resData.idToken, resData.localId, +resData.expiresIn);


    }))

  }
  logout() {
    this.user.next(null);
    localStorage.removeItem('authUser');
    localStorage.removeItem('User')
    this.router.navigateByUrl('/Home')
  }

  islogged(): boolean {

    if (localStorage.getItem('authUser'))
      return true;

    else
      return false;


  }
}

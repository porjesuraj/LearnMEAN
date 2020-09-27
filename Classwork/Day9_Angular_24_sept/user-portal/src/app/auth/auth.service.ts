import { HttpClient } from '@angular/common/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  url = 'http://localhost:4000/user'
  constructor(private router : Router,
    private httpClient : HttpClient) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(sessionStorage['token'])
    {
           return true
    }
    else
    {
      this.router.navigate(['/login'])
      return false
    }
  }

login(email:string,password:string)
{
  const body = {
    email: email,
    password : password
  }
  return this.httpClient.post(this.url + '/signin',body)
}

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  isLoggedIn = false;

  s = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  public loginUserToken(token: any) {
    localStorage.setItem('token', token);
    return true;
  }

  public isLogIn() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    return true;
  }

  public getToken(){
    return localStorage.getItem('token');
  }

  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    }
    else{
      this.logout();
      return null;
    }
  }

  public registerUser(user: User): Observable<any> {
    return this.http.post<any>(`${this.s}/user/register`, user);
  }

  public generateToken(loginData: any){
    console.log(loginData);
    return this.http.post<any>(`${this.s}/generate-token`, loginData);
  }

  public searchProducts(query: string){
    return this.http.get(`${this.s}/product/search/${query}`);
  }

  public getProductDetails(productId: any){
    console.log(productId);
    return this.http.get(`${this.s}/product/details/${productId}`);
  }

  public getServiceability(data: any){
    console.log(data);
    return this.http.post(`${this.s}/product/serviceability`, data);
  }


}

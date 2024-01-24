import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../models/user';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg: any;
  user = new User();
  
  constructor(private service: ServicesService, private router: Router) { }

  ngOnInit(): void {
  
  }

  loginUser(){
    localStorage.clear();
   const loginData =  {
      "email": this.user.email,
      "password": this.user.password
    }
   
    this.service.generateToken(loginData).subscribe(
      (data: any)=>{
        

        // sessionStorage.setItem("userFlag","true");
        //login....
        this.service.loginUserToken(data.token);
        window.location.href = '/search';

      },
      (error)=>{
        console.log("Error");
        this.msg = "Please Check Your Email | Password";
      }
    )
    
  }

}

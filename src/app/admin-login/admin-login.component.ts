import { AppComponent } from './../app.component';
import { QuizsService } from './../quizs.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private QuizsService:QuizsService,private router: Router,private app:AppComponent) { }

  ngOnInit(): void {
  }

  admin= new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  })

  login(){
    
    if(this.admin.value['email']=="admin@gmail.com" && this.admin.value["password"] == "admin"){
        this.app.login();
        this.router.navigate(['admin/dashboard'])

    }

  }
}
 

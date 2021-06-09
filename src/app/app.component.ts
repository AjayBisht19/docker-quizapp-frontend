import { QuizsService } from './quizs.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QuizApp';
  admin:boolean;
  ngOnInit(): void {
    this.admin=true;
  }
  constructor(private QuizsService:QuizsService,private router: Router) { }
  logout(){
    this.admin=false;
    this.router.navigate(['']);
  }
  login(){
    this.admin=true;
  }
}

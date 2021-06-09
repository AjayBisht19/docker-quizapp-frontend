import { QuizsService } from './../../quizs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor(private quizService:QuizsService) { }
  collection:{};
  ngOnInit(): void {
    
    this.quizService.getquizs().subscribe((quizs)=>{
        console.log(quizs);
        this.collection=quizs;
    });
  }
  delete(id: any){
    console.log(id);
    this.quizService.deleteQuiz(id).subscribe((result)=>{
      console.log(result);
      // window.location.reload();
      this.ngOnInit();
      })
  }

}

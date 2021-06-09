import { Component, OnInit } from '@angular/core';
import { QuizsService } from "./../../../quizs.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private quizService:QuizsService,private router:ActivatedRoute) { }
  questions:{};
  
  ngOnInit(): void {
    
    this.quizService.getquestions(this.router.snapshot.params.id).subscribe((qs)=>{
      this.questions=qs;
    })
  }

}

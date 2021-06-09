import { ActivatedRoute } from '@angular/router';
import { QuizsService } from './../quizs.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-quiz-attempt',
  templateUrl: './quiz-attempt.component.html',
  styleUrls: ['./quiz-attempt.component.css']
})
export class QuizAttemptComponent implements OnInit {

  constructor(private quizService:QuizsService,private router:ActivatedRoute) { }
  questions:{}
  marks:number;
  len:any;
 
  alert:boolean=false;
  show:boolean=false;
  ngOnInit(): void {
    
    this.quizService.getquestions(this.router.snapshot.params.id).subscribe((qs)=>{
      this.questions=qs;
      console.log(qs)
      this.len= Object.keys(this.questions).length;
      
    });    
      this.marks=0;
  }
  answer= new FormGroup({    
    answer:new FormControl(''), 
    correct:new FormControl('') 
  });
  
  check(){
    console.log(this.answer.value['answer']);
    console.log(this.answer.value['correct']);
    console.log(this.answer.value)
    if(this.answer.value['answer'] == this.answer.value['correct']){
      this.marks++;
    }
    }

    submit(){
      console.log(this.marks);
      var element = <HTMLInputElement>document.getElementById("solution");
      element.classList.add("d-none");
      
      this.alert=true;
      
    }
    review(){
      this.show=true;
      this.alert=false;
      var element = <HTMLInputElement>document.getElementById("solution");
      element.classList.remove("d-none");
    }
}


import { QuizsService } from './../../quizs.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";


@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
  quiz: {};
  qId:number;
  noQ:number;
  quizName:String;
  alert:boolean=false;
 

  constructor(private postService: QuizsService) { }
  addQz = new FormGroup({
    quizName: new FormControl(''),
    noOfQuestions: new FormControl('')
  });

  addQu= new FormGroup({
    question:new FormControl(''),
    op1:new FormControl(''),
    op2:new FormControl(''),
    op3:new FormControl(''),
    op4:new FormControl(''),
    correct:new FormControl('')
  });


  ngOnInit(): void {
  
  }


  arrayOne(n: number): any[] {
    return Array(n);
  }
  
  addQuiz() {
      // this.noQ=0;
    this.postService.saveQuiz(this.addQz.value).subscribe((quiz) => {
      var element = <HTMLInputElement>document.getElementById("addQuiz");
      element.classList.add("d-none");
      this.quiz = quiz;
      this.alert=true;

      this.qId=quiz['id'];
      this.noQ=parseInt(quiz['noOfQuestions']);
      this.quizName=quiz['quizName'];   
    });
  };

  addQuestion(){
    // this.noQ++;
    console.log(this.noQ);
    console.log(this.addQu.value);
    return this.postService.addQuestion(this.qId,this.addQu.value).subscribe((que)=>{
      console.log(que);
    
    })
    
  }

  // setNoQ(){
  //   return this.postService.setNoQ(this.qId,this.noQ).subscribe((result)=>{
  //     console.log(result);
  //     console.log("success till here");
  //   })
  // }
}

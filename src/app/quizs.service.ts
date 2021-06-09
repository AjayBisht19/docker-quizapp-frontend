import { AppComponent } from './app.component';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class QuizsService {
  url="http://3.84.50.226:7010/";
  
  constructor(private http:HttpClient) { }
  getquizs(){
    return this.http.get(this.url+'/admin/dashboard');
  }
  getquestions(id:any){
    return this.http.get(this.url+`/admin/dashboard/${id}`);
  }

  saveQuiz(quiz: any){
    console.log("request sent");
    return this.http.post(this.url+'/admin/addQuiz',quiz);
  }

  deleteQuiz(Id:any){
    console.log("delete request "+Id);
    console.log(this.url+`/admin/delete/${Id}`);
    return this.http.delete(this.url+`/admin/delete/${Id}`);
  }

  addQuestion(id:any,question:any){
    return this.http.post(this.url+`/admin/addQuestion/${id}`,question);
  }

  setNoQ(id:any,noq:any){
    console.log("cant send")
    return this.http.get(this.url+`/admin/addQuizno/${id}/${noq}`)
  }
 
  
  
}

import { AppComponent } from './../app.component';
import { QuizsService } from './../quizs.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  constructor( private qService:QuizsService,private app:AppComponent ) { }
  collection:{};
  
  ngOnInit(): void {
    this.app.logout();
    this.qService.getquizs().subscribe((quizs)=>{
      console.log(quizs);
      this.collection=quizs;    
  });
  }

}

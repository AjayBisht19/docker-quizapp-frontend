import { AdminRoutingModule } from './admin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { QuizComponent } from './dashboard/quiz/quiz.component';
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [DashboardComponent, AddQuizComponent, QuizComponent],
  exports:[
        DashboardComponent,
        AddQuizComponent,
        QuizComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }

import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { QuizComponent } from './dashboard/quiz/quiz.component';


const routes: Routes = [
  {path:'admin',children:[
    {    path:'dashboard',component:DashboardComponent  },
    { path:'add',component:AddQuizComponent},
    {path:'dashboard/:id',component:QuizComponent}
  ]}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../services/user.service';
import { LeaderboardService } from '../services/leaderboard.service';

@Component({
  selector: 'app-quiz',
  standalone: true, // Mark the component as standalone
  imports: [CommonModule, RouterLink],  // Add CommonModule to imports
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  questions = [
    {
      question: 'What is the minimum recommended time for handwashing?',
      options: ['10 seconds', '20 seconds', '30 seconds', '40 seconds'],
      answer: '20 seconds'
    },
    {
      question: 'Which part of the hands is often missed during handwashing?',
      options: ['Palms', 'Fingertips', 'Back of hands', 'Between fingers'],
      answer: 'Between fingers'
    },
    {
      question: 'What is the first step in the handwashing procedure?',
      options: ['Apply soap', 'Rinse hands', 'Wet hands', 'Dry hands'],
      answer: 'Wet hands'
    },
    {
      question: 'When should restaurant staff wash their hands?',
      options: [
        'Before handling food',
        'After handling raw meat',
        'After touching their face',
        'All of the above'
      ],
      answer: 'All of the above'
    }
  ];

  currentQuestionIndex = 0;
  selectedOption: string | null = null;
  score = 0;

  constructor(
    private router: Router,
    private userService: UserService,
    private leaderboardService: LeaderboardService
  ) {}

  selectOption(option: string): void {
    this.selectedOption = option;
  }

  nextQuestion(): void {
    if (this.selectedOption === this.questions[this.currentQuestionIndex].answer) {
      this.score++;
    }
    this.currentQuestionIndex++;
    this.selectedOption = null;
  }

  get quizFinished(): boolean {
    return this.currentQuestionIndex >= this.questions.length;
  }

  finishQuiz(): void {
    const user = this.userService.getUser();
    if (user) {
      this.leaderboardService.addToLeaderboard({
        name: user.name,
        store: user.store,
        score: this.score
      });
    }
    this.router.navigate(['/leaderboard']);
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterLink } from '@angular/router';

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
      question: 'What is the safe minimum internal temperature for cooking fish?',
      options: ['120°F', '135°F', '145°F', '160°F'],
      answer: '145°F'
    },
    {
      question: 'How long can cooked fish be safely stored in the refrigerator?',
      options: ['1 day', '2 days', '3-4 days', '1 week'],
      answer: '3-4 days'
    },
    {
      question: 'What is the best way to thaw frozen seafood?',
      options: ['At room temperature', 'In hot water', 'In the refrigerator', 'In the microwave'],
      answer: 'In the refrigerator'
    },
    {
      question: 'Which of the following is a sign that seafood is fresh?',
      options: ['Strong fishy odor', 'Dull eyes', 'Firm flesh', 'Slimy texture'],
      answer: 'Firm flesh'
    },
    {
      question: 'What is the primary cause of seafood-related foodborne illnesses?',
      options: ['Viruses', 'Bacteria', 'Parasites', 'Toxins'],
      answer: 'Bacteria'
    },
    {
      question: 'How should raw seafood be stored in the refrigerator?',
      options: ['On the top shelf', 'In a sealed container on the bottom shelf', 'Next to cooked food', 'In the freezer'],
      answer: 'In a sealed container on the bottom shelf'
    }
  ];

  currentQuestionIndex = 0;
  selectedOption: string | null = null;
  score = 0;

  selectOption(option: string) {
    this.selectedOption = option;
  }

  nextQuestion() {
    if (this.selectedOption === this.questions[this.currentQuestionIndex].answer) {
      this.score++;
    }
    this.currentQuestionIndex++;
    this.selectedOption = null;
  }

  get quizFinished() {
    return this.currentQuestionIndex >= this.questions.length;
  }
}
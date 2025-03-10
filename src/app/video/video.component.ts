import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  constructor(private router: Router) {}

  startQuiz() {
    this.router.navigate(['/quiz']);
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-leaderboard',
  standalone: true, // Mark the component as standalone
  imports: [CommonModule, RouterLink],  // Add CommonModule to imports
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent {
  leaderboard = [
    { name: 'Alice', score: 10 },
    { name: 'Bob', score: 8 },
    { name: 'Charlie', score: 7 },
    { name: 'Diana', score: 6 },
    { name: 'Eve', score: 5 }
  ];
}
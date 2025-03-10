import { Component } from '@angular/core';
import { LeaderboardService } from '../services/leaderboard.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent {
  leaderboard: { name: string; store: string; score: number }[] = [];

  constructor(private leaderboardService: LeaderboardService) {
    this.leaderboard = this.leaderboardService.getLeaderboard();
  }
}
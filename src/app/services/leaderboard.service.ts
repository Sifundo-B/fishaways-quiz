import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  private readonly storageKey = 'leaderboard';

  constructor() {}

  addToLeaderboard(entry: { name: string; store: string; score: number }): void {
    const leaderboard = this.getLeaderboard();
    leaderboard.push(entry);
    this.saveLeaderboard(leaderboard);
  }

  getLeaderboard(): { name: string; store: string; score: number }[] {
    const data = localStorage.getItem(this.storageKey);
    if (!data) return [];

    const { timestamp, leaderboard } = JSON.parse(data);

    // Clear the leaderboard if 24 hours have passed
    if (Date.now() - timestamp > 24 * 60 * 60 * 1000) {
      localStorage.removeItem(this.storageKey);
      return [];
    }

    // Explicitly define the types of `a` and `b`
    return leaderboard.sort((a: { name: string; store: string; score: number }, b: { name: string; store: string; score: number }) => b.score - a.score); // Sort by score (descending)
  }

  private saveLeaderboard(leaderboard: { name: string; store: string; score: number }[]): void {
    const data = {
      timestamp: Date.now(), // Save the current timestamp
      leaderboard
    };
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }
}
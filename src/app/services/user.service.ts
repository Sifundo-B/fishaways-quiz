import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: { name: string; store: string } | null = null;

  setUser(user: { name: string; store: string }): void {
    this.user = user;
  }

  getUser(): { name: string; store: string } | null {
    return this.user;
  }
}
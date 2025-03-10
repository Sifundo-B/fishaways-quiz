import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-registration',
  standalone: true, // Mark the component as standalone
  imports: [FormsModule, CommonModule], // Add CommonModule to the imports array
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user = { name: '', store: '' };
  stores = ['Famous Brands', 'Polofields', 'Boulders', 'Fourways Mall']; // Example stores

  constructor(private router: Router, private userService: UserService) {}

  onSubmit(): void {
    // Save user data to the service
    this.userService.setUser(this.user);
    // Navigate to the quiz
    this.router.navigate(['/video']);
  }
}
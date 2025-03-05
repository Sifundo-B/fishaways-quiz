import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'; // Add RouterLink
import { CommonModule } from '@angular/common'; // Add CommonModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule], // Add RouterLink and CommonModule
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fishaways-quiz';
}
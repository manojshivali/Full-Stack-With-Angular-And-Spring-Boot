import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome';
import { LoginComponent } from './login/login';
import { MenuComponent } from './menu/menu'; // Added Menu
import { FooterComponent } from './footer/footer'; // Added Footer

@Component({
  selector: 'app-root',
  standalone: true, // newly added
  imports: [RouterOutlet,
    WelcomeComponent, // Imported
    LoginComponent, // Import this
    MenuComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'todo';
}

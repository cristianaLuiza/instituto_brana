import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home';
import { HeaderComponent } from './header/header';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,HomeComponent,HeaderComponent, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('odonto');
}

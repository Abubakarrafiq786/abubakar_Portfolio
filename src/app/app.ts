import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./component/header/header";
import { Hero } from "./component/hero/hero";
import { About } from "./component/about/about";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, About],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('abubakar_Portfolio');
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./component/header/header";
import { Hero } from "./component/hero/hero";
import { About } from "./component/about/about";
import { Skills } from "./component/skills/skills";
import { Projects } from "./component/projects/projects";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, About, Skills, Projects],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('abubakar_Portfolio');
}

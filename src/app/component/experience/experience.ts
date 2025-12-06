import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Experiences {
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
experiences: Experiences[] = [
    {
      company: 'Dynamic Bits',
      position: 'Software Engineer',
      period: 'August 2022 – Nov 2025',
      description: [
        'Developed secure websites using Dotnet Core & Dotnet',
        'Implemented generic exception handling mechanisms',
        'Built MVC applications with multi-layered architecture',
        'Designed UI using HTML, CSS & Bootstrap',
        'Developed single-page applications using Ajax and JavaScript'
      ],
      technologies: ['.NET Core', 'MVC', 'Entity Framework', 'SQL Server', 'Bootstrap', 'JavaScript']
    }
  ];
}

import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
interface Skill {
  name: string;
  icon: string;
}
@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  @ViewChild('skillsSection') skillsSection!: ElementRef;
  @ViewChild('whatIDoSection') whatIDoSection!: ElementRef;
  @ViewChild('skillsHeader') skillsHeader!: ElementRef;
  @ViewChild('skillsGrid') skillsGrid!: ElementRef;

  scrollProgress: number = 0;
  activeSection: number = 0;
  sections: string[] = ['What I Do', 'Skills'];

  skills: Skill[] = [
   { 
      name: '.NET Core',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg'
    },
    { 
      name: 'C#',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'
    },
    { 
      name: 'SQL Server',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg'
    },
    { 
      name: 'Dapper',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg'
    },
    { 
      name: 'PostgreSQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
    },
    { 
      name: 'LINQ',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'
    },
    { 
      name: 'Git/GitHub',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    },
    { 
      name: 'SignalR',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg'
    },
    { 
      name: 'Jquerey',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg'
    },
    { 
      name: 'Docker',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
    },
    { 
      name: 'Ubuntu',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg'
    },
    { 
      name: 'Redis',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg'
    },
    { 
      name: 'Angular 17+',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg'
    },
    { 
      name: 'Visual Studio',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg'
    },
    { 
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    },
    { 
      name: 'Vercel',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg'
    },
    { 
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    { 
      name: 'Bootstrap',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
    },
    {
      name: 'Tailwind CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
    },
    { 
      name: 'HTML5',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    { 
      name: 'CSS3',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
  ];

  ngOnInit(): void {
    this.updateScrollProgress();
  }

  @HostListener('window:scroll',[])
  onWindowScroll(): void {
    this.updateScrollProgress();
    this.updateActiveSection();
  }

  updateScrollProgress(): void {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
    this.scrollProgress = Math.min(scrollPercentage, 100);
  }

  updateActiveSection(): void {
    const scrollPosition = window.pageYOffset + window.innerHeight / 2;

    if (this.whatIDoSection && this.skillsHeader) {
      const whatIDoTop = this.whatIDoSection.nativeElement.offsetTop;
      const skillsTop = this.skillsHeader.nativeElement.offsetTop;

      if (scrollPosition < skillsTop) {
        this.activeSection = 0;
      } else {
        this.activeSection = 1;
      }
    }
  }

  scrollToSection(index: number): void {
    let targetElement: ElementRef | null = null;

    switch(index) {
      case 0:
        targetElement = this.whatIDoSection;
        break;
      case 1:
        targetElement = this.skillsHeader;
        break;
    }

    if (targetElement) {
      targetElement.nativeElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }
}

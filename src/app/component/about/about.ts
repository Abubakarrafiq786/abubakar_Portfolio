import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
 particles = Array.from({ length: 30 }, (_, i) => i + 1);

  // Regular Skills
  skills = [
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: '.NET Core', icon: 'fab fa-microsoft' },
    { name: 'SQL Server', icon: 'fas fa-database' },
    { name: 'TypeScript', icon: 'fab fa-js-square' },
    { name: 'REST APIs', icon: 'fas fa-plug' },
    { name: 'Git', icon: 'fab fa-git-alt' },
  ];

  // AI & Integration Skills
  aiSkills = [
    { name: 'OpenAI GPT', icon: 'fas fa-brain' },
    { name: 'Chatbot Development', icon: 'fas fa-robot' },
    { name: 'AI Integration', icon: 'fas fa-microchip' },
    { name: 'NLP', icon: 'fas fa-comments' },
    { name: 'Machine Learning', icon: 'fas fa-cogs' },
    { name: 'LangChain', icon: 'fas fa-link' },
  ];

  professionalSummary = [
    'Designed and developed web applications using modern technologies including Angular & .NET Core',
    'Built and integrated AI-powered chatbots using OpenAI GPT models and custom NLP solutions',
    'Implemented seamless third-party API integrations for payment gateways, CRM systems, and cloud services',
    'Developed intelligent automation workflows using AI models for data processing and analysis',
    'Created real-time communication features with SignalR and WebSocket integrations',
    'Proven ability to work collaboratively with cross-functional teams and mentor junior engineers'
  ];

  stats = [
    { number: '2+', text: 'Years Experience', icon: 'fas fa-briefcase' },
    { number: '10+', text: 'Projects Completed', icon: 'fas fa-project-diagram' },
    { number: '5+', text: 'AI Integrations', icon: 'fas fa-robot' },
    { number: '100%', text: 'Client Satisfaction', icon: 'fas fa-smile' }
  ];

  ngOnInit() {
    // Component initialization
  }

  ngAfterViewInit() {
    this.initScrollAnimations();
    this.initParallaxEffect();
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  private initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Add staggered animation to children
          const children = entry.target.querySelectorAll('.stat-item, .skill-tag, li');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate-in');
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    // Observe main sections
    setTimeout(() => {
      const sections = document.querySelectorAll('.about-content > *');
      sections.forEach((section) => {
        observer.observe(section);
      });
    }, 100);
  }

  private initParallaxEffect() {
    const aboutSection = document.querySelector('.about-section');
    const imageContainer = document.querySelector('.image-container');

    if (aboutSection && imageContainer) {
      aboutSection.addEventListener('mousemove', (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const rect = (aboutSection as HTMLElement).getBoundingClientRect();
        const x = mouseEvent.clientX - rect.left;
        const y = mouseEvent.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const moveX = (x - centerX) / 50;
        const moveY = (y - centerY) / 50;

        (imageContainer as HTMLElement).style.transform = 
          `rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
      });

      aboutSection.addEventListener('mouseleave', () => {
        (imageContainer as HTMLElement).style.transform = 'rotateY(0deg) rotateX(0deg)';
      });
    }
  }
}

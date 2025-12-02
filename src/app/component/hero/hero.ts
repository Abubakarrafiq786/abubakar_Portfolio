import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
typedText = '';
private roles = [
    'Software Engineer',
    'Full Stack Developer',
    'Problem Solver',
    'Tech Enthusiast'
  ];
  
  // 2. Join them into one long string with the pipe separator
  private fullTextToType = this.roles.join(' | ');
  
  private currentCharIndex = 0;
  private typingInterval: any;
  
  // Parallax properties
  private mouseX = 0;
  private mouseY = 0;

  ngOnInit() {
    this.startTyping();
    this.initParallax();
  }

  ngOnDestroy() {
    if (this.typingInterval) {
      clearTimeout(this.typingInterval);
    }
  }

  private startTyping() {
    this.type();
  }

  private type() {
    // 3. Logic: Type until we reach the end of the full string
    if (this.currentCharIndex < this.fullTextToType.length) {
      
      this.typedText += this.fullTextToType.charAt(this.currentCharIndex);
      this.currentCharIndex++;
      
      // Randomize typing speed slightly for realism (between 50ms and 100ms)
      const randomSpeed = Math.random() * (100 - 50) + 50;
      this.typingInterval = setTimeout(() => this.type(), randomSpeed);
      
    } else {
      // 4. Finished typing the whole list. Wait, then reset.
      this.typingInterval = setTimeout(() => {
        this.resetTyping();
      }, 5000); // Wait 5 seconds before restarting
    }
  }

  private resetTyping() {
    this.typedText = '';
    this.currentCharIndex = 0;
    this.startTyping();
  }

  // ... Keep your existing Parallax, Scroll, and Download logic below ...
  
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    // Your existing parallax code...
    const floatingCard = document.querySelector('.floating-card') as HTMLElement;
    if (floatingCard && window.innerWidth > 768) {
       this.mouseX = (event.clientX / window.innerWidth - 0.5) * 20;
       this.mouseY = (event.clientY / window.innerHeight - 0.5) * 20;
       floatingCard.style.transform = `translate(${this.mouseX}px, ${this.mouseY}px) rotateX(${-this.mouseY * 0.5}deg) rotateY(${this.mouseX * 0.5}deg)`;
    }
  }

  downloadResume() {
  const resumePath = '/ProjectPic/Abubakar_Profile.pdf'; 
  const link = document.createElement('a');
  link.href = resumePath;
  link.download = 'Abubakar_Profile.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  console.log('Resume download initiated.');
  }

  scrollToSection(sectionId: string) {
    // Your existing code...
  }

  onScrollIndicatorClick() {
    // Your existing code...
  }
  
  initParallax() {}
}

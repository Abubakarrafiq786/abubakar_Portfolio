import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
isScrolled = false;
  isMenuOpen = false;
  
  private cursorFollower!: HTMLElement;
  private isMobile = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.checkIfMobile();
    if (!this.isMobile) {
      this.createCursorFollower();
    }
  }

  ngOnDestroy() {
    if (this.cursorFollower) {
      this.cursorFollower.remove();
    }
  }

  checkIfMobile() {
    this.isMobile = window.innerWidth <= 992;
  }

  createCursorFollower() {
    // Create custom cursor element
    this.cursorFollower = this.renderer.createElement('div');
    this.renderer.addClass(this.cursorFollower, 'cursor-follower');
    this.renderer.appendChild(document.body, this.cursorFollower);

    // Get navbar element
    const navbar = this.el.nativeElement.querySelector('.navbar');

    // Track mouse movement on navbar
    this.renderer.listen(navbar, 'mousemove', (e: MouseEvent) => {
      this.renderer.setStyle(this.cursorFollower, 'left', `${e.clientX}px`);
      this.renderer.setStyle(this.cursorFollower, 'top', `${e.clientY}px`);
    });

    // Show cursor when entering navbar
    this.renderer.listen(navbar, 'mouseenter', () => {
      this.renderer.addClass(this.cursorFollower, 'active');
    });

    // Hide cursor when leaving navbar
    this.renderer.listen(navbar, 'mouseleave', () => {
      this.renderer.removeClass(this.cursorFollower, 'active');
    });

    // Add click animation
    this.renderer.listen(navbar, 'click', () => {
      this.renderer.addClass(this.cursorFollower, 'clicked');
      setTimeout(() => {
        this.renderer.removeClass(this.cursorFollower, 'clicked');
      }, 400);
    });

    // Enhanced hover effects for links
    const links = this.el.nativeElement.querySelectorAll('.nav-links a, .logo');
    links.forEach((link: HTMLElement) => {
      this.renderer.listen(link, 'mouseenter', () => {
        this.renderer.setStyle(this.cursorFollower, 'width', '70px');
        this.renderer.setStyle(this.cursorFollower, 'height', '70px');
        this.renderer.setStyle(this.cursorFollower, 'background', 'rgba(102, 126, 234, 0.15)');
      });

      this.renderer.listen(link, 'mouseleave', () => {
        this.renderer.setStyle(this.cursorFollower, 'width', '40px');
        this.renderer.setStyle(this.cursorFollower, 'height', '40px');
        this.renderer.setStyle(this.cursorFollower, 'background', 'transparent');
      });
    });
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  @HostListener('window:resize')
  onResize() {
    this.checkIfMobile();
    
    // Remove cursor on mobile
    if (this.isMobile && this.cursorFollower) {
      this.cursorFollower.remove();
    }
    // Create cursor on desktop
    else if (!this.isMobile && !this.cursorFollower) {
      this.createCursorFollower();
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string) {
    this.isMenuOpen = false;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}

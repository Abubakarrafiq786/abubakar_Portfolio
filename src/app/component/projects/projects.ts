import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Project {
  id: string;
  title: string;
  featured: boolean;
  description: string;
  duration: string;
  role: string;
  technologies: string[];
  bgColor: string;
  textColor: string;
  image: string;
  icon: string;
}
@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  onImageError(event: any, fallbackIcon: string) {
    const target = event.target as HTMLImageElement;
    target.style.display = 'none';
    const iconElement = target.nextElementSibling;
    if (iconElement) {
      (iconElement as HTMLElement).style.display = 'flex';
    }
  }

  projects: Project[] = [
    {
      id: '01',
      title: 'SmartApp360',
      featured: true,
      description: 'POS, Inventory, and Accounts management solution with embedded features to cater to daily retail business operations. Rapid billing, auto purchase orders, payroll, and dynamic reports.',
      duration: '3+ Months',
      role: 'Software Engineer',
      technologies: ['C#', '.NET Core MVC', 'MS SQL', 'jQuery', 'Ajax'],
      bgColor: '#FFB4B4',
      textColor: '#2D1B1B',
      image: 'ProjectPic/POS.png',
      icon: '🛒'
    },
    {
      id: '02',
      title: 'Document Management System',
      featured: true,
      description: 'Streamlines document organization and access for businesses of all sizes. Through centralized storage and intuitive search functionalities, users can efficiently manage, track, and retrieve documents.',
      duration: '3+ Months',
      role: 'Software Engineer',
      technologies: ['.NET 6', 'JavaScript', 'jQuery', 'MS SQL', 'PostgreSQL'],
      bgColor: '#FFB978',
      textColor: '#2D1B1B',
      image: 'ProjectPic/DMS.jfif',
      icon: '📁'
    },
    {
      id: '03',
      title: 'RealTime Chat Application',
      featured: true,
      description: 'Web-based communication platform designed for organizations. Allows real-time text-based conversations and document sharing. Facilitates internal communication and collaboration.',
      duration: '3+ Months',
      role: 'Software Engineer',
      technologies: ['.NET Core', 'SignalR', 'WebRTC', 'Bootstrap', 'JavaScript' ,'jQuery', 'MS SQL' , 'SignalR'],
      bgColor: '#4A6FA5',
      textColor: '#FFFFFF',
      image: 'ProjectPic/ChatAPP.jpg',
      icon: '💬'
    },
    {
      id: '04',
      title: 'Whatsapp Bulk Messenger',
      featured: true,
      description: 'Desktop application built with WPF technology for sending bulk WhatsApp messages. Features visually stunning and interactive user interface with powerful data binding.',
      duration: '3+ Months',
      role: 'Software Engineer',
      technologies: ['WPF', 'C#', '.NET', 'MS SQL'],
      bgColor: '#E8A0BF',
      textColor: '#2D1B1B',
      image: 'ProjectPic/WBM.jpg',
      icon: '📱'
    },
    {
      id: '05',
      title: 'Food Ordering System',
      featured: true,
      description: 'Comprehensive food ordering platform with Stripe payment integration. Offers seamless menu browsing, order placement, and secure online payments.',
      duration: '3+ Months',
      role: 'Software Engineer',
      technologies: ['.NET Core', 'MVC', 'Stripe', 'Bootstrap'],
      bgColor: '#7CB9E8',
      textColor: '#FFFFFF',
      image: 'ProjectPic/FOODOrderingSystm2.webp',
      icon: '🍕'
    }
  ];
  
}

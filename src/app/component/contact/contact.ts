import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
    contactInfo = {
    email: 'workwithabubakarrafique@gmail.com',
    phone: '+92 340 0069437',  
    location: 'Lahore, Punjab, Pakistan'
  };
    socialLinks = [
    { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/Abubakarrafiq786', color: '#333' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/abubakarrafique/', color: '#0077b5' },
    { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://x.com/AbubakarRa32513', color: '#4a4d50ff' } ,
    { name: 'Stack Overflow', icon: 'fab fa-stack-overflow', url: 'https://stackoverflow.com/users/24583097/abubakar-rafiq', color: '#e2ce8dff' } 
  ];
  name = '';
  email = '';
  message = '';
  isSubmitted = false; 
  openWhatsApp() {  
    const phone = '+923400069437'; // Replace with actual number
    const message = 'Hello Abubakar! I came across your portfolio and would like to connect with you.';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
  onSubmit(form: any) {
    if (form.valid) {
      const subject = `Contact from Portfolio - ${this.name}`;
      const body = `Name: ${this.name}\nEmail: ${this.email}\n\nMessage:\n${this.message}`;
      const mailtoUrl = `mailto:${this.contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;  // Opens email client with pre-filled data
      this.isSubmitted = true;
      // Reset form
      this.name = '';
      this.email = '';
      this.message = '';
      form.resetForm();
    }
  }
}

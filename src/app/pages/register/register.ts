import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class RegisterComponent {

  step: number = 1;

  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    country: '',
    userType: '',
    disability: false,
    birthDate: '',
    gender: '',
    interests: [] as string[],
    terms: false
  };

  interestsList = [
    'Vida nocturna',
    'Naturaleza',
    'Cultura',
    'Gastronomía',
    'Deporte',
    'Gratis',
    'Eventos'
  ];

  next() {
    if (this.step < 3) this.step++;
  }

  prev() {
    if (this.step > 1) this.step--;
  }

  toggleInterest(interest: string) {
    if (this.user.interests.includes(interest)) {
      this.user.interests = this.user.interests.filter(i => i !== interest);
    } else {
      this.user.interests.push(interest);
    }
  }

  register() {
    console.log(this.user);
  }
}

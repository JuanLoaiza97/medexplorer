import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class RegisterComponent {

  constructor(private router: Router) {}

  step: number = 1;
  error: string = '';
  success: boolean = false;

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

  // 🔥 LISTA COMPLETA
  interestsList = [
    'Cultura','Turismo','Compras','Entretenimiento','Naturaleza','Familia',
    'Aire libre','Vida nocturna','Gastronomía','Música','Aventura','Educación',
    'Historia','Arte','Eventos','Lujo','Experiencia','Café','Deporte','Salud','Romántico'
  ];

  // 🔥 VALIDACIONES POR PASO
  validateStep(): boolean {
    this.error = '';

    if (this.step === 1) {
      if (!this.user.name || !this.user.email || !this.user.password || !this.user.confirmPassword) {
        this.error = 'Completa todos los campos';
        return false;
      }

      if (this.user.password !== this.user.confirmPassword) {
        this.error = 'Las contraseñas no coinciden';
        return false;
      }
    }

    if (this.step === 2) {
      if (!this.user.phone || !this.user.country || !this.user.userType || !this.user.birthDate || !this.user.gender) {
        this.error = 'Completa todos los campos';
        return false;
      }
    }

    if (this.step === 3) {
      if (this.user.interests.length === 0) {
        this.error = 'Selecciona al menos un interés';
        return false;
      }

      if (!this.user.terms) {
        this.error = 'Debes aceptar los términos';
        return false;
      }
    }

    return true;
  }

  next() {
    if (this.validateStep()) {
      this.step++;
    }
  }

  prev() {
    this.error = '';
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
    if (!this.validateStep()) return;

    console.log('Usuario registrado:', this.user);

    // 🔥 ANIMACIÓN
    this.success = true;

    // 🔥 REDIRECCIÓN
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);
  }
}

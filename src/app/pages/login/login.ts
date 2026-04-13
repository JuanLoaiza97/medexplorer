import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  error: string = '';
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  async login(): Promise<void> {

    if (this.loading) return;

    this.loading = true;
    this.error = '';
    this.cd.detectChanges(); // 🔥 fuerza update UI

    try {

      await this.authService.login(this.email, this.password);

      this.router.navigate(['/']);

    } catch (error: any) {

      console.error('Firebase login error:', error);

      const code = error?.code || '';

      if (
        code === 'auth/invalid-credential' ||
        code === 'auth/wrong-password' ||
        code === 'auth/user-not-found'
      ) {
        this.error = 'Correo o contraseña incorrectos';
      }

      else if (code === 'auth/invalid-email') {
        this.error = 'Correo inválido';
      }

      else if (code === 'auth/too-many-requests') {
        this.error = 'Demasiados intentos. Intenta más tarde';
      }

      else if (code === 'auth/network-request-failed') {
        this.error = 'Error de conexión';
      }

      else {
        this.error = 'No se pudo iniciar sesión';
      }

    } finally {
      this.loading = false;
      this.cd.detectChanges(); // 🔥 clave para destrabar botón
    }
  }
}

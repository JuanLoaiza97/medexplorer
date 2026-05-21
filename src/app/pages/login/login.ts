import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import {
  Router,
  RouterModule
} from '@angular/router';

import {
  AuthService
} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {

  email = '';

  password = '';

  error = '';

  success = '';

  loading = false;

  resetLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  // =========================================
  // LOGIN
  // =========================================

  async login() {

    if (this.loading) return;

    this.loading = true;

    this.error = '';

    try {

      await this.authService.login(
        this.email,
        this.password
      );

      this.router.navigate(['/']);

    } catch (error: any) {

      switch (error.code) {

        case 'auth/invalid-credential':

          this.error =
            'Correo o contraseña incorrectos';

          break;

        case 'auth/network-request-failed':

          this.error =
            'Error de conexión';

          break;

        default:

          this.error =
            'No se pudo iniciar sesión';
      }

    } finally {

      this.loading = false;
    }
  }

  // =========================================
  // RESET PASSWORD
  // =========================================

  async recoverPassword() {

    this.error = '';
    this.success = '';

    if (!this.email) {

      this.error =
        'Ingresa tu correo primero';

      return;
    }

    try {

      this.resetLoading = true;

      await this.authService
        .resetPassword(
          this.email
        );

      this.success =
        'Te enviamos un correo para recuperar tu contraseña';

    } catch(error: any) {

      switch(error.code) {

        case 'auth/user-not-found':

          this.error =
            'No existe una cuenta con ese correo';

          break;

        case 'auth/invalid-email':

          this.error =
            'Correo inválido';

          break;

        default:

          this.error =
            'No pudimos enviar el correo';
      }

    } finally {

      this.resetLoading = false;
    }
  }
}

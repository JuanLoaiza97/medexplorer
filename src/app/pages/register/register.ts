// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { Router } from '@angular/router';

// import { AuthService } from '../../services/auth.service';
// import { UserService } from '../../services/user.service';

// @Component({
//   selector: 'app-register',
//   standalone: true,
//   imports: [FormsModule, CommonModule],
//   templateUrl: './register.html',
//   styleUrl: './register.scss'
// })
// export class RegisterComponent {

//   constructor(
//     private router: Router,
//     private authService: AuthService,
//     private userService: UserService
//   ) {}

//   step = 1;
//   error = '';
//   success = false;
//   loading = false;

//   user = {
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     phone: '',
//     country: '',
//     userType: '',
//     disability: false,
//     birthDate: '',
//     gender: '',
//     interests: [] as string[],
//     terms: false
//   };

//   interestsList = [
//     'Cultura','Turismo','Compras','Entretenimiento','Naturaleza','Familia',
//     'Aire libre','Vida nocturna','Gastronomía','Música','Aventura','Educación',
//     'Historia','Arte','Eventos','Lujo','Experiencia','Café','Deporte','Salud','Romántico'
//   ];

//   validateStep(): boolean {
//     this.error = '';

//     if (this.step === 1) {
//       if (!this.user.email || !this.user.password || !this.user.name || !this.user.confirmPassword) {
//         this.error = 'Completa todos los campos';
//         return false;
//       }

//       if (this.user.password !== this.user.confirmPassword) {
//         this.error = 'Las contraseñas no coinciden';
//         return false;
//       }
//     }

//     if (this.step === 2) {
//       if (!this.user.phone || !this.user.country || !this.user.userType || !this.user.birthDate || !this.user.gender) {
//         this.error = 'Completa todos los campos';
//         return false;
//       }
//     }

//     if (this.step === 3) {
//       if (this.user.interests.length === 0) {
//         this.error = 'Selecciona al menos un interés';
//         return false;
//       }

//       if (!this.user.terms) {
//         this.error = 'Debes aceptar los términos';
//         return false;
//       }
//     }

//     return true;
//   }

//   next() {
//     if (this.validateStep()) this.step++;
//   }

//   prev() {
//     this.error = '';
//     if (this.step > 1) this.step--;
//   }

//   toggleInterest(i: string) {
//     if (this.user.interests.includes(i)) {
//       this.user.interests = this.user.interests.filter(x => x !== i);
//     } else {
//       this.user.interests.push(i);
//     }
//   }

//   async register() {

//   if (!this.validateStep()) return;

//   this.loading = true;
//   this.error = '';

//   try {

//     // ✅ AUTH
//     const credential = await this.authService.register(
//       this.user.email,
//       this.user.password
//     );

//     const uid = credential.user.uid;

//     // ✅ FIRESTORE PROFILE
//     await this.userService.createUser(uid, {
//       name: this.user.name,
//       email: this.user.email,
//       phone: this.user.phone,
//       country: this.user.country,
//       userType: this.user.userType,
//       disability: this.user.disability,
//       birthDate: this.user.birthDate,
//       gender: this.user.gender,
//       interests: this.user.interests
//     });

//     this.success = true;

//     setTimeout(() => {
//       this.router.navigate(['/login']);
//     }, 1500);

//   } catch (error: any) {

//     switch (error.code) {

//       case 'auth/email-already-in-use':
//         this.error = 'Este correo ya está registrado';
//         break;

//       case 'auth/invalid-email':
//         this.error = 'Correo inválido';
//         break;

//       case 'auth/weak-password':
//         this.error = 'Contraseña muy débil';
//         break;

//       default:
//         this.error = 'Error al crear cuenta';
//     }

//   } finally {
//     this.loading = false;
//   }
// }
// }


import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class RegisterComponent {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  step = 1;
  error = '';
  success = false;
  loading = false;

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
    'Cultura',
    'Turismo',
    'Compras',
    'Entretenimiento',
    'Naturaleza',
    'Familia',
    'Aire libre',
    'Vida nocturna',
    'Gastronomía',
    'Música',
    'Aventura',
    'Educación',
    'Historia',
    'Arte',
    'Eventos',
    'Lujo',
    'Experiencia',
    'Café',
    'Deporte',
    'Salud',
    'Romántico'
  ];

  validateStep(): boolean {

    this.error = '';

    // ✅ STEP 1
    if (this.step === 1) {

      if (
        !this.user.email ||
        !this.user.password ||
        !this.user.name ||
        !this.user.confirmPassword
      ) {

        this.error = 'Completa todos los campos';
        return false;
      }

      if (
        this.user.password !==
        this.user.confirmPassword
      ) {

        this.error =
          'Las contraseñas no coinciden';

        return false;
      }
    }

    // ✅ STEP 2
    if (this.step === 2) {

      if (
        !this.user.phone ||
        !this.user.country ||
        !this.user.userType ||
        !this.user.birthDate ||
        !this.user.gender
      ) {

        this.error =
          'Completa todos los campos';

        return false;
      }
    }

    // ✅ STEP 3
    if (this.step === 3) {

      if (
        this.user.interests.length === 0
      ) {

        this.error =
          'Selecciona al menos un interés';

        return false;
      }

      if (!this.user.terms) {

        this.error =
          'Debes aceptar los términos';

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

    if (this.step > 1) {
      this.step--;
    }
  }

  toggleInterest(i: string) {

    if (
      this.user.interests.includes(i)
    ) {

      this.user.interests =
        this.user.interests.filter(
          x => x !== i
        );

    } else {

      this.user.interests.push(i);
    }
  }

  async register() {

    if (!this.validateStep()) return;

    if (this.loading) return;

    this.loading = true;
    this.error = '';

    try {

      // ✅ REGISTRO COMPLETO
      await this.authService.register(
        this.user.email,
        this.user.password,
        {
          name: this.user.name,
          email: this.user.email,
          phone: this.user.phone,
          country: this.user.country,
          userType: this.user.userType,
          disability: this.user.disability,
          birthDate: this.user.birthDate,
          gender: this.user.gender,
          interests: this.user.interests
        }
      );

      this.success = true;

      setTimeout(() => {

        this.router.navigate(['/login']);

      }, 1500);

    } catch (error: any) {

      switch (error.code) {

        case 'auth/email-already-in-use':

          this.error =
            'Este correo ya está registrado';

          break;

        case 'auth/invalid-email':

          this.error =
            'Correo inválido';

          break;

        case 'auth/weak-password':

          this.error =
            'Contraseña muy débil';

          break;

        default:

          this.error =
            'Error al crear cuenta';
      }

      console.error(error);

    } finally {

      this.loading = false;
    }
  }
}

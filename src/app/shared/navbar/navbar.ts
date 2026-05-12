// import { Component } from '@angular/core';
// import { Router, RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { AuthService } from '../../services/auth.service';
// import { Observable } from 'rxjs';

// @Component({
//   selector: 'app-navbar',
//   standalone: true,
//   imports: [RouterModule, CommonModule],
//   templateUrl: './navbar.html',
//   styleUrl: './navbar.scss'
// })
// export class NavbarComponent {

//   user$: Observable<any>;

//   constructor(
//     private authService: AuthService,
//     private router: Router
//   ) {
//     this.user$ = this.authService.user$;
//   }

//   logout() {
//     this.authService.logout().then(() => {
//       this.router.navigate(['/']);
//     });
//   }
// }
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent {

  user$!: Observable<any>;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

    this.user$ = this.authService.user$;

  }

  async logout() {

    await this.authService.logout();

    this.router.navigate(['/']);

  }
}

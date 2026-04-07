
// export class Home {}
import { Component } from '@angular/core';

// Shared
import { NavbarComponent } from '../../shared/navbar/navbar';
import { FooterComponent } from '../../shared/footer/footer';
import { SearchBarComponent } from '../../shared/search-bar/search-bar';

// Features
import { MapComponent } from '../../features/map/map/map';
import { PlacePanelComponent } from '../../features/places/place-panel/place-panel';
import { FiltersComponent } from '../../features/places/filters/filters';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    SearchBarComponent,
    MapComponent,
    PlacePanelComponent,
    FiltersComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {}

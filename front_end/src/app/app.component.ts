import { Component } from '@angular/core';
import {COUNTRIES} from './data/countryMOCK';
import {COUNTRY} from './data/country';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  countries: COUNTRY[] = COUNTRIES;
  title = 'PS7';
  selectedCountry: COUNTRY;

  showStats(country: string) {
    this.selectedCountry  = this.countries.find(theCountry => theCountry.Country === country);
  }

}

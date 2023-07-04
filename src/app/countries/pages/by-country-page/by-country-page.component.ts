import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [],
})
export class ByCountryPageComponent {
  public countriesByName: Country[] = [];
  constructor(private countriesServices: CountriesService) {}

  public searchByCountry(term: string): void {
    this.countriesServices
      .searchCountry(term)
      .subscribe((country) => (this.countriesByName = country));
  }
}

import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [],
})
export class ByCapitalPageComponent {
  public countriesByCapital: Country[] = [];

  constructor(private countriesServices: CountriesService) {}

  public searchByCapital(term: string): void {
    this.countriesServices
      .searchCapital(term)
      .subscribe((country) => (this.countriesByCapital = country));
  }
}

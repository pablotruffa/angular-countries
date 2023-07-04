import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [],
})
export class ByRegionPageComponent {
  public countriesByRegion: Country[] = [];

  constructor(private countriesServices: CountriesService) {}

  public searchByRegion(region: string): void {
    this.countriesServices
      .searchRegion(region)
      .subscribe((countries) => (this.countriesByRegion = countries));
  }
}

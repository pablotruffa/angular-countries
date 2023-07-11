import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [],
})
export class ByCountryPageComponent implements OnInit {
  public countriesByName: Country[] = [];
  public initialValue = '';
  public isLoading: boolean = false;
  constructor(private countriesServices: CountriesService) {}
  ngOnInit(): void {
    if (this.countriesServices.cacheStore.byCapital.countries.length > 0) {
      this.countriesByName =
        this.countriesServices.cacheStore.byCountry.countries;
      this.initialValue = this.countriesServices.cacheStore.byCountry.term;
    }
  }

  public searchByCountry(term: string): void {
    this.isLoading = true;
    this.countriesServices
      .searchCountry(term)
      .subscribe(
        (country) => (
          (this.countriesByName = country), (this.isLoading = false)
        )
      );
  }
}

import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [],
})
export class ByCapitalPageComponent implements OnInit {
  public countriesByCapital: Country[] = [];
  public isLoading: boolean = false;
  public initialValue = '';

  constructor(private countriesServices: CountriesService) {}
  ngOnInit(): void {
    if (this.countriesServices.cacheStore.byCapital.countries.length > 0) {
      this.countriesByCapital =
        this.countriesServices.cacheStore.byCapital.countries;
      this.initialValue = this.countriesServices.cacheStore.byCapital.term;
    }
  }

  public searchByCapital(term: string): void {
    this.isLoading = true;
    this.countriesServices.searchCapital(term).subscribe((country) => {
      this.countriesByCapital = country;
      this.isLoading = false;
    });
  }
}

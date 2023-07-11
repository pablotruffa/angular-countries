import { Component, OnInit, Type } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [],
})
export class ByRegionPageComponent implements OnInit {
  public countriesByRegion: Country[] = [];
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];

  public selectedRegion?: Region;

  constructor(private countriesServices: CountriesService) {}
  ngOnInit(): void {
    if (this.countriesServices.cacheStore.byRegion.countries.length > 0) {
      this.countriesByRegion =
        this.countriesServices.cacheStore.byRegion.countries;
      this.selectedRegion = this.countriesServices.cacheStore.byRegion.region;
    }
  }

  public searchByRegion(region: Region): void {
    this.selectedRegion = region;

    this.countriesServices
      .searchRegion(region)
      .subscribe((countries) => (this.countriesByRegion = countries));
  }
}

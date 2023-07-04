import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TableCountriesComponent } from './components/table-countries/table-countries.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

@NgModule({
  declarations: [
    ByCountryPageComponent,
    ByRegionPageComponent,
    ByCapitalPageComponent,
    TableCountriesComponent,
    CountryPageComponent,
  ],
  imports: [CommonModule, CountriesRoutingModule, SharedModule],
})
export class CountriesModule {}

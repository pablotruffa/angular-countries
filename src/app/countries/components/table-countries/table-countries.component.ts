import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-table',
  templateUrl: './table-countries.component.html',
  styles: [
    `
      img {
        width: 25px;
      }
    `,
  ],
})
export class TableCountriesComponent {
  @Input()
  public countries: Country[] = [];
}

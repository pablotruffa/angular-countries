import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'country-page',
  templateUrl: './country-page.component.html',
  styles: [],
})
export class CountryPageComponent implements OnInit {
  public country!: Country;
  public hasLoaded: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    //throw new Error('Method not implemented.');

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.countriesService.searchByCode(id)))
      .subscribe((country) => {
        if (!country) {
          return this.router.navigateByUrl('');
        }
        return (this.country = country);
      });
  }

  public loaded() {
    this.hasLoaded = true;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, of, map } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private ApiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  public searchCapital(capital: string): Observable<Country[]> {
    const url = `${this.ApiUrl}/capital/${capital}`;
    return this.http.get<Country[]>(url).pipe(
      catchError((error) => {
        return of([]);
      })
    );
  }

  public searchCountry(country: string): Observable<Country[]> {
    const url = `${this.ApiUrl}/name/${country}`;
    return this.http.get<Country[]>(url).pipe(
      catchError((error) => {
        return of([]);
      })
    );
  }

  public searchRegion(region: string): Observable<Country[]> {
    const url = `${this.ApiUrl}/region/${region}`;
    return this.http.get<Country[]>(url).pipe(
      catchError((error) => {
        return of([]);
      })
    );
  }

  public searchByCode(code: string): Observable<Country | null> {
    const url = `${this.ApiUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError((error) => {
        return of(null);
      })
    );
  }
}

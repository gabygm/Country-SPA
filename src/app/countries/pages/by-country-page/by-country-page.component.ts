import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.servive';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent {
  public countries:Country[]  =[]
  constructor(private service: CountryService){}
  @Input() search = ''
  
  searchCountries(term: string): void{
    this.service.searchCountry(term).subscribe(countries =>{
      this.countries = countries
    })
  }

}

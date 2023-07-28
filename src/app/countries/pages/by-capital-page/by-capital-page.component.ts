import { Component, Input } from '@angular/core';
import { CountryService } from '../../services/country.servive';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent {
  public countries: Country[]=[];
  public isLoading: boolean = false

  constructor( private countriesService: CountryService) { }
  @Input() searchText = ''
  
  searchByCapital(term: string):void{
    this.isLoading = true
    this.countriesService.searchCountryBy(term, "capital").subscribe(countries => {
      this.countries = countries
    })
    this.isLoading = false
  }
}

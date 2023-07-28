import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.servive';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent {
  public countries:Country[]  =[]
  constructor(private service: CountryService){}
  public regions: string[] = ['Africa', 'America', 'Asia', 'Europe','Oceania']
  public selectedRegion = ''
  
  searchCountries(term: string): void{
    this.selectedRegion = term
    this.service.searchCountryBy(term, "region").subscribe(countries =>{
      this.countries = countries
    })
  }

}

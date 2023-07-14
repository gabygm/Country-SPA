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
  
  searchCountries(term: string): void{
    this.service.searchRegion(term).subscribe(countries =>{
      this.countries = countries
    })
  }

}

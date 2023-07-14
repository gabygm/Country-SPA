import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CountryService } from '../../services/country.servive';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit {
  public country?: Country
  constructor(
    private activateRoute: ActivatedRoute,
    private service: CountryService,
    private router: Router,
    )
    {}

  ngOnInit(): void {
    this.activateRoute.params
    .pipe(
         switchMap( ({ id }) => this.service.searchCounntryByAlphaCode(id))
      )
    .subscribe( (country)=> {
      if( !country ){
        return this.router.navigateByUrl('')
      }
      return this.country = country  
    })
  }



}

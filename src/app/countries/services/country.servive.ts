import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http"
import { catchError, map, Observable, of } from "rxjs";
import { Country } from '../interfaces/country';

@Injectable({
    providedIn: "root"
})
export class CountryService  {

    private baseUrl: string = "https://restcountries.com/v3.1"

    constructor(private httpClient: HttpClient){ }

    searchCounntryByAlphaCode(query: string): Observable<Country | null> {

        const url = `${this.baseUrl}/alpha/${query}`

        return this.httpClient.get<Country[]>( url )
        .pipe(
            map( countries => countries.length > 0 ? countries[0]: null ),
            catchError(() => of<Country | null>(null))
        );
    }

    searchCapital(query: string): Observable<Country[]>{
        const url = `${this.baseUrl}/capital/${query}`
        return this.httpClient.get<Country[]>(url).pipe(catchError(() => of([])))
    }
    
    searchCountry(query: string): Observable<Country[]>{
        const url = `${this.baseUrl}/name/${query}`
        return this.httpClient.get<Country[]>(url).pipe(catchError(() => of([])))
    }

    searchRegion(query: string): Observable<Country[]>{
        const url = `${this.baseUrl}/region/${query}`
        return this.httpClient.get<Country[]>(url).pipe(catchError(() => of([])))
    }
}
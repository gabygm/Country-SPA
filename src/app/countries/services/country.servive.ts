import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http"
import { catchError, map, Observable, of } from "rxjs";
import { Country } from '../interfaces/country';
import { CacheStore } from "../interfaces/cache-store.inerface";

@Injectable({
    providedIn: "root"
})
export class CountryService  {

    private baseUrl: string = "https://restcountries.com/v3.1"

    constructor(private httpClient: HttpClient){ }

    public cacheStore: CacheStore = {
        byCapital: { term: '', countries: []},
        byCountries: { term: '', countries: []},
        byRegion: { term: '', countries: []}
    }

    searchCounntryByAlphaCode(query: string): Observable<Country | null> {

        const url = `${this.baseUrl}/alpha/${query}`

        return this.httpClient.get<Country[]>( url )
        .pipe(
            map( countries => countries.length > 0 ? countries[0]: null ),
            catchError(() => of<Country | null>(null))
        );
    }
     
    searchCountryBy(query: string, route: string): Observable<Country[]>{
        const url = `${this.baseUrl}/${route}/${query}`
        return this.httpClient.get<Country[]>(url).pipe(catchError(() => of([])))
    }

}
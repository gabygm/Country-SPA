import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http"
import { Observable } from "rxjs";
import { Country } from '../interfaces/country';

@Injectable({
    providedIn: "root"
})
export class CountryService  {

    private baseUrl: string = "https://restcountries.com/v3.1"

    constructor(private httpClient: HttpClient){ }

    searchCapital(query: string): Observable<Country[]>{
        return this.httpClient.get<Country[]>(`${this.baseUrl}/capital/${query}`)
    }

}
import { Component, Input } from "@angular/core";
import { Country } from "../../interfaces/country";

@Component({
    selector: 'country-table',
    templateUrl: './country-table.component.html',
    styleUrls: []
  })
export class CountryTableComponent {
    @Input()
    public countries: Country[] = []
}
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent {
  @Input() searchText = ''
  
  searchByCapital(term: string):void{
    console.log("Desdee capital Page");
    console.log({term});
  }

}

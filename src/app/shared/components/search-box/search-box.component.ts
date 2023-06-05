import { Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = ''

   @Output() 
   public textSearch = new EventEmitter<string>()

   addTextSearch(value: string) {
    this.textSearch.emit(value)
   }

}

import { Component, Input, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent  implements OnInit, OnDestroy{
  private debouncerSuscripion?: Subscription

  ngOnDestroy(): void {
    this.debouncerSuscripion?.unsubscribe()
  }

  ngOnInit(): void {
    this.debouncerSuscripion = this.debounder
    .pipe(
      debounceTime(1000)
    )
    .subscribe(value =>{
      console.log(value);
      
      this.onDebounce.emit(value)
    })
  }
  @Input()
  public placeholder: string = ''
  private debounder: Subject<string> = new Subject<string>;

   @Output() public textSearch = new EventEmitter<string>()
   @Output() public onDebounce = new EventEmitter<string>()

   addTextSearch(value: string) {
    this.textSearch.emit(value)
   }
   onKeyPress(sarchTerm: string){
    this.debounder.next(sarchTerm)
  }
}

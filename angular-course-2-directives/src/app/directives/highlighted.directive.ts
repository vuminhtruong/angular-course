import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[highlighted]',
  standalone: true
})
export class HighlightedDirective {

  constructor() {
    console.log('Directive created...');
  }

  @HostBinding('class.highlighted')
  get cssClasses() {
    return true;
  }

}

import { Directive, Inject, HostListener, Input } from '@angular/core';
import {JQUERY_TOKEN} from './jquery.service';

@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective {

  @Input('modal-trigger') modalId: string;
  constructor(@Inject(JQUERY_TOKEN) private jquery :any ) {
  }

  @HostListener('click') onClick(){
    this.jquery(`#${this.modalId}`).modal({});
  }
}

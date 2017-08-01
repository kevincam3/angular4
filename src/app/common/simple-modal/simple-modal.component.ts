import {Component, ElementRef, Inject, Input, ViewChild} from '@angular/core';
import {JQUERY_TOKEN} from '../jquery.service';

@Component({
  selector: 'simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent {

  @Input() title:string
  @Input() elementId:string;
  //@ViewChild('modalcontainer') containerEl: ElementRef;

  constructor(@Inject(JQUERY_TOKEN) private $: any){}

  closeModal(el: ElementRef){
    this.$(el.nativeElement).modal('hide');
    alert('hello');
  }

}

import { Directive, ElementRef, OnInit, inject } from '@angular/core';

@Directive({
  selector: 'section, div[appSpacing]',
  standalone: true
})
export class SpacingDirective implements OnInit {
  private element = inject(ElementRef).nativeElement as HTMLElement;

  constructor() { }

  ngOnInit(): void {
    this.element.style.padding = '30px';
    this.element.style.paddingBottom = '0px';
  }

}

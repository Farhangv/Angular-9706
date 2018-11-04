import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
  }

  @Input('appHighlight') highlightColor:string;

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight(null);
  }

  highlight(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}

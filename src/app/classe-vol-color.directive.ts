import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appClasseVolColor]',
  standalone: true
})
export class ClasseVolColorDirective implements OnInit {
  @Input('appClasseVolColor') classeVol!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    let color: string;
    switch (this.classeVol) {
      case 'BUSINESS':
        color = 'red';
        break;
      case 'STANDARD':
        color = 'blue';
        break;
      case 'PREMIUM':
        color = 'green';
        break;
      default:
        color = 'black';
    }
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}

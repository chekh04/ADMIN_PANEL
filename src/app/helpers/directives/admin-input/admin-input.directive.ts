import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appAdminInput]'
})
export class AdminInputDirective implements OnChanges{

  @Input() label?: string;
  @Input() placeholder!: string;

  constructor(
    private readonly elementRef: ElementRef,
    private renderer: Renderer2) {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.elementRef)
    // console.log('changes: ',changes)
    if (changes['label']) {
      const { nativeElement } = this.elementRef;
      const { parentElement } = nativeElement;

      nativeElement.placeholder = this.placeholder;

      const wrapper = this.renderer.createElement('div');
      this.renderer.addClass(wrapper,'admin-input-wrapper');
      this.renderer.appendChild(parentElement, wrapper);
      this.renderer.appendChild(wrapper, nativeElement);

      const labelElement = this.renderer.createElement("span");
      const labelText = this.renderer.createText(`${this.label}`);
      this.renderer.appendChild(labelElement, labelText);

      this.renderer.addClass(nativeElement, 'admin-input')
      this.renderer.addClass(labelElement, "admin-input-label");

      this.renderer.insertBefore(wrapper, labelElement, nativeElement);
    }
  }

}

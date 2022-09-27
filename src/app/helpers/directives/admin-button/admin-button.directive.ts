import { Directive, ElementRef, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appAdminButton]'
})
export class AdminButtonDirective implements OnChanges{

  constructor(
    private readonly elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    const { nativeElement } = this.elementRef;
    const { parentElement } = nativeElement;
    console.log(nativeElement)

    nativeElement.style.cssText = `
      width: 100%;
      cursor: pointer;
        background-color: #3751FF;
        margin-top: 25px;
        border: none;
        color: #fff;
        height: 48px;
        font-size: 14px;
        border-radius: 8px;
    `
  }
  public ngOnChanges(changes: SimpleChanges): void {


  }
}

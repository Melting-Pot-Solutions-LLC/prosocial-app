import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
	selector: '[card-mask]',
  host: {
    '(blur)': 'onBlur($event)'
  }
})

export class CardMaskDirective {

	@Input('card-mask') cardMask;
	shownCodeLength: number = 4;
	maskChar: string = 'X'; 

  constructor(private el: ElementRef) {
  }

  ngOnChanges(changes) {
  	if (this.cardMask && !changes.cardMask.previousValue)
  		setTimeout(() => {
  			this.showMask();
  		})
  }

  onBlur($event) {
  	if (this.el.nativeElement.children[0].value)
    	this.showMask();
  }

  showMask() {
  	let cardMask = this.cardMask.toString();
  	if (cardMask.length > this.shownCodeLength)
  		this.el.nativeElement.children[0].value = Array(cardMask.length - this.shownCodeLength + 1).join(this.maskChar) + cardMask.slice(cardMask.length - this.shownCodeLength);
  }
}
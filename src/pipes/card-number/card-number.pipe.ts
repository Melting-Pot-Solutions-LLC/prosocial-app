import { Pipe } from '@angular/core';

@Pipe({
  name: 'cardNumber'
})

export class CardNumberPipe {
  // Hides numbers of the credit card.
  // Input: {{ 11111111111144 | cardNumber:2 }}
  // Output: XXXXXXXXXXXX44
  transform(value, hiddenNumber) {
  	value = value.toString();
		let visibleNumbers = value.slice(-hiddenNumber);
		let hiddenStr = '';
		let hiddenChar = 'X';
		for (let i = 0; i < value.length - hiddenNumber; i++) {
		  hiddenStr += hiddenChar;
		};
    return hiddenStr + visibleNumbers;
  }
}
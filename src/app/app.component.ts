import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tdd-assessement';

  input: string = '';
  result: number = 0;
  error: string = '';

  ngOnInit(): void {}

  calculate() {
    this.error = '';
    let delimiter = /,|\n/;
    let numbers = this.input;

    if (numbers.startsWith('//')) {
      const delimiterEndIndex = numbers.indexOf('\n');
      delimiter = new RegExp(numbers.substring(2, delimiterEndIndex));
      numbers = numbers.substring(delimiterEndIndex + 1);
    }

    const numArray = numbers.split(delimiter).map((n) => parseInt(n, 10));

    const negativeNumbers = numArray.filter((num) => num < 0);
    if (negativeNumbers.length > 0) {
      this.error = `Negatives not allowed: ${negativeNumbers.join(', ')}`;
      this.result = 0;
      return;
    }

    // Sum the numbers and ignore NaN values (for non-numeric parts)
    this.result = numArray.reduce(
      (accum, num) => accum + (isNaN(num) ? 0 : num),
      0
    );
  }
}

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

  calculate() {}
}

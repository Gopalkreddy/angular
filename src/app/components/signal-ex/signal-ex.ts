import { Component, computed } from '@angular/core';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css',
})
export class SignalEx {

  name: string = 'Gopal';
  title: string = 'Hello, Angular Signals!';
  fullTitle: string = computed(() => `${this.title} by ${this.name}`)();
}

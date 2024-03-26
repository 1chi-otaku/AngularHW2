import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

  isOn: boolean = false;

  toggleButton() {
    this.isOn = !this.isOn;
  }
}

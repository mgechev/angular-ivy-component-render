import { Component } from '@angular/core';

@Component({
  selector: 'child',
  template: '<button (click)="notify()">Child</button>'
})
export default class Child {
  notify() {
    alert(42);
  }
}
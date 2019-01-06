import {Component, ɵrenderComponent as renderComponent} from '@angular/core';
import '@angular/compiler';

@Component({
  selector: 'app',
  template: 'Hello, World!'
})
class AppComponent {}

renderComponent(AppComponent);


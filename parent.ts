import {Component, ɵmarkDirty as markDirty} from '@angular/core';

@Component({
  selector: 'parent',
  template: `
  <button (click)="toggle()">Parent {{visible}}</button>
  `,
})
export default class Parent {
  visible = false;
  // constructor(public vcr: ViewContainerRef, public res: ComponentFactoryResolver) {}
  toggle() {
    this.visible = !this.visible;
    markDirty(this);
  }
}

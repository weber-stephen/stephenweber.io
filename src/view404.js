import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
class MyView404 extends PolymerElement {
  static get template() {
    return html`
    <style>
      :host {
        display: block;

        padding: 10px 20px;
      }
    </style>

    Oops you hit a 404. <a href="/">Head back to home.</a>
`;
  }

  static get is() {
      return 'my-view404';
  }
}

window.customElements.define(MyView404.is, MyView404);

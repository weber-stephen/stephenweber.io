import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
class ContactPage extends PolymerElement {
  static get template() {
    return html`
    <style include="shared-styles">
      :host {
        display: block;
        padding: 10px;
      }
      h1 {
        text-align: center;
        margin-bottom: 40px;
      }
      .card {
        max-width: 60%;
        margin: auto;
        padding: 10px;
        background-color: #fff;
        min-width: 300px;
        height: 200px;
      }
      .card p {
          margin: 30px;
          text-align: center;
          color: var(--app-font-color);
      }
      #email-link {
        margin-top: 10px;
      }
    </style>
    <h1>Contact</h1>

    <div class="card">
      <p>Let's talk.<br>Just email me at:</p>
      <p id="email-link"><a href="mailto:me@stephenweber.io">me@stephenweber.io</a></p>
    </div>
`;
  }

  static get is() {
      return 'contact-page';
  }
}

window.customElements.define(ContactPage.is, ContactPage);

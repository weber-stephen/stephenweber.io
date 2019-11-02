import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
class SkillCard extends PolymerElement {
  static get template() {
    return html`
    <style include="shared-styles">

      :host {
        
      }

      .card {
          background-color: #fff;
          width: 260px;
          padding: 10px;
          padding-top: 0;
          position: relative;
      }

        h4 {
            text-transform: uppercase;
            color: var( --app-font-color);
            font-weight: 100;
            text-align: center;
            margin: 0;
            padding-top: 10px;
        }

        .gauge {
            margin: auto;
            display: block;
            width: 12.5rem;
            margin: 20px;
        }

        .mask {
            position: relative;
            overflow: hidden;
            display: block;
            width: 12.5rem;
            height: 6.25rem;
            
        }

        .semi-circle {
            position: relative;
            display: block;
            width: 12.5rem;
            height: 6.25rem;
            background: linear-gradient(to right, #ccc 0%, #97C2E6 50%, #83F4BB 100%);
            border-radius: 50% 50% 50% 50%/100% 100% 0% 0%;
        }
        .semi-circle::before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 50%;
            z-index: 2;
            display: block;
            width: 8.75rem;
            height: 4.375rem;
            margin-left: -4.375rem;
            background: #fff;
            border-radius: 50% 50% 50% 50%/100% 100% 0% 0%;
        }

        .semi-circle--mask {
            position: absolute;
            top: 0;
            left: 0;
            width: 12.5rem;
            height: 12.5rem;
            background: transparent;
            transform: rotate(0deg) translate3d(0, 0, 0);
            transform-origin: center center;
            backface-visibility: hidden;
            transition: transform 1s ease-in-out;
        }
        .semi-circle--mask::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0%;
            z-index: 2;
            display: block;
            width: 12.625rem;
            height: 6.375rem;
            margin: -1px 0 0 -1px;
            background: #f2f2f2;
            border-radius: 50% 50% 50% 50%/100% 100% 0% 0%;
        }

        .percentage {
            color: var( --app-font-color);
            opacity: 0.75;
            width: 100%;
            text-align: center;
            margin-top: -20px;
        }

    </style>

    <div class="card">
        <h4>{{title}}</h4>
        <div class="gauge">
            <div class="mask">
                <div class="semi-circle"></div>
                <div class="semi-circle--mask" id="myGauge"></div>
            </div>
        </div>
        <div class="percentage">{{value}}%</div>
    </div>
`;
  }

  static get is() {
      return 'skill-card';
  }

  static get properties() {
      return {

          title: String,

          value: {
              type: String,
              observer: '_valueChanged'
          }

      }
  }

  _valueChanged(input) {

      this.value = input;

      var deg = 1.8 * parseInt(input);

      this.$.myGauge.style.transform = 'rotate(' + deg + 'deg)';
      this.$.myGauge.style['-webkit-transform'] = 'rotate(' + deg + 'deg)';
      this.$.myGauge.style['-moz-transform'] = 'rotate(' + deg + 'deg)';
  }
}

customElements.define(SkillCard.is, SkillCard);

import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-grid/app-grid-style.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import '@polymer/iron-image/iron-image.js';
class ProductCard extends PolymerElement {
    static get template() {
        return html `
    <style include="shared-styles">

      :host {
        
      }

      .product-card {
        width: 100%;
        padding: 10px;
        padding-top: 0;
        --app-grid-columns: 2;
        /* 50% the width of the item is equivalent to 2:1 aspect ratio*/
        /* --app-grid-item-height: 50%; */
        /* margin-bottom: 100px; */
        height: auto;
      }

        h2 {
            text-transform: uppercase;
            color: var( --app-heading-color);
            font-weight: 400;
            text-align: left;
            margin: 0;
            padding-top: 10px;
        }

        h3 {
            text-transform: uppercase;
            color: var( --app-heading-color);
            font-weight: 100;
            text-align: left;
            margin: 0;
            padding-top: 10px;
            font-size: 0.8rem;
            padding-top: 0;
        }

        iron-image {
            width: 100%;
            height: 100%;
        }

        .product-card .product-description {
            color: var(--app-font-secondary-color);

        }

        .product-card .product-description.odd {
            padding-right: 60px;
        }

        .product-card .product-description.even {
            padding-left: 60px;
        }

        .product-card .product-description h1 {
            
        }

        .product-description p a {
            color: var(--app-primary-color);
        }

        .card {
            position: relative;
            width: 500px;
            height: 306px;
            padding: 0;
            background: transparent;
        }

        .card iron-image {
            width: 100%;
            height: 100%;
        }

        @media (max-width: 600px) {
            .product-card {
                --app-grid-columns: 1;
            }
            .product-card .product-description.even, .product-card .product-description.odd {
                padding: 10px;
            }
        }

    </style>

    <template is="dom-if" if="{{_isEven()}}">
        <div class="product-card app-grid">
            <div class="card">
                <a href\$="{{link}}"><iron-image sizing="cover" src="{{img}}" preload="" fade="" placeholder="{{placeholder}}"></iron-image></a>
            </div>
            <div class="product-description even">
                <h2>{{title}}</h2>
                <h3>{{type}}</h3>
                <p>{{description}}</p>
                
            </div>
        </div>
    </template>

    <template is="dom-if" if="{{_isOdd()}}">
        <div class="product-card app-grid">
                <div class="product-description odd">
                    <h2>{{title}}</h2>
                    <h3>{{type}}</h3>
                    <p>{{description}}</p>
                </div>
                <div class="card">
                    <a href\$="{{link}}"><iron-image sizing="cover" src="{{img}}" preload="" fade="" placeholder="{{placeholder}}"></iron-image></a>
                </div>
            </div>
    </template>
`;
    }

    static get is() {
        return 'product-card';
    }

    static get properties() {
        return {

            title: String,

            type: String,

            img: String,

            placeholder: String,

            link: String,

            description: String,

            index: Number

        }
    }

    _isEven() {
        return this.index % 2 == 0;
    }

    _isOdd() {
        return Math.abs(this.index % 2) == 1;
    }
}

customElements.define(ProductCard.is, ProductCard);
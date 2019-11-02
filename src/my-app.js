/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import './my-icons.js';

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class MyApp extends PolymerElement {
    static get template() {
        return html `
        <style>
          :host {
            
            --app-primary-color: #3BB0E2;
            --app-background-color: #F6F9FC;
            
            --app-secondary-color: #696969;
            --app-header-color: #696969;
            --app-font-color: #696969;
            --app-font-secondary-color: #8898AA;
    
            display: block;
          }
    
            #main-title {
                text-align: center;
                position: absolute;
                left: 0px;
                top: 0px;
                width: 100%;
                font-size: 1.5rem;
                font-weight: 100;
            }
    
            #main-title a {
                text-decoration: none;
                color: var(--app-font-color);
            }
    
            app-drawer-layout:not([narrow]) [drawer-toggle] {
                display: none;
            }
            app-header {
                color: #fff;
                background-color: var(--app-background-color);
            }
    
            app-header paper-icon-button {
                --paper-icon-button-ink-color: #696969;
                color: var(--app-font-secondary-color);
            }
    
            [hidden] {
              display: none !important;
            }
          
            .drawer-list {
                margin: 0 20px;
            }
    
            .drawer-list a {
                display: block;
                padding: 0 16px;
                text-decoration: none;
                color: var(--app-secondary-color);
                line-height: 40px;
            }
    
            .drawer-list a.iron-selected {
                color: #fff;
                background-color: var(--app-primary-color);
            }
    
            #app-drawer-toolbar {
                text-decoration: none;
                color: var(--app-font-color);
            }
            
            footer {
                margin-top: 100px;
                margin-bottom: 20px;
                display: block;
            }
                
            footer #footer-tagline {
                width: 100%;
                text-align: center;
                color: var(--app-font-secondary-color);
            }
            footer #logo-container {
                margin: auto;
                margin-bottom: 60px;
                display: block;
                width: 120px;
            }
            footer #polymer-logo img {
                max-height: 40px;
                margin-right: 10px;
            }
            footer #firebase-logo img {
                max-height: 50px;
            }
        </style>
        
        <app-analytics key="UA-2313560-9"></app-analytics>
    
        <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
        <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}"></app-route>
        
        <iron-media-query query="max-width: 300px" query-matches="{{smallScreen}}"></iron-media-query>
    
        <app-drawer-layout fullbleed="" responsive-width="1000px">
          <!-- Drawer content -->
          <app-drawer id="drawer" slot="drawer">
            <app-toolbar>Menu</app-toolbar>
            <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
                <a name="home" href="[[rootPath]]home">Home</a>
                <a name="products" href="[[rootPath]]products">Products</a>
                <a name="skills" href="[[rootPath]]skills">Skills</a>
                <a name="work" href="[[rootPath]]work">Work</a>
                <a name="contact" href="[[rootPath]]contact">Contact</a>
            </iron-selector>
          </app-drawer>
    
          <!-- Main content -->
          <app-header-layout has-scrolling-region="">
    
            <app-header slot="header" condenses="" reveals="" effects="waterfall">
              <app-toolbar>
                <paper-icon-button icon="my-icons:menu" drawer-toggle="" hidden\$="[[!_shouldShowTabs]]"></paper-icon-button>
                <div main-title="" id="main-title"><a href="/" aria-label="Stephen Weber - Home">Stephen Weber</a></div>
              </app-toolbar>
            </app-header>
    
            <iron-pages selected="[[page]]" attr-for-selected="name" fallback-selection="view404" role="main">
                <home-page name="home"></home-page>
                <products-page name="products"></products-page>
                <skills-page name="skills"></skills-page>
                <work-page name="work"></work-page>
                <contact-page name="contact"></contact-page>
                <my-view404 name="view404"></my-view404>
            </iron-pages>
            
            <footer>
                <div id="footer-tagline">Made with ❤ and Fun Using Google Tech Awesomeness</div>
                <div id="logo-container">
                    <a href="https://www.polymer-project.org/" target="_blank" id="polymer-logo"><img src="images/polymer2-logo.svg"></a>
                    <a href="https://firebase.google.com/" target="_blank" id="firebase-logo"><img src="images/firebase-logo.svg"></a>
                </div>
            </footer>
        </app-header-layout>
        </app-drawer-layout>
    `;
    }

    static get properties() {
        return {
            page: {
                type: String,
                reflectToAttribute: true,
                observer: '_pageChanged'
            },
            routeData: Object,
            subroute: Object
        };
    }

    static get observers() {
        return [
            '_routePageChanged(routeData.page)'
        ];
    }

    _routePageChanged(page) {
        // Show the corresponding page according to the route.
        //
        // If no page was found in the route data, page will be an empty string.
        // Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
        if (!page) {
            this.page = 'home';
        } else if (['home', 'products', 'skills', 'work', 'contact'].indexOf(page) !== -1) {
            this.page = page;
        } else {
            this.page = 'view404';
        }

        // If no page was found in the route data, page will be an empty string.
        // Default to 'home' in that case.
        // this.page = page || 'home';

        // Close a non-persistent drawer when the page & route are changed.
        if (!this.$.drawer.persistent) {
            this.$.drawer.close();
        }
    }

    _pageChanged(page) {
        // Import the page component on demand.
        //
        // Note: `polymer build` doesn't like string concatenation in the import
        // statement, so break it up.
        switch (page) {
            case 'home':
                import ('./home.js')
                break;
            case 'products':
                import ('./products.js');
                break;
            case 'skills':
                import ('./skills.js');
                break;
            case 'work':
                import ('./work.js');
                break;
            case 'contact':
                import ('./contact.js');
                break;
        }
    }
}

window.customElements.define('my-app', MyApp);
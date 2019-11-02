import '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-grid/app-grid-style.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="shared-styles">
    <template>
    <style include="app-grid-style">
        
      h1 {
        color: var(--app-header-color);
        text-transform: uppercase;
        font-weight: 100;
      }
      
      .card {
        background: #fff;
        color: var(--app-font-color);
        font-family: "pt-serif", sans-serif;
        font-size: 18px;
        line-height: 28px;
        box-sizing: border-box;
        padding: 40px;
        position: relative;
        z-index: 1;
        box-shadow: 0 10px 60px rgba(0, 0, 0, 0.14);
        margin-top: 20px;
      }

      .circle {
        display: inline-block;
        width: 64px;
        height: 64px;
        text-align: center;
        color: #555;
        border-radius: 50%;
        background: #ddd;
        font-size: 30px;
        line-height: 64px;
      }

      button {
        border: 0;
        margin: 0;
        padding: 0;
        text-align: inherit;
        text-transform: inherit;
        font: inherit;
        -webkit-font-smoothing: inherit;
        letter-spacing: inherit;
        background: none;
        cursor: pointer;
        overflow: visible;

        border-radius: 6px;
        background-color: #8898AA;
        color: #fff;
        box-sizing: border-box;
        padding: 14px 24px;
        display: inline-block;
        text-transform: uppercase;
        font-weight: 600;
        outline: none;
        transition: background-color 150ms ease;
      }

      button.primary {
        background-color: #3bb0e2;
        box-shadow: 0 10px 60px rgba(0, 0, 0, 0.14);
      }
      button.primary:hover {
        background-color: #32d293;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);

/* shared styles for all views */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
;
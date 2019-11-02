import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import './skill-card.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
class SkillsPage extends PolymerElement {
  static get template() {
    return html`
    <style include="shared-styles">
        h1 {
            text-align: center;
        }
    </style>
    <style include="app-grid-style">
      :host {
        display: block;
        padding: 10px;
      }
      p {
          text-align: center;
          font-size: 1.25em;
          margin: 20px;
          margin-top: 100px;
          color: var(--app-font-color);
          font-weight: 100;
      }
      .skills-wrapper {
        --app-grid-columns: 3;
        --app-grid-gutter: 20px;
        --app-grid-item-height: 50%;
        width: 1000px;
        margin: auto;
      }

      @media (max-width: 850px) {
        .skills-wrapper {
            --app-grid-columns: 2;
            width: 600px;
            margin: auto;
        }
      }

      @media (max-width: 600px) {
        .skills-wrapper {
            --app-grid-columns: 1;
            width: 300px;
            margin: auto;
        }
      }
    </style>

    <h1>Skills</h1>
    <p>My learning is never done, but here is a list of the skills I have learned over my career.</p>
    <div class="skills-wrapper app-grid">
        <template is="dom-repeat" items="{{skills}}">
            <skill-card title="[[item.title]]" value="[[item.value]]"></skill-card>
        </template>
    </div>
`;
  }

  static get is() {
          return 'skills-page';
      }
  // http://jsfiddle.net/twinsin/dhe3sLp7/5/
  static get properties() {
      return {
          skills: {
              type: Array,
              value: [{
                  "title": "Javascript",
                  "value": 90
              }, {
                  "title": "Ionic 1/2",
                  "value": 90
              }, {
                  "title": "Mongo",
                  "value": 90
              }, {
                  "title": "SQL",
                  "value": 90
              }, {
                  "title": "Git",
                  "value": 90
              }, {
                  "title": "Node.js",
                  "value": 90
              }, {
                  "title": "Angular 1/2/4",
                  "value": 90
              }, {
                  "title": "Vue.js",
                  "value": 70
              }, {
                  "title": "UI Design",
                  "value": 70
              }, {
                  "title": "React",
                  "value": 70
              }, {
                  "title": "Robot Framework",
                  "value": 70
              }, {
                  "title": "Polymer",
                  "value": 60
              }, {
                  "title": "GraphQL",
                  "value": 60
              }, {
                  "title": "Google Analytics",
                  "value": 60
              }, {
                  "title": "Sketch",
                  "value": 60
              }, {
                  "title": "Photoshop",
                  "value": 60
              }, {
                  "title": "After Effects",
                  "value": 60
              }, {
                  "title": "Meteor",
                  "value": 60
              }, {
                  "title": "Firebase",
                  "value": 50
              }, {
                  "title": "UX",
                  "value": 50
              }, {
                  "title": "Python",
                  "value": 50
              }, {
                  "title": "Illustrator",
                  "value": 40
              }, {
                  "title": "Java",
                  "value": 40
              }, {
                  "title": "Final Cut",
                  "value": 40
              }, {
                  "title": "Machine Learning",
                  "value": 40
              }, {
                  "title": "C++",
                  "value": 30
              }, {
                  "title": "AWS Solutions",
                  "value": 30
              }, {
                  "title": "Redux",
                  "value": 30
              }, {
                  "title": ".NET",
                  "value": 30
              }, {
                  "title": "Go",
                  "value": 30
              }, {
                  "title": "Swift",
                  "value": 30
              }, {
                  "title": "Objective-C",
                  "value": 30
              }, {
                  "title": "Hadoop",
                  "value": 20
              }, {
                  "title": "Fortran",
                  "value": 10
              }]
          }
      }

  }
}

window.customElements.define(SkillsPage.is, SkillsPage);

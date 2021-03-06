import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
class WorkPage extends PolymerElement {
    static get template() {
        return html `
    <style include="shared-styles">
      :host {
        display: block;
      }
      h1 {
          text-align: center;
          margin-bottom: 100px;
      }
      h3 {
        margin-top: 0;
      }
      .card {
        transition: transform 350ms ease-in-out;
        will-change: transform;
        max-width: 80%;
        margin: auto;
        margin-bottom: 40px;
      }
      .card:first-of-type {
        margin-top: 40px;
      }
      .card h3 {
        text-transform: uppercase;
        font-weight: 100;
        margin-bottom: 0;
      }
      .card p:first-of-type {
        opacity: 0.55;
        margin-top: 0px;
        font-size: 1rem;
      }
      .card ul li {
        padding-bottom: 20px;
      }
      .card ul li strong {
        color: #3bb0e2;
      }
      #awards {
        margin-top: 100px;
      }
      .awards {
        --app-grid-gutter: 20px;
        margin: auto;
        width: 360px;
      }
      .award {
        width: 300px;
      }
      .more {
        text-align: center;
        margin-left: 20px;
        margin-right: 20px;
        margin-bottom: 100px;
      }
    </style>

    <h1>Work</h1>
    <section id="work">
      <div class="card">
        <h3>Manager of Innovation @ Experian</h3>
        <p>Dec 2015 - Present</p>
        <ul>
          <li>Creating more than 10 minimally viable products to test value with customers and create a roadmap for the product team.</li>
          <li>Meeting with our amazing customers to understand, prototype solutions and iterate with them to map our future product roadmap.</li>
          <li>Direct development and guide agile teams to enable faster delivery, higher quality products and consistency.</li>
        </ul>
      </div>

      <div class="card">
        <h3>Lead R&D Developer @ Experian</h3>
        <p>Dec 2015 - Feb 2018</p>
        <ul>
          <li>Developed a prototype hybrid Mobile app (using Ionic2 and Angular2) and through iteration with customers, took it too production. At launch it was already <strong>serving over 1,000 happy customers</strong> – taking a sales process that normally took <strong>a month to 2 minutes</strong>. Increasing sales by removing customer friction.</li>
          <li>Guided teams to use Agile and in some teams <strong>got 3x more done in the same amount of time</strong>.</li>
          <li>Introduced Google Venture inspired <strong>design sprints to find what customers and product owners really wanted to build</strong> and gave the team a clear direction to move towards.</li>
          <li>Designed and developed over <strong>30 different prototypes each year</strong> to solve various customer problems (internal and external). I iterated on these products with various customers in different roles to achieve amazing results.</li>
          <li>Researched new technologies and techniques to bring new possibilities to Experian and then proved them by making proof of concepts and ready to launch products.</li>
          <li>Provided <strong>leadership in technology, standards, Agile methods and ways of improving processes</strong>. Such as using Robot framework to <strong>reduce cost and get 5x more quality in our products</strong> using Automated Testing.</li>
        </ul>
      </div>
      
      <div class="card">
        <h3>Weber LLC</h3>
        <p>Jan 2006 - Present</p>
        <p>
          </p><ul>
            <li>Developed a hybrid mobile app called BabyKit that helps parent’s know what their baby will want next by enabling parents to easily track all the important things for their baby and then uses simple predictive AI to know what the baby will want next. Created a working prototype in a month and then took it to <strong>production in 2 months</strong>. Had over 5,000 active users in 4 months and was successfully generating revenue. Using Ionic2, Angular4, Firebase and Google Compute. <a href="https://www.youtube.com/watch?v=SnCJ6g48EHs">Watch App Video</a></li>
            <li>Developed a hybrid mobile app called <a href="http://quake.stephenweber.io">QuakeShake</a> to help people know what earthquake they just felt easily. I had a working prototype in 3 hours and took it to production in less than a week. Now it’s a successful product with many users. Used Ionic1 and AngularJS</li>
            <li>Lead my team and developed <strong>over 40 different web applications</strong> for startups, corporations, celebrities and international governments. We <strong>continually iterated with the client</strong> and showed the client the functionality and design as it was built to get the crucial feedback to make the best product possible.</li>
            <li>Developed over <strong>30 of rich interactive websites, HTML5 games and applications</strong> for Dr. Seuss, Goosebumps, PBS Kids and many more amazing brands and assisted in design and art direction. Having kids play the games you make and then adjusting them in real-time is just an <strong>amazing experience</strong> that made it personally rewarding.</li>
            <li>Provided Account and Project Management that was flexible and clear. This gave my company a <strong>positively glowing reputation that made word-of-mouth marketing the only marketing my company ever needed</strong>.</li>
          </ul>
        <p></p>
      </div>
      
      <div class="card">
        <h3>Senior UI Engineer @ CalAmp</h3>
        <p>Jun 2015 - Dec 2015</p>
        <p>
          </p><ul>
            <li>Designed and developed <strong>over 6 new features in our main product that increased that products revenue by over 22%</strong>.</li>
            <li>Worked with other programmers remotely to <strong>create our own standards, CI process and best practices to ensure the quality</strong> of our codebase</li>
            <li>While preforming my job I <strong>also designed and developed a new mobile application product</strong> for the VP of technology. Using Ionic and Angular I was able to create, iterate and <strong>get to a final version within 2 months on top of my normal job</strong>.</li> 
            <li>Assisted in the UI and UX improvement of multiple products requested by various product owners. Showed various clickable mockups and prototypes. The prototypes were so useful that many times I was asked to program them.</li>
            <li>Conducted over 12 user testing sessions to gather feedback and increase our various products usability.</li>
          </ul>
        <p></p>
      </div>
      
      <div class="card">
        <h3>Lead Developer @ Advantage USA</h3>
        <p>Sept 2013 - June 2015</p>
        <p>
          </p><ul>
              <li>Helped launch a child company of Advantage’s called Mov-ology to be a product oriented company providing shopping cart abandonment SaaS solutions. So I designed and <strong>developed the front-end, back-end and customer client embed code for the initial working version</strong>. In the process creating a unique tracking technique that later got <strong>patented</strong>.</li>
              <li>Hired a small team to continue to improve the product and using Agile and development best practices we were able to more than double the features of the software in less than 6 months. Eventually having more features than the leading competitor.</li>
              <li>Continued to find related problems that our customers were having and bringing new possible solutions that became features of the product. Eventually these features increased our revenue 33%.</li>
              <li>Later I was additionally tasked with helping SOAP Creative Group (another child company of Advantage’s) to get out of various process, art production, development and business problems that have been stacking up. After 3 months of working with stakeholders to define and establish an Agile process we saw a 3x increase in production.</li>
              <li>Lead SOAP Creative Group’s web developers to teach them best practices, modern development techniques and testing methods. Sometimes taking interns with no development knowledge to a JR. web developer role. Easily increasing our quality and speed 4x over a year period.</li>
              <li>Designed and developed our client performance tracking dashboards using Google Analytics APIs and various other tracking systems (including our own home grown tracking system). This allowed for true clarity on us helping our clients reach their goals and suggest changes and new ideas.</li>
              <li>Meeting with clients continually to evaluate their needs, get feedback, estimate efforts and cost and problem solving. Establishing a great relationship with these clients was absolutely key and I still talk and give advice to many of them today.</li>
          </ul>
        <p></p>
      </div>
      
      <div class="card">
        <h3>Lead Developer @ Wonderverse</h3>
        <p>August 2011 - April 2012</p>
        <ul>
          <li>Took the company from concept art to fully working Facebook game with <strong>over 250,000 users in less than a year</strong>. This included a Flash Actionscript 3.0 MVC front-end and over 30 different back-end APIs using PHP and MongoDB.</li>
          <li>Product was selected as a <strong>finalist in the SXSW accelerator award</strong>.</li>
          <li>By concentrating on the gameplay, using game theory and movie sponsorships we were <strong>able to reach 100,000 users in a few short months</strong>.</li>
          <li>Developed virtual goods and products that could be purchased in game to increase revenue. After several months <strong>34% of our revenue was based on these purchases</strong>.</li>
        </ul>
      </div>
      
      <div class="card">
        <h3>Director of Motion Graphics @ Ignite Health</h3>
        <p>June 2007 - August 2011</p>
        <ul>
          <li>Leading 12 developers and artists we started using the <strong>Agile process</strong> and was able to <strong>increase production</strong> by an average of 62%, <strong>lower revisions</strong> by 27% and <strong>lower defects/bugs</strong> by 39%.</li>
          <li><strong>Planned, designed and developed over 50 different prototypes</strong> for various clients who wanted <strong>bleeding edge ideas</strong>. Many of them turned into full projects that clients wanted.</li>
          <li>Lead effort from different disciplines to create standards in various parts of the organization. For example PSD comp standards, Flash project standards, etc. This enabled teammates to hand off work to each other with very little explanation.</li>
        </ul>
      </div>

      <p class="more">Checkout the other amazing jobs I have had in <a href="https://www.linkedin.com/in/stephenweberprofile/">LinkedIn</a></p>
      
    </section>

    <h1>Awards</h1>
    <section id="awards">
        
        <div class="awards app-grid">
          <div class="award">
            <iron-image src="images/webby.gif"></iron-image>
          </div>
          <div class="award">
            <iron-image src="images/sxsw.gif"></iron-image>
          </div>
          <div class="award">
            <iron-image src="images/fwa.gif"></iron-image>
          </div>
        </div>
    </section>
`;
    }

    static get is() {
        return 'work-page';
    }
}

window.customElements.define(WorkPage.is, WorkPage);
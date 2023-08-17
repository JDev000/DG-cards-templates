import { cardContentConfigs } from './components/card.js';

class CustomCardApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style> 
        :host {
          display: block;
        }
      </style>
      
      ${cardContentConfigs.map(({ title, description, imageUrl, buttonText }) => `
        <custom-card image-url="${imageUrl}" button-text="${buttonText}">
          <div slot="title">${title}</div>
          <div slot="description">${description}</div>
        </custom-card>
      `).join('')}
    `;
  }
}

customElements.define('custom-card-app', CustomCardApp);

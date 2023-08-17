const cardContentConfigs = [
  {
    title: 'DG Philippines',
    description: 'hey developers!, this is our template, and were gonna use this',
    imageUrl: '../assets/meow.jpg',
    buttonText: 'Show Details'
  },
  // Add more card content configurations as needed
];

class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        /* Add your card styles here */
        .card-title, 
        .card-description {
          padding: .4rem;
        }

        .card {
          display: flex;
          flex-direction: column;
          height: 300px;
          width: 300px;
          border: 1px solid #ccc;
          position: relative;
        }
        .card-title {
          font-size: 1.5rem;
          font-weight: bold;
        }
        .card-description {
          font-size: .8rem;
          margin-top: -.5rem;
        }
        .card-image {
          max-width: 100%;
          height: auto;
          position: absolute;
          bottom: 0;
        }
        .card-button {
          width: 95%;
          position: absolute;
          bottom: 0;
          margin: 0.5rem;
          padding: 0.7rem 1rem;
          background-color: rgba(0,0,0,.3);
          color: white;
          border: none;
          border-radius:.2rem;
          cursor: pointer;
          font-size: .8rem;
          z-index: 1;
          fonnt-weight: bold;

      </style>

      <div class="card">
        <div>
          <div class="card-title"><slot name="title"></slot></div>
          <div class="card-description"><slot name="description"></slot></div>
        </div>
        <img class="card-image" src="${this.getAttribute('image-url')}" alt="Card Image">
        <button class="card-button">${this.getAttribute('button-text')}</button>
      </div>
    `;

    const button = this.shadowRoot.querySelector('.card-button');
    button.addEventListener('click', () => {
      this.dispatchEvent(new Event('card-button-click'));
    });
  }
}

customElements.define('custom-card', Card);

export { cardContentConfigs, Card };

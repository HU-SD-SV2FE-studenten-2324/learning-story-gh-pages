import { LitElement, html, css } from 'lit';

export default class HomeContent extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
        padding: 1em;
      }
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`
      <h1>Home Page</h1>
      <p>
        This is the home page.
      </p>
    `;
  }
}

customElements.define('home-content', HomeContent);
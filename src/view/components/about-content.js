import { Router } from '@vaadin/router';
import { LitElement, html, css } from 'lit';
import { BASE } from '../../app';

export default class AboutContent extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 1em;
      }
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  clickHandler() {
    Router.go(`${BASE}/`);
  }

  render() {
    return html`
      <h1>About Page</h1>
      <p>
        This is the about page.
        <button @click=${this.clickHandler}>Back to Home</button>
      </p>
    `;
  }
}

customElements.define('about-content', AboutContent);
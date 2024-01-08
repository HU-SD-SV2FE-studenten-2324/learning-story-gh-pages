import { LitElement, html, css } from 'lit';
import '../components/nav-bar';
import '../components/home-content';

export default class HomePage extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`
      <nav-bar></nav-bar>
      <home-content></home-content>
    `;
  }
}

customElements.define('home-page', HomePage);
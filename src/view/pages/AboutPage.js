import { LitElement, html, css } from 'lit';
import '../components/nav-bar';
import '../components/about-content';

export default class AboutPage extends LitElement {
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
      <about-content></about-content>
    `;
  }
}

customElements.define('about-page', AboutPage);
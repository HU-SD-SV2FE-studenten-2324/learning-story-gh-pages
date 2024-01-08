import { LitElement, html, css } from 'lit';
import { BASE } from '../../app';

export default class NavBar extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        background-color: #eee;
        padding: 1rem;
      }
      ul {
        display: flex;
        list-style-type: none;
        padding: 0;
      }
      li {
        margin-right: 1rem;
      }
      a {
        text-decoration: none;
        color: #000;
      }
      a:hover {
        text-decoration: underline;
      }
    `;
  }

  render() {
    return html`
      <nav>
        <ul>
          <li><a href="${BASE}/">Home</a></li>
          <li><a href="${BASE}/about">About</a></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('nav-bar', NavBar);
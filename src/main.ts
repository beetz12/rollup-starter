import { LitElement, html } from 'lit-element';

class LitMfeElement extends LitElement {
    data: any;
    setData: any;

    static get properties() {
        return {
            data: { type: Object },
            setData: { type: Function },
        };
    }

    constructor() {
        super();
        this.data = { message: 'Hello Test' };
        this.setData = () => { };
    }

    render() {
        return html`
      <div>${JSON.stringify(this.data)}</div>
      <button @click="${this.updateData}">Update Data</button>
    `;
    }

    updateData() {
        const newData = { foo: 'baz' };
        this.setData(newData);
    }
}

customElements.define('lit-mfe-element', LitMfeElement);

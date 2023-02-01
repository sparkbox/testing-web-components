import html from "./utils/html.mjs";

class ClickCounter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = html`<div>current number: <span>0</span></div>

      <button up>click here to go up!</button>
      <button zero>click here to reset!</button>
      <button down>click here to go down!</button>`;

    const upButton = this.querySelector("[up]");
    const downButton = this.querySelector("[down]");
    const zeroButton = this.querySelector("[zero]");
    const countDisplay = this.querySelector("span");

    upButton.onclick = () =>
      (countDisplay.textContent = ++countDisplay.textContent);

    zeroButton.onclick = () => (countDisplay.textContent = 0);

    downButton.onclick = () =>
      (countDisplay.textContent = --countDisplay.textContent);
  }
}

export default { name: "click-counter", element: ClickCounter };

import ClickCounter from "./components/clickCounter.mjs";

[ClickCounter].forEach(({ name, element }) => {
  customElements.define(name, element);
});

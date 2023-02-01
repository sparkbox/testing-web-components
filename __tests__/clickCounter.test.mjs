import ClickCounter from "./../components/clickCounter.mjs";

customElements.define(ClickCounter.name, ClickCounter.element);

describe("ClickCounter", () => {
  let countDisplay, upButton, downButton, zeroButton;

  beforeAll(() => {
    document.body.innerHTML = "<click-counter></click-counter>";

    upButton = document.querySelector("[up]");
    downButton = document.querySelector("[down]");
    zeroButton = document.querySelector("[zero]");
    countDisplay = document.querySelector("span");
  });

  afterEach(() => {
    countDisplay.textContent = "0";
  });

  test("when the up button is clicked, number goes up", () => {
    upButton.click();

    expect(countDisplay.textContent).toBe("1");
  });

  test("when the reset button is clicked, number resets", () => {
    upButton.click();
    zeroButton.click();

    expect(countDisplay.textContent).toBe("0");
  });

  test("when the down button is clicked, number goes down", () => {
    downButton.click();

    expect(countDisplay.textContent).toBe("-1");
  });
});

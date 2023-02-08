import ClickCounter from "./../components/clickCounter.mjs";

customElements.define(ClickCounter.name, ClickCounter.element);

describe("ClickCounter", () => {
  let countDisplay, upButton, downButton, zeroButton;

  beforeAll(() => {
    document.body.innerHTML = "<click-counter></click-counter>";

    upButton = document.querySelector(".add");
    downButton = document.querySelector(".sub");
    zeroButton = document.querySelector(".zero");
    countDisplay = document.querySelector("span");
  });

  afterEach(() => {
    countDisplay.textContent = "0";
  });

  test("when the add button is clicked, the displayed number goes up", () => {
    upButton.click();

    expect(countDisplay.textContent).toBe("1");
  });

  test("when the reset button is clicked, the displayed number resets", () => {
    upButton.click();

    expect(countDisplay.textContent).toBe("1");

    zeroButton.click();

    expect(countDisplay.textContent).toBe("0");
  });

  test("when the subtract button is clicked, the displayed number goes down", () => {
    downButton.click();

    expect(countDisplay.textContent).toBe("-1");
  });
});

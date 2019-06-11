import "jest";
import { Modal } from "./modal";

describe("Tests functionality of modal creation", () => {

  afterEach(() => {
    document.body.innerHTML = "";
  });

  test("if selector is null, modal created in document body", () => {
    const modal = new Modal({
      body: null,
      selector: null,
      title: "",
    });

    const elements = getModalElements("body");
    expect(elements.find((e) => e === null || e === undefined)).toBeFalsy();
  });

  test("if selection has value, create modal within element", () => {
    const parent = document.createElement("div");
    parent.className = "here";
    document.body.appendChild(parent);

    const modal = new Modal({
      body: null,
      selector: ".here",
      title: "",
    });

    const elements = getModalElements(".here");
    expect(elements.find((e) => e === null || e === undefined)).toBeFalsy();
  });

  test("if element with selector does not exist throw Error", () => {
    const parent = document.createElement("div");
    parent.className = "not-here";

    expect(() => new Modal({
      body: null,
      selector: ".here",
      title: "",
    })).toThrow();
  });

  test("if 'body' has value of string, set value of modal body", () => {
    const testValue = "This is a test";

    const modal = new Modal({
      body: testValue,
      selector: null,
      title: "",
    });

    expect(modal.body.innerHTML).toBe(testValue);
  });

  test("if 'body' has value of Element, set value of body to Element", () => {
    const el = document.createElement("button");
    el.innerHTML = "Test";

    const modal = new Modal({
      body: el,
      selector: null,
      title: "",
    });

    expect(modal.body.innerHTML).toBe(el.outerHTML);
  });

  test("if 'title' has value, set value of title", () => {
    const title = "Test";

    const modal = new Modal({
      body: null,
      selector: null,
      title,
    });

    expect(modal.title.innerHTML).toBe(title);
  });

  function getModalElements(parentSelector: string) {

    const elements = Array<Element | null>();

    const modalClasses = [
      ".modal",
      ".modal-dialog",
      ".modal-content",
      ".modal-header",
      ".modal-title",
      ".modal-body",
      ".modal-footer",
    ];

    modalClasses.forEach((c) => {
      elements.push(document.querySelector(`${parentSelector} > ${c}`));
    });

    return elements;
  }
});

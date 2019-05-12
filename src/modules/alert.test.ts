import { Alert } from "./alert";

beforeAll(() => {
  document.body.innerHTML = "<div id='here'></div>";
});

afterEach(() => {
  const testElement = document.querySelector("#here");

  if (testElement === null) {
    throw new Error("An error occured during querying for test element in alert tests");
  }

  testElement.innerHTML = "";
});

test("if element with selector does not exist should throw an Error", () => {

  expect(() =>
    new Alert("#not-here", {
      className: "",
      content: "",
      dismissable: true,
      type: "danger",
    })).toThrow();
});

test("if dismissable is 'true' should create closeButton element", () => {

  const alert = new Alert("#here", {
    className: "",
    content: "",
    dismissable: true,
    type: "danger",
  });

  expect(alert.element.querySelector(".close")).toBeTruthy();
});

test("if dismissable is 'false' should create closeButton element", () => {

  const alert = new Alert("#here", {
    className: "",
    content: "",
    dismissable: false,
    type: "danger",
  });

  expect(alert.element.querySelector(".close")).toBeFalsy();
});

test("if close() is called alert element should not longer exist", () => {
  const alert = new Alert("#here", {
    className: "",
    content: "",
    dismissable: true,
    type: "danger",
  });

  alert.close();

  expect(document.querySelector(".alert")).toBeFalsy();
});

test("if array of strings is given to options.className property then " +
  "given string should be included in classList", () => {
    const alert = new Alert("#here", {
      className: ["test1", "test2"],
      content: "",
      dismissable: true,
      type: "danger",
    });

    expect(document.querySelector(".test1")).toBeTruthy();
    expect(document.querySelector(".test2")).toBeTruthy();
  });

test("if HTMLElement is provided for options.content then " +
  "HTMLElement should be included in the content", () => {
    const testHtmlContent = document.createElement("button");

    const alert = new Alert("#here", {
      className: "",
      content: testHtmlContent,
      dismissable: true,
      type: "danger",
    });

    expect(document.querySelector("button")).toBeTruthy();
  });

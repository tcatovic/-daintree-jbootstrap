export class Alert {

  public options: IAlertOptions;
  public element: HTMLDivElement;

  private parent: Element;

  constructor(selector: string, options: IAlertOptions) {
    this.options = options;
    this.element = document.createElement("div");

    const parent = document.querySelector(selector);

    if (parent === null) {
      throw new Error(`An element with the selector ${selector} does not exist`);
    }

    this.parent = parent;

    this.build();
  }

  public close() {
    this.element.remove();
  }

  protected build() {
    const fragment = document.createDocumentFragment();

    const classNames = Array.isArray(this.options.className) ?
      this.options.className.concat().join(" ") :
      this.options.className;

    this.element.className = `alert alert-${this.options.type} ${classNames}`;
    this.element.setAttribute("role", "alert");

    this.element.innerHTML =
      typeof this.options.content === "string"
        ? this.options.content
        : this.options.content.innerHTML;

    if (this.options.dismissable) {
      this.buildCloseButton();
    }

    fragment.appendChild(this.element);
    this.parent.appendChild(fragment);
  }

  private buildCloseButton() {
    const spanIcon = document.createElement("span");
    spanIcon.innerHTML = "&times;";

    const closeButton = document.createElement("button");
    closeButton.className = "close";
    closeButton.setAttribute("aria-label", "Close");
    closeButton.setAttribute("type", "button");
    closeButton.appendChild(spanIcon);

    closeButton.addEventListener("click", this.close.bind(this));

    this.element.appendChild(closeButton);
  }
}

interface IAlertOptions {
  content: string | Element;
  dismissable: boolean;
  type: AlertType;
  className: string | string[];
}

type AlertType = "info" | "success" | "danger" | "warning";

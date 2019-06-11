"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Alert {
    constructor(selector, options) {
        this.options = options;
        this.element = document.createElement("div");
        const parent = document.querySelector(selector);
        if (parent === null) {
            throw new Error(`An element with the selector ${selector} does not exist`);
        }
        this.parent = parent;
        this.build();
    }
    close() {
        this.element.remove();
    }
    build() {
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
    buildCloseButton() {
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
exports.Alert = Alert;
//# sourceMappingURL=alert.js.map
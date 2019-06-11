"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Modal {
    constructor(options) {
        this.element = document.createElement("div");
        this.dialog = document.createElement("div");
        this.content = document.createElement("div");
        this.header = document.createElement("div");
        this.title = document.createElement("h5");
        this.body = document.createElement("div");
        this.footer = document.createElement("div");
        this.docFrag = document.createDocumentFragment();
        this.parent = document.body;
        this.options = options;
        this.build();
    }
    open() {
    }
    // public onClose(): Promise<IModalResult> {
    //   return new Promise<IModalResult>((resolve) => {
    //     resolve({
    //       canceled: false,
    //       result: "Test",
    //     });
    //   });
    // }
    build() {
        this.locateParent();
        this.setClassNames();
        this.setAttributes();
        this.setElementContent();
        this.appendElements();
    }
    locateParent() {
        if (this.options.selector != null) {
            const queryEl = document.querySelector(this.options.selector);
            if (queryEl === null) {
                throw new Error(`An element with the selector ${this.options.selector} does not exist`);
            }
            this.parent = queryEl;
        }
    }
    setElementContent() {
        this.title.innerHTML = this.options.title;
        if (this.options.body != null) {
            this.body.innerHTML =
                typeof this.options.body === "string"
                    ? this.options.body
                    : this.options.body.outerHTML;
        }
    }
    setClassNames() {
        this.element.className = "modal";
        this.dialog.className = "modal-dialog";
        this.content.className = "modal-content";
        this.header.className = "modal-header";
        this.title.className = "modal-title";
        this.body.className = "modal-body";
        this.footer.className = "modal-footer";
    }
    setAttributes() {
        this.element.setAttribute("role", "dialog");
        this.element.setAttribute("tabindex", "-1");
        this.dialog.setAttribute("role", "document");
    }
    appendElements() {
        this.header.appendChild(this.title);
        this.content.appendChild(this.header);
        this.content.appendChild(this.body);
        this.content.appendChild(this.footer);
        this.dialog.appendChild(this.content);
        this.element.appendChild(this.dialog);
        this.docFrag.appendChild(this.element);
        this.parent.appendChild(this.docFrag);
    }
}
exports.Modal = Modal;
//# sourceMappingURL=modal.js.map
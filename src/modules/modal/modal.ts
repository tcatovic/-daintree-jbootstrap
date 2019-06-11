export class Modal {

  public element = document.createElement("div");
  public dialog = document.createElement("div");
  public content = document.createElement("div");
  public header = document.createElement("div");
  public title = document.createElement("h5");
  public body = document.createElement("div");
  public footer = document.createElement("div");

  private options: IModalOptions;
  private docFrag = document.createDocumentFragment();
  private parent: Element = document.body;

  constructor(options: IModalOptions) {
    this.options = options;

    this.build();
  }

  public open() {

  }

  // public onClose(): Promise<IModalResult> {
  //   return new Promise<IModalResult>((resolve) => {
  //     resolve({
  //       canceled: false,
  //       result: "Test",
  //     });
  //   });
  // }

  private build() {
    this.locateParent();
    this.setClassNames();
    this.setAttributes();
    this.setElementContent();
    this.appendElements();
  }

  private locateParent() {
    if (this.options.selector != null) {
      const queryEl = document.querySelector(this.options.selector);
      if (queryEl === null) {
        throw new Error(`An element with the selector ${this.options.selector} does not exist`);
      }
      this.parent = queryEl;
    }
  }

  private setElementContent() {
    this.title.innerHTML = this.options.title;

    if (this.options.body != null) {
      this.body.innerHTML =
        typeof this.options.body === "string"
          ? this.options.body
          : this.options.body.outerHTML;
    }
  }

  private setClassNames() {
    this.element.className = "modal";
    this.dialog.className = "modal-dialog";
    this.content.className = "modal-content";
    this.header.className = "modal-header";
    this.title.className = "modal-title";
    this.body.className = "modal-body";
    this.footer.className = "modal-footer";
  }

  private setAttributes() {
    this.element.setAttribute("role", "dialog");
    this.element.setAttribute("tabindex", "-1");

    this.dialog.setAttribute("role", "document");
  }

  private appendElements() {
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

interface IModalOptions {
  selector: string | null;
  body: string | Element | null;
  title: string;
}

interface IModalResult {
  canceled: boolean;
  result: any;
}

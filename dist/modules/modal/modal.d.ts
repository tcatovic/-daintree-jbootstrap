export declare class Modal {
    element: HTMLDivElement;
    dialog: HTMLDivElement;
    content: HTMLDivElement;
    header: HTMLDivElement;
    title: HTMLHeadingElement;
    body: HTMLDivElement;
    footer: HTMLDivElement;
    private options;
    private docFrag;
    private parent;
    constructor(options: IModalOptions);
    open(): void;
    private build;
    private locateParent;
    private setElementContent;
    private setClassNames;
    private setAttributes;
    private appendElements;
}
interface IModalOptions {
    selector: string | null;
    body: string | Element | null;
    title: string;
}
export {};

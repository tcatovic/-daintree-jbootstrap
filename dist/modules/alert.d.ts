export declare class Alert {
    options: IAlertOptions;
    element: HTMLDivElement;
    private parent;
    constructor(selector: string, options: IAlertOptions);
    close(): void;
    protected build(): void;
    private buildCloseButton;
}
interface IAlertOptions {
    content: string | Element;
    dismissable: boolean;
    type: AlertType;
    className: string | string[];
}
declare type AlertType = "info" | "success" | "danger" | "warning";
export {};

export interface MenuInterface {
    title: string;
    icon?: string;
    to: string;
    color?: string;
    children?: MenuInterface[];
}
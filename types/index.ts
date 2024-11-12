import { ReactNode } from "react";

export interface ILayout {
    children: ReactNode
}

export interface ICardLink {
    id: string;
    name: string;
    href: string;
}

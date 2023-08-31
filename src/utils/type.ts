import { ReactNode } from "react";

interface GlobalProps {
    className?: string;
    children?: ReactNode;
}


interface Workinterface {
    id?: number;
    _id?: number;
    name?: string;
    prev?: string;
    next?: string;
    challange?: string;
    solution?: string;
}

interface Faqinterface {
    id?: number;
    _id?: number;
    que: string;
    ans: string;
}

interface SiteData {
    works?: Workinterface[];
    faq?: Faqinterface[];
}


export type {
    GlobalProps,
    Faqinterface,
    SiteData
}
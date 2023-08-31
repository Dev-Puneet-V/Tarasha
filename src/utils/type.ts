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

interface Packageinterface{
    _id?: number;
    type: string;
    features: string[];
    price?: number | string;
}

interface SiteData {
    works?: Workinterface[];
    faq?: Faqinterface[];
    packages?: Packageinterface[];
}


export type {
    GlobalProps,
    Faqinterface,
    Packageinterface,
    SiteData
}
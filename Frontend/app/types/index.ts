export interface footerComponentsType{
    title: string;
    content: SingleFooterComponentRowType[];
}
export interface SingleFooterComponentRowType {
    mainTitle?: string;
    title: string;
    to?: string;
}
export interface FilterInterface{
    brand:string[];
    size:string[];
    length:string[];
    color:string[];
    price:string[]
}
  
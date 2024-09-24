import { ReactNode } from "react";

export interface DataArray {
    texto: string;
    clase: string | string[] | { [key: string]: string } | any;
    onPress: () => void; 
    icon?: ReactNode; 
}
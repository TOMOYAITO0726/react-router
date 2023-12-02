import { Page1 } from "../Page1";
import { Page1DetailA } from "../PageDetailA";
import { Page1DetailB } from "../PageDetailB";

export const page1Routes = [
    {
        path:"/",
        exact: true,
        children:<Page1 />   
    },
    {
        path:"/detailA",
        exact: false,
        children:<Page1DetailA /> 
    },
    {
        path:"/detailB",
        exact: false,
        children:<Page1DetailB /> 
    }
];
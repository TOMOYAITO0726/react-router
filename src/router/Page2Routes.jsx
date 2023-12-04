import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const page2Routes = [
    {
        path:"/",
        exact: true,
        children:<Page2 />   
    },
    {
        path:"/:id", //urlパラメータを受け取る時は、:id（パラメータ）と書く
        exact: false,
        children:<UrlParameter /> 
    },
    
];
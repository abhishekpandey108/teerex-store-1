import axios from "axios";

// action constant
export const PRODUCT_LOADING="PRODUCT_LOADING";
export const PRODUCT_ERROR="PRODUCT_ERROR";
export const PRODUCT_SUCESS="PRODUCT_SUCESS";

 export const product_loading=()=>({type:PRODUCT_LOADING})
 export const product_success=(payload)=>({type:PRODUCT_SUCESS ,payload})
 export const product_error=()=>({type:PRODUCT_LOADING})

 export const get_product_request=()=>(dispatch)=>{
          dispatch(product_loading())
     axios.get("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json").then((res)=>{
         dispatch(product_success(res.data))
     }).catch((err)=>{
           dispatch(product_error())
     })
 }

import { SELECTED_PRODUCT, SET_PRODUCTS } from "../contants/actionTypes"

export const setProducts=(products)=>{
return{
    type:SET_PRODUCTS,
    payload: products
}
}

export const selectedProducts=(product)=>{
    return{
        type:SELECTED_PRODUCT,
        payload: product
    }
    } 
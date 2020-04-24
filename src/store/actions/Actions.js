import {ADD_TO_CART,DELETE_FROM_CART} from './Types';


export function addToCart(product,quantity){
return{
    type :ADD_TO_CART,
    product,
    quantity
    
}
}
export function deleteFromCart(index){
    return{
        type :DELETE_FROM_CART,
        index
        
    }
    }
import {ADD_TO_CART} from './Types';
import React from 'react'

export function addToCart(product,quantity){
return{
    type :ADD_TO_CART,
    product,
    quantity
    
}
}
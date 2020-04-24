import {ADD_TO_CART} from '../actions/Types'
export default function cartReducer(state,action){

switch(action.type){
    case  ADD_TO_CART:{
        if(action.quantity==0){
            return state;
        }
        return{
            cart :[
                ...state.cart,
                {product :action.product,
                  quantity : action.quantity}
            ]
        }
    }
       
    default :
    return state;
}

}
import {ADD_TO_CART,DELETE_FROM_CART} from '../actions/Types'
export default function cartReducer(state,action){

switch(action.type){
    case  ADD_TO_CART:{
        if(action.quantity===0){
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
    case  DELETE_FROM_CART:{
        const item_index=action.index;
        const new_state = {...state};
        new_state.cart.splice(item_index,1);

        return  new_state;
    }
       
    default :
    return state;
}

}
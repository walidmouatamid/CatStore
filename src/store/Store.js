import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import cartReducer from './reducers'
import throttle from 'lodash.throttle';


function loadState(){
   try{
    const state= localStorage.getItem('cart');
    
    if(state!==null){
        
        return JSON.parse(state);
    }
   }catch(e){
       //
   }
    return{
        cart:[]
    };
}

function saveState(state){
    console.log("saved...")
    localStorage.setItem('cart',JSON.stringify(state))
}


const store=createStore(cartReducer,loadState(),applyMiddleware(thunk));
store.subscribe(throttle(()=>{saveState(store.getState())},3000))
export default store;
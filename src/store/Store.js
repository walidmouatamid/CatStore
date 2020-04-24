import React from 'react'
import {createStore} from 'redux'
import cartReducer from './reducers'

const initialState={
    cart:[]
};

function reducers(state){
    return state;
}

const store=createStore(cartReducer,initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
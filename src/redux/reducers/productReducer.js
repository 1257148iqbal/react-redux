import { ActionTypes } from '../contants/actionTypes';
const initialState={
    products: [],
}
export const productReducer =(state=initialState, action)=>{
    const {type, payload}=action; 
    switch (type) {
        case ActionTypes.SET_PRODUCTS: 
            return {...state, products:payload}    
        default: 
            return state 
    }
}
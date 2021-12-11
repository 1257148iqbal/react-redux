import { ActionTypes } from '../contants/actionTypes';
const initialState={
    products: [{
        id:1, 
        title:"Dipesh",
        category:"programme"
    }]
}
export const productReducer =(state=initialState, action)=>{
    const {type, payload}=action; 
    switch (type) {
        case ActionTypes.SET_PRODUCTS: 
            return state    
        default: 
            return state 
    }
}
import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../Constants/CartConstants";

export const CartReducer=(state={cartItems:[]},action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            const item=action.payload;
            const existItem=state.cartItems.find(c=>c.id===item.id);
            if(existItem){
                return {
                    ...state,
                    cartItems:state.cartItems.map(c=>
                        c.id===existItem.id ? item : c)
                }
            }
            else{
                return {
                    ...state,
                    cartItems:[...state.cartItems,item]}
            }
            case REMOVE_FROM_CART:
                return {
                    ...state,
                    cartItems:state.cartItems.filter(c=>c.id!==action.payload)
                }
            case CLEAR_CART:
                return { ...state,cartItems:[] }
        default:
            return state;
    }      
}


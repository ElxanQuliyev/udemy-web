import axios from "axios"
import { BASE_URL } from "../../api/BaseConfig"
import { ADD_TO_CART,REMOVE_FROM_CART } from "../Constants/CartConstants";

export const AddToCart=(id,qty)=>async(dispatch,getState)=>{
    
    const { data }=await axios.get(`${BASE_URL}api/course/${id}`);
    const product={
        id:data.courseId,
        name:data.courseName,
        price:data.price,
        discount:data.discount,
        photoUrl:data.photoUrl,
        quantity:qty,
    } 

    dispatch({type:ADD_TO_CART,payload:product})
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart=(id)=>(dispatch,getState)=>{
    dispatch({type:REMOVE_FROM_CART,payload:id})
}
import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { AddToCart, ClearCart, removeFromCart } from "../Redux/Action/CartAction";
const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart=(id,simbol)=>{
    const findItem=cartItems.length>0?cartItems.find(ct=>ct.id===id):null;
    const quantity=findItem ? findItem.quantity + simbol : 1;
    if(quantity===0){
        dispatch(removeFromCart(id))
    }else{
        dispatch(AddToCart(id,quantity))
    }
  }
//   const handleRemoveFromCart=(id)=>{
//     const findItem=cartItems.length>0?cartItems.find(ct=>ct.id===id):null;
//     const quantity=findItem ? findItem.quantity - 1 : 1;
//     dispatch(AddToCart(id,quantity))
//   }
  return (
    <div>
      <Container>
        {cartItems.length > 0 ? (
          <Grid mt={5} container spacing={2}>
            <Grid item xs={8}>
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>qty</th>
                    <th>Price </th>
                    <th>Sub Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems?.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img width={150} src={item.photoUrl} alt={item.name} />
                      </td>
                      <td>{item.name}</td>
                      <td className="d-flex justify-content-center">
                        <button onClick={()=>dispatch(handleAddToCart(item.id,-1))} className="btn btn-lg">-</button>
                        <input style={{width:"40%"}} className="form-control" 
                            type="number" value={item.quantity} />
                        <button onClick={()=>dispatch(handleAddToCart(item.id,1))} className="btn btn-lg">+</button>
                      </td>
                      <td>
                        {item.discount ? (
                          <>
                            <del>{item.price}</del> <span>{item.discount}</span>{" "}
                            AZN
                          </>
                        ) : (
                          <span>{item.price} AZN</span>
                        )}
                      </td>
                      <td>
                        {(
                          (item.discount > 0 ? item.discount : item.price) *
                          item.quantity
                        ).toFixed(2)}
                      </td>
                      <td onClick={() => dispatch(removeFromCart(item.id))}>
                        <DeleteOutlineOutlinedIcon sx={{ color: "red" }} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Grid>
            <Grid item xs={4}>
              <div className="text-center card p-5">
                <h5>
                  Total :
                  {cartItems.reduce(
                    (total, item) =>
                      total +
                      (item.discount > 0 ? item.discount : item.price) *
                        item.quantity,
                    0
                  )}
                  Azn
                </h5>
                <hr />
                <button className="btn my-3 btn-success w-100">Purchase</button>
                <button
                  onClick={() => dispatch(ClearCart())}
                  className="btn btn-outline-danger"
                >
                  Remove all Cart
                </button>
              </div>
            </Grid>
          </Grid>
        ) : (
          <div className="cart">
            <p className="alert alert-danger">Cart is Empty</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Cart;

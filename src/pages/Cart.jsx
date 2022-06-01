import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div>
      <Container>
        <Grid mt={5} container spacing={2}>
          <Grid item xs={8}>
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
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
                    <td>
                      {item.discount ? (
                        <>
                          <del>{item.price}</del>{" "}
                          <span>{item.discount}</span> AZN
                        </>
                      ) : (
                        <span>{item.price} AZN</span> 
                      )}
                    </td>
                    <td>
                        <DeleteOutlineOutlinedIcon sx={{ color:"red" }}/>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Grid>
          <Grid item xs={4}>
            <h4>HI</h4>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Cart;

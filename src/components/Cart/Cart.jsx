import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useCartContext } from "../../context/CartContext";
import './Cart.css';

const Cart = () => {
  const { cart } = useCartContext()

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>image</TableCell>
            <TableCell>name</TableCell>
            <TableCell>model</TableCell>
            <TableCell>price</TableCell>
            <TableCell>total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.items.map((item) => (
            <TableRow key={item.id}>
              <TableCell><img src={item.image} /></TableCell>
              <TableCell>name: {item.name}</TableCell>
              <TableCell>model: {item.model}</TableCell>
              <TableCell>price: $ {item.price}</TableCell>
              <TableCell>Total: $ {item.price * item.quantity}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell>
              TOTAL: $ {cart.total}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Cart;
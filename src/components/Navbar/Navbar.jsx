import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import CartWiget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
        <Typography sx={{ color: "black" }}>
          Tienda OnLine
        </Typography>
        <Button component={NavLink} to="/" sx={{ backgroundColor: "white" }}>Home</Button>
        <Button component={NavLink} to="/products" sx={{ color: "white" }}>Products</Button>
        <Button component={NavLink} to="/categories" sx={{ color: "white" }}>Categories</Button>
        <NavLink to="/cart">
          <CartWiget />
        </NavLink>
      </Toolbar>
    </AppBar>);
}

export default Navbar;
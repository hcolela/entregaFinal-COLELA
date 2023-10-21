import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from '../../context/CartContext';
import { Typography } from '@mui/material';

const CartWiget = () => {
  const { cart } = useCartContext();
  return ( 
    <div>
      <ShoppingCartIcon />
      <Typography>{cart.items.length}</Typography>
    </div>  
  );
}
 
export default CartWiget;
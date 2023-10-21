import { Modal } from "@mui/material";
import './ProductModalInfo.css';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ProductsCount from "../common/ProductsCount";
import { useState } from "react";
//importar el contexto para addToCart.
import { useCartContext } from "../../context/CartContext";



const ProductModalInfo = ({ products, open, setOpen }) => {
  const { image, name, model, price, isAnnOffer, available } = products
  const [quantityInCart, setQuantityInCart] = useState(0)
  

  //Función para cerrar el modal. La lógica viene del hook de ProductDetail.jsx.
  const modalControl = () => {
    setOpen((prev) => !prev)
  }

  const { addToCart } = useCartContext()

  const handleAddToCart = (counter) => {

    setQuantityInCart(counter);

    if (counter > 0) {
      addToCart({
        name, image, model, price, quantity: counter
      })
    }
  }

  return (
    <>
      <Modal open={open} onClose={modalControl} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <div className="modal-container">
          <img src={image} />
          <h2>{name}</h2>
          <p>{model}</p>
          <p>${price}</p>
          {isAnnOffer && (<> <LocalOfferIcon /> 3 cuotas sin interés </>)}
          <ProductsCount 
            available={available}
            onAdd={handleAddToCart}
            initial={quantityInCart} />
        </div>
      </Modal>
    </>
  );
}

export default ProductModalInfo;
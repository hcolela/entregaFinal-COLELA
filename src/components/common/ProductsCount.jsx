import { useState } from "react";
import "./ProductsCount.css";
const ProductsCount = ({ available, onAdd, initial }) => {
  const [counter, setCounter] = useState(initial)

  const increment = () => {
    if (counter < available) {
      setCounter(counter + 1);
    }
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleAddToCart = () => {
    if (counter > 0) {
      onAdd(counter);
    }
  };

  return (
    <>
      <div>
        <button onClick={decrement}>-</button>
        <span>{counter}</span>
        <button onClick={increment}>+</button>
        <button onClick={handleAddToCart}>agregar al carrito</button>
      </div>
    </>
  );
}

export default ProductsCount;
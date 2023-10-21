import { Card, CardContent, Grid, Typography } from "@mui/material";
import './ProductDetail.css';
import { useEffect, useState } from "react";
import ProductModalInfo from "./ProductModalInfo";
import { collection, getDocs, getFirestore, limit, query } from 'firebase/firestore';

const ProductDetail = ({ products }) => {
  const { id, image, name, model, category, price } = products
  
  const [ productSelected, setProductSelected ] = useState (false)

  //Función para abrir el modal.
  const handleModalControl = () => {
    setProductSelected((prev)=>!prev)
  }

  return (<>
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className="card-products-container" onClick={handleModalControl}>
        <img src={image} />
        <CardContent>
          <Typography>{id}</Typography>
          <Typography>{name}</Typography>
          <Typography>{model}</Typography>
          <Typography>{category}</Typography>
          <Typography sx={{ fontSize:'16px' }}>${price.toFixed(2)}</Typography>
        </CardContent>
      </Card>
    </Grid>
    {
      productSelected && 
      <ProductModalInfo products={products} open={productSelected} setOpen={setProductSelected}  />}
    </>
  );
}
 
export default ProductDetail;
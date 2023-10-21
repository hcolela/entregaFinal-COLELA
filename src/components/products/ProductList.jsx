import { CircularProgress, Grid, Typography } from "@mui/material";
import useAsyncMock from "../../hooks/useAsyncMock";
import products from "../../mocks/products.json";
import ProductDetail from "./ProductDetail";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, limit } from "firebase/firestore";

const ProductList = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] =useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async() =>{
      const db = getFirestore();
      const querySnapshot = await getDocs(collection(db, 'products'))
      const newData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      setData(newData)
      setLoading(false)
    }

    fetchData()

  },[])



  /* const { data, loading } = useAsyncMock(products) */
  if(loading) return <CircularProgress /> 

  return (
    <div className="container">
      <Typography variant="h4" style={{ color: "black" }} mt={12} mb={3} align="center">
        Products
      </Typography>
      <Grid container spacing={3}>
        {
          data.map((products)=>{
            return(
              <ProductDetail key={products.id} products={products}>
                
              </ProductDetail>
            )
          })
        }
      </Grid>
    </div>
  );

}
 
export default ProductList;
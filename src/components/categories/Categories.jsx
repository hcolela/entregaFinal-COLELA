import { Card, CardContent, CircularProgress, Typography } from "@mui/material";
import useAsyncMock from "../../hooks/useAsyncMock";
import categories from "../../mocks/categories.json";
import { Link } from "react-router-dom";
import './Categories.css';

const Categories = () => {
  
  const { data, loading } = useAsyncMock(categories)
  
  if(loading) return <CircularProgress />
  
  return (
    <div className="container" >
      <Typography variant="h4" style={{ color: "black" }} mt={10} mb={3} align="center" >
        Categories
      </Typography>
      {
        data.map((categories)=>{
          return(
            <div className="categories-container" key={categories.id}>
              <Card sx={{ width:'200px', height:'100px', display:'flex', alignItems:'center'}} >
                <CardContent sx={{ textDecoration:'none', textAlign:'center' }} component={Link} to={`/category/${categories.category}`}>
                  <Typography sx={{ fontSize:'20px' }} >{categories.category}</Typography>
                </CardContent>
              </Card>
            </div>
          )
        })
      }
    </div>
  );
}

export default Categories;
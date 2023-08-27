import React, { useEffect, useState } from "react";
import { fetchItemDetail } from "../API/itemsAPI";
import { useParams, useNavigate } from "react-router-dom";
import { Grid, CircularProgress, Breadcrumbs, IconButton } from "@mui/material";
import { useTheme } from "@mui/system";
import ProductImage from "../components/ProductImage";
import ProductDetails from "../components/ProductDetails";
import ProductActions from "../components/ProductActions";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";
import FullProductDetails from "../components/FullProductDetails";

const PDP = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState([]);

  const theme = useTheme();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    console.log("Added to cart:", item);
  };

  useEffect(() => {
    fetchItemDetail(id)
      .then((data) => {
        setItem(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the data:", error);
        setIsLoading(false);
      });
  }, [id]);
  console.log(item);
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", margin: "20px 0" }}>
        <IconButton onClick={() => navigate(-1)} color="primary">
          <ArrowBackIcon />
        </IconButton>
        <Breadcrumbs aria-label="breadcrumb">
          <IconButton onClick={() => navigate("/")}>
            <HomeIcon fontSize="small" />
          </IconButton>
          <span>{`${item.brand} ${item.model}`}</span>
        </Breadcrumbs>
      </div>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress size={80} />
        </div>
      ) : (
        <Grid container spacing={12} sx={{ padding: theme.spacing(2) }}>
          <Grid item xs={12} md={4}>
            <ProductImage
              imageUrl={item.imgUrl}
              alt={`${item.brand} - ${item.model}`}
              price={item.price}
              brand={item.brand}
              model={item.model}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <ProductDetails product={item} />
            <ProductActions product={item} handleAddToCart={handleAddToCart}  />
          </Grid>
          <Grid item xs={12} style={{ marginTop: "20px" }}>
            <FullProductDetails product={item} style={{ width: "100%" }} />
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default PDP;

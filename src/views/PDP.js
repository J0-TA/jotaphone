import React, { useEffect, useState } from "react";
import { useAppContext } from "../AppContext";
import { fetchItemDetail, submitItemtoCart } from "../API/itemsAPI";
import { useParams } from "react-router-dom";
import { Grid, CircularProgress } from "@mui/material";
import { useTheme } from "@mui/system";
import ProductImage from "../components/ProductImage";
import ProductDetails from "../components/ProductDetails";
import ProductActions from "../components/ProductActions";
import FullProductDetails from "../components/FullProductDetails";

const PDP = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState([]);
  const { setSelectedBrand, setSelectedModel, updateCartCount } = useAppContext();

  const handleItemSelection = (brand, model) => {
    setSelectedBrand(brand);
    setSelectedModel(model);
  };
  const theme = useTheme();
  const { id } = useParams();

  const handleAddToCart = async (item) => {
    const newCartItemsCount = await(submitItemtoCart(item));
    updateCartCount(newCartItemsCount);
  };

  useEffect(() => {
    fetchItemDetail(id)
      .then((data) => {
        setItem(data);
        setIsLoading(false);
        handleItemSelection(data.brand, data.model);
      })
      .catch((error) => {
        console.error("There was an error fetching the data:", error);
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
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
            <ProductActions product={item} handleAddToCart={handleAddToCart} />
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

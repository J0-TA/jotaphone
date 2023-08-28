import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Card,
  CardContent
} from "@mui/material";

const ProductActions = ({ product, handleAddToCart, disableButton }) => {
  const { options } = product;
  const [storage, setStorage] = useState(
    options.storages.length === 1 ? options.storages[0].name : ""
  );
  const [color, setColor] = useState(
    options.colors.length === 1 ? options.colors[0].name : ""
  );

  const handleStorageChange = (event) => {
    setStorage(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleCartClick = () => {
    if (storage && color) {
      const colorOption = options.colors.find(option => option.name === color);
      const storageOption = options.storages.find(option => option.name === storage);

      handleAddToCart({
        id: product.id,
        colorCode: colorOption.code,
        storageCode: storageOption.code
      });
    } else {
      alert("Please select both storage and color.");
    }
  };

  return (
    <Card elevation={3} sx={{ margin: "0 auto", width: "65%", marginTop: '20px' }}>
      <CardContent>
        <Box sx={{ marginBottom: 2 }}>
          <FormControl fullWidth variant="standard" required>
            <InputLabel>Storage</InputLabel>
            <Select value={storage} onChange={handleStorageChange}>
              {options.storages.map(({ code, name }) => (
                <MenuItem key={code} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <FormControl fullWidth variant="standard" required>
            <InputLabel>Color</InputLabel>
            <Select value={color} onChange={handleColorChange}>
              {options.colors.map(({ code, name }) => (
                <MenuItem key={code} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleCartClick}
          disabled={!storage || !color || disableButton}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductActions;

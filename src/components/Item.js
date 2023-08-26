import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)`
  position: relative;
  min-width: 160px;
  min-height: 212px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const PriceTag = styled("div")`
  position: absolute;
  top: 10px; 
  right: 10px;
  background-color: #0066cc;
  color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  font-weight: bold;
`;

const ImageContainer = styled("div")`
  width: 160px;
  height: 212px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background: linear-gradient(135deg, #fafafa, #eaeaea);
`;

const Placeholder = styled("div")`
  height: 20px;
`;

const Item = ({ brand, model, price, imgUrl }) => {
  return (
    <StyledCard data-testid="item-card">
      {price && <PriceTag data-testid="price-tag">{`${price} €`}</PriceTag>}
      <ImageContainer data-testid="image-container">
        <img
          src={imgUrl}
          alt={model}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </ImageContainer>
      <CardContent>
        <Typography variant="h6" data-testid="brand">{brand}</Typography>
        <Typography variant="body1" data-testid="model">{model}</Typography>
        {price ? (
          <Placeholder />
        ) : (
          <Typography variant="body2" color="error" data-testid="preorder">
            PREORDER NOW
          </Typography>
        )}
      </CardContent>
    </StyledCard>
  );
};

export default Item;

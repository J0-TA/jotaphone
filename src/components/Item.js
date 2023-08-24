import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)`
  min-width: 160px;
  min-height: 212px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const ImageContainer = styled('div')`
  width: 160px;
  height: 212px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px; // Aquí añadimos el margen
`;

const Item = ({ brand, model, price, imgUrl }) => {
  return (
    <StyledCard>
      <ImageContainer>
        <img src={imgUrl} alt={model} style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </ImageContainer>
      <CardContent>
        <Typography variant="h6">{brand}</Typography>
        <Typography variant="body1">{model}</Typography>
        <Typography variant="body2" color={price ? 'text.primary' : 'error'}>
          {price ? `${price} €` : 'PREORDER NOW'}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default Item;

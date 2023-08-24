import React from 'react';
import Grid from '@mui/material/Grid';
import Item from './Item';

const ListView = ({ items }) => {
  const displayedItems = items.slice(0, 8);

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ textAlign: 'right', marginBottom: '10px' }}>
        <input type="search" placeholder="Search" />
      </div>
      <Grid container spacing={2}>
        {displayedItems.map((item, index) => {
          const { brand, model, price, imgUrl } = item;
          return (
            <Grid item key={index} xs={12} sm={4} md={3} lg={3}>
              <Item brand={brand} model={model} price={price} imgUrl={imgUrl} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ListView;

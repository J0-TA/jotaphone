import React from "react";
import Grid from "@mui/material/Grid";
import Item from "./Item";

const ListView = ({ items }) => {
  return (
    <div style={{ padding: "20px" }} data-testid="list-view">
      <Grid container spacing={2}>
        {items.map((item, index) => {
          const { id, brand, model, price, imgUrl } = item;
          return (
            <Grid item key={index} xs={12} sm={4} md={3} lg={3} data-testid={`list-item-${index}`}>
              <Item id={id} brand={brand} model={model} price={price} imgUrl={imgUrl} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ListView;

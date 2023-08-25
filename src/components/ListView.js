import React from "react";
import Grid from "@mui/material/Grid";
import Item from "./Item";

const ListView = ({ items }) => {
  return (
    <div style={{ padding: "20px" }}>
      <Grid container spacing={2}>
        {items.map((item, index) => {
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

import React from "react";
import { Card, CardContent, Grid, Typography, Fab } from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";
import { renderValue, excludeKeys, formatKey } from "../utils";

const FullProductDetails = ({ product }) => {

  return (
    <Card
      id="fullProductDetails"
      elevation={3}
      style={{ backgroundColor: "#f2f2f2" }}
    >
      <CardContent>
        <Fab
          color="primary"
          aria-label="scroll back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
          }}
        >
          <NavigationIcon />
        </Fab>
        <Grid container spacing={2}>
          {Object.keys(product)
            .filter((key) => !excludeKeys.includes(key))
            .map((key, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Typography variant="body2" style={{ fontSize: "0.7rem" }}>
                  <strong>{formatKey(key)}: </strong>
                  {renderValue(product[key])}
                </Typography>
              </Grid>
            ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default FullProductDetails;

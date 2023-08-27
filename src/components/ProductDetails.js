import React from "react";
import { List, ListItem, ListItemText, Grid } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { buildDetailsList } from "../utils";

const ProductDetails = ({ product }) => {
  const detailsList = buildDetailsList(product);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <List>
          {detailsList
            .slice(0, Math.ceil(detailsList.length / 2))
            .map(([primary, secondary]) => (
              <ListItem key={primary} dense>
                <ListItemText
                  primaryTypographyProps={{ variant: "body2" }}
                  secondaryTypographyProps={{ variant: "caption" }}
                  primary={primary}
                  secondary={secondary}
                />
              </ListItem>
            ))}
        </List>
      </Grid>
      <Grid item xs={12} sm={6}>
        <List>
          {detailsList
            .slice(Math.ceil(detailsList.length / 2))
            .map(([primary, secondary]) => (
              <ListItem key={primary} dense>
                <ListItemText
                  primaryTypographyProps={{ variant: "body2" }}
                  secondaryTypographyProps={{ variant: "caption" }}
                  primary={primary}
                  secondary={secondary}
                />
              </ListItem>
            ))}
        </List>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <button
            onClick={() => {
              const element = document.getElementById("fullProductDetails");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              backgroundColor: "#007bff",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center"
            }}
          >
            View Full Details <ArrowForwardIcon style={{ marginLeft: "8px" }} />
          </button>
        </div>
      </Grid>
    </Grid>
  );
};

export default ProductDetails;

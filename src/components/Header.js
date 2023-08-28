import React from "react";
import { useAppContext } from '../AppContext';
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BreadcrumbsComponent from "./BreadcrumbsComponent";

const Header = ({ bgColor }) => {
  const { cartItemsCount, selectedBrand, selectedModel } = useAppContext();

  const navigate = useNavigate();

  return (
    <>
      <AppBar position="fixed" style={{ backgroundColor: bgColor }}>
        <Toolbar>
          <Typography
            variant="h4"
            style={{ flexGrow: 1, fontFamily: "Oswald", fontWeight: "700" }}
            onClick={() => navigate("/")}
          >
            Jotaphone
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={cartItemsCount} color="error" showZero>
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <div style={{ display: "flex", alignItems: "center" }}>
        <BreadcrumbsComponent brand={selectedBrand} model={selectedModel}/>
      </div>
    </>
  );
};

export default Header;

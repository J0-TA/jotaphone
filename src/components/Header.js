import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = ({ bgColor }) => (
  <AppBar position="static" style={{ backgroundColor: bgColor }} data-testid="app-bar">
    <Toolbar>
      <Typography variant="h4" style={{ flexGrow: 1, fontFamily: 'Oswald', fontWeight: '700' }} data-testid="header-title">
        Jotaphone
      </Typography>
      <IconButton color="inherit" data-testid="shopping-cart-icon">
        <ShoppingCartIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Header;

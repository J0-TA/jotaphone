import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import GoBackButton from './GoBackButton';

const BreadcrumbsComponent = ({ brand, model}) => {
  const [disableButton, setDisableButton] = useState("true");
  const navigate = useNavigate();
  const location = useLocation();
  
  const goBack = () => navigate(-1);
  
  useEffect(() => {
    location.pathname.includes("pdp")
        ? setDisableButton(false)
        : setDisableButton(true);
  }, [location.pathname]);


  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <GoBackButton goBack={goBack} disableButton={disableButton} />
      <Breadcrumbs aria-label="breadcrumb">
        <IconButton onClick={() => navigate("/")}>
          <HomeIcon fontSize="small" />
        </IconButton>
        <Link to="/" style={{ textDecoration: 'none' }}>Product List</Link>
        {brand && model && (
          <span>{`${brand} ${model}`}</span>
        )}
      </Breadcrumbs>
    </div>
  );
};

export default BreadcrumbsComponent;

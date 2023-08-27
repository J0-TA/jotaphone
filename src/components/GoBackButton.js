import React from "react";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const GoBackButton = ({ goBack, disableButton }) => {
  return (
    <IconButton onClick={goBack} color="primary" disabled={disableButton}>
      <ArrowBackIcon />
    </IconButton>
  );
};

export default GoBackButton;

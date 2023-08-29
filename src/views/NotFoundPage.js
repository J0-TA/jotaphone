import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import image404 from "../assets/404.png";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Container disableGutters>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        minHeight="100vh"
      >
        <Box
          component="img"
          src={image404}
          alt="Page not found message"
          maxHeight="50vh"
          width="auto"
          borderRadius="8px"
          mb={2}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
          startIcon={<HomeIcon />}
        >
          Back to Home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFoundPage;

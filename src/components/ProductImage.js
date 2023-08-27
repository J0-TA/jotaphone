import { Box, Typography } from "@mui/material";

const ProductImage = ({ imageUrl, alt, price, brand, model }) => {
  return (
    <Box position="relative" style={{ width: "100%", textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        {brand}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {model}
      </Typography>
      <img
        src={imageUrl}
        alt={alt}
        style={{
          width: "100%",
          height: "auto",
          position: "relative",
          zIndex: 1,
        }}
      />
      {price ? (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            backgroundColor: "#0066cc",
            borderRadius: "50%",
            width: '100px',
            height: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: "#ffffff",
            zIndex: 2,
          }}
        >
          <Typography variant="h4" gutterBottom>
            {`${price}€`}
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 2
          }}
        >
          <Typography variant="h5" color="error" gutterBottom>
            PREORDER NOW
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default ProductImage;

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
      <Box position="relative" style={{ width: "100%", height: "auto" }}>
        <img
          src={imageUrl}
          alt={alt}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
        {price ? (
          <Box
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              backgroundColor: "#0066cc",
              borderRadius: "50%",
              width: '100px',
              height: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: "#ffffff",
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
    </Box>
  );
};

export default ProductImage;

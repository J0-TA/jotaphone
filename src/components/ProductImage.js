import { Box, Typography } from "@mui/material";

const ProductImage = ({ imageUrl, alt, price, brand, model }) => {
  return (
    <Box position="relative" sx={{ width: '100%', textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>
        {brand}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {model}
      </Typography>
      <Box position="relative" sx={{ width: '100%', height: 'auto' }}>
        <img
          src={imageUrl}
          alt={alt}
          sx={{
            width: { xs: '100%', sm: '400px', md: '500px' }, // Puedes ajustar estos valores
            height: 'auto',
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
              width: 100,
              height: 100,
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

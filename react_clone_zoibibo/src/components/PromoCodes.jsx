import React from "react";
import { Box, Typography, TextField, Link, Divider } from "@mui/material";

const PromoCodes = () => {
  return (
    <Box
      sx={{
        width: "90%", // Occupy full width of the parent container
        padding: "8px", // Reduced padding for compactness
        borderRadius: "8px",
        boxShadow: 3,
        backgroundColor: "#fff8e1",
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        color="black"
        sx={{ marginBottom: "8px" }}
      >
        PROMO CODES
      </Typography>

      <TextField
        fullWidth
        variant="outlined"
        placeholder="Enter promo code here"
        sx={{ marginBottom: "8px" }}
      />

      <Box>
        {/* Generate Promo Code Entries */}
        {Array.from({ length: 9 }, (_, index) => (
          <Box key={index}>
            <Typography variant="body2" fontWeight="bold" color="black">
              PROMO{index + 1}
            </Typography>
            <Typography variant="body2" color="gray">
              Get ₹ {265 + index * 10} instant discount on your booking!
            </Typography>
            <Link href="#" underline="hover" sx={{ fontSize: "0.875rem" }}>
              Terms & Conditions
            </Link>
            {/* Horizontal line for separation */}
            <Divider
              sx={{
                marginY: "6px", // Adds vertical spacing around the Divider
                backgroundColor: "#d3d3d3", // Light gray color
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PromoCodes;
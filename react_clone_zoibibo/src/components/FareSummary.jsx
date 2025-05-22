import React from "react";
import { Box, Typography, Button } from "@mui/material";

const FareSummary = () => {
  return (
    <Box
      sx={{
        width: "90%", // Occupy full width of the parent container
        padding: "16px", // Padding for good spacing
        borderRadius: "8px",
        boxShadow: 3,
        backgroundColor: "#ffffff",
      }}
    >
      {/* Header Section */}
      <Typography
        variant="h6"
        fontWeight="bold"
        color="black"
        mb={2}
        textAlign="left" // Left-aligned header
      >
        Fare Summary
      </Typography>

      {/* Base Fare */}
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography variant="body2" fontWeight="bold" color="black">
          Base Fare:
        </Typography>
        <Typography
          variant="body2"
          fontWeight="bold"
          color="black"
          sx={{ marginLeft: "auto" }} // Push the amount to the extreme right
        >
          ₹5,536
        </Typography>
      </Box>

      {/* Taxes and Surcharges */}
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography variant="body2" fontWeight="bold" color="black">
          Taxes and Surcharges:
        </Typography>
        <Typography
          variant="body2"
          fontWeight="bold"
          color="black"
          sx={{ marginLeft: "auto" }} // Push the amount to the extreme right
        >
          ₹1,155
        </Typography>
      </Box>

      {/* Total Amount */}
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="body2" fontWeight="bold" color="black">
          Total Amount:
        </Typography>
        <Typography
          variant="body2"
          fontWeight="bold"
          color="black"
          sx={{ marginLeft: "auto" }} // Push the amount to the extreme right
        >
          ₹6,691
        </Typography>
      </Box>

      {/* Contribute Section */}
      <Typography
        variant="body2"
        color="gray"
        mb={2}
        textAlign="left" // Left-aligned for clarity
      >
        Tap to contribute ₹10 towards plantation of 2 million trees
      </Typography>

      {/* Centered Contribute Button */}
      <Box textAlign="center">
        <Button
          variant="contained"
          color="primary"
          size="small"
          sx={{
            textTransform: "none",
            fontWeight: "bold",
          }}
        >
          Contribute ₹10
        </Button>
      </Box>
    </Box>
  );
};

export default FareSummary;
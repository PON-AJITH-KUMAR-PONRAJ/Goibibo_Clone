import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";

const CancellationPolicy = () => {
  return (
    <Box
      sx={{
        padding: "16px",
        borderRadius: "8px",
        boxShadow: 3,
        backgroundColor: "#ffffff",
        marginTop: "16px",
      }}
    >
      {/* Header Section */}
      <Typography variant="h6" fontWeight="bold" color="blue" mb={2}>
        Cancellation & Date Change Policy
      </Typography>

      {/* Flight Route with Indigo Icon */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Box display="flex" alignItems="center">
          <FlightIcon
            sx={{
              fontSize: "24px",
              color: "#4a90e2",
              marginRight: "8px",
            }}
          />
          <Typography variant="h6" fontWeight="bold" color="black">
            MAA → BOM
          </Typography>
        </Box>
        <Typography
          component="a"
          href="#"
          fontSize="0.875rem"
          sx={{
            fontWeight: "bold",
            textDecoration: "underline",
            color: "#1976d2",
          }}
        >
          View Policy
        </Typography>
      </Box>

      {/* Cancellation Penalty Amount (Larger and Bolder) */}
      <Typography
        variant="h5" // Increased size for emphasis
        fontWeight="bold"
        color="black"
        mb={1}
      >
        <pre>                  ₹4,579                          ₹5,179 </pre>
      </Typography>

      {/* Gradient Progress Bar */}
      <LinearProgress
        variant="determinate"
        value={75} // Example progress percentage
        sx={{
          height: "8px",
          borderRadius: "4px",
          backgroundColor: "#ffe6e6",
          marginBottom: "8px",
        }}
      />

      {/* Penalty Time Ranges (Combined into a Single Line) */}
      <Typography
        variant="body2"
        color="gray"
        mb={1}
      >
        <pre>Now                                           Apr 5, 07:00 IST                  Apr 5, 11:00 IST</pre>
      </Typography>


    </Box>
  );
};

export default CancellationPolicy;
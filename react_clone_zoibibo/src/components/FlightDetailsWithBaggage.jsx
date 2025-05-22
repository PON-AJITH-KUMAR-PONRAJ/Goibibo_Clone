import React from "react";
import { Box, Typography } from "@mui/material";
import LuggageIcon from "@mui/icons-material/Luggage"; // Importing baggage icon from Material-UI

const FlightDetailsWithBaggage = () => {
  return (
    <Box
      sx={{
        padding: "16px",
        borderRadius: "8px",
        boxShadow: 3,
        backgroundColor: "#ffffff",
        width: "100%", // Expanded container width
      }}
    >
      {/* Flight Route and Cancellation Fees */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {/* Flight Route */}
        <Typography variant="h6" fontWeight="bold" color="black">
          Chennai → Mumbai
        </Typography>

        {/* Cancellation Fees */}
        <Typography
          variant="body2"
          sx={{
            backgroundColor: "#d0f8ce", // Light green background
            padding: "4px 8px",
            borderRadius: "4px",
            fontWeight: "bold",
            color: "black",
          }}
        >
          CANCELLATION FEES APPLY
        </Typography>
      </Box>

      {/* Date and View Fare Rules */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ marginTop: 2, marginBottom: 2 }}
      >
        {/* Date with Yellow Background */}
        <Typography
          variant="body2"
          sx={{
            backgroundColor: "#fff9c4", // Light yellow background
            padding: "4px 8px",
            borderRadius: "4px",
            fontWeight: "bold",
          }}
        >
          Saturday, Apr 5
        </Typography>

        {/* View Fare Rules (Linkable Text) */}
        <Typography
          component="a"
          href="#"
          sx={{
            fontWeight: "bold",
            fontSize: "0.875rem",
            color: "#1976d2", // Default blue for links
            textDecoration: "underline",
          }}
        >
          View Fare Rules
        </Typography>
      </Box>

      {/* Flight Timing and Terminal Information */}
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        sx={{ marginTop: 2, marginBottom: 2 }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="body2" fontWeight="bold" color="black">
              11:00 Chennai
            </Typography>
            <Typography
              variant="caption"
              color="gray"
              sx={{ display: "block", fontSize: "0.75rem" }}
            >
              Chennai International Airport, Terminal T1
            </Typography>
          </Box>
          <Box textAlign="right">
            <Typography variant="body2" fontWeight="bold" color="black">
              12:55 Mumbai
            </Typography>
            <Typography
              variant="caption"
              color="gray"
              sx={{ display: "block", fontSize: "0.75rem" }}
            >
              Chhatrapati Shivaji International Airport, Terminal T1
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Divider */}
      <Box sx={{ marginTop: 2, marginBottom: 2, borderBottom: "1px solid #ddd" }} />

      {/* Baggage Details */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ marginTop: 2 }}
      >
        {/* Cabin Baggage */}
        <Box display="flex" alignItems="center" gap={1}>
          <LuggageIcon sx={{ fontSize: "16px", color: "black" }} /> {/* Icon */}
          <Typography
            variant="caption"
            color="black"
            sx={{ fontSize: "0.75rem", fontWeight: "bold" }}
          >
            Cabin Baggage: 7 Kgs (1 piece only) / Adult
          </Typography>
        </Box>

        {/* Check-In Baggage */}
        <Box display="flex" alignItems="center" gap={1}>
          <LuggageIcon sx={{ fontSize: "16px", color: "black" }} /> {/* Icon */}
          <Typography
            variant="caption"
            color="black"
            sx={{ fontSize: "0.75rem", fontWeight: "bold" }}
          >
            Check-In Baggage: 15 Kgs (1 piece only) / Adult
          </Typography>
        </Box>
      </Box>

      {/* Got Excess Baggage Section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          backgroundColor: "#ffe6e6", // Light red background
          padding: "8px 16px",
          borderRadius: "4px",
          marginTop: 2,
        }}
      >
        {/* Text Section */}
        <Typography
          variant="body2"
          color="black"
          sx={{
            fontWeight: "bold",
            fontSize: "0.875rem",
          }}
        >
          Got excess baggage? Don’t stress, buy extra check-in baggage allowance for MAA-BOM at fab rates!
        </Typography>

        {/* Add Baggage Button */}
        <Typography
          component="a"
          href="#"
          sx={{
            fontWeight: "bold",
            fontSize: "0.875rem",
            color: "#1976d2", // Bold blue text
          }}
        >
          + ADD BAGGAGE
        </Typography>
      </Box>
    </Box>
  );
};

export default FlightDetailsWithBaggage;
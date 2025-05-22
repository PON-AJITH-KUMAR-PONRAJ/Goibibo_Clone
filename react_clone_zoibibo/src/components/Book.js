import React from "react";
import { Box, Grid } from "@mui/material";
import Header from "./Header";
import FlightDetailsWithBaggage from "./FlightDetailsWithBaggage";
import FareSummary from "./FareSummary";
import PromoCodes from "./PromoCodes";
import CancellationPolicy from "./CancellationPolicy";
import BookingDetailsForm from "./BookingDetailsForm";
import Menu from "./Menu";
import Footer from "./Footer";

const Book = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        padding: "16px",
        boxSizing: "border-box", // Ensure padding and margins are correctly calculated
        display: "flex", // For consistent structure
        flexDirection: "column",
      }}
    >
      {/* Header Section */}
      <Header />

      {/* Main Content Section */}
      <Grid container spacing={2} sx={{ marginTop: "16px", flexGrow: 1 }}>
        {/* Flight Details Section with CancellationPolicy (75% width) */}
        <Grid
          item
          xs={12}
          md={9}
          sx={{
            maxWidth: "75%", // Ensuring correct width calculation
            boxSizing: "border-box",
          }}
        >
          <Box
            sx={{
              paddingRight: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <FlightDetailsWithBaggage />
            <CancellationPolicy />
            <BookingDetailsForm />
          </Box>
        </Grid>

        {/* Right Section (25% width) */}
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            maxWidth: "25%", // Ensuring correct width calculation
            boxSizing: "border-box",
            marginTop: { xs: "16px", md: "0px" }, // Correct placement on smaller screens
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <FareSummary />
            <PromoCodes />
          </Box>
        </Grid>
      </Grid>
      <br/>
      {/* Menu Section */}
      <Menu />

      {/* Footer Section */}
      <Footer />
    </Box>
  );
};

export default Book;
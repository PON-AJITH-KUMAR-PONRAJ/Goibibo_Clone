import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Box, Typography, Card, CardContent, Grid, Button } from "@mui/material";

const LowestFares = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Simulated data for 7 cards
  const flightDetails = Array(7).fill({
    airline: "IndiGo",
    flightNumbers: "6E 6567, 6E 586",
    departure: "23:45",
    departureLocation: "Chennai",
    duration: "11h 50m",
    stops: "2 stops via Bengaluru",
    arrival: "11:35 +1 DAY",
    arrivalLocation: "Mumbai",
    price: "₹12,087",
    logo: "/images/indigo-logo.png",
  });

  // Navigate to BookingPage when "VIEW FARES" is clicked
  const handleViewFares = () => {
    navigate("/booking"); // Route to the BookingPage
  };

  return (
    <Box
      className="lowest-fares"
      sx={{
        backgroundColor: "#fff",
        p: 4,
        borderRadius: 2,
        boxShadow: 3,
        width: "100%",
      }}
    >
      {/* Header */}
      <Typography variant="h6" fontWeight="bold" color="black" mb={3}>
        Flights Sorted by Lowest Fares on This Route
      </Typography>

      {/* Map over flightDetails to generate cards */}
      {flightDetails.map((flight, index) => (
        <Card
          key={index}
          sx={{
            mb: 3,
            p: 2,
            borderRadius: 1,
            boxShadow: "none",
            backgroundColor: "#f9f9f9",
          }}
        >
          <CardContent>
            <Grid container spacing={4} alignItems="center">
              {/* Airline */}
              <Grid item xs={2}>
                <Box display="flex" alignItems="center" gap={1}>
                  <img
                    src={flight.logo}
                    alt={flight.airline}
                    style={{ width: "24px", height: "24px" }}
                  />
                  <Typography variant="body1" fontWeight="bold" color="black">
                    {flight.airline}
                    <br />
                    {flight.flightNumbers}
                  </Typography>
                </Box>
              </Grid>

              {/* Departure */}
              <Grid item xs={2}>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  color="black"
                  sx={{ fontSize: "1rem" }}
                >
                  {flight.departure}
                  <br />
                  <Typography variant="body2" color="black">
                    {flight.departureLocation}
                  </Typography>
                </Typography>
              </Grid>

              {/* Arrival Time */}
              <Grid item xs={2}>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  color="black"
                  sx={{ fontSize: "1rem" }}
                >
                  {flight.duration}
                  <br />
                  <Typography variant="body2" color="black">
                    {flight.stops}
                  </Typography>
                </Typography>
              </Grid>

              {/* Duration */}
              <Grid item xs={2}>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  color="black"
                  sx={{ fontSize: "1rem" }}
                >
                  {flight.arrival}
                  <br />
                  <Typography variant="body2" color="black">
                    {flight.arrivalLocation}
                  </Typography>
                </Typography>
              </Grid>

              {/* Fare and View Fares Button */}
              <Grid item xs={2}>
                <Box display="flex" alignItems="center" gap={2}>
                  <Typography variant="body2" fontWeight="bold" color="black">
                    {flight.price}
                  </Typography>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      textTransform: "none",
                      backgroundColor: "#FFB300", // Alternate red variation
                      fontWeight: "bold",
                    }}
                    onClick={handleViewFares} // Trigger navigation
                  >
                    VIEW FARES
                  </Button>
                </Box>
              </Grid>
            </Grid>

            {/* Re Check-in Required Text */}
            <Box
              sx={{
                textAlign: "center",
                marginTop: 2,
              }}
            >
              <Typography
                variant="caption"
                color="black"
                sx={{
                  backgroundColor: "#cceeff",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  display: "inline-block",
                }}
              >
                Re Check-in of Baggage required | Use GIRUSH for FLAT ₹ 400 OFF | Use UPIPAY for Flat 12% OFF UPI payments
              </Typography>
            </Box>

            {/* Buttons */}
            <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
              <Button
                variant="text"
                color="primary"
                size="small"
                sx={{ textTransform: "none", fontWeight: "bold" }}
              >
                + COMPARE
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                sx={{ textTransform: "none", fontWeight: "bold" }}
              >
                + VIEW FLIGHT DETAILS
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default LowestFares;
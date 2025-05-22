import React, { useState } from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import StarIcon from "@mui/icons-material/Star";

const FlightsOverview = () => {
  // State to track selected date and sorting option
  const [selectedDateIndex, setSelectedDateIndex] = useState(null);
  const [selectedSortIndex, setSelectedSortIndex] = useState(null);

  // State for the visible date range
  const [startIndex, setStartIndex] = useState(0);

  // Data for dates and prices
  const datesAndPrices = [
    { date: "Fri, Apr 4", price: "₹ 8,588" },
    { date: "Sat, Apr 5", price: "₹ 4,706" },
    { date: "Sun, Apr 6", price: "₹ 5,221" },
    { date: "Mon, Apr 7", price: "₹ 4,340" },
    { date: "Tue, Apr 8", price: "₹ 3,830" },
    { date: "Wed, Apr 9", price: "₹ 3,614" },
  ];

  // Sorting options data
  const sortingOptions = [
    { name: "CHEAPEST", price: "₹ 12,087", duration: "11h 50m", icon: <AttachMoneyIcon /> },
    { name: "NON STOP FIRST", price: "₹ 14,437", duration: "05h 30m", icon: <FlightTakeoffIcon /> },
    { name: "YOU MAY PREFER", price: "₹ 12,087", duration: "11h 50m", icon: <StarIcon /> },
  ];

  // Cards Per View
  const cardsPerView = 6;

  // Navigate to the previous set of dates
  const handlePrevious = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - cardsPerView));
  };

  // Navigate to the next set of dates
  const handleNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + cardsPerView, datesAndPrices.length - cardsPerView)
    );
  };

  // Handle date selection
  const handleSelectDate = (index) => {
    setSelectedDateIndex(index);
  };

  // Handle sorting option selection
  const handleSelectSort = (index) => {
    setSelectedSortIndex(index);
  };

  return (
    <Box
      className="flights-overview"
      sx={{
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
        overflow: "hidden",
        minHeight: "300px", // Ensure the container is tall enough to display everything fully
      }}
    >
      {/* Header */}
      <Typography variant="h6" fontWeight="bold" color="black" mb={2}>
        Flights from Chennai to Mumbai
      </Typography>

      {/* Navigation Buttons and Centered Date-Price Cards */}
      <Box display="flex" alignItems="center" justifyContent="center" mb={4}>
        {/* Left Navigation Button */}
        <Button
          onClick={handlePrevious}
          disabled={startIndex === 0}
          sx={{ minWidth: "40px" }}
        >
          <ArrowBackIosIcon />
        </Button>

        {/* Date and Price Cards */}
        <Box display="flex" justifyContent="center" alignItems="center" gap={0} sx={{ flex: 1 }}>
          {datesAndPrices.slice(startIndex, startIndex + cardsPerView).map((item, index) => {
            const isSelected = selectedDateIndex === startIndex + index; // Check if the card is selected
            return (
              <Card
                key={index}
                onClick={() => handleSelectDate(startIndex + index)}
                sx={{
                  backgroundColor: isSelected ? "#ffffe0" : "#e3f2fd", // Light red when selected, otherwise light blue
                  cursor: "pointer",
                  py: 1, // Reduced padding on Y-axis
                  px: 2,
                  textAlign: "center",
                  borderRadius: 0, // No border radius
                  boxShadow: "none",
                  borderRight: index < cardsPerView - 1 ? "1px solid #ddd" : "none", // Vertical divider
                }}
              >
                <CardContent>
                  <Typography variant="body2" fontWeight="bold" color="black">
                    {item.date}
                  </Typography>
                  <Typography variant="body2" fontWeight="bold" color="black">
                    {item.price}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Box>

        {/* Right Navigation Button */}
        <Button
          onClick={handleNext}
          disabled={startIndex + cardsPerView >= datesAndPrices.length}
          sx={{ minWidth: "40px" }}
        >
          <ArrowForwardIosIcon />
        </Button>
      </Box>

      {/* Sorting Options Row */}
      <Box display="flex" justifyContent="space-between" alignItems="center" gap={2}>
        {sortingOptions.map((option, index) => {
          const isSelected = selectedSortIndex === index; // Check if the sorting option is selected
          return (
            <Card
              key={index}
              onClick={() => handleSelectSort(index)}
              sx={{
                backgroundColor: isSelected ? "#bbdefb" : "#f5f5f5", // Light blue when selected, otherwise light gray
                cursor: "pointer",
                py: 0.5, // Reduced padding on Y-axis
                px: 4, // Increased padding on X-axis
                textAlign: "center",
                borderRadius: 1,
                boxShadow: "none",
                width: "30%", // Adjust width to fit three options perfectly
              }}
            >
              <CardContent sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                {/* Icon */}
                <Box display="flex" alignItems="center" justifyContent="center" sx={{ mr: 1 }}>
                  {option.icon}
                </Box>
                {/* Text */}
                <Box>
                  <Typography variant="body2" fontWeight="bold" color="black">
                    {option.name}
                  </Typography>
                  {option.price && (
                    <Typography variant="body2" fontWeight="bold" color="black">
                      {option.price} | {option.duration}
                    </Typography>
                  )}
                </Box>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default FlightsOverview;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import { Box, Typography, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const LeftAbout = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [selectedItem, setSelectedItem] = useState(null); // State to track the selected item

  const handleSelection = (path, index) => {
    setSelectedItem(index); // Update the selected item index
    navigate(path); // Navigate to the respective route
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        padding: "16px",
        boxShadow: 3,
        height: "100%", // Ensure it spans full height of the parent container
      }}
    >
      <Typography variant="h6" fontWeight="bold" color="blue" mb={2}>
        Navigation
      </Typography>
      <List>
        {[
          { text: "About Us", path: "/about-us" },
          { text: "FAQ", path: "/faq" },
          { text: "Terms and Conditions", path: "/terms-of-services" },
        ].map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              onClick={() => handleSelection(item.path, index)} // Handle selection and navigation
              sx={{
                backgroundColor: selectedItem === index ? "#ffffe0" : "inherit", // Apply light red background if selected
                "&:hover": {
                  backgroundColor: "lightgray", // Hover effect
                },
              }}
            >
              <ListItemText
                primaryTypographyProps={{ fontWeight: "bold" }} // Make text bold
                primary={item.text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default LeftAbout;
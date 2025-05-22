import React, { useState } from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom"; // Importing navigation hook

const LoginSignup = ({ open, onClose, setLoggedInUser }) => {
  const [mobileNumber, setMobileNumber] = useState(""); // State for mobile number
  const [error, setError] = useState(""); // State for validation errors
  const navigate = useNavigate(); // Hook for navigation

  // Validation for mobile number
  const handleContinue = () => {
    if (/^\d{10}$/.test(mobileNumber)) {
      setError(""); // Clear any previous error
      setLoggedInUser(mobileNumber); // Set the logged-in mobile number
      navigate("/"); // Navigate to homepage
      onClose(); // Close the modal
    } else {
      setError("Please enter a valid 10-digit mobile number."); // Show error message
    }
  };

  return (
    open && (
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Backdrop with transparency
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000, // Ensure modal is on top
        }}
      >
        <Box
          sx={{
            width: "400px",
            padding: "24px",
            borderRadius: "8px",
            backgroundColor: "#ffffff",
            boxShadow: 3,
            position: "relative", // Allows positioning for close button
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              top: "16px",
              right: "16px",
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Modal Heading */}
          <Typography variant="h6" fontWeight="bold" color="black" mb={2}>
            Login / Signup
          </Typography>

          {/* Mobile Number Input Field */}
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter your mobile number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)} // Update state on change
            error={!!error} // Shows error if validation fails
            helperText={error} // Displays validation error message
            InputProps={{
              startAdornment: (
                <Typography
                  sx={{
                    padding: "0 8px",
                    fontWeight: "bold",
                    color: "gray",
                  }}
                >
                  +91
                </Typography>
              ),
            }}
            sx={{ marginBottom: "16px" }}
          />

          {/* Continue Button */}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleContinue} // Handles validation and navigation
            sx={{
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            Continue
          </Button>

          {/* Footer Text */}
          <Typography
            variant="body2"
            color="gray"
            mt={2}
            sx={{ fontSize: "0.875rem", textAlign: "center" }}
          >
            By proceeding, you agree to our{" "}
            <Typography
              component="span"
              color="primary"
              fontWeight="bold"
              sx={{ cursor: "pointer" }}
            >
              Terms & Conditions
            </Typography>{" "}
            and{" "}
            <Typography
              component="span"
              color="primary"
              fontWeight="bold"
              sx={{ cursor: "pointer" }}
            >
              Privacy Policy.
            </Typography>
          </Typography>
        </Box>
      </Box>
    )
  );
};

export default LoginSignup;
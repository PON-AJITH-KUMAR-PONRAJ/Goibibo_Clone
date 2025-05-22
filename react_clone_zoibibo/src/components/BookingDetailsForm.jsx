import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";

const BookingDetailsForm = () => {
  const navigate = useNavigate(); // Initialize useNavigate for routing

  // State to track form inputs
  const [formData, setFormData] = useState({
    countryCode: "91",
    mobileNumber: "",
    email: "",
    billingAddress: "",
    pincode: "",
    state: "",
    gstNumberChecked: false,
    saveDetailsChecked: false,
  });

  // State for validation errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Form validation logic
  const validateForm = () => {
    const newErrors = {};

    if (!formData.mobileNumber) newErrors.mobileNumber = "Mobile number is required.";
    if (!formData.email) newErrors.email = "Email address is required.";
    if (!formData.billingAddress) newErrors.billingAddress = "Billing address is required.";
    if (!formData.pincode) newErrors.pincode = "Pincode is required.";
    if (!formData.state) newErrors.state = "State is required.";

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = () => {
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Show validation errors
    } else {
      // If no errors, navigate to the home page
      navigate("/"); // Redirect to the home page
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        boxShadow: 3,
        padding: "16px",
        marginTop: "16px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <Typography variant="h6" fontWeight="bold" color="black" mb={2}>
        Booking Details
      </Typography>

      {/* Country Code and Mobile Number */}
      <Box display="flex" gap={2} mb={2}>
        <Box flex="1">
          <Typography variant="body2" fontWeight="bold" color="black" mb={1}>
            Country Code
          </Typography>
          <Select
            fullWidth
            value={formData.countryCode}
            onChange={(e) => handleChange("countryCode", e.target.value)}
          >
            <MenuItem value="91">India (+91)</MenuItem>
            <MenuItem value="1">USA (+1)</MenuItem>
            <MenuItem value="44">UK (+44)</MenuItem>
          </Select>
        </Box>
        <Box flex="2">
          <Typography variant="body2" fontWeight="bold" color="black" mb={1}>
            Mobile Number
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter mobile number"
            variant="outlined"
            value={formData.mobileNumber}
            onChange={(e) => handleChange("mobileNumber", e.target.value)}
            error={!!errors.mobileNumber}
            helperText={errors.mobileNumber}
          />
        </Box>
      </Box>

      {/* Email Address */}
      <Box mb={2}>
        <Typography variant="body2" fontWeight="bold" color="black" mb={1}>
          Email Address
        </Typography>
        <TextField
          fullWidth
          placeholder="Enter email address"
          variant="outlined"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
        />
      </Box>

      {/* GST Checkbox */}
      <Box mb={2}>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.gstNumberChecked}
              onChange={(e) => handleChange("gstNumberChecked", e.target.checked)}
              color="primary"
            />
          }
          label="I have a GST number (Optional)"
        />
      </Box>

      {/* Billing Information Section */}
      <Typography variant="h6" fontWeight="bold" color="black" mb={1}>
        Billing Information
      </Typography>
      <Typography variant="body2" color="gray" mb={2}>
        (Required for GST purposes. You can edit this later in your profile.)
      </Typography>
      <Box mb={2}>
        <Typography variant="body2" fontWeight="bold" color="black" mb={1}>
          Billing Address
        </Typography>
        <TextField
          fullWidth
          placeholder="Enter billing address"
          variant="outlined"
          value={formData.billingAddress}
          onChange={(e) => handleChange("billingAddress", e.target.value)}
          error={!!errors.billingAddress}
          helperText={errors.billingAddress}
        />
      </Box>
      <Box display="flex" gap={2} mb={2}>
        <Box flex="1">
          <Typography variant="body2" fontWeight="bold" color="black" mb={1}>
            Pincode
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter pincode"
            variant="outlined"
            value={formData.pincode}
            onChange={(e) => handleChange("pincode", e.target.value)}
            error={!!errors.pincode}
            helperText={errors.pincode}
          />
        </Box>
        <Box flex="1">
          <Typography variant="body2" fontWeight="bold" color="black" mb={1}>
            State
          </Typography>
          <Select
            fullWidth
            value={formData.state}
            onChange={(e) => handleChange("state", e.target.value)}
            error={!!errors.state}
          >
            <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
            <MenuItem value="Karnataka">Karnataka</MenuItem>
            <MenuItem value="Kerala">Kerala</MenuItem>
            <MenuItem value="Delhi">Delhi</MenuItem>
          </Select>
          <Typography variant="caption" color="error">
            {errors.state}
          </Typography>
        </Box>
      </Box>

      {/* Save Details Checkbox */}
      <Box mb={3}>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.saveDetailsChecked}
              onChange={(e) => handleChange("saveDetailsChecked", e.target.checked)}
              color="primary"
            />
          }
          label="Confirm and save billing details to your profile"
        />
      </Box>

      {/* Continue Button */}
      <Box textAlign="center">
        <Button
          variant="contained"
          color="primary"
          sx={{
            textTransform: "none",
            paddingX: "32px",
          }}
          onClick={handleSubmit} // Trigger form validation and navigation
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default BookingDetailsForm;
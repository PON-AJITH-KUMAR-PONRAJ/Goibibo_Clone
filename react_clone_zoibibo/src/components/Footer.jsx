import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: "white", py: 4, px: 2 }}>
      <Grid container spacing={2} justifyContent="center">
        {/* Follow Us Section */}
        <Grid item xs={12} md={4} textAlign="center">
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Box display="flex" justifyContent="center" gap={2}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/facebook-icon.png"
                alt="Facebook"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/twitter-icon.png"
                alt="Twitter"
                style={{ width: "30px", height: "auto" }}
              />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/youtube-icon.png"
                alt="YouTube"
                style={{ width: "30px", height: "auto" }}
              />
            </a>
          </Box>
        </Grid>

        {/* App Download Section */}
        <Grid item xs={12} md={4} textAlign="center">
          <Typography variant="h6" gutterBottom>
            Download Our App
          </Typography>
          <Box display="flex" justifyContent="center" gap={2}>
            <img
              src="/images/google-play-icon.png"
              alt="Google Play"
              style={{ width: "30px", height: "auto" }}
            />
            <img
              src="/images/app-store-icon.png"
              alt="App Store"
              style={{ width: "30px", height: "auto" }}
            />
          </Box>
        </Grid>

        {/* Payment Section */}
        <Grid item xs={12} md={4} textAlign="center">
          <Typography variant="h6" gutterBottom>
            Secure Payment
          </Typography>
          <Box display="flex" justifyContent="center" gap={2}>
            <img
              src="/images/verisign-icon.png"
              alt="VeriSign Trusted"
              style={{ width: "40px", height: "auto" }}
            />
            <img
              src="/images/mastercard-icon.png"
              alt="MasterCard"
              style={{ width: "40px", height: "auto" }}
            />
            <img
              src="/images/visa-icon.png"
              alt="Visa"
              style={{ width: "40px", height: "auto" }}
            />
            <img
              src="/images/rupay-icon.png"
              alt="RuPay"
              style={{ width: "40px", height: "auto" }}
            />
          </Box>
        </Grid>
      </Grid>

      {/* Copyright Section */}
      <Box textAlign="center" mt={4}>
        <Typography variant="body2" color="textSecondary">
          © 2025 Makemytrip (India) Private Limited. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
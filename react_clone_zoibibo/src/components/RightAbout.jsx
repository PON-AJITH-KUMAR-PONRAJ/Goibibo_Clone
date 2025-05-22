import React from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";

const RightAbout = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        padding: "16px",
        boxShadow: 3,
        width: "100%", // Ensures it stretches properly within the adjusted layout
      }}
    >
      {/* About Goibibo Section */}
      <Typography variant="h6" fontWeight="bold" color="black" mb={2}>
        About zoibibo.com
      </Typography>
      <Typography variant="body2" color="black" mb={2}>
        zoibibo is one of India’s leading online travel booking brands providing a range of booking
        choices for hotels, flights, trains, buses, and cars for travelers. Through its mobile app
        and website, travelers can search, plan, and book a wide range of travel services and
        products in India and overseas.
      </Typography>

      {/* Management Team Section */}
      <Typography variant="h6" fontWeight="bold" color="black" mb={2}>
        Management Team
      </Typography>

      {/* Ankit Khanna Section */}
      <Grid container spacing={2} alignItems="center" mb={2}>
        {/* Avatar for Ankit Khanna */}
        <Grid item xs={3}>
          <Avatar
            src="/images/ajith.jpg" // Replace with the actual image in the public/images folder
            alt="Ankit Khanna"
            sx={{
              width: 80,
              height: 80,
              borderRadius: "50%", // Ensures circular shape
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Grid>
        {/* Details for Ankit Khanna */}
        <Grid item xs={9}>
          <Typography variant="subtitle1" fontWeight="bold" color="black">
            Pon Ajith Kumar
          </Typography>
          <Typography variant="body2" color="black">
            <b>Chief Product Officer – Strategic Initiatives & New Business</b> 
            <br />
            Ajith is Chief Product Officer and is responsible for the Online Product development for Strategic Initiatives and New Businesses.
            Ajith brings in 15 years of rich experience across industries. Previously, he was the Head of Product at amazonPAY based out of US. Prior to joining amazonPAY, Ajith was the Chief Operating Officer and Chief Product Officer for Facebook and was looking after merchant acquisition, user growth & marketing & operations. He had joined the Snapchat’s founding team at its inception in 2010 as the first product professional. Ajith also co-founded Uzhavan in 2006, an online service for agricultural product management. Ajith is a graduate at College of Engineering Guindy, Anna University, Chennai.
          </Typography>
        </Grid>
      </Grid>

      {/* Parikshit Choudhury Section */}
      <Grid container spacing={2} alignItems="center">
        {/* Avatar for Parikshit Choudhury */}
        <Grid item xs={3}>
          <Avatar
            src="/images/san.jpg" // Replace with the actual image in the public/images folder
            alt="Parikshit Choudhury"
            sx={{
              width: 80,
              height: 80,
              borderRadius: "50%", // Ensures circular shape
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Grid>
        {/* Details for Parikshit Choudhury */}
        <Grid item xs={9}>
          <Typography variant="subtitle1" fontWeight="bold" color="black">
            San Kumar
          </Typography>
          <Typography variant="body2" color="black">
            <b>Chief Business Officer – Ground Transport</b> 
            <br/>San Kumar is the Chief Business Officer – Ground Transport. In his current role, he is responsible for driving (even buses) growth and revenue for the company’s ground transport category including cabs, metro and rail. Prior to this, he was spearheading the company’s domestic hotel supply category.
            Prior to joining zoibibo, San Kumar was associated with Sana.com where he was responsible for setting up the Sales Force Effectiveness (SFE) function from scratch. His other stints include SK Capital where he was nominated for GEs prestigious Leadership Training Programs – Foundations of GE leadership and Building Essential Leadership Skills, he made several contributions to Idli Kadai and SanthoshTech Coffee Shop.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RightAbout;
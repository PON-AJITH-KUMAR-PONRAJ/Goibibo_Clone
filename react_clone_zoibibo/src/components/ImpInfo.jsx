import React from "react";
import { Box, Typography, List, ListItem, ListItemIcon } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const ImpInfo = () => {
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
      {/* Header */}
      <Typography variant="h6" fontWeight="bold" color="black" mb={2}>
        Important Information
      </Typography>

      {/* First Section */}
      <Box mb={2}>
        <Typography variant="body1" fontWeight="bold" color="black" mb={1}>
          Check travel guidelines and baggage information below:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecordIcon sx={{ fontSize: "10px", color: "black" }} />
            </ListItemIcon>
            <Typography variant="body2" color="black">
              Carry no more than 1 check-in baggage and 1 hand baggage per passenger. If violated,
              airline may levy extra charges.
            </Typography>
          </ListItem>
        </List>
      </Box>

      {/* Second Section */}
      <Box>
        <Typography variant="body1" fontWeight="bold" color="black" mb={1}>
          Unaccompanied Minors Travelling:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecordIcon sx={{ fontSize: "10px", color: "black" }} />
            </ListItemIcon>
            <Typography variant="body2" color="black">
              An unaccompanied minor usually refers to a child traveling without an adult aged 18 or
              older.
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecordIcon sx={{ fontSize: "10px", color: "black" }} />
            </ListItemIcon>
            <Typography variant="body2" color="black">
              Please check with the airline for their rules and regulations regarding unaccompanied
              minors, as these can differ between airlines.
            </Typography>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default ImpInfo;
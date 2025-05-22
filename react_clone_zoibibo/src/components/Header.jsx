import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Flight,
  Hotel,
  Train,
  DirectionsCar,
  DirectionsBus,
  BeachAccess,
  MonetizationOn,
  AccountCircle,
} from "@mui/icons-material";
import { Typography } from "@mui/material"; // Correctly import Typography
import PhoneIcon from "@mui/icons-material/Phone"; // Import phone icon
import LoginSignup from "./LoginSignup"; // Import the LoginSignup modal

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false); // State for modal visibility
  const [loggedInUser, setLoggedInUser] = useState(""); // State for logged-in mobile number

  const handleLoginClick = () => {
    setShowLoginModal(true); // Open modal
  };

  const handleCloseModal = () => {
    setShowLoginModal(false); // Close modal
  };

  return (
    <header className="bg-white shadow-md">
      <div className="w-full flex justify-between items-center py-4 px-6">
        {/* Logo aligned to the left */}
        <div className="text-3xl font-bold">
          <Link to="/" className="flex items-center">
            <span className="text-yellow-500">zo</span>
            <span className="text-blue-500">ibibo</span>
          </Link>
        </div>

        {/* Navigation in the center */}
        <nav className="ml-10 space-x-4 flex items-center">
          <Link
            to="/"
            className="text-gray-500 font-bold flex items-center transition-colors duration-300 hover:text-blue-500"
          >
            <Flight className="mr-1 text-yellow-500 transition-colors duration-300 hover:text-blue-500" /> Flights
          </Link>
          <Link
            to="/"
            className="text-gray-500 font-bold flex items-center transition-colors duration-300 hover:text-blue-500"
          >
            <Hotel className="mr-1 text-yellow-500 transition-colors duration-300 hover:text-blue-500" /> Hotels
          </Link>
          <Link
            to="/"
            className="text-gray-500 font-bold flex items-center transition-colors duration-300 hover:text-blue-500"
          >
            <Train className="mr-1 text-yellow-500 transition-colors duration-300 hover:text-blue-500" /> Trains
          </Link>
          <Link
            to="/"
            className="text-gray-500 font-bold flex items-center transition-colors duration-300 hover:text-blue-500"
          >
            <DirectionsCar className="mr-1 text-yellow-500 transition-colors duration-300 hover:text-blue-500" /> Cabs
          </Link>
          <Link
            to="/"
            className="text-gray-500 font-bold flex items-center transition-colors duration-300 hover:text-blue-500"
          >
            <DirectionsBus className="mr-1 text-yellow-500 transition-colors duration-300 hover:text-blue-500" /> Bus
          </Link>
          <Link
            to="/"
            className="text-gray-500 font-bold flex items-center transition-colors duration-300 hover:text-blue-500"
          >
            <BeachAccess className="mr-1 text-yellow-500 transition-colors duration-300 hover:text-blue-500" /> Holidays
          </Link>
          <Link
            to="/"
            className="text-gray-500 font-bold flex items-center transition-colors duration-300 hover:text-blue-500"
          >
            <MonetizationOn className="mr-1 text-yellow-500 transition-colors duration-300 hover:text-blue-500" /> Forex
          </Link>
        </nav>

        {/* Login / Signup aligned to the right */}
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="text-gray-500 hover:text-blue-500 font-bold flex items-center transition-colors duration-300"
          >
            <AccountCircle className="mr-1 text-yellow-500 transition-colors duration-300 hover:text-blue-500" /> My Trips
          </Link>
          {loggedInUser ? (
            <div
              className="flex items-center border border-blue-500 px-4 py-2 rounded-full text-blue-500"
            >
              <PhoneIcon className="mr-2" /> {/* Call Icon */}
              <Typography variant="body1" className="font-bold">
                {loggedInUser} {/* Display logged-in mobile number */}
              </Typography>
            </div>
          ) : (
            <button
              onClick={handleLoginClick}
              className="flex items-center border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300"
            >
              LOGIN / SIGNUP
            </button>
          )}
        </div>
      </div>

      {/* Login Signup Modal */}
      <LoginSignup
        open={showLoginModal}
        onClose={handleCloseModal}
        setLoggedInUser={setLoggedInUser} // Pass state setter to update mobile number
      />
    </header>
  );
};

export default Header;
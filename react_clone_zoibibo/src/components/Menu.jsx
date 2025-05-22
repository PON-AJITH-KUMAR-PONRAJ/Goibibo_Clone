import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

const Menu = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <section className="menu bg-white py-8 px-4"> {/* Added padding for better spacing */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
        {/* First Column */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold mb-4">OUR PRODUCTS</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Domestic Hotels</li>
            <li>International Hotels</li>
            <li>Domestic Flights</li>
            <li>International Flights</li>
            <li>Multi-City Flights</li>
            <li>Couple Friendly Hotels</li>
            <li>Nearby Getaways</li>
            <li>Bus Booking</li>
            <li>Cab Booking</li>
            <li>Airport Cabs Booking</li>
            <li>Outstation Cabs Booking</li>
            <li>Train Booking</li>
            <li>Zo Stay</li>
            <li>Gift Cards</li>
            <li>Trip Money</li>
            <li>zoibibo Advertising Solutions</li>
          </ul>
        </div>

        {/* Second Column */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold mb-4">ABOUT US</h3>
          <ul className="space-y-2 text-gray-600">
            <li onClick={() => navigate("/about-us")} className="cursor-pointer text-blue-600 hover:underline">
              About Us
            </li>
            <li onClick={() => navigate("/faq")} className="cursor-pointer text-blue-600 hover:underline">
              FAQ
            </li>
            <li onClick={() => navigate("/terms-of-services")} className="cursor-pointer text-blue-600 hover:underline">
              Terms of Services
            </li>
            <li>User Agreement</li>
            <li>Privacy</li>
            <li>Careers</li>
            <li>YouTube Channel</li>
            <li>Technology@zoibibo</li>
            <li>Customer Support</li>
            <li>Facebook Page</li>
            <li>Twitter Handle</li>
          </ul>
        </div>

        {/* Third Column */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold mb-4">TRAVEL ESSENTIALS</h3>
          <ul className="space-y-2 text-gray-600">
            <li>PNR Status</li>
            <li>Offers</li>
            <li>Airline Routes</li>
            <li>Train Running Status</li>
          </ul>
        </div>

        {/* Fourth Column */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold mb-4">MORE LINKS</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Cheap Flights</li>
            <li>Hotels Near Me</li>
            <li>My Bookings</li>
            <li>Cancellation</li>
            <li>My Account</li>
            <li>Wallet</li>
            <li>Advertise with Us</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Menu;
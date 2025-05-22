import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook

const Search = () => {
  const [selectedTrip, setSelectedTrip] = useState("One-way");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departure, setDeparture] = useState("");
  const [error, setError] = useState(""); // State for validation errors
  const navigate = useNavigate(); // Initialize navigation

  const handleSearchClick = () => {
    // Validation checks
    if (!from || !to) {
      setError("Please select both 'From' and 'To' locations.");
      return;
    }
    if (from === to) {
      setError("'From' and 'To' locations cannot be the same.");
      return;
    }
    if (!departure) {
      setError("Please select a departure date.");
      return;
    }

    // Clear errors and navigate to the home page
    setError("");
    navigate("/search"); // Redirect to the home page
  };

  return (
    <section>
      {/* Background Behind Search Container */}
      <div
        className="pt-0"
        style={{
          background: "linear-gradient(to bottom,rgb(0, 225, 255),rgb(235, 246, 255))", // Light gradient from teal to white
        }}
      >
        {/* Main Booking Section */}
        <div className="bg-white mx-auto m-4 p-6 rounded-lg shadow-lg w-5/6">
          {/* Header Section */}
          <div className="text-center font-bold text-blue-600 text-2xl font-semibold mb-6">
            Domestic and International Flights
          </div>

          {/* Trip Type Selection */}
          <div className="flex space-x-6 mb-4">
            {/* Radio Buttons for Trip Type */}
            <label
              className={`flex items-center space-x-2 border rounded-3xl p-2 font-bold ${
                selectedTrip === "One-way"
                  ? "bg-yellow-100 text-yellow-600 border-yellow-300"
                  : "text-gray-600 border-gray-300"
              }`}
              onClick={() => setSelectedTrip("One-way")}
            >
              <input
                type="radio"
                name="trip"
                value="One-way"
                checked={selectedTrip === "One-way"}
                onChange={() => setSelectedTrip("One-way")}
                className="form-radio text-yellow-500"
              />
              <span>One-way</span>
            </label>
            <label
              className={`flex items-center space-x-2 border rounded-3xl p-2 font-bold ${
                selectedTrip === "Round-trip"
                  ? "bg-yellow-100 text-yellow-600 border-yellow-300"
                  : "text-gray-600 border-gray-300"
              }`}
              onClick={() => setSelectedTrip("Round-trip")}
            >
              <input
                type="radio"
                name="trip"
                value="Round-trip"
                checked={selectedTrip === "Round-trip"}
                onChange={() => setSelectedTrip("Round-trip")}
                className="form-radio text-yellow-500"
              />
              <span>Round-trip</span>
            </label>
            <label
              className={`flex items-center space-x-2 border rounded-3xl p-2 font-bold ${
                selectedTrip === "Multi-city"
                  ? "bg-yellow-100 text-yellow-600 border-yellow-300"
                  : "text-gray-600 border-gray-300"
              }`}
              onClick={() => setSelectedTrip("Multi-city")}
            >
              <input
                type="radio"
                name="trip"
                value="Multi-city"
                checked={selectedTrip === "Multi-city"}
                onChange={() => setSelectedTrip("Multi-city")}
                className="form-radio text-yellow-500"
              />
              <span>Multi-city</span>
            </label>
          </div>

          {/* Search Inputs */}
          <div className="flex justify-between items-center space-x-4">
            {/* From Field */}
            <div className="w-1/5">
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="from">
                From
              </label>
              <select
                id="from"
                className="border p-3 rounded-lg w-full"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              >
                <option value="">Select</option>
                <option value="Chennai">Chennai</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Kerala">Kerala</option>
              </select>
            </div>

            {/* To Field */}
            <div className="w-1/5">
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="to">
                To
              </label>
              <select
                id="to"
                className="border p-3 rounded-lg w-full"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              >
                <option value="">Select</option>
                <option value="Chennai">Chennai</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Kerala">Kerala</option>
              </select>
            </div>

            {/* Departure Field */}
            <div className="w-1/5">
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="departure">
                Departure
              </label>
              <input
                type="date"
                id="departure"
                className="border p-3 rounded-lg w-full"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
              />
            </div>

            {/* Return Field */}
            <div className="w-1/5">
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="return">
                Return
              </label>
              <input
                type="text"
                id="return"
                placeholder="Click to add a return flight for better discounts"
                className="border p-3 rounded-lg w-full"
              />
            </div>

            {/* Travellers & Class Field */}
            <div className="w-1/5">
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="travellers">
                Travellers & Class
              </label>
              <select id="travellers" className="border p-3 rounded-lg w-full">
                <option>1 Adult - Economy</option>
                <option>2 Adults - Economy</option>
                <option>1 Adult - Business</option>
              </select>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-red-500 text-center mt-4 font-semibold">{error}</div>
          )}

          {/* Search Flights Button */}
          <button
            className="bg-yellow-500 text-white px-6 py-3 rounded-lg mt-6 block mx-auto"
            onClick={handleSearchClick}
          >
            Search Flights
          </button>
        </div>
      </div>
    </section>
  );
};

export default Search;
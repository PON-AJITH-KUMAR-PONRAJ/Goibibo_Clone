import React, { useState } from "react";

const Selection = () => {
  const [tripType, setTripType] = useState("One-way");
  const [fromLocation, setFromLocation] = useState("Chennai, India");
  const [toLocation, setToLocation] = useState("Mumbai, India");
  const [departDate, setDepartDate] = useState("2025-04-04");
  const [returnDate, setReturnDate] = useState("");
  const [passengerDetails, setPassengerDetails] = useState("1 Adult, Economy/Premium");
  const [fareType, setFareType] = useState("Regular");

  const handleSearch = () => {
    alert("Searching flights with selected criteria...");
  };

  return (
    <div className="bg-yellow-100 p-6 rounded-lg shadow-lg w-full mx-auto">
      {/* Trip Type Section */}
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <label className="block text-gray-700 font-bold mb-1">Trip Type</label>
          <select
            className="w-full p-3 rounded-lg border"
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
          >
            <option value="One-way">One-way</option>
            <option value="Round-trip">Round-trip</option>
          </select>
        </div>

        {/* From Location */}
        <div className="flex-1">
          <label className="block text-gray-700 font-bold mb-1">From</label>
          <select
            className="w-full p-3 rounded-lg border"
            value={fromLocation}
            onChange={(e) => setFromLocation(e.target.value)}
          >
            <option value="Chennai, India">Chennai, India</option>
            <option value="Delhi, India">Delhi, India</option>
            <option value="Hyderabad, India">Hyderabad, India</option>
          </select>
        </div>

        {/* To Location */}
        <div className="flex-1">
          <label className="block text-gray-700 font-bold mb-1">To</label>
          <select
            className="w-full p-3 rounded-lg border"
            value={toLocation}
            onChange={(e) => setToLocation(e.target.value)}
          >
            <option value="Mumbai, India">Mumbai, India</option>
            <option value="Kolkata, India">Kolkata, India</option>
            <option value="Goa, India">Goa, India</option>
          </select>
        </div>

        {/* Depart Date */}
        <div className="flex-1">
          <label className="block text-gray-700 font-bold mb-1">Depart</label>
          <input
            type="date"
            className="w-full p-3 rounded-lg border"
            value={departDate}
            onChange={(e) => setDepartDate(e.target.value)}
          />
        </div>

        {/* Return Date */}
        <div className="flex-1">
          <label className="block text-gray-700 font-bold mb-1">Return</label>
          <input
            type="date"
            className="w-full p-3 rounded-lg border"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>

        {/* Passengers & Class */}
        <div className="flex-1">
          <label className="block text-gray-700 font-bold mb-1">Passengers & Class</label>
          <select
            className="w-full p-3 rounded-lg border"
            value={passengerDetails}
            onChange={(e) => setPassengerDetails(e.target.value)}
          >
            <option value="1 Adult, Economy/Premium">1 Adult, Economy/Premium</option>
            <option value="2 Adults, Economy">2 Adults, Economy</option>
            <option value="1 Adult, Business">1 Adult, Business</option>
          </select>
        </div>

        {/* Search Button */}
        <div>
          {/* Button color updated to blue */}
          <button
            onClick={handleSearch}
            className="w-full py-3 px-6 bg-blue-500 text-white font-bold rounded-lg"
          >
            Search
          </button>
        </div>
      </div>

      {/* Fare Type Section */}
      <div className="flex items-center gap-4 mt-2">
        <span className="text-gray-700 font-bold">Fare Type</span>
        <div className="flex gap-2">
          {["Regular", "Student", "Senior Citizen", "Armed Forces", "Doctor and Nurses"].map((type) => (
            <button
              key={type} // Ensures unique keys for buttons
              onClick={() => setFareType(type)}
              className={`px-2 py-1 text-sm rounded-lg font-medium ${
                fareType === type ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Selection;
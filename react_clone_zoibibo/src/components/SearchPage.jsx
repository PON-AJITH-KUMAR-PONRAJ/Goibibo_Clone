import React from "react";
import Header from "./Header";
import Selection from "./Selection";
import LeftSideBox from "./LeftSideBox";
import FlightsOverview from "./FlightsOverview";
import LowestFares from "./LowestFares";

const SearchPage = () => {
  return (
    <div>
      <Header />
      <Selection />

      {/* Main Layout for the Remaining Components */}
      <div className="flex gap-6 p-6">
        {/* Left Side Filters */}
        <LeftSideBox />

        {/* Flights Overview and Sorted Fares */}
        <div className="flex flex-col gap-6 w-full">
          <FlightsOverview />
          <LowestFares />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
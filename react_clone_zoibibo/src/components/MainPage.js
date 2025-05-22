// MainPage.jsx
import React from "react";
import LeftSideBox from "./LeftSideBox";
import FlightsOverview from "./FlightsOverview";
import LowestFares from "./LowestFares";

const MainPage = () => {
  return (
    <div className="flex gap-4 p-6">
      <LeftSideBox />
      <FlightsOverview />
      <LowestFares />
    </div>
  );
};

export default MainPage;
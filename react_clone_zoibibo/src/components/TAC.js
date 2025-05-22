import React from "react";
import Header from "./Header";
import LeftAbout from "./LeftAbout";
import Terms from "./Terms"; // Import the Terms component
import Menu from "./Menu";
import Footer from "./Footer";

const TAC = () => {
  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header Section */}
      <Header />

      {/* Main Content Section */}
      <div style={{ display: "flex", marginTop: "16px", flexGrow: 1, padding: "16px" }}>
        {/* Left Section */}
        <div
          style={{
            flex: "1", // Left section occupies 33% width
            paddingRight: "16px",
          }}
        >
          <LeftAbout />
        </div>

        {/* Right Section */}
        <div
          style={{
            flex: "2", // Right section occupies 67% width
            paddingLeft: "16px",
          }}
        >
          <Terms />
        </div>
      </div>

      {/* Menu Section */}
      <div style={{ marginTop: "16px" }}>
        <Menu />
      </div>

      {/* Footer Section */}
      <div style={{ marginTop: "16px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default TAC;
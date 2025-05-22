import React from "react";
import Header from "./Header";
import Search from "./Search";
import Offers from "./Offers";
import Advertise from "./Advertise";
import Menu from "./Menu";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <Search />
      <Offers />
      <Advertise />
      <Menu />
      <Footer />
    </div>
  );
};

export default HomePage;
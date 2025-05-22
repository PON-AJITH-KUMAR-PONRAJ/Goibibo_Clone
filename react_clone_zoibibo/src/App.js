import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";
import Book from "./components/Book"; // Import the Book Component
import AboutUs from "./components/AboutUs"; // Import AboutUs Component
import FAQ from "./components/FAQ"; // Import FAQ Component
import TAC from "./components/TAC"; // Import TAC Component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/booking" element={<Book />} /> {/* BookingPage route */}
        <Route path="/about-us" element={<AboutUs />} /> {/* AboutUs route */}
        <Route path="/faq" element={<FAQ />} /> {/* FAQ route */}
        <Route path="/terms-of-services" element={<TAC />} /> {/* Terms of Services route */}
      </Routes>
    </Router>
  );
};

export default App;
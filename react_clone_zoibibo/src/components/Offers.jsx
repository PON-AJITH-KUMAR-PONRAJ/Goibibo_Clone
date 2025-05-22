import React, { useState } from "react";
import Card from "./Card"; // Import Card component

const Offers = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [carouselIndex, setCarouselIndex] = useState(0); // State to track carousel position

  const offersData = [
    {
      id: 1,
      category: "Flights",
      title: "Up to 15% OFF* on Flights",
      validity: "Valid till 6th Apr'25",
      image: "/images/flight.jpg",
    },
    {
      id: 2,
      category: "Hotels",
      title: "Up to 45% OFF* on Hotels & Homestays!",
      validity: "Valid till 6th Apr'25",
      image: "/images/hotel.jpg",
    },
    {
      id: 3,
      category: "Bus",
      title: "Up to 15% OFF* on Buses!",
      validity: "Valid till 6th Apr'25",
      image: "/images/bus.jpg",
    },
    {
      id: 4,
      category: "Trains",
      title: "Special Offers on Trains!",
      validity: "Valid till 6th Apr'25",
      image: "/images/train.jpg",
    },
    {
      id: 5,
      category: "Cabs",
      title: "Flat 20% OFF* on Cabs!",
      validity: "Valid till 6th Apr'25",
      image: "/images/cab.jpg",
    },
    {
      id: 6,
      category: "Bank Offers",
      title: "5% Cashback with Bank Cards!",
      validity: "Valid till 6th Apr'25",
      image: "/images/bank.jpg",
    },
  ];

  const categories = ["All", "Bank Offers", "Flights", "Hotels", "Cabs", "Bus", "Trains"];

  // Filtered offers based on active tab
  const filteredOffers = offersData.filter(
    (offer) => activeTab === "All" || offer.category === activeTab
  );

  // Carousel Navigation
  const nextSlide = () => {
    if (carouselIndex < filteredOffers.length - 2) {
      setCarouselIndex(carouselIndex + 2);
    }
  };

  const prevSlide = () => {
    if (carouselIndex > 0) {
      setCarouselIndex(carouselIndex - 2);
    }
  };

  return (
    <div className="offers-section py-8">
      {/* Offers Section */}
      <div className="container mx-auto bg-white rounded-lg shadow-lg p-6">
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-blue-600">Offers For You</h2> {/* Changed to blue and larger */}
        </div>

        {/* Tabs */}
        <div className="tabs flex flex-wrap justify-center gap-4 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              className={`tab px-6 py-3 rounded-lg font-bold ${
                activeTab === category
                  ? "bg-blue-100 text-blue-600 border border-blue-300"
                  : "bg-gray-100 text-gray-600 border border-gray-300"
              } shadow-md`}
              onClick={() => {
                setActiveTab(category);
                setCarouselIndex(0); // Reset carousel index when tab changes
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="carousel relative mt-6">
          {/* Show Buttons Only for 'All' */}
          {activeTab === "All" && (
            <>
              {/* Left Button */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-200 text-black px-6 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300"
              >
                &larr; {/* Changed to <- */}
              </button>
            </>
          )}

          {/* Offers Container */}
          <div className="offers flex overflow-hidden space-x-4">
            {filteredOffers
              .slice(carouselIndex, carouselIndex + (activeTab === "All" ? 2 : filteredOffers.length)) // Display 2 cards for 'All', all cards for others
              .map((offer) => (
                <Card key={offer.id} offer={offer} /> // Render Card component
              ))}
          </div>

          {activeTab === "All" && (
            <>
              {/* Right Button */}
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-200 text-black px-6 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300"
              >
                &rarr; {/* Changed to -> */}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Offers;
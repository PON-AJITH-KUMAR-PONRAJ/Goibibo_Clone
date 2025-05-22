import React from "react";

const Advertise = () => {
  return (
    <section className="advertise-section py-4 px-2 sm:px-4 lg:px-8">
      <div className="space-y-6 max-w-screen-lg mx-auto">
        {/* First Image with Rounded Corners */}
        <div className="w-full bg-gray-100 rounded-lg shadow-lg flex items-center justify-center overflow-hidden py-2">
          <img
            src="/images/ad1.jpg"
            alt="Advertisement 1"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Second Image */}
        <div className="w-full bg-gray-100 shadow-lg flex items-center justify-center overflow-hidden py-2">
          <img
            src="/images/ad2.jpg"
            alt="Advertisement 2"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Advertise;

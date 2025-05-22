import React from "react";

const LeftSideBox = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-1/4">
      {/* Popular Filters */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-700">Popular Filters</h3>
        <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
          <input type="checkbox" id="indigo" className="form-checkbox text-blue-500" checked />
          <label htmlFor="indigo" className="cursor-pointer">
            IndiGo: ₹12,087
          </label>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
          <input type="checkbox" id="lateDepartures" className="form-checkbox text-blue-500" />
          <label htmlFor="lateDepartures" className="cursor-pointer">
            Late Departures: ₹12,087
          </label>
        </div>
      </div>

      {/* One Way Price */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-700">One Way Price</h3>
        <input type="range" min="12087" max="14500" className="w-full mt-2" />
        <div className="flex justify-between text-sm text-gray-600 mt-1">
          <span>₹12,087</span>
          <span>₹14,500</span>
        </div>
      </div>

      {/* Stops From Chennai */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-700">Stops From Chennai</h3>
        <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
          <input type="checkbox" id="stopsFromChennai" className="form-checkbox text-blue-500" />
          <label htmlFor="stopsFromChennai" className="cursor-pointer">
            1 Stop: ₹14,437
          </label>
        </div>
      </div>

      {/* Departure From Chennai */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-700">Departure From Chennai</h3>
        <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
          <input type="checkbox" id="after6pm" className="form-checkbox text-blue-500" />
          <label htmlFor="after6pm" className="cursor-pointer">
            After 6 pm
          </label>
        </div>
      </div>

      {/* Arrival at Mumbai */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-700">Arrival at Mumbai</h3>
        <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
          <input type="checkbox" id="before6am" className="form-checkbox text-blue-500" />
          <label htmlFor="before6am" className="cursor-pointer">
            Before 6 am
          </label>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
          <input type="checkbox" id="between6am12pm" className="form-checkbox text-blue-500" />
          <label htmlFor="between6am12pm" className="cursor-pointer">
            6 am - 12 pm
          </label>
        </div>
      </div>

      {/* Airlines */}
      <div>
        <h3 className="text-lg font-bold text-gray-700">Airlines</h3>
        <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
          <input type="checkbox" id="akasaAir" className="form-checkbox text-blue-500" />
          <label htmlFor="akasaAir" className="cursor-pointer">
            Akasa Air: ₹14,437
          </label>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
          <input type="checkbox" id="indigoAirline" className="form-checkbox text-blue-500" />
          <label htmlFor="indigoAirline" className="cursor-pointer">
            IndiGo: ₹12,087
          </label>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBox;
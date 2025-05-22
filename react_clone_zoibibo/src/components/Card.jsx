import React from "react";

const Card = ({ offer }) => {
  return (
    <div className="offer w-1/2 p-4 rounded-lg shadow-md flex-shrink-0">
      <img
        src={offer.image}
        alt={`${offer.category} Offer`}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <p className="text-lg font-bold mb-2">{offer.category}</p>
      <p className="text-gray-600">{offer.title}</p>
      <p className="text-gray-400 text-sm">{offer.validity}</p>
    </div>
  );
};

export default Card;
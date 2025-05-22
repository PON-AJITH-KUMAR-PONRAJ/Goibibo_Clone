import React, { useState } from "react";

const Question = () => {
  // State to manage the visibility of answers
  const [visible, setVisible] = useState({});

  // Function to toggle visibility
  const toggleAnswer = (index) => {
    setVisible((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="pt-10 px-8">
      <div className="max-w-4xl mx-auto bg-blue-100 shadow-md rounded-lg p-8"> {/* Updated to light blue background */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

        {/* FAQ Accordion */}
        <div className="space-y-6">
          {/* Questions and Answers */}
          {[
            {
              question: "How can I book a flight on Goibibo?",
              answer:
                "You can book flights on Goibibo by entering your departure and arrival locations, selecting travel dates, and choosing from the available flights. You can pay securely using credit/debit cards, net banking, or UPI.",
            },
            {
              question: "How do I cancel my booking?",
              answer:
                "You can cancel your booking from the ‘Manage Bookings’ section on the website or app. Cancellation charges may apply depending on the airline, hotel, or service provider.",
            },
            {
              question: "Can I get a refund for my canceled ticket?",
              answer:
                "Yes, refunds are processed based on the airline or hotel policies. If eligible, the refund amount will be credited to your original payment method within 5-7 business days.",
            },
            {
              question: "How do I check my booking status?",
              answer:
                "You can check your booking status under the ‘My Bookings’ section by entering your booking reference number and email/phone number.",
            },
            {
              question: "Are there any discounts available?",
              answer:
                "Yes, Goibibo offers various discounts on flights, hotels, and holiday packages. Check the ‘Deals & Offers’ section for the latest promotions.",
            },
            {
              question: "Can I reschedule my flight after booking?",
              answer:
                "Yes, you can reschedule your flight from the ‘Manage Bookings’ section. Additional charges may apply depending on the airline policy.",
            },
            {
              question: "How do I contact customer support?",
              answer:
                "You can contact Goibibo’s 24/7 customer support via phone, email, or live chat available on the website and mobile app.",
            },
            {
              question: "Is it safe to book through Goibibo?",
              answer:
                "Yes, Goibibo ensures secure transactions with encrypted payment gateways and verified travel partners.",
            },
            {
              question: "Can I book international flights on Goibibo?",
              answer:
                "Yes, Goibibo allows you to book both domestic and international flights with competitive prices and easy cancellations.",
            },
            {
              question: "Does Goibibo provide holiday packages?",
              answer:
                "Yes, Goibibo offers holiday packages for various domestic and international destinations, including flights, hotels, and sightseeing.",
            },
          ].map((item, index) => (
            <div key={index} className="border border-gray-300 rounded-md">
              {/* Question */}
              <button
                className="w-full text-left px-6 py-4 bg-white text-gray-900 font-semibold rounded-md focus:outline-none hover:bg-gray-50"
                onClick={() => toggleAnswer(index)}
              >
                {`${index + 1}. ${item.question}`}
              </button>
              {/* Answer */}
              {visible[index] && (
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
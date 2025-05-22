import React from "react";

const Terms = () => {
  return (
    <div className="container mx-auto mt-4 max-w-6xl px-8 py-12 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6">1. FLIGHT TICKETS</h1>

      {/* Terms of Airlines Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">TERMS OF THE AIRLINES</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            The airline tickets available through the Website are subject to the terms & conditions of the concerned airline, including but not limited to cancellation and refund policies.
          </li>
          <li>
            Goibibo merely acts as a facilitator to enable the User to book a flight ticket. The contract of service for utilization of the flight is always between the User and the concerned airline.
          </li>
          <li>
            Airlines retain the right to reschedule flight times, routes, change, or cancel flights or itineraries without prior intimation to Goibibo. Goibibo has no control over airline logistics and is not liable for any losses due to changes or cancellations.
          </li>
          <li>Different tickets on the same airline may have different restrictions, services, or prices.</li>
          <li>
            The baggage allowance on a given fare is decided by the airline, and Goibibo has no role in this. Some fares are "hand baggage fares," meaning they do not include free check-in baggage.
          </li>
          <li>Prices for adding check-in baggage may vary from airline to airline. Users are advised to contact the respective airline for detailed baggage policies.</li>
          <li>
            In the event of flight delays, cancellations, or rescheduling, Goibibo shall not be held responsible for any direct or indirect loss suffered by the User.
          </li>
          <li>
            Any request for special services such as wheelchair assistance, meal preference, or seat selection must be made directly with the airline and is subject to availability.
          </li>
          <li>
            The user agrees that any disputes related to flight bookings, including pricing errors, baggage loss, or denied boarding, must be resolved with the airline directly.
          </li>
          <li>Passengers are responsible for ensuring that they meet the visa and travel documentation requirements of their destination.</li>
        </ul>
      </section>

      {/* Code Share Agreements Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">CODE SHARE AGREEMENTS</h2>
        <p className="mb-4">
          Some airlines enter into "code share" agreements with other airlines. This means that on certain routes, the airline selling or marketing the flight ticket does not operate its own aircraft for that destination. Instead, it contracts with another airline for service.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Flights operated under code-share agreements will be indicated in the booking flow as "operated by" the partner airline.
          </li>
          <li>Check-in, baggage handling, and onboard services for code-share flights will be governed by the operating airline's policies.</li>
          <li>
            Goibibo does not have control over seat selection, meal preferences, or any additional services provided by the operating airline.
          </li>
          <li>Users should check with the operating airline for updated flight schedules, delays, or cancellations.</li>
        </ul>
      </section>

      {/* Cancellation and Refund Policy Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">CANCELLATION & REFUND POLICY</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Cancellation charges vary from airline to airline and depend on the fare rules applied at the time of booking.</li>
          <li>Refund processing time may vary based on the payment method used and airline policies.</li>
          <li>Partial cancellations are subject to airline rules and policies.</li>
          <li>No-show passengers will not be eligible for a refund unless specified by the airline.</li>
          <li>
            In case of flight cancellations by the airline, users must request a refund or rebooking through the airline's customer service.
          </li>
        </ul>
      </section>

      {/* User Responsibilities Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">USER RESPONSIBILITIES</h2>
        <p className="mb-4">
          Users booking flight tickets through Goibibo must adhere to the following responsibilities:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Ensure that the information provided at the time of booking, such as name, contact details, and passport details, is accurate.
          </li>
          <li>Verify flight details, baggage allowance, and visa requirements before traveling.</li>
          <li>
            Arrive at the airport at least 2-3 hours before departure for domestic and international flights, respectively.
          </li>
          <li>
            Check with the airline regarding COVID-19 travel restrictions, quarantine requirements, and mandatory testing protocols.
          </li>
          <li>Ensure that they carry all necessary documents, including passports, visas, and valid government-issued IDs.</li>
        </ul>
      </section>

      {/* Liability Disclaimer Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">LIABILITY DISCLAIMER</h2>
        <p className="mb-4">
          Goibibo shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of the use or inability to use the airline services.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Goibibo does not guarantee the availability of any flight, route, or fare displayed on the website.</li>
          <li>
            Any claims related to delays, cancellations, or service failures must be addressed directly with the airline.
          </li>
          <li>Goibibo is not responsible for any losses incurred due to missed flights, delays, or denial of boarding.</li>
          <li>
            All flight bookings are subject to airline policies and regulations, which may change at any time without prior notice.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Terms;
import React from "react";

const ZigzagList = () => {
  const points = [
    "Flat 20% discount on all CFC Monthly Meetups",
    "Free webinars and closed Q&A sessions with industry experts",
    "Early access to our Gigzn App ( Beta)",
    "Unlimited access to Weekly Hiring Alerts contact details",
    "Invitations to premium, members-only events",
    "Early access to all CFC events (including the Freelancers Festival)",
    "Access to exclusive freelance resources - Contracts, NDA, Client Signoff templates, etc.",
    "Your freelance requirements will be amplified and shared across our network",
    "Get priority on all client and job opportunities shared in the group",
    "Network directly with verified, growth-focused freelancers from across India",
    "Exclusive discounts from our partner ecosystem (Astravue, PayGlocal, DigiSME, Dream Calls, ZhaCommerce, and more[A LOT])",
    "Higher chances to get verified, overseas, or high-ticket clients (though not guaranteed)"
  ];

  return (
    <div className="relative max-w-6xl mx-auto px-4 py-12" style={{ backgroundColor: "#0D2423" }}>
      {/* Center vertical line */}
      <div className="absolute left-1/2 top-0 h-full border-l-2 border-gray-500"></div>

      {points.map((point, idx) => {
        const isLeft = idx % 2 === 0; // alternate left/right

        return (
          <div
            key={idx}
            className="relative w-full mb-12 flex"
            style={{ justifyContent: isLeft ? "flex-start" : "flex-end" }}
          >
            <div className="w-5/12 relative">
              {/* Circle marker */}
              <div
                className="absolute top-1/2 transform -translate-y-1/2 h-4 w-4 bg-blue-500 rounded-full"
                style={{ [isLeft ? "right" : "left"]: "-10px" }}
              ></div>

              {/* Content card */}
              <div className={`p-4 rounded-md bg-white text-black shadow-md text-left`}>
                {point}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ZigzagList;

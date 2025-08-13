import React from "react";
import AnimatedList from "./AnimatedList/AnimatedList";
import "../css/CenterContent.css";

const CenterContent = () => {
  return (
    <div>
        <div
        className="flex flex-col items-center justify-center min-h-screen px-10"
        style={{ backgroundColor: "#0D2423" }}
        >
        <div className="text-center max-w-xl">
            <h1 className="text-3xl font-bold mb-4 text-white"
            style={{ color: "#5aedbaff" /* teal green */ }}>
            Here’s what you’ll get
            </h1>
            <p className="text-lg text-gray-200"
            style={{ paddingBottom: "5rem" }}>
            This group is for freelancers and startup founders who are serious
            about leveling up, getting better clients, and staying plugged into
            the right ecosystem.
            </p>
        </div>
        <div className="flex flex-col items-center justify-center">
            <AnimatedList showGradients={false} displayScrollbar={false} items={[
                "1.Flat 20% discount on all CFC Monthly Meetups",
                "2.Free webinars and closed Q&A sessions with industry experts",
                "3.Early access to our Gigzn App ( Beta)",
                "4.Unlimited access to Weekly Hiring Alerts contact details",
                "5.Invitations to premium, members-only events",
                "6.Early access to all CFC events (including the Freelancers Festival)",
                "7.Access to exclusive freelance resources - Contracts, NDA, Client Signoff templates, etc.",
                "8.Your freelance requirements will be amplified and shared across our network", 
                "9.Get priority on all client and job opportunities shared in the group",
                "10.Network directly with verified, growth-focused freelancers from across India",
                "11.Exclusive discounts from our partner ecosystem (Astravue, PayGlocal, DigiSME, Dream Calls, ZhaCommerce, and more[A LOT])",
                "12.Higher chances to get verified, overseas, or high-ticket clients (though not guaranteed)",
            ]}  />
            <span style={{ color: "#5aedbaff" , display: "inline-block", fontSize: "2rem", fontWeight: "bold", marginLeft: "1rem",paddingTop:"30px",paddingBottom:"10px" }}>
                Additionally you'll also get
            </span>
            <AnimatedList showGradients={false} displayScrollbar={false} items={[
                "13.Access to our Freelancer Playbook Library - Pricing, Pitching, LinkedIn, and more",
                "14.Priority for client/founder referrals through our CFC network",
                "15.Weekly Premium Member Spotlight across CFC channels",
                "16.Opportunities to co-host webinars or events",
                "17.Monthly Resource Drops - new tools, templates, and strategies",
            ]} />
        </div>
        </div>  
    </div>

  );
};

export default CenterContent;


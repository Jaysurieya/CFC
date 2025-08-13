import React from "react";

const CenterContent = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen px-4"
      style={{ backgroundColor: "#0D2423" }}
    >
      <div className="text-center max-w-xl">
        <h1 className="text-3xl font-bold mb-4 text-white">
          Here’s what you’ll get
        </h1>
        <p className="text-lg text-gray-200">
          This group is for freelancers and startup founders who are serious
          about leveling up, getting better clients, and staying plugged into
          the right ecosystem.
        </p>
      </div>
    </div>
  );
};

export default CenterContent;
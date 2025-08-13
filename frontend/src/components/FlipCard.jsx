import React from "react";
import "../css/FlipCard.css";

const FlipCard = ({ image, backText }) => {
  return (
    
    <div className="card">
      <div className="content">
        <div className="front">
          <img src={image} alt="Profile" className="card-image" />
        </div>
        <div className="back">{backText}</div>
      </div>
    </div>  
  );
};

export default FlipCard;
import React from "react";
import FlipCard from "./FlipCard";
import "../css/FlipCard.css";

const FlipCardGrid = () => {
  const cards = [
    { image: "https://media.istockphoto.com/id/1211952929/photo/marina-beach-chennai-city-tamil-nadu-india-bay-of-bengal-chennai-tourism-east-coast-road.jpg?s=612x612&w=0&k=20&c=kpAeGGwy3TyyD97PJYULLBhxZV9bM_zVP0CU7f1HIZc=", backText: "Chennai" },
    { image: "https://static.toiimg.com/photo/msid-54559212,width-96,height-65.cms", backText: "Bangalore" },
    { image: "https://media.istockphoto.com/id/1215274990/photo/high-wide-angle-view-of-charminar-in-the-night.jpg?s=612x612&w=0&k=20&c=byyIjqgbslf-L191n6SJu0s35fvNoVeWsxV5rIPK7Sk=", backText: "Hyderabad" },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1PEL8my0bf28HyFX1XHlvvL7X7EE_Pn_nVQ&s", backText: "Kochi" },
    { image: "https://media.istockphoto.com/id/172798272/photo/gopurams-of-the-meenakshi-temple.jpg?s=612x612&w=0&k=20&c=whWfLmZFyuQklYg3piy8XO7QVc4MRig5R35aXqS5FX8=", backText: "Madurai" },
    { image: "https://s7ap1.scene7.com/is/image/incredibleindia/1-bandra-worli-sea-ink-mumbai-maharashtra-attr-hero?qlt=82&ts=1742195253156", backText: "Mumbai" },
    { image: "https://sriavantika.com/wp-content/uploads/2019/06/COIMBATORE-1.png", backText: "Coimbatore" },
    { image: "https://thumbs.dreamstime.com/b/rock-beach-pondicherry-puducherry-also-known-as-promenade-gandhi-exceptional-place-where-shore-densely-populated-262974031.jpg", backText: "Pondicherry" },
  ];

  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <FlipCard key={index} image={card.image} backText={card.backText} />
      ))}
    </div>
  );
};

export default FlipCardGrid;
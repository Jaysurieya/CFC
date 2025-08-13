import React from "react";
import { useInView } from "react-intersection-observer";
import "../css/ProfileCard.css";
import profileImage from "../assets/yes.jpg";

const ProfileCard = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <aside
      ref={ref}
      className={`profile-card ${inView ? "in-view" : ""}`}
    >
      <header>
        {/* Avatar */}
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src={profileImage}
            alt="Profile Avatar"
            className="hoverZoomLink"
          />
        </a>

        {/* Username */}
        <h1>John Doe</h1>
        <h2>Better Visuals</h2>
      </header>

      {/* Bio */}
      <div className="profile-bio">
        <p>
          It takes monumental improvement for us to change how we live our
          lives. Design is the way we access that improvement.
        </p>
      </div>

      {/* Social Links */}
      <ul className="profile-social-links">
        <li>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-behance"></i>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default ProfileCard;
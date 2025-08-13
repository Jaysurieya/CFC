// HeroSection.jsx
import React from "react";
import TextType from './TextType/TextType';

export default function HeroSection() {
  return (
    <section
      style={{
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#0D2423",
        padding: "0 0px",
      }}
    >
      <h1
        style={{
          fontSize: "7rem",
          fontWeight: "bold",
          color: "#ffffffff",
          margin: 0,
        }}
      >
        CFC{" "}
        <span style={{ color: "#5aedbaff" /* teal green */, display: "inline-block" }}>
          PREMIUM
        </span>
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          color: "#FFFFFF",
          maxWidth: "700px",
          marginTop: "15px",
        }}
      >
       <TextType typingSpeed={10} text={"Happy to introduce our CFC Premium WhatsApp Group—the first step in our long-term growth journey together for freelancers and startup founders."} />
      </p>
    </section>
  );
}


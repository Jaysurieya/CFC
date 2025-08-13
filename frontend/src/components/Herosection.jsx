// HeroSection.jsx
import React from "react";

export default function HeroSection() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#0D2423",
        padding: "0 20px",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          color: "#FFFFFF",
          margin: 0,
        }}
      >
        CFC{" "}
        <span style={{ color: "#00F5A0" /* teal green */, display: "inline-block" }}>
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
        Accelerate your experience with CFC Premium — the future of innovation.
      </p>
    </section>
  );
}

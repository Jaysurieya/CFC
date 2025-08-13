import React from 'react';
import NavbarDemo from './Navbar';

function Dashboard() {
  return (
    <div className="container" style={{ backgroundColor: "#0D2423", minHeight: "100vh" }}>
      <NavbarDemo />

      <section
        style={{
          minHeight: "calc(100vh - 60px)", // subtract navbar height if needed
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
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
          <span
            style={{
              color: "#00F5A0", // teal green like your friend's design
              display: "inline-block",
            }}
          >
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
    </div>
  );
}

export default Dashboard;

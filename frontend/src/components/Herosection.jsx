// HeroSection.jsx
import React from "react";
import TextType from './TextType/TextType';
import "../css/Herosection.css";
import Button from "./Button";
import AnimatedContent from "./AnimatedContent/AnimatedContent";


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
      
      <TextType className="text_hero" typingSpeed={10} text={"Happy to introduce our CFC Premium WhatsApp Group—the first step in our long-term growth journey together for freelancers and startup founders."} />
      <div className='flex-row'>
          <AnimatedContent delay={1.8} distance={150}>
            <Button children={"Join CFC Premium"} className={"button-color"} />
          </AnimatedContent>
          <AnimatedContent delay={1.8} distance={150}>
              <Button children={"See What You Get"} className={"button-color"}/>
          </AnimatedContent>
      </div>

    </section>
  );
}

